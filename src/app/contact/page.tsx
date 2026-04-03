'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle, Loader2,
  CheckCircle, Globe, Headphones, Camera
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const officeHours = [
  { day: 'Monday - Friday', hours: '09:00 - 19:00' },
  { day: 'Saturday', hours: '10:00 - 17:00' },
  { day: 'Sunday', hours: '10:00 - 15:00' },
]

const offices = [
  {
    name: 'Bodrum Office (HQ)',
    address: 'Bodrum Marina, Neyzen Tevfik Caddesi No:12, 48400 Bodrum, Mugla, Turkey',
    phone: '+90 252 316 XX XX',
    email: 'bodrum@evayachtcharter.com',
  },
  {
    name: 'Marmaris Office',
    address: 'Marmaris Yacht Marina, Barbaros Caddesi No:8, 48700 Marmaris, Mugla, Turkey',
    phone: '+90 252 412 XX XX',
    email: 'marmaris@evayachtcharter.com',
  },
  {
    name: 'Fethiye Office',
    address: 'Ece Marina, Karagozler Mah. No:5, 48300 Fethiye, Mugla, Turkey',
    phone: '+90 252 614 XX XX',
    email: 'fethiye@evayachtcharter.com',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559599238-308793637427?w=1920&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-transparent to-white" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <Headphones className="w-4 h-4 text-teal-500" />
              <span className="text-xs text-gray-600">We're Here to Help</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Get In <span className="gold-text">Touch</span>
            </h1>
            <p className="text-gray-600 text-sm max-w-lg">
              Our charter specialists are ready to help you plan the perfect voyage
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 -mt-8 relative z-20 mb-12">
            <a
              href="tel:+905321234567"
              className="glass rounded-2xl p-5 text-center hover:border-teal-500/30 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-teal-600/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-teal-600/30 transition">
                <Phone className="w-5 h-5 text-teal-500" />
              </div>
              <h3 className="font-bold text-sm mb-1">Call Us</h3>
              <p className="text-xs text-gray-600">+90 532 XXX XX XX</p>
            </a>

            <a
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 text-center hover:border-green-500/30 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-green-600/30 transition">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-bold text-sm mb-1">WhatsApp</h3>
              <p className="text-xs text-gray-600">Quick response</p>
            </a>

            <a
              href="mailto:info@evayachtcharter.com"
              className="glass rounded-2xl p-5 text-center hover:border-teal-500/30 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-600/30 transition">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-sm mb-1">Email</h3>
              <p className="text-xs text-gray-600">info@evayachtcharter.com</p>
            </a>

            <button
              onClick={() => setShowChat(true)}
              className="glass rounded-2xl p-5 text-center hover:border-orange-500/30 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-600/30 transition">
                <Headphones className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-bold text-sm mb-1">Live Chat</h3>
              <p className="text-xs text-gray-600">Online now</p>
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="glass rounded-3xl p-6 md:p-8">
              <h2 className="text-xl font-bold mb-1">Send Us a Message</h2>
              <p className="text-sm text-gray-600 mb-6">We typically respond within 2 hours during business hours</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-600">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Full Name *</label>
                      <input
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Phone</label>
                      <input
                        type="tel"
                        placeholder="+90 5XX XXX XX XX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-1 block">Subject *</label>
                      <select
                        required
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition appearance-none text-gray-800"
                      >
                        <option value="" className="text-black">Select a topic</option>
                        <option value="booking" className="text-black">New Booking Inquiry</option>
                        <option value="existing" className="text-black">Existing Booking</option>
                        <option value="pricing" className="text-black">Pricing & Availability</option>
                        <option value="corporate" className="text-black">Corporate Charter</option>
                        <option value="feedback" className="text-black">Feedback</option>
                        <option value="other" className="text-black">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your dream charter..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-teal-500 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map + Info */}
            <div className="space-y-6">
              {/* Google Maps Embed Area */}
              <div className="glass rounded-3xl overflow-hidden h-64 md:h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.5!2d27.4305!3d37.0344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAyJzA0LjAiTiAyN8KwMjUnNDkuOCJF!5e0!3m2!1sen!2str!4v1680000000000!5m2!1sen!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eva Yacht Charter Location"
                />
              </div>

              {/* Office Hours */}
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal-500" />
                  </div>
                  <h3 className="font-bold">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map(oh => (
                    <div key={oh.day} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{oh.day}</span>
                      <span className="font-semibold text-gray-800">{oh.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-teal-200">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-600 font-medium">24/7 Emergency Line Available</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-5">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Camera, label: 'Instagram', href: '#', color: 'hover:bg-pink-600/20 hover:border-pink-500/30' },
                    { icon: Globe, label: 'Facebook', href: '#', color: 'hover:bg-teal-600/20 hover:border-teal-500/30' },
                    { icon: MessageCircle, label: 'Twitter', href: '#', color: 'hover:bg-sky-600/20 hover:border-sky-500/30' },
                    { icon: Globe, label: 'Website', href: '/', color: 'hover:bg-green-600/20 hover:border-green-500/30' },
                  ].map((social, idx) => (
                    <a
                      key={`${social.label}-${idx}`}
                      href={social.href}
                      className={`glass w-12 h-12 rounded-xl flex items-center justify-center transition ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Offices */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our <span className="gold-text">Offices</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map(office => (
                <div key={office.name} className="glass rounded-2xl p-6 hover:border-teal-500/30 transition">
                  <h3 className="font-bold mb-3">{office.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition"
                    >
                      <Phone className="w-4 h-4 text-teal-500" />
                      {office.phone}
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition"
                    >
                      <Mail className="w-4 h-4 text-teal-500" />
                      {office.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="glass rounded-3xl p-8 text-center bg-gradient-to-r from-green-600/10 to-emerald-600/10">
            <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Prefer WhatsApp?</h2>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Send us a message on WhatsApp for the fastest response. Our team is online and ready to assist.
            </p>
            <a
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold text-sm transition"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Live Chat Placeholder */}
      {showChat && (
        <div className="fixed bottom-4 right-4 z-50 w-80 animate-in">
          <div className="glass rounded-2xl overflow-hidden border border-teal-500/20 shadow-2xl">
            <div className="bg-teal-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-white">Live Chat</span>
              </div>
              <button onClick={() => setShowChat(false)} className="text-white/70 hover:text-white text-lg leading-none">
                &times;
              </button>
            </div>
            <div className="p-4 h-64 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Headphones className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-1">Chat with our team</p>
                  <p className="text-xs text-gray-600">Typically replies within minutes</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-teal-500 transition"
                />
                <button className="bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-xl transition">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
