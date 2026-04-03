'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Anchor, Calendar, MapPin, Users, Star, ChevronRight, Phone, Mail,
  Shield, Waves, Sun, Wind, Navigation, Heart, Search, Ship,
  ChevronLeft, Quote, CheckCircle, Lock, Clock, Award, Sailboat,
  Compass, ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

/* ──────── Data ──────── */

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

const testimonials = [
  {
    name: 'James & Sarah Thompson',
    location: 'London, UK',
    rating: 5,
    text: 'An absolutely unforgettable experience. The crew on Golden Horizon was exceptional - attentive, professional, and genuinely warm. The itinerary through Gocek islands was pure magic. Already planning our return trip!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    yacht: 'Golden Horizon',
  },
  {
    name: 'Maria Rossi',
    location: 'Milan, Italy',
    rating: 5,
    text: 'Eva Yacht Charter exceeded every expectation. From the booking process to disembarkation, everything was seamless. The chef prepared the most incredible Mediterranean cuisine. Five stars is not enough!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    yacht: 'Azure Dream',
  },
  {
    name: 'Hans Mueller',
    location: 'Munich, Germany',
    rating: 5,
    text: 'Third year chartering with Eva Yacht and they keep raising the bar. Royal Escape is a floating palace. The hidden coves our captain showed us in Bodrum were breathtaking. Luxury at its finest.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    yacht: 'Royal Escape',
  },
  {
    name: 'Sophie Laurent',
    location: 'Paris, France',
    rating: 5,
    text: 'We celebrated our anniversary on the Aegean Star and it was perfect. Sunset dinners on deck, swimming in crystal clear waters, and the most attentive crew. A dream come true.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    yacht: 'Aegean Star',
  },
  {
    name: 'Ahmed Al-Hassan',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Outstanding service from start to finish. The yacht was immaculate, the food was world-class, and the Turkish Riviera is simply stunning. Eva Yacht Charter is now our go-to for every summer holiday.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    yacht: 'Sea Pearl',
  },
]

const howItWorks = [
  { step: '01', title: 'Search', desc: 'Browse our curated fleet and find the perfect yacht for your voyage.', icon: Search },
  { step: '02', title: 'Book', desc: 'Secure your dates with our simple booking process and flexible payment.', icon: Calendar },
  { step: '03', title: 'Board', desc: 'Arrive at the marina and step aboard your luxury yacht with crew ready.', icon: Ship },
  { step: '04', title: 'Enjoy', desc: 'Sail the Turkish Riviera, discover hidden coves, and create memories.', icon: Sun },
]

const yachtTypes = [
  { name: 'Motor Yacht', icon: Ship, count: 45, desc: 'Speed & luxury combined' },
  { name: 'Gulet', icon: Sailboat, count: 38, desc: 'Traditional Turkish charm' },
  { name: 'Sailing Yacht', icon: Wind, count: 25, desc: 'For wind enthusiasts' },
  { name: 'Mega Yacht', icon: Navigation, count: 12, desc: 'Ultimate opulence' },
  { name: 'Catamaran', icon: Compass, count: 20, desc: 'Stable & spacious' },
]

const trustBadges = [
  { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive fleet insurance' },
  { icon: Award, title: 'Licensed', desc: 'IYBA & MYBA certified' },
  { icon: Clock, title: '24/7 Support', desc: 'Always here for you' },
  { icon: Lock, title: 'Secure Payment', desc: 'PCI-compliant transactions' },
]

/* ──────── Intersection Observer Hook ──────── */

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return ref
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation()
  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  )
}

