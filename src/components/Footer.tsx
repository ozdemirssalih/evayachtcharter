'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor, Mail, Phone, MapPin, Send, Camera, Globe, MessageCircle,
  Play, Shield, Award, Clock, Lock, CreditCard, CheckCircle
} from 'lucide-react'

const sitemapLinks = {
  Charter: [
    { label: 'Browse Yachts', href: '/yachts' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Booking', href: '/booking' },
    { label: 'Special Offers', href: '/yachts' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '/about' },
  ],
  Legal: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/privacy' },
    { label: 'Cancellation Policy', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: Globe, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'Twitter', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
]

const trustBadges = [
  { icon: Shield, label: 'Fully Insured' },
  { icon: Award, label: 'Licensed' },
  { icon: Clock, label: '24/7 Support' },
  { icon: Lock, label: 'Secure Payment' },
]

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Wire Transfer']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <footer className="border-t border-teal-200 bg-[#080e1a]">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="glass rounded-3xl p-8 md:p-10 mb-12 bg-gradient-to-r from-teal-600/10 to-purple-600/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Stay in the <span className="gold-text">Loop</span>
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Subscribe to receive exclusive deals, new yacht arrivals, and insider tips for your next charter.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-4 py-3">
                <Mail className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-transparent text-sm w-full outline-none text-gray-800 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition hover:shadow-lg hover:shadow-teal-600/25 whitespace-nowrap"
              >
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center justify-center gap-2 mt-4 text-green-400 text-sm animate-pulse">
                <CheckCircle className="w-4 h-4" />
                Thank you for subscribing!
              </div>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {trustBadges.map(badge => (
            <div
              key={badge.label}
              className="glass rounded-xl p-4 flex items-center gap-3 hover:border-teal-500/30 transition"
            >
              <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-teal-500" />
              </div>
              <span className="text-sm font-semibold">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Anchor className="w-7 h-7 text-teal-500" />
              <span className="text-lg font-bold gold-text">Eva Yacht Charter</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-xs">
              Turkey's premier luxury yacht charter company. Discover the beauty of the Turkish Riviera aboard our handpicked fleet.
            </p>
            <div className="space-y-2">
              <a href="tel:+905321234567" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition">
                <Phone className="w-4 h-4 text-teal-500" /> +90 532 XXX XX XX
              </a>
              <a href="mailto:info@evayachtcharter.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition">
                <Mail className="w-4 h-4 text-teal-500" /> info@evayachtcharter.com
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" /> Bodrum Marina, Mugla, Turkey
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(sitemapLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm mb-4 text-gray-800">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-800 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + Payment */}
        <div className="border-t border-teal-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-teal-600/20 hover:border-teal-500/30 transition"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-gray-600 hover:text-gray-800" />
              </a>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <CreditCard className="w-4 h-4 text-gray-600" />
            <div className="flex items-center gap-2">
              {paymentMethods.map(method => (
                <span
                  key={method}
                  className="text-[10px] text-gray-600 glass px-2 py-1 rounded"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-600">
            &copy; 2026 Eva Yacht Charter. All rights reserved. Bodrum, Turkey.
          </p>
        </div>
      </div>
    </footer>
  )
}
