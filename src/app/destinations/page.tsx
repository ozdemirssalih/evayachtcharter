'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor, MapPin, ChevronRight, Ship, Thermometer, Wind, Droplets,
  Sun, Cloud, Calendar, Star, Navigation, ArrowRight, Waves, Eye,
  Clock, Compass
} from 'lucide-react'

const destinations = [
  {
    id: 'bodrum',
    name: 'Bodrum',
    region: 'Mugla Province',
    description: 'Known as the "St. Tropez of Turkey", Bodrum offers a perfect blend of ancient history, vibrant nightlife, and crystal-clear bays. The medieval castle overlooking the harbor sets a dramatic backdrop for luxury yacht charters.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80',
    yachtCount: 45,
    rating: 4.9,
    highlights: ['Bodrum Castle', 'Gumbet Bay', 'Turgutreis Marina', 'Black Island'],
    bestSeason: 'May - October',
    avgTemp: '28°C',
    waterTemp: '24°C',
    windSpeed: '12 knots',
    weather: { sun: 92, humidity: 45 },
    routes: [
      { name: 'Bodrum Bay Tour', days: 3, stops: ['Orak Island', 'Black Island', 'Akvaryum Bay', 'Karada Island'] },
      { name: 'Bodrum to Gokova', days: 5, stops: ['Orak Island', 'Sedir Island', 'English Harbour', 'Longoz Bay', 'Gokova'] },
    ],
    color: 'from-teal-600/20 to-cyan-600/20',
  },
  {
    id: 'fethiye',
    name: 'Fethiye',
    region: 'Mugla Province',
    description: 'Fethiye is the gateway to the famous Twelve Islands cruise and the stunning Oludeniz Blue Lagoon. Surrounded by pine-forested mountains cascading into turquoise waters, it is a paradise for nature lovers and sailors alike.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
    yachtCount: 32,
    rating: 4.8,
    highlights: ['Oludeniz Blue Lagoon', 'Butterfly Valley', 'Twelve Islands', 'Kayakoy Ghost Town'],
    bestSeason: 'April - November',
    avgTemp: '30°C',
    waterTemp: '25°C',
    windSpeed: '10 knots',
    weather: { sun: 88, humidity: 50 },
    routes: [
      { name: '12 Islands Cruise', days: 1, stops: ['Flat Island', 'Tersane Island', 'Aquarium Bay', 'Red Island', 'Domuz Island', 'Knight Island'] },
      { name: 'Fethiye to Gocek', days: 4, stops: ['Oludeniz', 'Butterfly Valley', 'Gemiler Island', 'Bedri Rahmi Bay', 'Gocek'] },
    ],
    color: 'from-emerald-600/20 to-teal-600/20',
  },
  {
    id: 'gocek',
    name: 'Gocek',
    region: 'Mugla Province',
    description: 'An exclusive yachting haven nestled in the Gulf of Fethiye, Gocek is famous for its 12 pristine islands and sheltered bays. This intimate marina town is the preferred starting point for the most prestigious blue cruises in Turkey.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80',
    yachtCount: 28,
    rating: 4.9,
    highlights: ['Yassica Islands', 'Bedri Rahmi Bay', 'Gobun Bay', 'Tersane Island'],
    bestSeason: 'May - October',
    avgTemp: '29°C',
    waterTemp: '24°C',
    windSpeed: '8 knots',
    weather: { sun: 90, humidity: 48 },
    routes: [
      { name: 'Gocek Islands Tour', days: 3, stops: ['Yassica Islands', 'Bedri Rahmi Bay', 'Hamam Bay', 'Gobun Bay'] },
      { name: 'Gocek to Ekincik', days: 5, stops: ['Tersane Island', 'Boynuz Buku', 'Wall Bay', 'Ekincik Bay', 'Dalyan'] },
    ],
    color: 'from-purple-600/20 to-indigo-600/20',
  },
  {
    id: 'marmaris',
    name: 'Marmaris',
    region: 'Mugla Province',
    description: 'Sitting at the meeting point of the Aegean and Mediterranean seas, Marmaris boasts one of the largest natural harbors in the world. Its modern marina, lush mountains, and proximity to Greek islands make it a versatile charter destination.',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1200&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=400&q=80',
    yachtCount: 38,
    rating: 4.7,
    highlights: ['Marmaris Castle', 'Icmeler Beach', 'Dalyan Mud Baths', 'Sedir Island'],
    bestSeason: 'April - November',
    avgTemp: '31°C',
    waterTemp: '26°C',
    windSpeed: '14 knots',
    weather: { sun: 85, humidity: 52 },
    routes: [
      { name: 'Marmaris Bay Tour', days: 2, stops: ['Turunc Bay', 'Kumlubuk', 'Amos Bay', 'Icmeler'] },
      { name: 'Marmaris to Datca', days: 4, stops: ['Bozukkale', 'Selimiye', 'Bozburun', 'Knidos', 'Datca'] },
    ],
    color: 'from-orange-600/20 to-amber-600/20',
  },
]