/* ──────── Component ──────── */

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => setTestimonialIdx(prev => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setTestimonialIdx(prev => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 via-transparent to-white" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-600">Premium Charter Experience</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Sail Into <span className="gold-text">Luxury</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Discover the Turkish coastline aboard our handpicked fleet of luxury yachts. Unforgettable moments await.
          </p>

          {/* Search Bar */}
          <div className="glass rounded-2xl p-4 md:p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <select className="bg-transparent text-sm w-full outline-none text-gray-800">
                  <option value="" className="text-black">Destination</option>
                  <option value="bodrum" className="text-black">Bodrum</option>
                  <option value="fethiye" className="text-black">Fethiye</option>
                  <option value="gocek" className="text-black">Gocek</option>
                  <option value="marmaris" className="text-black">Marmaris</option>
                </select>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-3">
                <Calendar className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <input type="date" className="bg-transparent text-sm w-full outline-none text-gray-800" />
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-3">
                <Users className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <select className="bg-transparent text-sm w-full outline-none text-gray-800">
                  <option value="" className="text-black">Guests</option>
                  {[2, 4, 6, 8, 10, 12, 16].map(n => (
                    <option key={n} value={n} className="text-black">{n} guests</option>
                  ))}
                </select>
              </div>
              <Link
                href="/yachts"
                className="bg-teal-600 hover:bg-teal-700 rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2 transition hover:shadow-lg hover:shadow-teal-600/25"
              >
                <Search className="w-4 h-4" /> Search
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            {[
              { n: '150+', l: 'Yachts' },
              { n: '12K+', l: 'Guests' },
              { n: '4.9', l: 'Rating' },
              { n: '50+', l: 'Routes' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-gray-800">{s.n}</p>
                <p className="text-xs text-gray-600">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Yacht Types */}
      <AnimatedSection>
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Browse by <span className="gold-text">Type</span>
            </h2>
            <p className="text-gray-600 text-sm">Find the perfect vessel for your adventure</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {yachtTypes.map(yt => (
              <Link
                key={yt.name}
                href={`/yachts?type=${encodeURIComponent(yt.name)}`}
                className="glass rounded-2xl p-5 text-center hover:border-teal-500/30 transition-all group hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/10"
              >
                <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-600/30 transition">
                  <yt.icon className="w-6 h-6 text-teal-500" />
                </div>
                <h3 className="font-bold text-sm mb-1">{yt.name}</h3>
                <p className="text-[11px] text-gray-600 mb-1">{yt.desc}</p>
                <p className="text-xs text-teal-500 font-semibold">{yt.count} yachts</p>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Yachts */}
      <AnimatedSection>
        <section id="yachts" className="px-4 py-16 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Featured <span className="gold-text">Yachts</span>
              </h2>
              <p className="text-gray-600 text-sm mt-1">Handpicked luxury vessels for your perfect voyage</p>
            </div>
            <Link
              href="/yachts"
              className="text-teal-500 text-sm flex items-center gap-1 hover:text-teal-400 transition"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yachts.filter(y => y.featured).map(yacht => (
              <Link key={yacht.id} href={`/yachts/${yacht.id}`} className="block group">
                <div className="glass rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10 duration-300">
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
                      className="absolute top-3 left-3 glass p-2 rounded-full hover:bg-red-500/20 transition"
                      onClick={e => e.preventDefault()}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    {yacht.featured && (
                      <div className="absolute bottom-3 left-3 bg-gradient-to-r from-amber-600 to-yellow-500 px-2.5 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg group-hover:text-teal-400 transition-colors">
                        {yacht.name}
                      </h3>
                      <span className="text-xs glass px-2 py-1 rounded-full text-teal-400">{yacht.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3 h-3" />
                        {yacht.length}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {yacht.guests} guests
                      </span>
                      <span className="flex items-center gap-1">
                        <Wind className="w-3 h-3" />
                        {yacht.cabins} cabins
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-teal-500">
                          &euro;{yacht.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-600"> / day</span>
                      </div>
                      <span className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full text-xs font-semibold transition">
                        Book Now
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Destinations */}
      <AnimatedSection>
        <section id="destinations" className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Popular <span className="gold-text">Destinations</span>
          </h2>
          <p className="text-gray-600 text-sm mb-8">Explore the most beautiful harbors of Turkey</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map(dest => (
              <Link
                key={dest.name}
                href={`/destinations`}
                className="relative rounded-2xl overflow-hidden h-40 md:h-52 group cursor-pointer block"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="font-bold text-lg">{dest.name}</h3>
                  <p className="text-xs text-gray-600">{dest.yachtCount} yachts</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection>
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              How It <span className="gold-text">Works</span>
            </h2>
            <p className="text-gray-600 text-sm">Your luxury charter experience in four simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600/30 to-teal-600/0" />

            {howItWorks.map((step, idx) => (
              <div key={step.step} className="text-center relative">
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-600/20 to-teal-500/10 flex items-center justify-center mx-auto border border-teal-500/20">
                    <step.icon className="w-8 h-8 text-teal-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 max-w-[200px] mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Carousel */}
      <AnimatedSection>
        <section className="px-4 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              What Our Guests <span className="gold-text">Say</span>
            </h2>
            <p className="text-gray-600 text-sm">Trusted by thousands of happy charterers worldwide</p>
          </div>

          <div className="glass rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6 md:top-10 md:right-10 opacity-10">
              <Quote className="w-20 h-20 text-teal-500" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-teal-500/30">
                  <img
                    src={testimonials[testimonialIdx].image}
                    alt={testimonials[testimonialIdx].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                  {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 italic">
                  &ldquo;{testimonials[testimonialIdx].text}&rdquo;
                </p>
                <div>
                  <p className="font-bold">{testimonials[testimonialIdx].name}</p>
                  <p className="text-xs text-gray-600">
                    {testimonials[testimonialIdx].location} &middot; Yacht: {testimonials[testimonialIdx].yacht}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal-50 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIdx(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === testimonialIdx
                        ? 'w-8 h-2 bg-teal-500'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal-50 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Trust Badges */}
      <AnimatedSection>
        <section className="px-4 py-16 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Why Trust <span className="gold-text">Eva Yacht</span>
            </h2>
            <p className="text-gray-600 text-sm">Your safety and satisfaction are our top priorities</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map(badge => (
              <div
                key={badge.title}
                className="glass rounded-2xl p-6 text-center hover:border-teal-500/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-teal-600/20 flex items-center justify-center mx-auto mb-3">
                  <badge.icon className="w-7 h-7 text-teal-500" />
                </div>
                <h3 className="font-bold mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600">{badge.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Why Eva Yacht */}
      <AnimatedSection>
        <section id="about" className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why <span className="gold-text">Eva Yacht</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Safe & Insured',
                desc: 'All yachts are fully insured with professional crew on board.',
              },
              {
                icon: Sun,
                title: 'Best Price Guarantee',
                desc: 'We offer the most competitive prices with no hidden fees.',
              },
              {
                icon: Waves,
                title: '24/7 Support',
                desc: 'Our team is available around the clock for your comfort.',
              },
            ].map(f => (
              <div
                key={f.title}
                className="glass rounded-2xl p-6 text-center hover:border-teal-500/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-teal-600/20 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-teal-500" />
                </div>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="px-4 py-16">
          <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 text-center bg-gradient-to-r from-teal-600/10 to-purple-600/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Set Sail?</h2>
            <p className="text-gray-600 mb-6">
              Create your account and get exclusive access to special offers and early booking discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/register"
                className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-full font-semibold transition hover:shadow-lg hover:shadow-teal-600/25"
              >
                Create Account
              </Link>
              <Link
                href="/contact"
                className="glass px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection>
        <section id="contact" className="px-4 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Get In <span className="gold-text">Touch</span>
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Have questions? Our charter specialists are here to help you plan the perfect voyage.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold">+90 532 XXX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold">info@evayachtcharter.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold">Bodrum Marina, Mugla, Turkey</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="space-y-4">
                <input
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition"
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition resize-none"
                />
                <button className="w-full bg-teal-600 hover:bg-teal-700 py-3 rounded-xl font-semibold transition hover:shadow-lg hover:shadow-teal-600/25">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Newsletter (inline before footer) */}
      <AnimatedSection>
        <section className="px-4 py-8 max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-8 text-center">
            <Mail className="w-8 h-8 text-teal-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-1">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">Get exclusive deals and new yacht arrivals in your inbox</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition"
              />
              <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-xl font-semibold text-sm transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  )
}
