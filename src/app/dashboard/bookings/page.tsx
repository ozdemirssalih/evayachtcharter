'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor, Home, Search, Heart, User, Calendar, Clock, MapPin,
  Ship, Star, ChevronRight, Download, MessageSquare, X, Phone,
  Eye, MoreHorizontal, Filter, CheckCircle, AlertCircle, XCircle
} from 'lucide-react'

const bookings = [
  {
    id: 'EVA-2026-A7B3',
    yacht: 'Azure Dream',
    type: 'Motor Yacht',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&q=80',
    destination: 'Bodrum',
    startDate: '2026-04-15',
    endDate: '2026-04-17',
    guests: 6,
    status: 'confirmed',
    totalPrice: 7350,
    extras: ['Private Chef', 'Water Sports Package'],
    captain: 'Ahmet Yilmaz',
  },
  {
    id: 'EVA-2026-C9D1',
    yacht: 'Golden Horizon',
    type: 'Gulet',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&q=80',
    destination: 'Fethiye',
    startDate: '2026-05-28',
    endDate: '2026-05-31',
    guests: 10,
    status: 'pending',
    totalPrice: 16380,
    extras: ['Private Chef'],
    captain: 'Mehmet Demir',
  },
  {
    id: 'EVA-2026-E4F2',
    yacht: 'Sea Pearl',
    type: 'Sailing Yacht',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&q=80',
    destination: 'Gocek',
    startDate: '2026-07-10',
    endDate: '2026-07-14',
    guests: 4,
    status: 'confirmed',
    totalPrice: 9240,
    extras: ['Diving Equipment'],
    captain: 'Kemal Deniz',
  },
  {
    id: 'EVA-2025-G8H5',
    yacht: 'Turquoise Bay',
    type: 'Catamaran',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
    destination: 'Marmaris',
    startDate: '2025-08-20',
    endDate: '2025-08-23',
    guests: 8,
    status: 'completed',
    totalPrice: 5670,
    extras: [],
    captain: 'Burak Kaya',
  },
  {
    id: 'EVA-2025-K2L6',
    yacht: 'Aegean Star',
    type: 'Gulet',
    image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=400&q=80',
    destination: 'Fethiye',
    startDate: '2025-06-05',
    endDate: '2025-06-08',
    guests: 8,
    status: 'completed',
    totalPrice: 12915,
    extras: ['Private Chef', 'Water Sports Package'],
    captain: 'Ahmet Yilmaz',
  },
  {
    id: 'EVA-2025-M3N9',
    yacht: 'Royal Escape',
    type: 'Mega Yacht',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&q=80',
    destination: 'Bodrum',
    startDate: '2025-09-01',
    endDate: '2025-09-02',
    guests: 12,
    status: 'cancelled',
    totalPrice: 12600,
    extras: ['DJ & Sound', 'Photographer'],
    captain: 'Kemal Deniz',
  },
]

const statusConfig: Record<string, { color: string; bg: string; icon: typeof CheckCircle; label: string }> = {
  confirmed: { color: 'text-green-400', bg: 'bg-green-600/20', icon: CheckCircle, label: 'Confirmed' },
  pending: { color: 'text-yellow-400', bg: 'bg-yellow-600/20', icon: AlertCircle, label: 'Pending' },
  completed: { color: 'text-blue-400', bg: 'bg-blue-600/20', icon: CheckCircle, label: 'Completed' },
  cancelled: { color: 'text-red-400', bg: 'bg-red-600/20', icon: XCircle, label: 'Cancelled' },
}