export default function DestinationsPage() {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0])
  const [hoveredDest, setHoveredDest] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 safe-top">
        <div className="glass px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Anchor className="w-6 h-6 text-teal-500" />
            <span className="text-lg font-bold gold-text">Eva Yacht</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/yachts" className="text-gray-600 hover:text-gray-800 transition">Yachts</Link>
            <Link href="/destinations" className="text-gray-800 font-semibold">Destinations</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition">About</Link>
            <Link href="/dashboard" className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full text-white text-sm font-semibold transition">Dashboard</Link>
          </nav>
        </div>
      </header>

      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <Compass className="w-4 h-4 text-teal-500" />
              <span className="text-xs text-gray-600">Turkish Riviera</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Discover <span className="gold-text">Destinations</span>
            </h1>
            <p className="text-gray-600 text-sm max-w-lg">
              Explore the most beautiful harbors and hidden coves of Turkey's stunning coastline
            </p>
          </div>
        </div>

        {/* Map-style Navigation */}
        <div className="max-w-7xl mx-auto px-4 -mt-6 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {destinations.map(dest => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                onMouseEnter={() => setHoveredDest(dest.id)}
                onMouseLeave={() => setHoveredDest(null)}
                className={`relative rounded-2xl overflow-hidden h-32 md:h-40 group transition-all ${
                  selectedDestination.id === dest.id ? 'ring-2 ring-teal-500 scale-[1.02]' : ''
                }`}
              >
                <img src={dest.thumbnail} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-lg text-white">{dest.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-200">{dest.yachtCount} yachts</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs">{dest.rating}</span>
                    </div>
                  </div>
                </div>
                {selectedDestination.id === dest.id && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Selected Destination Detail */}
          <div className="glass rounded-3xl overflow-hidden mb-8">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-teal-300 mb-1">{selectedDestination.region}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedDestination.name}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-200">
                  <span className="flex items-center gap-1"><Ship className="w-4 h-4" /> {selectedDestination.yachtCount} yachts</span>
                  <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> {selectedDestination.rating}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedDestination.bestSeason}</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">{selectedDestination.description}</p>

              {/* Weather & Conditions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className={`rounded-2xl p-4 text-center bg-gradient-to-br ${selectedDestination.color}`}>
                  <Thermometer className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{selectedDestination.avgTemp}</p>
                  <p className="text-xs text-gray-600">Avg. Temperature</p>
                </div>
                <div className={`rounded-2xl p-4 text-center bg-gradient-to-br ${selectedDestination.color}`}>
                  <Waves className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{selectedDestination.waterTemp}</p>
                  <p className="text-xs text-gray-600">Water Temp</p>
                </div>
                <div className={`rounded-2xl p-4 text-center bg-gradient-to-br ${selectedDestination.color}`}>
                  <Wind className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{selectedDestination.windSpeed}</p>
                  <p className="text-xs text-gray-600">Avg. Wind</p>
                </div>
                <div className={`rounded-2xl p-4 text-center bg-gradient-to-br ${selectedDestination.color}`}>
                  <Sun className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{selectedDestination.weather.sun}%</p>
                  <p className="text-xs text-gray-600">Sunny Days</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Highlights</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedDestination.highlights.map(hl => (
                    <div key={hl} className="glass rounded-xl p-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span className="text-sm">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Route Suggestions */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4">Suggested Routes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedDestination.routes.map(route => (
                    <div key={route.name} className="glass rounded-2xl p-5 hover:border-teal-500/30 transition">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{route.name}</h4>
                        <span className="glass px-2.5 py-1 rounded-full text-xs text-teal-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {route.days} day{route.days > 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {route.stops.map((stop, idx) => (
                          <div key={stop} className="flex items-center gap-3">
                            <div className="flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-teal-500' : idx === route.stops.length - 1 ? 'bg-green-400' : 'bg-gray-300'}`} />
                              {idx < route.stops.length - 1 && <div className="w-0.5 h-4 bg-teal-200" />}
                            </div>
                            <span className="text-sm text-gray-600">{stop}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/yachts?destination=${selectedDestination.name}`}
                        className="mt-4 text-xs text-teal-500 flex items-center gap-1 hover:text-teal-400 transition"
                      >
                        View yachts for this route <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/yachts?destination=${selectedDestination.name}`}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold text-sm transition text-center flex items-center justify-center gap-2"
                >
                  <Ship className="w-4 h-4" /> Browse Yachts in {selectedDestination.name}
                </Link>
                <Link
                  href="/#contact"
                  className="flex-1 glass py-3 rounded-xl font-semibold text-sm hover:bg-teal-50 transition text-center"
                >
                  Ask Our Experts
                </Link>
              </div>
            </div>
          </div>

          {/* Best Season Overview */}
          <div className="glass rounded-3xl p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold mb-6 text-center">Best Time to <span className="gold-text">Sail</span></h3>
            <div className="grid grid-cols-12 gap-1 md:gap-2 mb-4">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, idx) => {
                const isPeak = idx >= 5 && idx <= 8
                const isShoulder = (idx >= 3 && idx <= 4) || (idx >= 9 && idx <= 10)
                return (
                  <div key={month} className="text-center">
                    <div className={`h-20 md:h-28 rounded-lg mb-1 flex items-end justify-center pb-2 transition ${
                      isPeak ? 'bg-gradient-to-t from-teal-600/40 to-teal-500/20' :
                      isShoulder ? 'bg-gradient-to-t from-teal-600/20 to-teal-500/10' :
                      'bg-gray-50'
                    }`}>
                      <div className={`w-full mx-1 rounded-t-sm ${
                        isPeak ? 'bg-teal-500 h-full' :
                        isShoulder ? 'bg-teal-500/50 h-2/3' :
                        'bg-teal-50 h-1/4'
                      }`} />
                    </div>
                    <span className="text-[10px] text-gray-600">{month}</span>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center justify-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-teal-500" />
                <span className="text-gray-600">Peak Season</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-teal-500/50" />
                <span className="text-gray-600">Shoulder Season</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-teal-50" />
                <span className="text-gray-600">Off Season</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-teal-200 px-4 py-8 safe-bottom">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Anchor className="w-5 h-5 text-teal-500" />
            <span className="font-bold gold-text">Eva Yacht Charter</span>
          </div>
          <p className="text-xs text-gray-600">2026 Eva Yacht Charter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
