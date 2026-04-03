'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  Anchor, Star, Heart, Users, Navigation, Wind, MapPin, ChevronLeft,
  ChevronRight, Calendar, Shield, Wifi, UtensilsCrossed, Waves, Sun,
  Snowflake, Music, Tv, Dumbbell, CircleDot, Ship, Clock, Phone,
  Share2, Check, X, ArrowRight, MessageSquare, ThumbsUp
} from 'lucide-react'

const yachtDatabase: Record<number, {
  id: number; name: string; type: string; length: string; beam: string;
  draft: string; guests: number; cabins: number; crew: number; price: number;
  rating: number; reviews: number; year: number; builder: string;
  speed: string; fuelCapacity: string; waterCapacity: string;
  destination: string; description: string;
  images: string[]; amenities: string[];
  crewMembers: { role: string; name: string; experience: string }[];
  reviewsList: { name: string; date: string; rating: number; text: string }[];
  availability: { month: string; available: boolean }[];
}> = {
  1: {
    id: 1, name: 'Azure Dream', type: 'Motor Yacht', length: '24m', beam: '6.2m',
    draft: '1.8m', guests: 8, cabins: 4, crew: 3, price: 3500, rating: 4.9,
    reviews: 47, year: 2021, builder: 'Azimut', speed: '28 knots',
    fuelCapacity: '4,000L', waterCapacity: '1,200L', destination: 'Bodrum',
    description: 'Azure Dream is a stunning 24-meter motor yacht combining Italian elegance with cutting-edge technology. Built by Azimut in 2021, she offers 4 spacious cabins with en-suite bathrooms, a sun deck with jacuzzi, and an expansive flybridge perfect for al-fresco dining. Her powerful twin engines ensure smooth cruising along the turquoise coast.',
    images: [
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80',
      'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80',
      'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80',
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80',
    ],
    amenities: ['Wi-Fi', 'Air Conditioning', 'Jacuzzi', 'Water Sports', 'BBQ Grill', 'Satellite TV', 'Sound System', 'Gym Equipment', 'Snorkeling Gear', 'Kayaks', 'Paddleboard', 'Jet Ski'],
    crewMembers: [
      { role: 'Captain', name: 'Ahmet Yilmaz', experience: '15 years' },
      { role: 'Chef', name: 'Maria Rossi', experience: '10 years' },
      { role: 'Stewardess', name: 'Elena Dimitriou', experience: '7 years' },
    ],
    reviewsList: [
      { name: 'James W.', date: 'March 2026', rating: 5, text: 'Absolutely incredible experience! The crew went above and beyond. The yacht was immaculate and the route through Bodrum bays was breathtaking.' },
      { name: 'Sophie L.', date: 'February 2026', rating: 5, text: 'We celebrated our anniversary aboard Azure Dream. Chef Maria prepared the most amazing meals. Captain Ahmet knew all the best hidden coves.' },
      { name: 'Michael R.', date: 'January 2026', rating: 4, text: 'Great yacht with excellent amenities. The jacuzzi on the sun deck was a highlight. Would highly recommend for families.' },
      { name: 'Anna K.', date: 'December 2025', rating: 5, text: 'This was our third time chartering Azure Dream and it never disappoints. The attention to detail from the crew is unmatched.' },
    ],
    availability: [
      { month: 'Apr 2026', available: true },
      { month: 'May 2026', available: true },
      { month: 'Jun 2026', available: false },
      { month: 'Jul 2026', available: false },
      { month: 'Aug 2026', available: false },
      { month: 'Sep 2026', available: true },
      { month: 'Oct 2026', available: true },
      { month: 'Nov 2026', available: true },
    ],
  },
  2: {
    id: 2, name: 'Golden Horizon', type: 'Gulet', length: '30m', beam: '7.5m',
    draft: '2.5m', guests: 12, cabins: 6, crew: 5, price: 5200, rating: 4.8,
    reviews: 63, year: 2019, builder: 'Bodrum Shipyard', speed: '12 knots',
    fuelCapacity: '6,000L', waterCapacity: '3,000L', destination: 'Fethiye',
    description: 'Golden Horizon is a magnificent 30-meter traditional Turkish gulet, handcrafted from mahogany and teak in Bodrum. She seamlessly blends authentic Ottoman charm with modern luxury. Her 6 cabins accommodate up to 12 guests, while her vast aft deck and cushioned bow provide ample lounging space for the perfect blue cruise experience.',
    images: [
      'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80',
      'https://images.unsplash.com/photo-1559599238-308793637427?w=1200&q=80',
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80',
      'https://images.unsplash.com/photo-1588401273872-f2cac081e30a?w=1200&q=80',
      'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80',
    ],
    amenities: ['Wi-Fi', 'Air Conditioning', 'Water Sports', 'BBQ Grill', 'Satellite TV', 'Sound System', 'Snorkeling Gear', 'Kayaks', 'Fishing Equipment', 'Paddleboard'],
    crewMembers: [
      { role: 'Captain', name: 'Mehmet Demir', experience: '20 years' },
      { role: 'Chef', name: 'Fatma Ozkan', experience: '12 years' },
      { role: 'First Mate', name: 'Burak Kaya', experience: '8 years' },
      { role: 'Steward', name: 'Cem Arslan', experience: '5 years' },
      { role: 'Deckhand', name: 'Ali Yildiz', experience: '4 years' },
    ],
    reviewsList: [
      { name: 'David H.', date: 'March 2026', rating: 5, text: 'The gulet experience was beyond our expectations. The traditional Turkish breakfast prepared by Chef Fatma was the best we\'ve ever had.' },
      { name: 'Lisa M.', date: 'February 2026', rating: 5, text: 'Sailing the 12 islands of Fethiye on Golden Horizon was magical. The crew treated us like royalty.' },
      { name: 'Robert P.', date: 'January 2026', rating: 4, text: 'Beautiful gulet with lots of character. The wood craftsmanship is impressive. Great for group trips.' },
    ],
    availability: [
      { month: 'Apr 2026', available: true },
      { month: 'May 2026', available: false },
      { month: 'Jun 2026', available: false },
      { month: 'Jul 2026', available: true },
      { month: 'Aug 2026', available: false },
      { month: 'Sep 2026', available: true },
      { month: 'Oct 2026', available: true },
      { month: 'Nov 2026', available: true },
    ],
  },
}

