'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Heart, Users, Navigation, Wind, MapPin, Calendar } from 'lucide-react'

interface YachtCardProps {
  id: number
  name: string
  type: string
  length: string
  guests: number
  cabins: number
  price: number
  rating: number
  reviews?: number
  image: string
  destination?: string
  featured?: boolean
  onFavoriteToggle?: (id: number) => void
  isFavorite?: boolean
}

export default function YachtCard({
  id,
  name,
  type,
  length,
  guests,
  cabins,
  price,
  rating,
  reviews,
  image,
  destination,
  featured,
  onFavoriteToggle,
  isFavorite = false,
}: YachtCardProps) {
  const [hovered, setHovered] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <div
      className="group relative glass rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gray-50 animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-110' : 'scale-100'
          } ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />

        {/* Overlay gradient on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Rating badge */}
        <div className="absolute top-3 right-3 glass px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-semibold">{rating}</span>
          {reviews && <span className="text-[10px] text-gray-600">({reviews})</span>}
        </div>

        {/* Favorite button */}
        <button
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            onFavoriteToggle?.(id)
          }}
          className={`absolute top-3 left-3 glass p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? 'bg-red-500/20 border-red-500/30'
              : 'hover:bg-red-500/20'
          } active:scale-90`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'text-red-400 fill-red-400' : 'text-gray-800'
            }`}
          />
        </button>

        {/* Featured badge */}
        {featured && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}

        {/* Quick Book overlay on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <Link
            href={`/booking?yacht=${id}`}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2"
            onClick={e => e.stopPropagation()}
          >
            <Calendar className="w-3.5 h-3.5" /> Quick Book
          </Link>
        </div>
      </div>

      {/* Content */}
      <Link href={`/yachts/${id}`} className="block p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg group-hover:text-teal-400 transition-colors">{name}</h3>
          <span className="text-xs glass px-2 py-1 rounded-full text-teal-400">{type}</span>
        </div>

        {destination && (
          <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
            <MapPin className="w-3 h-3" />
            <span>{destination}</span>
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Navigation className="w-3 h-3" />
            {length}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {guests} guests
          </span>
          <span className="flex items-center gap-1">
            <Wind className="w-3 h-3" />
            {cabins} cabins
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <span className="text-xl font-bold text-teal-500">
              &euro;{price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-600"> / day</span>
          </div>
          <span className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-xs font-semibold transition">
            View Details
          </span>
        </div>
      </Link>
    </div>
  )
}
