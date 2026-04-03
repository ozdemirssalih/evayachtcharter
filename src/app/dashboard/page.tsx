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
    <div className="min-h-screen bg-[#0c1222] pb-20 safe-top">
      {/* Top Bar */}
      <div className="glass px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Welcome back</p>
          <p className="font-bold">Captain</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative"><Bell className="w-5 h-5 text-gray-400" /><div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" /></button>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">E</div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {tab === 'home' && (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: Ship, label: 'Bookings', value: '2', color: 'text-blue-400' },
                { icon: Heart, label: 'Favorites', value: '5', color: 'text-red-400' },
                { icon: Star, label: 'Points', value: '1,200', color: 'text-yellow-400' },
              ].map(s => (
                <div key={s.label} className="glass rounded-xl p-3 text-center">
                  <s.icon className={`w-5 h-5 mx-auto mb-1 ${s.color}`} />
                  <p className="text-lg font-bold">{s.value}</p>
                  <p className="text-[10px] text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Bookings */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold">Upcoming Bookings</h2>
                <button className="text-xs text-blue-400">View All</button>
              </div>
              <div className="space-y-3">
                {bookings.map(b => (
                  <div key={b.id} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{b.yacht}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${b.status === 'confirmed' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'}`}>
                        {b.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{b.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{b.days} days</span>
                      <span className="font-semibold text-blue-400">{b.price}</span>
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
                  <Link key={a.label} href={a.href} className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-white/5 transition">
                    <a.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">{a.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Special Offers */}
            <div>
              <h2 className="font-bold mb-3">Special Offers</h2>
              <div className="glass rounded-xl p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Waves className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold">Early Bird Discount</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Book 30 days in advance and get 15% off on any yacht charter.</p>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-xs font-semibold transition">Book Now</button>
              </div>
            </div>
          </>
        )}

        {tab === 'search' && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h2 className="font-bold mb-2">Search Yachts</h2>
            <p className="text-sm text-gray-500">Find your perfect yacht</p>
          </div>
        )}

        {tab === 'favorites' && (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h2 className="font-bold mb-2">Favorites</h2>
            <p className="text-sm text-gray-500">Your saved yachts</p>
          </div>
        )}

        {tab === 'profile' && (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h2 className="font-bold mb-2">Profile</h2>
            <p className="text-sm text-gray-500">Account settings</p>
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
              className={`flex flex-col items-center gap-0.5 py-1 px-4 ${tab === item.id ? 'text-blue-400' : 'text-gray-500'}`}
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