// Generate default data for yacht IDs not explicitly defined
function getYachtData(id: number) {
  if (yachtDatabase[id]) return yachtDatabase[id]
  const defaults = [
    { name: 'Sea Pearl', type: 'Sailing Yacht', length: '18m', beam: '5.0m', draft: '2.8m', guests: 6, cabins: 3, crew: 2, price: 2200, rating: 4.7, reviews: 31, year: 2020, builder: 'Beneteau', speed: '10 knots', destination: 'Gocek' },
    { name: 'Royal Escape', type: 'Mega Yacht', length: '42m', beam: '8.4m', draft: '2.2m', guests: 16, cabins: 8, crew: 8, price: 12000, rating: 5.0, reviews: 28, year: 2023, builder: 'Benetti', speed: '18 knots', destination: 'Bodrum' },
    { name: 'Turquoise Bay', type: 'Catamaran', length: '15m', beam: '7.8m', draft: '1.2m', guests: 8, cabins: 4, crew: 2, price: 1800, rating: 4.6, reviews: 52, year: 2022, builder: 'Lagoon', speed: '9 knots', destination: 'Marmaris' },
    { name: 'Aegean Star', type: 'Gulet', length: '26m', beam: '7.0m', draft: '2.3m', guests: 10, cabins: 5, crew: 4, price: 4100, rating: 4.9, reviews: 71, year: 2018, builder: 'Bodrum Shipyard', speed: '11 knots', destination: 'Fethiye' },
    { name: 'Deniz Kizi', type: 'Motor Yacht', length: '20m', beam: '5.5m', draft: '1.6m', guests: 8, cabins: 4, crew: 3, price: 2800, rating: 4.5, reviews: 39, year: 2020, builder: 'Princess', speed: '24 knots', destination: 'Gocek' },
    { name: 'Mavi Ruya', type: 'Gulet', length: '28m', beam: '7.2m', draft: '2.4m', guests: 10, cabins: 5, crew: 4, price: 3800, rating: 4.8, reviews: 55, year: 2017, builder: 'Bodrum Shipyard', speed: '11 knots', destination: 'Bodrum' },
    { name: "Poseidon's Grace", type: 'Mega Yacht', length: '38m', beam: '7.8m', draft: '2.1m', guests: 14, cabins: 7, crew: 7, price: 9500, rating: 4.9, reviews: 22, year: 2022, builder: 'Sunseeker', speed: '20 knots', destination: 'Marmaris' },
    { name: 'Ruzgar', type: 'Sailing Yacht', length: '16m', beam: '4.8m', draft: '2.6m', guests: 6, cabins: 3, crew: 2, price: 1900, rating: 4.4, reviews: 44, year: 2019, builder: 'Jeanneau', speed: '9 knots', destination: 'Fethiye' },
    { name: 'Serenity', type: 'Catamaran', length: '14m', beam: '7.5m', draft: '1.1m', guests: 8, cabins: 4, crew: 2, price: 1650, rating: 4.3, reviews: 37, year: 2021, builder: 'Fountaine Pajot', speed: '8 knots', destination: 'Gocek' },
    { name: 'Sultan Mehmet', type: 'Gulet', length: '32m', beam: '7.8m', draft: '2.6m', guests: 14, cabins: 7, crew: 5, price: 6200, rating: 4.7, reviews: 48, year: 2016, builder: 'Bodrum Shipyard', speed: '12 knots', destination: 'Marmaris' },
  ]
  const base = defaults[(id - 3) % defaults.length] || defaults[0]
  return {
    id,
    ...base,
    fuelCapacity: '3,000L',
    waterCapacity: '1,500L',
    description: `${base.name} is a luxurious ${base.length} ${base.type.toLowerCase()} offering unforgettable cruising experiences along the Turkish coastline. With ${base.cabins} spacious cabins accommodating up to ${base.guests} guests, and a dedicated crew of ${base.crew}, she is the perfect choice for your dream Mediterranean holiday.`,
    images: [
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80',
      'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80',
      'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80',
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80',
    ],
    amenities: ['Wi-Fi', 'Air Conditioning', 'Water Sports', 'BBQ Grill', 'Sound System', 'Snorkeling Gear', 'Kayaks', 'Paddleboard'],
    crewMembers: [
      { role: 'Captain', name: 'Kemal Deniz', experience: '12 years' },
      { role: 'Chef', name: 'Ayse Yilmaz', experience: '8 years' },
    ],
    reviewsList: [
      { name: 'Guest', date: 'March 2026', rating: 5, text: 'Wonderful experience! The crew was professional and the yacht was in perfect condition.' },
      { name: 'Traveler', date: 'February 2026', rating: 4, text: 'Beautiful yacht and great service. Highly recommended for families.' },
    ],
    availability: [
      { month: 'Apr 2026', available: true },
      { month: 'May 2026', available: true },
      { month: 'Jun 2026', available: false },
      { month: 'Jul 2026', available: true },
      { month: 'Aug 2026', available: false },
      { month: 'Sep 2026', available: true },
      { month: 'Oct 2026', available: true },
      { month: 'Nov 2026', available: true },
    ],
  }
}

