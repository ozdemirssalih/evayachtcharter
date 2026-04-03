'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Anchor, Menu, X, User, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Yachts', href: '/yachts' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLoggedIn] = useState(false) // TODO: wire to auth state

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 safe-top">
      <div
        className={`px-4 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Anchor className="w-7 h-7 text-teal-500 group-hover:rotate-12 transition-transform duration-300" />
          <img src="/logo.svg" alt="Eva Yacht" className="h-8" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-800 transition relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}

          {isLoggedIn ? (
            <Link
              href="/dashboard"
              className="flex items-center gap-2 glass px-3 py-2 rounded-full hover:bg-teal-50 transition"
            >
              <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold">
                E
              </div>
              <ChevronDown className="w-3 h-3 text-gray-600" />
            </Link>
          ) : (
            <Link
              href="/login"
              className="bg-teal-600 hover:bg-teal-700 px-5 py-2 rounded-full text-gray-800 text-sm font-semibold transition hover:shadow-lg hover:shadow-teal-600/25"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 w-full h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass px-4 py-4 space-y-1 border-t border-white/5">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-gray-600 hover:text-gray-800 hover:bg-gray-50 px-4 py-3 rounded-xl transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-teal-200">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl transition"
                onClick={() => setMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold">
                  E
                </div>
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="block bg-teal-600 text-center py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
