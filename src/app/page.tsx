'use client'

import { useState } from 'react'
import { Anchor, Calendar, MapPin, Users, Star, ChevronRight, Phone, Mail, Shield, Waves, Sun, Wind, Navigation, Heart, Search, Menu, X } from 'lucide-react'
import Link from 'next/link'

const yachts = [
  { id: 1, name: 'Azure Dream', type: 'Motor Yacht', length: '24m', guests: 8, cabins: 4, price: 3500, rating: 4.9, image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80', featured: true },
  { id: 2, name: 'Golden Horizon', type: 'Gulet', length: '30m', guests: 12, cabins: 6, price: 5200, rating: 4.8, image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80', featured: true },
  { id: 3, name: 'Sea Pearl', type: 'Sailing Yacht', length: '18m', guests: 6, cabins: 3, price: 2200, rating: 4.7, image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80', featured: false },
  { id: 4, name: 'Royal Escape', type: 'Mega Yacht', length: '42m', guests: 16, cabins: 8, price: 12000, rating: 5.0, image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80', featured: true },
  { id: 5, name: 'Turquoise Bay', type: 'Catamaran', length: '15m', guests: 8, cabins: 4, price: 1800, rating: 4.6, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', featured: false },
  { id: 6, name: 'Aegean Star', type: 'Gulet', length: '26m', guests: 10, cabins: 5, price: 4100, rating: 4.9, image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80', featured: true },
]

const destinations = [
  { name: 'Bodrum', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80', yachtCount: 45 },
  { name: 'Fethiye', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', yachtCount: 32 },
  { name: 'Gocek', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80', yachtCount: 28 },
  { name: 'Marmaris', image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=400&q=80', yachtCount: 38 },
]

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0c1222]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 safe-top">
        <div className="glass px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Anchor className="w-7 h-7 text-blue-400" />
            <span className="text-lg font-bold gold-text">Eva Yacht</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#yachts" className="text-gray-300 hover:text-white transition">Yachts</a>
            <a href="#destinations" className="text-gray-300 hover:text-white transition">Destinations</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            <Link href="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white text-sm font-semibold transition">Sign In</Link>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="glass md:hidden px-4 py-4 space-y-3">
            <a href="#yachts" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Yachts</a>
            <a href="#destinations" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Destinations</a>
            <a href="#about" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Contact</a>
            <Link href="/login" className="block bg-blue-600 text-center py-2 rounded-full font-semibold" onClick={() => setMenuOpen(false)}>Sign In</Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-[#0c1222]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Premium Charter Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Sail Into <span className="gold-text">Luxury</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Discover the Turkish coastline aboard our handpicked fleet of luxury yachts. Unforgettable moments await.
          </p>

          {/* Search Bar */}
          <div className="glass rounded-2xl p-4 md:p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <select className="bg-transparent text-sm w-full outline-none text-white">
                  <option value="" className="text-black">Destination</option>
                  <option value="bodrum" className="text-black">Bodrum</option>
                  <option value="fethiye" className="text-black">Fethiye</option>
                  <option value="gocek" className="text-black">Gocek</option>
                  <option value="marmaris" className="text-black">Marmaris</option>
                </select>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-3">
                <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <input type="date" className="bg-transparent text-sm w-full outline-none text-white" />
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-3">
                <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <select className="bg-transparent text-sm w-full outline-none text-white">
                  <option value="" className="text-black">Guests</option>
                  {[2,4,6,8,10,12,16].map(n => <option key={n} value={n} className="text-black">{n} guests</option>)}
                </select>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 transition">
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            {[{ n: '150+', l: 'Yachts' }, { n: '12K+', l: 'Guests' }, { n: '4.9', l: 'Rating' }, { n: '50+', l: 'Routes' }].map(s => (
              <div key={s.l} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-white">{s.n}</p>
                <p className="text-xs text-gray-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Yachts */}
      <section id="yachts" className="px-4 py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured <span className="gold-text">Yachts</span></h2>
            <p className="text-gray-500 text-sm mt-1">Handpicked luxury vessels for your perfect voyage</p>
          </div>
          <button className="text-blue-400 text-sm flex items-center gap-1 hover:text-blue-300">View All <ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yachts.filter(y => y.featured).map(yacht => (
            <div key={yacht.id} className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-blue-500/30 transition-all">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src={yacht.image} alt={yacht.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 glass px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-semibold">{yacht.rating}</span>
                </div>
                <button className="absolute top-3 left-3 glass p-2 rounded-full hover:bg-red-500/20 transition">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{yacht.name}</h3>
                  <span className="text-xs glass px-2 py-1 rounded-full text-blue-300">{yacht.type}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Navigation className="w-3 h-3" />{yacht.length}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{yacht.guests} guests</span>
                  <span className="flex items-center gap-1"><Wind className="w-3 h-3" />{yacht.cabins} cabins</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-blue-400">${yacht.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500"> / day</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-xs font-semibold transition">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Popular <span className="gold-text">Destinations</span></h2>
        <p className="text-gray-500 text-sm mb-8">Explore the most beautiful harbors of Turkey</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map(dest => (
            <div key={dest.name} className="relative rounded-2xl overflow-hidden h-40 md:h-52 group cursor-pointer">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <h3 className="font-bold text-lg">{dest.name}</h3>
                <p className="text-xs text-gray-300">{dest.yachtCount} yachts</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Eva Yacht */}
      <section id="about" className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why <span className="gold-text">Eva Yacht</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: 'Safe & Insured', desc: 'All yachts are fully insured with professional crew on board.' },
            { icon: Sun, title: 'Best Price Guarantee', desc: 'We offer the most competitive prices with no hidden fees.' },
            { icon: Waves, title: '24/7 Support', desc: 'Our team is available around the clock for your comfort.' },
          ].map(f => (
            <div key={f.title} className="glass rounded-2xl p-6 text-center hover:border-blue-500/30 transition">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Set Sail?</h2>
          <p className="text-gray-400 mb-6">Create your account and get exclusive access to special offers and early booking discounts.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition">Create Account</Link>
            <a href="#contact" className="glass px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In <span className="gold-text">Touch</span></h2>
            <p className="text-gray-400 text-sm mb-6">Have questions? Our charter specialists are here to help you plan the perfect voyage.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center"><Phone className="w-5 h-5 text-blue-400" /></div>
                <div><p className="text-sm text-gray-400">Phone</p><p className="font-semibold">+90 532 XXX XX XX</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center"><Mail className="w-5 h-5 text-blue-400" /></div>
                <div><p className="text-sm text-gray-400">Email</p><p className="font-semibold">info@evayachtcharter.com</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center"><MapPin className="w-5 h-5 text-blue-400" /></div>
                <div><p className="text-sm text-gray-400">Location</p><p className="font-semibold">Bodrum Marina, Mugla, Turkey</p></div>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="space-y-4">
              <input placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition" />
              <input placeholder="Email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition" />
              <input placeholder="Phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition" />
              <textarea placeholder="Your message..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition resize-none" />
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition">Send Message</button>
            </div>
          </div>
        </div>
      </section>

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
