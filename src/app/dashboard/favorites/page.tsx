'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor, Home, Search, Heart, User, Calendar, Star, MapPin,
  Users, Navigation, Wind, ChevronRight, Ship, Trash2, ArrowRight
} from 'lucide-react'

const savedYachts = [
  {
    id: 1,
    name: 'Azure Dream',
    type: 'Motor Yacht',
    length: '24m',
    guests: 8,
    cabins: 4,
    price: 3500,
    rating: 4.9,
    reviews: 47,
    destination: 'Bodrum',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    savedDate: '2026-03-15',
  },
  {
    id: 4,
    name: 'Royal Escape',
    type: 'Mega Yacht',
    length: '42m',
    guests: 16,
    cabins: 8,
    price: 12000,
    rating: 5.0,
    reviews: 28,
    destination: 'Bodrum',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
    savedDate: '2026-03-10',
  },
  {
    id: 6,
    name: 'Aegean Star',
    type: 'Gulet',
    length: '26m',
    guests: 10,
    cabins: 5,
    price: 4100,
    rating: 4.9,
    reviews: 71,
    destination: 'Fethiye',
    image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80',
    savedDate: '2026-02-28',
  },
  {
    id: 9,
    name: "Poseidon's Grace",
    type: 'Mega Yacht',
    length: '38m',
    guests: 14,
    cabins: 7,
    price: 9500,
    rating: 4.9,
    reviews: 22,
    destination: 'Marmaris',
    image: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=800&q=80',
    savedDate: '2026-02-20',
  },
  {
    id: 2,
    name: 'Golden Horizon',
    type: 'Gulet',
    length: '30m',
    guests: 12,
    cabins: 6,
    price: 5200,
    rating: 4.8,
    reviews: 63,
    destination: 'Fethiye',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80',
    savedDate: '2026-02-15',
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(savedYachts)
  const [removingId, setRemovingId] = useState<number | null>(null)

  const handleRemove = (id: number) => {
    setRemovingId(id)
    setTimeout(() => {
      setFavorites(prev => prev.filter(y => y.id !== id))
      setRemovingId(null)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white pb-20 safe-top">
      {/* Top Bar */}
      <div className="glass px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-800 transition">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Link>
          <h1 className="font-bold text-lg">Saved Yachts</h1>
        </div>
        <span className="glass px-2.5 py-1 rounded-full text-xs text-red-300 flex items-center gap-1">
          <Heart className="w-3 h-3 fill-red-400 text-red-400" />
          {favorites.length}
        </span>
      </div>

      <div className="px-4 py-4">
        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No saved yachts yet</h3>
            <p className="text-sm text-gray-600 mb-6">
              Browse our fleet and save your favorite yachts for later
            </p>
            <Link
              href="/yachts"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition inline-flex items-center gap-2"
            >
              <Search className="w-4 h-4" /> Browse Yachts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {favorites.map(yacht => (
              <div
                key={yacht.id}
                className={`glass rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all ${
                  removingId === yacht.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
                style={{ transition: 'all 0.3s ease' }}
              >
                <div className="flex">
                  <Link href={`/yachts/${yacht.id}`} className="w-28 md:w-40 flex-shrink-0">
                    <img
                      src={yacht.image}
                      alt={yacht.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-1">
                      <Link href={`/yachts/${yacht.id}`}>
                        <h3 className="font-bold hover:text-teal-500 transition">{yacht.name}</h3>
                      </Link>
                      <button
                        onClick={() => handleRemove(yacht.id)}
                        className="p-1.5 rounded-full hover:bg-red-500/20 transition group"
                        title="Remove from favorites"
                      >
                        <Heart className="w-4 h-4 text-red-400 fill-red-400 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs glass px-2 py-0.5 rounded-full text-teal-400">{yacht.type}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />{yacht.destination}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                      <span className="flex items-center gap-1"><Navigation className="w-3 h-3" />{yacht.length}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{yacht.guests}</span>
                      <span className="flex items-center gap-1"><Wind className="w-3 h-3" />{yacht.cabins} cab.</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />{yacht.rating}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-teal-500">&euro;{yacht.price.toLocaleString()}</span>
                        <span className="text-xs text-gray-600"> / day</span>
                      </div>
                      <Link
                        href={`/yachts/${yacht.id}`}
                        className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition flex items-center gap-1"
                      >
                        View <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Compare / Quick Actions */}
            <div className="glass rounded-2xl p-5 mt-6">
              <h3 className="font-bold mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/yachts"
                  className="glass rounded-xl p-3 flex items-center gap-2 hover:bg-gray-50 transition text-sm"
                >
                  <Search className="w-4 h-4 text-teal-500" />
                  Find More Yachts
                </Link>
                <Link
                  href="/destinations"
                  className="glass rounded-xl p-3 flex items-center gap-2 hover:bg-gray-50 transition text-sm"
                >
                  <MapPin className="w-4 h-4 text-teal-500" />
                  Destinations
                </Link>
              </div>
            </div>

            {/* Price Summary */}
            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold mb-3">Saved Yachts Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total saved</span>
                  <span>{favorites.length} yachts</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Price range</span>
                  <span>
                    &euro;{Math.min(...favorites.map(y => y.price)).toLocaleString()} - &euro;{Math.max(...favorites.map(y => y.price)).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg. rating</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {(favorites.reduce((sum, y) => sum + y.rating, 0) / favorites.length).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full glass safe-bottom z-50">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: 'Home', href: '/dashboard' },
            { icon: Search, label: 'Search', href: '/yachts' },
            { icon: Calendar, label: 'Bookings', href: '/dashboard/bookings' },
            { icon: Heart, label: 'Favorites', href: '/dashboard/favorites', active: true },
            { icon: User, label: 'Profile', href: '/dashboard/profile' },
          ].map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-4 ${item.active ? 'text-teal-500' : 'text-gray-600'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px]">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