const amenityIcons: Record<string, typeof Wifi> = {
  'Wi-Fi': Wifi,
  'Air Conditioning': Snowflake,
  'Jacuzzi': Waves,
  'Water Sports': Waves,
  'BBQ Grill': UtensilsCrossed,
  'Satellite TV': Tv,
  'Sound System': Music,
  'Gym Equipment': Dumbbell,
  'Snorkeling Gear': CircleDot,
  'Kayaks': Ship,
  'Paddleboard': Waves,
  'Jet Ski': Waves,
  'Fishing Equipment': Anchor,
}

export default function YachtDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const yacht = getYachtData(id)

  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'amenities' | 'crew' | 'reviews'>('overview')
  const [bookingDates, setBookingDates] = useState({ start: '', end: '' })
  const [bookingGuests, setBookingGuests] = useState(2)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const nextImage = () => setCurrentImage(prev => (prev + 1) % yacht.images.length)
  const prevImage = () => setCurrentImage(prev => (prev - 1 + yacht.images.length) % yacht.images.length)

  const calculateDays = () => {
    if (!bookingDates.start || !bookingDates.end) return 0
    const diff = new Date(bookingDates.end).getTime() - new Date(bookingDates.start).getTime()
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  }

  const days = calculateDays()
  const totalPrice = days * yacht.price

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 safe-top">
        <div className="glass px-4 py-3 flex items-center justify-between">
          <Link href="/yachts" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back to Fleet</span>
          </Link>
          <div className="flex items-center gap-3">
            <button className="glass p-2 rounded-full hover:bg-teal-50 transition">
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`glass p-2 rounded-full transition ${isFavorite ? 'bg-red-500/20' : 'hover:bg-red-500/20'}`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'text-red-400 fill-red-400' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <div className="pt-14">
        {/* Image Gallery */}
        <div className="relative h-72 md:h-[480px] overflow-hidden">
          <img
            src={yacht.images[currentImage]}
            alt={`${yacht.name} - Image ${currentImage + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 glass p-2 rounded-full hover:bg-white/20 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 glass p-2 rounded-full hover:bg-white/20 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {yacht.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-2 h-2 rounded-full transition ${idx === currentImage ? 'bg-teal-500 w-6' : 'bg-white/40'}`}
              />
            ))}
          </div>

          {/* Thumbnails (desktop) */}
          <div className="absolute bottom-4 right-4 hidden md:flex gap-2">
            {yacht.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition ${
                  idx === currentImage ? 'border-teal-500' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Title & Quick Info */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="glass px-2.5 py-1 rounded-full text-xs text-teal-400">{yacht.type}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" />{yacht.destination}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold">{yacht.name}</h1>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-xl font-bold">{yacht.rating}</span>
                    </div>
                    <p className="text-xs text-gray-600">{yacht.reviews} reviews</p>
                  </div>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-4 md:grid-cols-6 gap-3 mt-4">
                  {[
                    { icon: Navigation, label: 'Length', value: yacht.length },
                    { icon: Wind, label: 'Beam', value: yacht.beam },
                    { icon: Users, label: 'Guests', value: String(yacht.guests) },
                    { icon: Ship, label: 'Cabins', value: String(yacht.cabins) },
                    { icon: Users, label: 'Crew', value: String(yacht.crew) },
                    { icon: Calendar, label: 'Built', value: String(yacht.year) },
                  ].map(spec => (
                    <div key={spec.label} className="glass rounded-xl p-3 text-center">
                      <spec.icon className="w-4 h-4 text-teal-500 mx-auto mb-1" />
                      <p className="text-sm font-bold">{spec.value}</p>
                      <p className="text-[10px] text-gray-600">{spec.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mb-6 overflow-x-auto">
                {(['overview', 'amenities', 'crew', 'reviews'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize whitespace-nowrap transition ${
                      activeTab === tab ? 'bg-teal-600 text-white' : 'glass text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="glass rounded-2xl p-6">
                    <h2 className="text-lg font-bold mb-3">About This Yacht</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{yacht.description}</p>
                  </div>

                  <div className="glass rounded-2xl p-6">
                    <h2 className="text-lg font-bold mb-4">Technical Specifications</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Builder', value: yacht.builder },
                        { label: 'Year Built', value: String(yacht.year) },
                        { label: 'Length', value: yacht.length },
                        { label: 'Beam', value: yacht.beam },
                        { label: 'Draft', value: yacht.draft },
                        { label: 'Max Speed', value: yacht.speed },
                        { label: 'Fuel Capacity', value: yacht.fuelCapacity },
                        { label: 'Water Capacity', value: yacht.waterCapacity },
                      ].map(spec => (
                        <div key={spec.label} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">{spec.label}</span>
                          <span className="text-sm font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability Calendar */}
                  <div className="glass rounded-2xl p-6">
                    <h2 className="text-lg font-bold mb-4">Availability</h2>
                    <div className="grid grid-cols-4 gap-3">
                      {yacht.availability.map(a => (
                        <div
                          key={a.month}
                          className={`text-center p-3 rounded-xl border transition ${
                            a.available
                              ? 'border-green-500/30 bg-green-500/10'
                              : 'border-red-500/30 bg-red-500/10 opacity-50'
                          }`}
                        >
                          <p className="text-xs font-semibold">{a.month}</p>
                          <p className={`text-[10px] mt-1 ${a.available ? 'text-green-600' : 'text-red-500'}`}>
                            {a.available ? 'Available' : 'Booked'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'amenities' && (
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-bold mb-4">Amenities & Equipment</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {yacht.amenities.map(amenity => {
                      const Icon = amenityIcons[amenity] || Check
                      return (
                        <div key={amenity} className="flex items-center gap-3 py-2">
                          <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-teal-500" />
                          </div>
                          <span className="text-sm">{amenity}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'crew' && (
                <div className="space-y-4">
                  <div className="glass rounded-2xl p-6">
                    <h2 className="text-lg font-bold mb-4">Meet the Crew</h2>
                    <div className="space-y-4">
                      {yacht.crewMembers.map(member => (
                        <div key={member.role} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                          <div className="w-14 h-14 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-teal-500" />
                          </div>
                          <div>
                            <p className="font-semibold">{member.name}</p>
                            <p className="text-sm text-teal-500">{member.role}</p>
                            <p className="text-xs text-gray-600">{member.experience} experience</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <div className="glass rounded-2xl p-6 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-teal-500">{yacht.rating}</p>
                        <div className="flex items-center gap-0.5 mt-1">
                          {[1, 2, 3, 4, 5].map(s => (
                            <Star
                              key={s}
                              className={`w-4 h-4 ${s <= Math.round(yacht.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{yacht.reviews} reviews</p>
                      </div>
                      <div className="flex-1 space-y-1">
                        {[5, 4, 3, 2, 1].map(stars => {
                          const count = yacht.reviewsList.filter(r => r.rating === stars).length
                          const pct = yacht.reviewsList.length > 0 ? (count / yacht.reviewsList.length) * 100 : 0
                          return (
                            <div key={stars} className="flex items-center gap-2">
                              <span className="text-xs text-gray-600 w-3">{stars}</span>
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              <div className="flex-1 h-2 bg-teal-50 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {yacht.reviewsList.map((review, idx) => (
                    <div key={idx} className="glass rounded-2xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-teal-500" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{review.name}</p>
                            <p className="text-xs text-gray-600">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map(s => (
                            <Star
                              key={s}
                              className={`w-3 h-3 ${s <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-600 transition">
                          <ThumbsUp className="w-3 h-3" /> Helpful
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl p-6 sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-teal-500">&euro;{yacht.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-600"> / day</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold">{yacht.rating}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Check-in</label>
                    <div className="flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5">
                      <Calendar className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <input
                        type="date"
                        value={bookingDates.start}
                        onChange={e => setBookingDates(prev => ({ ...prev, start: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-gray-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Check-out</label>
                    <div className="flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5">
                      <Calendar className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <input
                        type="date"
                        value={bookingDates.end}
                        onChange={e => setBookingDates(prev => ({ ...prev, end: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-gray-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Guests</label>
                    <div className="flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5">
                      <Users className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <select
                        value={bookingGuests}
                        onChange={e => setBookingGuests(Number(e.target.value))}
                        className="bg-transparent text-sm w-full outline-none text-gray-800"
                      >
                        {Array.from({ length: yacht.guests }, (_, i) => i + 1).map(n => (
                          <option key={n} value={n} className="text-black">{n} guest{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {days > 0 && (
                  <div className="border-t border-teal-200 pt-4 mb-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">&euro;{yacht.price.toLocaleString()} x {days} days</span>
                      <span>&euro;{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service fee</span>
                      <span>&euro;{Math.round(totalPrice * 0.05).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t border-teal-200">
                      <span>Total</span>
                      <span className="text-teal-500">&euro;{Math.round(totalPrice * 1.05).toLocaleString()}</span>
                    </div>
                  </div>
                )}

                <Link
                  href={`/booking?yacht=${yacht.id}&start=${bookingDates.start}&end=${bookingDates.end}&guests=${bookingGuests}`}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition block text-center"
                >
                  <ArrowRight className="w-4 h-4" /> Book Now
                </Link>

                <div className="flex items-center gap-2 mt-4 justify-center">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-600">Free cancellation up to 14 days before</span>
                </div>

                <div className="mt-4 pt-4 border-t border-teal-200">
                  <button className="w-full glass py-2.5 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-teal-50 transition">
                    <Phone className="w-4 h-4 text-teal-500" /> Contact Charter Manager
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Booking Bar */}
      <div className="fixed bottom-0 w-full glass safe-bottom z-50 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div>
            <span className="text-xl font-bold text-teal-500">&euro;{yacht.price.toLocaleString()}</span>
            <span className="text-xs text-gray-600"> / day</span>
          </div>
          <Link
            href={`/booking?yacht=${yacht.id}&guests=${bookingGuests}`}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
