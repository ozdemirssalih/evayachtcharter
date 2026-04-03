'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Anchor, Search, SlidersHorizontal, Grid3X3, List, Star, Heart,
  Users, Navigation, Wind, MapPin, ChevronDown, X, ArrowUpDown,
  ChevronLeft, Ship, Waves, Sailboat
} from 'lucide-react'

const allYachts = [
  { id: 1, name: 'Azure Dream', type: 'Motor Yacht', length: '24m', guests: 8, cabins: 4, crew: 3, price: 3500, rating: 4.9, reviews: 47, image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80', destination: 'Bodrum', year: 2021, featured: true },
  { id: 2, name: 'Golden Horizon', type: 'Gulet', length: '30m', guests: 12, cabins: 6, crew: 5, price: 5200, rating: 4.8, reviews: 63, image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80', destination: 'Fethiye', year: 2019, featured: true },
  { id: 3, name: 'Sea Pearl', type: 'Sailing Yacht', length: '18m', guests: 6, cabins: 3, crew: 2, price: 2200, rating: 4.7, reviews: 31, image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80', destination: 'Gocek', year: 2020, featured: false },
  { id: 4, name: 'Royal Escape', type: 'Mega Yacht', length: '42m', guests: 16, cabins: 8, crew: 8, price: 12000, rating: 5.0, reviews: 28, image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80', destination: 'Bodrum', year: 2023, featured: true },
  { id: 5, name: 'Turquoise Bay', type: 'Catamaran', length: '15m', guests: 8, cabins: 4, crew: 2, price: 1800, rating: 4.6, reviews: 52, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', destination: 'Marmaris', year: 2022, featured: false },
  { id: 6, name: 'Aegean Star', type: 'Gulet', length: '26m', guests: 10, cabins: 5, crew: 4, price: 4100, rating: 4.9, reviews: 71, image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80', destination: 'Fethiye', year: 2018, featured: true },
  { id: 7, name: 'Deniz Kizi', type: 'Motor Yacht', length: '20m', guests: 8, cabins: 4, crew: 3, price: 2800, rating: 4.5, reviews: 39, image: 'https://images.unsplash.com/photo-1621277224630-81a0a72b3ad0?w=800&q=80', destination: 'Gocek', year: 2020, featured: false },
  { id: 8, name: 'Mavi Rüya', type: 'Gulet', length: '28m', guests: 10, cabins: 5, crew: 4, price: 3800, rating: 4.8, reviews: 55, image: 'https://images.unsplash.com/photo-1588401273872-f2cac081e30a?w=800&q=80', destination: 'Bodrum', year: 2017, featured: false },
  { id: 9, name: 'Poseidon\'s Grace', type: 'Mega Yacht', length: '38m', guests: 14, cabins: 7, crew: 7, price: 9500, rating: 4.9, reviews: 22, image: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=800&q=80', destination: 'Marmaris', year: 2022, featured: true },
  { id: 10, name: 'Rüzgar', type: 'Sailing Yacht', length: '16m', guests: 6, cabins: 3, crew: 2, price: 1900, rating: 4.4, reviews: 44, image: 'https://images.unsplash.com/photo-1535722579498-3b1b02f4f6d0?w=800&q=80', destination: 'Fethiye', year: 2019, featured: false },
  { id: 11, name: 'Serenity', type: 'Catamaran', length: '14m', guests: 8, cabins: 4, crew: 2, price: 1650, rating: 4.3, reviews: 37, image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80', destination: 'Gocek', year: 2021, featured: false },
  { id: 12, name: 'Sultan Mehmet', type: 'Gulet', length: '32m', guests: 14, cabins: 7, crew: 5, price: 6200, rating: 4.7, reviews: 48, image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80', destination: 'Marmaris', year: 2016, featured: true },
]

const yachtTypes = ['All', 'Motor Yacht', 'Gulet', 'Sailing Yacht', 'Mega Yacht', 'Catamaran']
const destinations = ['All', 'Bodrum', 'Fethiye', 'Gocek', 'Marmaris']
const guestOptions = ['Any', '2-4', '5-8', '9-12', '13+']
const sortOptions = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating', value: 'rating' },
  { label: 'Newest', value: 'year' },
]

export default function YachtsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedDestination, setSelectedDestination] = useState('All')
  const [selectedGuests, setSelectedGuests] = useState('Any')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000])
  const [sortBy, setSortBy] = useState('recommended')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  }

  const filteredYachts = useMemo(() => {
    let result = allYachts.filter(yacht => {
      if (searchQuery && !yacht.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
      if (selectedType !== 'All' && yacht.type !== selectedType) return false
      if (selectedDestination !== 'All' && yacht.destination !== selectedDestination) return false
      if (yacht.price < priceRange[0] || yacht.price > priceRange[1]) return false
      if (selectedGuests !== 'Any') {
        const g = yacht.guests
        if (selectedGuests === '2-4' && (g < 2 || g > 4)) return false
        if (selectedGuests === '5-8' && (g < 5 || g > 8)) return false
        if (selectedGuests === '9-12' && (g < 9 || g > 12)) return false
        if (selectedGuests === '13+' && g < 13) return false
      }
      return true
    })

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      case 'year': result.sort((a, b) => b.year - a.year); break
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break
    }
    return result
  }, [searchQuery, selectedType, selectedDestination, selectedGuests, priceRange, sortBy])

  const activeFilterCount = [
    selectedType !== 'All',
    selectedDestination !== 'All',
    selectedGuests !== 'Any',
    priceRange[0] > 0 || priceRange[1] < 15000,
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-[#0c1222]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 safe-top">
        <div className="glass px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Anchor className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold gold-text">Eva Yacht</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/yachts" className="text-white font-semibold">Yachts</Link>
            <Link href="/destinations" className="text-gray-300 hover:text-white transition">Destinations</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
            <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white text-sm font-semibold transition">Dashboard</Link>
          </nav>
        </div>
      </header>

      <div className="pt-16 pb-8">
        {/* Hero Banner */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c1222]" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Our <span className="gold-text">Fleet</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-lg">
              Explore {allYachts.length} luxury yachts across the Turkish Riviera
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Search & Filter Bar */}
          <div className="glass rounded-2xl p-4 -mt-8 relative z-20 mb-6">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-xl px-3 py-3">
                <Search className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search yachts by name..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="bg-transparent text-sm w-full outline-none text-white placeholder-gray-500"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')}><X className="w-4 h-4 text-gray-500" /></button>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 glass px-4 py-3 rounded-xl text-sm hover:bg-white/10 transition"
                >
                  <SlidersHorizontal className="w-4 h-4 text-blue-400" />
                  <span>Filters</span>
                  {activeFilterCount > 0 && (
                    <span className="bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <div className="hidden md:flex items-center gap-1 glass rounded-xl px-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-blue-600/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-blue-600/20 text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Yacht Type */}
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">Yacht Type</label>
                    <div className="relative">
                      <select
                        value={selectedType}
                        onChange={e => setSelectedType(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none text-white appearance-none cursor-pointer"
                      >
                        {yachtTypes.map(t => <option key={t} value={t} className="text-black">{t}</option>)}
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">Destination</label>
                    <div className="relative">
                      <select
                        value={selectedDestination}
                        onChange={e => setSelectedDestination(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none text-white appearance-none cursor-pointer"
                      >
                        {destinations.map(d => <option key={d} value={d} className="text-black">{d}</option>)}
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">Guests</label>
                    <div className="relative">
                      <select
                        value={selectedGuests}
                        onChange={e => setSelectedGuests(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none text-white appearance-none cursor-pointer"
                      >
                        {guestOptions.map(g => <option key={g} value={g} className="text-black">{g}</option>)}
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-xs text-gray-400 mb-2 block">
                      Price Range: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} EUR/day
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min={0}
                        max={15000}
                        step={500}
                        value={priceRange[0]}
                        onChange={e => setPriceRange([Math.min(Number(e.target.value), priceRange[1] - 500), priceRange[1]])}
                        className="w-full accent-blue-500"
                      />
                      <input
                        type="range"
                        min={0}
                        max={15000}
                        step={500}
                        value={priceRange[1]}
                        onChange={e => setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0] + 500)])}
                        className="w-full accent-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => {
                      setSelectedType('All')
                      setSelectedDestination('All')
                      setSelectedGuests('Any')
                      setPriceRange([0, 15000])
                    }}
                    className="text-xs text-gray-500 hover:text-gray-300 transition"
                  >
                    Reset all filters
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-xs font-semibold transition"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sort & Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-400">
              <span className="text-white font-semibold">{filteredYachts.length}</span> yachts found
            </p>
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-transparent text-sm text-gray-300 outline-none cursor-pointer"
              >
                {sortOptions.map(s => (
                  <option key={s.value} value={s.value} className="text-black">{s.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Type Quick Filters */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {yachtTypes.map(type => {
              const icons: Record<string, typeof Ship> = { 'Motor Yacht': Ship, 'Gulet': Waves, 'Sailing Yacht': Sailboat, 'Mega Yacht': Navigation, 'Catamaran': Wind }
              const Icon = type === 'All' ? Grid3X3 : icons[type] || Ship
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition ${
                    selectedType === type
                      ? 'bg-blue-600 text-white'
                      : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {type}
                </button>
              )
            })}
          </div>

          {/* Results */}
          {filteredYachts.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No yachts found</h3>
              <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedType('All')
                  setSelectedDestination('All')
                  setSelectedGuests('Any')
                  setPriceRange([0, 15000])
                }}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-full text-sm font-semibold transition"
              >
                Clear All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredYachts.map(yacht => (
                <Link key={yacht.id} href={`/yachts/${yacht.id}`} className="block group">
                  <div className="glass rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={yacht.image}
                        alt={yacht.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 glass px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-semibold">{yacht.rating}</span>
                      </div>
                      <button
                        onClick={e => { e.preventDefault(); toggleFavorite(yacht.id) }}
                        className={`absolute top-3 left-3 glass p-2 rounded-full transition ${
                          favorites.includes(yacht.id) ? 'bg-red-500/20' : 'hover:bg-red-500/20'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(yacht.id) ? 'text-red-400 fill-red-400' : ''}`} />
                      </button>
                      {yacht.featured && (
                        <div className="absolute bottom-3 left-3 bg-gradient-to-r from-amber-600 to-yellow-500 px-2.5 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{yacht.name}</h3>
                        <span className="text-xs glass px-2 py-1 rounded-full text-blue-300">{yacht.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                        <MapPin className="w-3 h-3" />
                        <span>{yacht.destination}</span>
                        <span className="mx-1">|</span>
                        <span>{yacht.reviews} reviews</span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><Navigation className="w-3 h-3" />{yacht.length}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" />{yacht.guests} guests</span>
                        <span className="flex items-center gap-1"><Wind className="w-3 h-3" />{yacht.cabins} cabins</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-blue-400">&euro;{yacht.price.toLocaleString()}</span>
                          <span className="text-xs text-gray-500"> / day</span>
                        </div>
                        <span className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-xs font-semibold transition">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredYachts.map(yacht => (
                <Link key={yacht.id} href={`/yachts/${yacht.id}`} className="block group">
                  <div className="glass rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all flex flex-col md:flex-row">
                    <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={yacht.image}
                        alt={yacht.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button
                        onClick={e => { e.preventDefault(); toggleFavorite(yacht.id) }}
                        className={`absolute top-3 left-3 glass p-2 rounded-full transition ${
                          favorites.includes(yacht.id) ? 'bg-red-500/20' : 'hover:bg-red-500/20'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(yacht.id) ? 'text-red-400 fill-red-400' : ''}`} />
                      </button>
                      {yacht.featured && (
                        <div className="absolute bottom-3 left-3 bg-gradient-to-r from-amber-600 to-yellow-500 px-2.5 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-xl">{yacht.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-sm font-semibold">{yacht.rating}</span>
                            <span className="text-xs text-gray-500">({yacht.reviews})</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <span className="glass px-2 py-0.5 rounded-full text-xs text-blue-300">{yacht.type}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{yacht.destination}</span>
                          <span>Built {yacht.year}</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5"><Navigation className="w-4 h-4 text-blue-400" />{yacht.length}</span>
                          <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-blue-400" />{yacht.guests} guests</span>
                          <span className="flex items-center gap-1.5"><Wind className="w-4 h-4 text-blue-400" />{yacht.cabins} cabins</span>
                          <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-blue-400" />{yacht.crew} crew</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                        <div>
                          <span className="text-2xl font-bold text-blue-400">&euro;{yacht.price.toLocaleString()}</span>
                          <span className="text-sm text-gray-500"> / day</span>
                        </div>
                        <span className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-full text-sm font-semibold transition">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 safe-bottom">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Anchor className="w-5 h-5 text-blue-400" />
            <span className="font-bold gold-text">Eva Yacht Charter</span>
          </div>
          <p className="text-xs text-gray-500">2026 Eva Yacht Charter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
