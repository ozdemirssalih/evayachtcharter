'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  Anchor, ChevronLeft, Calendar, Users, Ship, UtensilsCrossed,
  Waves, User, CreditCard, Shield, Check, ChevronRight, MapPin,
  Clock, Star, ArrowRight, Loader2, CircleCheck, Phone, Mail
} from 'lucide-react'

const yachtData: Record<number, { name: string; type: string; price: number; image: string; rating: number; destination: string; guests: number }> = {
  1: { name: 'Azure Dream', type: 'Motor Yacht', price: 3500, image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80', rating: 4.9, destination: 'Bodrum', guests: 8 },
  2: { name: 'Golden Horizon', type: 'Gulet', price: 5200, image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80', rating: 4.8, destination: 'Fethiye', guests: 12 },
  3: { name: 'Sea Pearl', type: 'Sailing Yacht', price: 2200, image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80', rating: 4.7, destination: 'Gocek', guests: 6 },
  4: { name: 'Royal Escape', type: 'Mega Yacht', price: 12000, image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80', rating: 5.0, destination: 'Bodrum', guests: 16 },
  5: { name: 'Turquoise Bay', type: 'Catamaran', price: 1800, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', rating: 4.6, destination: 'Marmaris', guests: 8 },
  6: { name: 'Aegean Star', type: 'Gulet', price: 4100, image: 'https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80', rating: 4.9, destination: 'Fethiye', guests: 10 },
  7: { name: 'Deniz Kizi', type: 'Motor Yacht', price: 2800, image: 'https://images.unsplash.com/photo-1621277224630-81a0a72b3ad0?w=800&q=80', rating: 4.5, destination: 'Gocek', guests: 8 },
  8: { name: 'Mavi Ruya', type: 'Gulet', price: 3800, image: 'https://images.unsplash.com/photo-1588401273872-f2cac081e30a?w=800&q=80', rating: 4.8, destination: 'Bodrum', guests: 10 },
  9: { name: "Poseidon's Grace", type: 'Mega Yacht', price: 9500, image: 'https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=800&q=80', rating: 4.9, destination: 'Marmaris', guests: 14 },
  10: { name: 'Ruzgar', type: 'Sailing Yacht', price: 1900, image: 'https://images.unsplash.com/photo-1535722579498-3b1b02f4f6d0?w=800&q=80', rating: 4.4, destination: 'Fethiye', guests: 6 },
  11: { name: 'Serenity', type: 'Catamaran', price: 1650, image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80', rating: 4.3, destination: 'Gocek', guests: 8 },
  12: { name: 'Sultan Mehmet', type: 'Gulet', price: 6200, image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80', rating: 4.7, destination: 'Marmaris', guests: 14 },
}

const extras = [
  { id: 'chef', name: 'Private Chef', desc: 'Gourmet meals prepared onboard', price: 350, icon: UtensilsCrossed },
  { id: 'watersports', name: 'Water Sports Package', desc: 'Jet ski, wakeboard, water ski, tubes', price: 500, icon: Waves },
  { id: 'captain', name: 'Skipper Service', desc: 'Licensed captain for the trip', price: 250, icon: User },
  { id: 'dj', name: 'DJ & Sound', desc: 'Professional DJ setup & sound system', price: 400, icon: Star },
  { id: 'diving', name: 'Diving Equipment', desc: 'Full scuba diving gear & instructor', price: 300, icon: Waves },
  { id: 'photographer', name: 'Photographer', desc: 'Professional drone & photography', price: 450, icon: Star },
]

function BookingPageContent() {
  const searchParams = useSearchParams()
  const yachtId = Number(searchParams.get('yacht')) || 1
  const yacht = yachtData[yachtId] || yachtData[1]

  const [step, setStep] = useState(1)
  const [dates, setDates] = useState({
    start: searchParams.get('start') || '',
    end: searchParams.get('end') || '',
  })
  const [guests, setGuests] = useState(Number(searchParams.get('guests')) || 2)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', notes: '' })
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '', cardName: '' })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id])
  }

  const days = useMemo(() => {
    if (!dates.start || !dates.end) return 0
    const diff = new Date(dates.end).getTime() - new Date(dates.start).getTime()
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)))
  }, [dates.start, dates.end])

  const basePrice = days * yacht.price
  const extrasPrice = selectedExtras.reduce((sum, id) => {
    const extra = extras.find(e => e.id === id)
    return sum + (extra ? extra.price * days : 0)
  }, 0)
  const serviceFee = Math.round((basePrice + extrasPrice) * 0.05)
  const totalPrice = basePrice + extrasPrice + serviceFee

  const handleSubmit = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2500)
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#0c1222] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CircleCheck className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold mb-3">Booking Confirmed!</h1>
          <p className="text-gray-400 text-sm mb-6">
            Your reservation for <span className="text-white font-semibold">{yacht.name}</span> has been confirmed.
            You will receive a confirmation email shortly.
          </p>
          <div className="glass rounded-2xl p-5 mb-6 text-left">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Booking Reference</span>
                <span className="font-mono font-bold text-blue-400">EVA-{Date.now().toString(36).toUpperCase()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Yacht</span>
                <span className="font-semibold">{yacht.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Dates</span>
                <span className="font-semibold">{dates.start} - {dates.end}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Guests</span>
                <span className="font-semibold">{guests}</span>
              </div>
              <div className="flex justify-between text-sm font-bold pt-2 border-t border-white/10">
                <span>Total Paid</span>
                <span className="text-blue-400">&euro;{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard/bookings" className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-sm transition text-center">
              View My Bookings
            </Link>
            <Link href="/yachts" className="flex-1 glass py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition text-center">
              Browse More Yachts
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0c1222]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 safe-top">
        <div className="glass px-4 py-3 flex items-center justify-between">
          <Link href={`/yachts/${yachtId}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Back</span>
          </Link>
          <span className="text-sm font-semibold">Booking</span>
          <span className="text-sm text-gray-500">Step {step}/4</span>
        </div>
      </header>

      <div className="pt-16 pb-32 max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-8 mt-4">
          {[
            { n: 1, label: 'Dates & Guests' },
            { n: 2, label: 'Extras' },
            { n: 3, label: 'Details' },
            { n: 4, label: 'Payment' },
          ].map((s, idx) => (
            <div key={s.n} className="flex-1">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition ${
                  step >= s.n ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-500'
                }`}>
                  {step > s.n ? <Check className="w-4 h-4" /> : s.n}
                </div>
                {idx < 3 && (
                  <div className={`flex-1 h-0.5 rounded-full transition ${step > s.n ? 'bg-blue-600' : 'bg-white/10'}`} />
                )}
              </div>
              <p className={`text-[10px] mt-1 ${step >= s.n ? 'text-blue-400' : 'text-gray-600'}`}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Dates & Guests */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" /> Select Dates
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Check-in Date</label>
                      <input
                        type="date"
                        value={dates.start}
                        onChange={e => setDates(prev => ({ ...prev, start: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none text-white focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Check-out Date</label>
                      <input
                        type="date"
                        value={dates.end}
                        onChange={e => setDates(prev => ({ ...prev, end: e.target.value }))}
                        min={dates.start}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none text-white focus:border-blue-500 transition"
                      />
                    </div>
                  </div>
                  {days > 0 && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-blue-400">
                      <Clock className="w-4 h-4" />
                      <span>{days} day{days > 1 ? 's' : ''} selected</span>
                    </div>
                  )}
                </div>

                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" /> Number of Guests
                  </h2>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg hover:bg-white/10 transition"
                    >
                      -
                    </button>
                    <div className="text-center">
                      <p className="text-3xl font-bold">{guests}</p>
                      <p className="text-xs text-gray-500">guest{guests > 1 ? 's' : ''}</p>
                    </div>
                    <button
                      onClick={() => setGuests(Math.min(yacht.guests, guests + 1))}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg hover:bg-white/10 transition"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Maximum {yacht.guests} guests</p>
                </div>
              </div>
            )}

            {/* Step 2: Extras */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold mb-2">Enhance Your Experience</h2>
                <p className="text-sm text-gray-400 mb-4">Add optional services to make your trip unforgettable</p>
                {extras.map(extra => (
                  <button
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`w-full glass rounded-2xl p-5 flex items-center gap-4 text-left transition ${
                      selectedExtras.includes(extra.id) ? 'border-blue-500/50 bg-blue-500/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      selectedExtras.includes(extra.id) ? 'bg-blue-600' : 'bg-white/10'
                    }`}>
                      <extra.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{extra.name}</p>
                      <p className="text-xs text-gray-500">{extra.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-400">&euro;{extra.price}</p>
                      <p className="text-[10px] text-gray-500">/ day</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedExtras.includes(extra.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-600'
                    }`}>
                      {selectedExtras.includes(extra.id) && <Check className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <div className="glass rounded-2xl p-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" /> Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Full Name *</label>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                      <User className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={contactInfo.name}
                        onChange={e => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Email Address *</label>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                      <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={contactInfo.email}
                        onChange={e => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Phone Number *</label>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                      <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-sm text-gray-400">+90</span>
                      <input
                        type="tel"
                        placeholder="5XX XXX XX XX"
                        value={contactInfo.phone}
                        onChange={e => setContactInfo(prev => ({ ...prev, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                        className="bg-transparent text-sm w-full outline-none text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Special Requests</label>
                    <textarea
                      placeholder="Dietary requirements, celebrations, preferences..."
                      rows={3}
                      value={contactInfo.notes}
                      onChange={e => setContactInfo(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none text-white focus:border-blue-500 transition resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-blue-400" /> Payment Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Card Number</label>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                        <CreditCard className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <input
                          type="text"
                          placeholder="4242 4242 4242 4242"
                          value={paymentInfo.cardNumber}
                          onChange={e => setPaymentInfo(prev => ({
                            ...prev,
                            cardNumber: e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim()
                          }))}
                          className="bg-transparent text-sm w-full outline-none text-white font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1 block">Name on Card</label>
                      <input
                        type="text"
                        placeholder="JOHN DOE"
                        value={paymentInfo.cardName}
                        onChange={e => setPaymentInfo(prev => ({ ...prev, cardName: e.target.value.toUpperCase() }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none text-white focus:border-blue-500 transition font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 mb-1 block">Expiry</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={paymentInfo.expiry}
                          onChange={e => {
                            let val = e.target.value.replace(/\D/g, '').slice(0, 4)
                            if (val.length >= 3) val = val.slice(0, 2) + '/' + val.slice(2)
                            setPaymentInfo(prev => ({ ...prev, expiry: val }))
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none text-white focus:border-blue-500 transition font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 mb-1 block">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={paymentInfo.cvv}
                          onChange={e => setPaymentInfo(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) }))}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none text-white focus:border-blue-500 transition font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Secure Payment</p>
                      <p className="text-xs text-gray-400">Your payment is processed securely with 256-bit SSL encryption. We never store your card details.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Booking Summary */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-5 sticky top-20">
              <div className="flex items-center gap-3 mb-4">
                <img src={yacht.image} alt={yacht.name} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <h3 className="font-bold">{yacht.name}</h3>
                  <p className="text-xs text-gray-500">{yacht.type}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs">{yacht.rating}</span>
                    <span className="text-xs text-gray-500">| <MapPin className="w-3 h-3 inline" /> {yacht.destination}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                {dates.start && dates.end && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {dates.start} - {dates.end}
                    </span>
                    <span className="text-xs text-blue-400">{days} days</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    <Users className="w-3 h-3 inline mr-1" />
                    Guests
                  </span>
                  <span>{guests}</span>
                </div>

                {days > 0 && (
                  <>
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">&euro;{yacht.price.toLocaleString()} x {days} days</span>
                        <span>&euro;{basePrice.toLocaleString()}</span>
                      </div>

                      {selectedExtras.length > 0 && (
                        <div className="space-y-1 mb-1">
                          {selectedExtras.map(id => {
                            const extra = extras.find(e => e.id === id)!
                            return (
                              <div key={id} className="flex justify-between text-sm">
                                <span className="text-gray-400">{extra.name} x {days}d</span>
                                <span>&euro;{(extra.price * days).toLocaleString()}</span>
                              </div>
                            )
                          })}
                        </div>
                      )}

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Service fee (5%)</span>
                        <span>&euro;{serviceFee.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex justify-between font-bold text-lg pt-3 border-t border-white/10">
                      <span>Total</span>
                      <span className="gold-text">&euro;{totalPrice.toLocaleString()}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                Free cancellation 14 days before departure
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full glass safe-bottom z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="glass px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}
          {step < 4 ? (
            <button
              onClick={() => {
                if (step === 1 && (!dates.start || !dates.end)) {
                  alert('Please select check-in and check-out dates')
                  return
                }
                setStep(step + 1)
              }}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl text-sm font-semibold transition flex items-center gap-1"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-2.5 rounded-xl text-sm font-semibold transition flex items-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
              ) : (
                <>Pay &euro;{totalPrice.toLocaleString()} <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function BookingFallback() {
  return (
    <div className="min-h-screen bg-[#0c1222] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-400 mx-auto mb-4" />
        <p className="text-sm text-gray-400">Loading booking...</p>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingFallback />}>
      <BookingPageContent />
    </Suspense>
  )
}