export default function BookingsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past' | 'cancelled'>('all')
  const [selectedBooking, setSelectedBooking] = useState<string | null>(null)

  const filteredBookings = bookings.filter(b => {
    if (filter === 'all') return true
    if (filter === 'upcoming') return b.status === 'confirmed' || b.status === 'pending'
    if (filter === 'past') return b.status === 'completed'
    if (filter === 'cancelled') return b.status === 'cancelled'
    return true
  })

  const getDaysUntil = (date: string) => {
    const diff = new Date(date).getTime() - Date.now()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days
  }

  const getDuration = (start: string, end: string) => {
    const diff = new Date(end).getTime() - new Date(start).getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }

  const detail = bookings.find(b => b.id === selectedBooking)

  return (
    <div className="min-h-screen bg-[#0c1222] pb-20 safe-top">
      {/* Top Bar */}
      <div className="glass px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Link>
          <h1 className="font-bold text-lg">My Bookings</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="glass px-2.5 py-1 rounded-full text-xs text-blue-300">
            {bookings.filter(b => b.status === 'confirmed' || b.status === 'pending').length} upcoming
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All', count: bookings.length },
            { id: 'upcoming', label: 'Upcoming', count: bookings.filter(b => b.status === 'confirmed' || b.status === 'pending').length },
            { id: 'past', label: 'Past', count: bookings.filter(b => b.status === 'completed').length },
            { id: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition ${
                filter === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
              <span className={`text-[10px] ${filter === tab.id ? 'bg-white/20' : 'bg-white/10'} px-1.5 py-0.5 rounded-full`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div className="px-4 space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">No bookings found</h3>
            <p className="text-sm text-gray-500 mb-6">Start planning your next adventure</p>
            <Link href="/yachts" className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-full text-sm font-semibold transition">
              Browse Yachts
            </Link>
          </div>
        ) : (
          filteredBookings.map(booking => {
            const status = statusConfig[booking.status]
            const daysUntil = getDaysUntil(booking.startDate)
            const duration = getDuration(booking.startDate, booking.endDate)
            const StatusIcon = status.icon
            return (
              <div
                key={booking.id}
                className="glass rounded-2xl overflow-hidden hover:border-blue-500/30 transition cursor-pointer"
                onClick={() => setSelectedBooking(booking.id === selectedBooking ? null : booking.id)}
              >
                <div className="flex">
                  <img src={booking.image} alt={booking.yacht} className="w-24 md:w-36 h-auto object-cover flex-shrink-0" />
                  <div className="flex-1 p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold">{booking.yacht}</h3>
                      <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${status.bg} ${status.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">{booking.type} | {booking.id}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{booking.destination}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{booking.startDate}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{duration} days</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{booking.guests} guests</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-blue-400">&euro;{booking.totalPrice.toLocaleString()}</span>
                      {booking.status === 'confirmed' && daysUntil > 0 && (
                        <span className="text-xs text-green-400">{daysUntil} days away</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedBooking === booking.id && (
                  <div className="border-t border-white/10 p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Check-in</p>
                        <p className="text-sm font-semibold">{booking.startDate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Check-out</p>
                        <p className="text-sm font-semibold">{booking.endDate}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Captain</p>
                        <p className="text-sm font-semibold">{booking.captain}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Extras</p>
                        <p className="text-sm font-semibold">{booking.extras.length > 0 ? booking.extras.join(', ') : 'None'}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/yachts/${bookings.indexOf(booking) + 1}`}
                        className="flex items-center gap-1 glass px-3 py-2 rounded-xl text-xs hover:bg-white/10 transition"
                        onClick={e => e.stopPropagation()}
                      >
                        <Eye className="w-3 h-3 text-blue-400" /> View Yacht
                      </Link>
                      <button
                        className="flex items-center gap-1 glass px-3 py-2 rounded-xl text-xs hover:bg-white/10 transition"
                        onClick={e => e.stopPropagation()}
                      >
                        <Download className="w-3 h-3 text-blue-400" /> Invoice
                      </button>
                      <button
                        className="flex items-center gap-1 glass px-3 py-2 rounded-xl text-xs hover:bg-white/10 transition"
                        onClick={e => e.stopPropagation()}
                      >
                        <Phone className="w-3 h-3 text-blue-400" /> Contact Crew
                      </button>
                      {(booking.status === 'confirmed' || booking.status === 'pending') && (
                        <button
                          className="flex items-center gap-1 glass px-3 py-2 rounded-xl text-xs text-red-400 hover:bg-red-500/10 transition"
                          onClick={e => e.stopPropagation()}
                        >
                          <X className="w-3 h-3" /> Cancel
                        </button>
                      )}
                      {booking.status === 'completed' && (
                        <button
                          className="flex items-center gap-1 glass px-3 py-2 rounded-xl text-xs text-yellow-400 hover:bg-yellow-500/10 transition"
                          onClick={e => e.stopPropagation()}
                        >
                          <Star className="w-3 h-3" /> Leave Review
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full glass safe-bottom z-50">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: 'Home', href: '/dashboard' },
            { icon: Search, label: 'Search', href: '/yachts' },
            { icon: Calendar, label: 'Bookings', href: '/dashboard/bookings', active: true },
            { icon: Heart, label: 'Favorites', href: '/dashboard/favorites' },
            { icon: User, label: 'Profile', href: '/dashboard/profile' },
          ].map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-4 ${item.active ? 'text-blue-400' : 'text-gray-500'}`}
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
