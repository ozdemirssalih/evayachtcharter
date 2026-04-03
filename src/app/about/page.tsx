'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor, Shield, Star, Users, Ship, Award, Globe, Clock, Heart,
  MapPin, Phone, Mail, ChevronRight, CheckCircle, Waves, Sun,
  Navigation, Target, Sparkles
} from 'lucide-react'

const stats = [
  { value: '150+', label: 'Luxury Yachts', icon: Ship },
  { value: '12,000+', label: 'Happy Guests', icon: Users },
  { value: '4.9', label: 'Average Rating', icon: Star },
  { value: '50+', label: 'Routes', icon: Navigation },
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '20+', label: 'Awards Won', icon: Award },
]

const team = [
  {
    name: 'Mehmet Ozdemir',
    role: 'Founder & CEO',
    bio: 'With over 20 years in luxury maritime tourism, Mehmet founded Eva Yacht Charter with a vision to redefine Turkish Riviera experiences.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Aylin Demir',
    role: 'Fleet Director',
    bio: 'Aylin oversees our fleet of 150+ yachts, ensuring each vessel meets our rigorous quality and safety standards.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Kemal Yilmaz',
    role: 'Head of Operations',
    bio: 'A licensed captain himself, Kemal manages our crew training programs and charter logistics across all destinations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Elena Rossi',
    role: 'Guest Experience Manager',
    bio: 'Elena ensures every guest receives a personalized, five-star experience from the moment of inquiry to disembarkation.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
]

const certifications = [
  { name: 'IYBA Certified', desc: 'International Yacht Brokers Association' },
  { name: 'MYBA Member', desc: 'Mediterranean Yacht Brokers Association' },
  { name: 'ISO 9001:2015', desc: 'Quality Management System' },
  { name: 'Turkish Maritime', desc: 'Ministry of Transport Licensed' },
  { name: 'Allianz Insured', desc: 'Full fleet insurance coverage' },
  { name: 'ECSA Member', desc: 'European Community Shipowners' },
]

const timeline = [
  { year: '2011', event: 'Founded in Bodrum', desc: 'Eva Yacht Charter launched with a fleet of 5 gulets' },
  { year: '2014', event: 'Fleet Expansion', desc: 'Grew to 50+ yachts including motor yachts and catamarans' },
  { year: '2017', event: 'Marmaris Hub', desc: 'Opened second operational hub in Marmaris Marina' },
  { year: '2019', event: 'Digital Transformation', desc: 'Launched online booking platform and mobile app' },
  { year: '2022', event: 'Mega Yacht Division', desc: 'Added luxury mega yachts to the fleet' },
  { year: '2025', event: '150+ Fleet', desc: 'Reached 150+ vessels and 12,000+ satisfied guests' },
]

export default function AboutPage() {
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
            <Link href="/destinations" className="text-gray-600 hover:text-gray-800 transition">Destinations</Link>
            <Link href="/about" className="text-gray-800 font-semibold">About</Link>
            <Link href="/dashboard" className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full text-gray-800 text-sm font-semibold transition">Dashboard</Link>
          </nav>
        </div>
      </header>

      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559599238-308793637427?w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-gray-600">Since 2011</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              About <span className="gold-text">Eva Yacht Charter</span>
            </h1>
            <p className="text-gray-600 max-w-2xl text-sm md:text-base">
              Turkey's premier luxury yacht charter company, delivering unforgettable maritime experiences
              across the stunning Turkish Riviera for over 15 years.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 -mt-8 relative z-20 mb-16">
            {stats.map(stat => (
              <div key={stat.label} className="glass rounded-2xl p-4 text-center hover:border-teal-500/30 transition">
                <stat.icon className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                <p className="text-2xl font-bold gold-text">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="glass rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-teal-600/20 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-teal-500" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To provide exceptional yacht charter experiences that exceed expectations at every turn.
                We believe luxury should be accessible, personalized, and unforgettable. Every voyage with
                Eva Yacht Charter is crafted with meticulous attention to detail, from the selection of our
                vessels to the training of our crews.
              </p>
            </div>
            <div className="glass rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl bg-teal-600/20 flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-teal-500" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To become the most trusted and beloved yacht charter brand in the Mediterranean. We envision
                a future where every guest who sails with us becomes part of our family, returning season after
                season to discover new destinations and create cherished memories on the crystal waters of Turkey.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Why Choose <span className="gold-text">Eva Yacht</span></h2>
            <p className="text-gray-600 text-center text-sm mb-10 max-w-lg mx-auto">
              We go above and beyond to ensure your charter experience is nothing short of perfect
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Safety First',
                  desc: 'All yachts undergo rigorous safety inspections. Licensed captains and insured vessels give you peace of mind.',
                  features: ['Fully insured fleet', 'Licensed crew', 'Safety equipment', '24/7 monitoring']
                },
                {
                  icon: Star,
                  title: 'Premium Quality',
                  desc: 'We hand-select every yacht in our fleet, ensuring it meets the highest standards of luxury and maintenance.',
                  features: ['Hand-picked yachts', 'Regular maintenance', 'Quality inspections', 'Premium amenities']
                },
                {
                  icon: Heart,
                  title: 'Personalized Service',
                  desc: 'From route planning to onboard cuisine, every aspect of your charter is tailored to your preferences.',
                  features: ['Custom itineraries', 'Dietary accommodations', 'Special celebrations', 'Concierge service']
                },
              ].map(item => (
                <div key={item.title} className="glass rounded-3xl p-6 hover:border-teal-500/30 transition">
                  <div className="w-12 h-12 rounded-xl bg-teal-600/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Our <span className="gold-text">Journey</span></h2>
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-teal-50 hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <div key={item.year} className={`flex flex-col md:flex-row items-center gap-4 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`glass rounded-2xl p-5 inline-block ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <p className="text-sm text-teal-500 font-bold mb-1">{item.year}</p>
                        <h3 className="font-bold mb-1">{item.event}</h3>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-teal-600 border-4 border-[#0c1222] relative z-10 flex-shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">Our <span className="gold-text">Team</span></h2>
            <p className="text-gray-600 text-center text-sm mb-10 max-w-lg mx-auto">
              Meet the passionate people behind Eva Yacht Charter
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map(member => (
                <div key={member.name} className="glass rounded-3xl overflow-hidden hover:border-teal-500/30 transition group">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-teal-500 mb-2">{member.role}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-2">
              Certifications & <span className="gold-text">Memberships</span>
            </h2>
            <p className="text-gray-600 text-center text-sm mb-10 max-w-lg mx-auto">
              We maintain the highest industry standards and certifications
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map(cert => (
                <div key={cert.name} className="glass rounded-2xl p-5 text-center hover:border-teal-500/30 transition">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600/30 to-yellow-500/30 flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-gray-600">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-3xl p-8 md:p-12 text-center mb-16 bg-gradient-to-r from-teal-600/10 to-purple-600/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Voyage?</h2>
            <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              Let our charter experts help you plan the perfect Mediterranean escape.
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/yachts"
                className="bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2"
              >
                <Ship className="w-4 h-4" /> Browse Our Fleet
              </Link>
              <Link
                href="/#contact"
                className="glass px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Contact Us
              </Link>
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
