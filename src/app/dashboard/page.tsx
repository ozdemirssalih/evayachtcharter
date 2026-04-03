'use client'

import { useState } from 'react'
import { Anchor, Home, Search, Heart, Calendar, User, Ship, MapPin, Bell, Settings, ChevronRight, Star, Clock, Waves } from 'lucide-react'
import Link from 'next/link'

const bookings = [
  { id: 1, yacht: 'Azure Dream', date: '15 Apr 2026', status: 'confirmed', price: '$7,000', days: 2 },
  { id: 2, yacht: 'Golden Horizon', date: '28 May 2026', status: 'pending', price: '$15,600', days: 3 },
]

export default function DashboardPage() {
  const [tab, setTab] = useState('home')

  return (
    <div className="min-h-screen bg-white pb-20 safe-top">
      {/* Top Bar */}
      <div className="glass px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-600">Welcome back</p>
          <p className="font-bold">Captain</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative"><Bell className="w-5 h-5 text-gray-600" /><div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" /></button>
          <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">E</div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {tab === 'home' && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: Ship, label: 'Bookings', value: '2', color: 'text-teal-500' },
                { icon: Heart, label: 'Favorites', value: '5', color: 'text-red-400' },
                { icon: Star, label: 'Points', value: '1,200', color: 'text-yellow-400' },
              ].map(s => (
                <div key={s.label} className="glass rounded-xl p-3 text-center">
                  <s.icon className={`w-5 h-5 mx-auto mb-1 ${s.color}`} />
                  <p className="text-lg font-bold">{s.value}</p>
                  <p className="text-[10px] text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Bookings */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold">Upcoming Bookings</h2>
                <button className="text-xs text-teal-500">View All</button>
              </div>
              <div className="space-y-3">
                {bookings.map(b => (
                  <div key={b.id} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{b.yacht}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${b.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {b.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{b.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{b.days} days</span>
                      <span className="font-semibold text-teal-500">{b.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <h2 className="font-bold mb-3">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Search, label: 'Search Yachts', href: '/' },
                  { icon: MapPin, label: 'Destinations', href: '/#destinations' },
                  { icon: Calendar, label: 'My Bookings', href: '#' },
                  { icon: Settings, label: 'Settings', href: '#' },
                ].map(a => (
                  <Link key={a.label} href={a.href} className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-gray-50 transition">
                    <a.icon className="w-5 h-5 text-teal-500" />
                    <span className="text-sm">{a.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div>
              <h2 className="font-bold mb-3">Special Offers</h2>
              <div className="glass rounded-xl p-4 bg-gradient-to-r from-teal-600/20 to-purple-600/20 border-teal-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Waves className="w-5 h-5 text-teal-500" />
                  <span className="text-sm font-semibold">Early Bird Discount</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">Book 30 days in advance and get 15% off on any yacht charter.</p>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-xs font-semibold transition">Book Now</button>
              </div>
            </div>
          </>
        )}

        {tab === 'search' && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h2 className="font-bold mb-2">Search Yachts</h2>
            <p className="text-sm text-gray-600">Find your perfect yacht</p>
          </div>
        )}

        {tab === 'favorites' && (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h2 className="font-bold mb-2">Favorites</h2>
            <p className="text-sm text-gray-600">Your saved yachts</p>
          </div>
        )}

        {tab === 'profile' && (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h2 className="font-bold mb-2">Profile</h2>
            <p className="text-sm text-gray-600">Account settings</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Mobile App Style */}
      <nav className="fixed bottom-0 w-full glass safe-bottom z-50">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: 'Home', id: 'home' },
            { icon: Search, label: 'Search', id: 'search' },
            { icon: Heart, label: 'Favorites', id: 'favorites' },
            { icon: User, label: 'Profile', id: 'profile' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex flex-col items-center gap-0.5 py-1 px-4 ${tab === item.id ? 'text-teal-500' : 'text-gray-600'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px]">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
