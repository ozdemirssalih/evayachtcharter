'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor, Home, Search, Heart, User, Calendar, ChevronRight,
  Camera, Mail, Phone, MapPin, Globe, Bell, BellOff, Shield,
  Lock, LogOut, Moon, Sun, CreditCard, Languages, ChevronDown,
  Check, Star, Ship, Award, Pencil, Save, X, Eye, EyeOff,
  Smartphone, MessageSquare, Volume2, VolumeX, Download
} from 'lucide-react'

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<'profile' | 'preferences' | 'notifications' | 'security'>('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Captain',
    email: 'captain@evayacht.com',
    phone: '+90 532 XXX XX XX',
    location: 'Istanbul, Turkey',
    language: 'English',
    currency: 'EUR',
    bio: 'Passionate sailor and luxury yacht enthusiast. Love exploring the Turkish coastline.',
  })
  const [editProfile, setEditProfile] = useState({ ...profile })
  const [notifications, setNotifications] = useState({
    bookingUpdates: true,
    promotions: true,
    priceAlerts: true,
    newsletter: false,
    sms: true,
    pushNotifications: true,
  })
  const [preferences, setPreferences] = useState({
    yachtType: 'All',
    destination: 'All',
    budgetMin: 1000,
    budgetMax: 10000,
    guestCount: 6,
  })

  const handleSaveProfile = () => {
    setProfile({ ...editProfile })
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditProfile({ ...profile })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-white pb-20 safe-top">
      {/* Top Bar */}
      <div className="glass px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-800 transition">
            <ChevronRight className="w-5 h-5 rotate-180" />
          </Link>
          <h1 className="font-bold text-lg">Profile</h1>
        </div>
        {activeSection === 'profile' && (
          <button
            onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
            className="flex items-center gap-1 text-teal-500 text-sm"
          >
            {isEditing ? <><Save className="w-4 h-4" /> Save</> : <><Pencil className="w-4 h-4" /> Edit</>}
          </button>
        )}
      </div>

      {/* Profile Header */}
      <div className="px-4 py-6">
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center text-3xl font-bold mx-auto">
              {profile.name.charAt(0)}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center border-2 border-[#0c1222]">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <h2 className="text-xl font-bold mt-3">{profile.name}</h2>
          <p className="text-sm text-gray-600">{profile.email}</p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="text-center">
              <p className="text-lg font-bold text-teal-500">6</p>
              <p className="text-[10px] text-gray-600">Trips</p>
            </div>
            <div className="w-px h-8 bg-teal-50" />
            <div className="text-center">
              <p className="text-lg font-bold text-red-400">5</p>
              <p className="text-[10px] text-gray-600">Saved</p>
            </div>
            <div className="w-px h-8 bg-teal-50" />
            <div className="text-center">
              <p className="text-lg font-bold text-yellow-400">1,200</p>
              <p className="text-[10px] text-gray-600">Points</p>
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
          {[
            { id: 'profile', label: 'Profile', icon: User },
            { id: 'preferences', label: 'Preferences', icon: Star },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'security', label: 'Security', icon: Shield },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => { setActiveSection(tab.id as typeof activeSection); setIsEditing(false) }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition ${
                activeSection === tab.id
                  ? 'bg-teal-600 text-gray-800'
                  : 'glass text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Personal Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Full Name</label>
                  {isEditing ? (
                    <div className="flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5">
                      <User className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <input
                        type="text"
                        value={editProfile.name}
                        onChange={e => setEditProfile(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-gray-800"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 py-1">
                      <User className="w-4 h-4 text-teal-500" />
                      <span className="text-sm">{profile.name}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Email</label>
                  {isEditing ? (
                    <div className="flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5">
                      <Mail className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <input
                        type="email"
                        value={editProfile.email}
                        onChange={e => setEditProfile(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-gray-800"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 py-1">
                      <Mail className="w-4 h-4 text-teal-500" />
                      <span className="text-sm">{profile.email}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Phone</label>
                  {isEditing ? (
                    <div className="flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5">
                      <Phone className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <input
                        type="tel"
                        value={editProfile.phone}
                        onChange={e => setEditProfile(prev => ({ ...prev, phone: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-gray-800"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 py-1">
                      <Phone className="w-4 h-4 text-teal-500" />
                      <span className="text-sm">{profile.phone}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Location</label>
                  {isEditing ? (
                    <div className="flex items-center gap-2 bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5">
                      <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <input
                        type="text"
                        value={editProfile.location}
                        onChange={e => setEditProfile(prev => ({ ...prev, location: e.target.value }))}
                        className="bg-transparent text-sm w-full outline-none text-gray-800"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 py-1">
                      <MapPin className="w-4 h-4 text-teal-500" />
                      <span className="text-sm">{profile.location}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={editProfile.bio}
                      onChange={e => setEditProfile(prev => ({ ...prev, bio: e.target.value }))}
                      rows={3}
                      className="w-full bg-gray-50 border border-teal-200 rounded-xl px-4 py-3 text-sm outline-none text-gray-800 focus:border-teal-500 transition resize-none"
                    />
                  ) : (
                    <p className="text-sm text-gray-600">{profile.bio}</p>
                  )}
                </div>
              </div>
              {isEditing && (
                <div className="flex gap-3 mt-4 pt-4 border-t border-teal-200">
                  <button
                    onClick={handleSaveProfile}
                    className="flex-1 bg-teal-600 hover:bg-teal-700 py-2.5 rounded-xl text-sm font-semibold transition flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" /> Save Changes
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="glass py-2.5 px-4 rounded-xl text-sm hover:bg-teal-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Regional Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Languages className="w-4 h-4 text-teal-500" />
                    <span className="text-sm">Language</span>
                  </div>
                  <select
                    value={profile.language}
                    onChange={e => setProfile(prev => ({ ...prev, language: e.target.value }))}
                    className="bg-transparent text-sm text-gray-600 outline-none cursor-pointer"
                  >
                    <option value="English" className="text-black">English</option>
                    <option value="Turkish" className="text-black">Turkish</option>
                  </select>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-teal-500" />
                    <span className="text-sm">Currency</span>
                  </div>
                  <select
                    value={profile.currency}
                    onChange={e => setProfile(prev => ({ ...prev, currency: e.target.value }))}
                    className="bg-transparent text-sm text-gray-600 outline-none cursor-pointer"
                  >
                    <option value="EUR" className="text-black">EUR</option>
                    <option value="USD" className="text-black">USD</option>
                    <option value="TRY" className="text-black">TRY</option>
                    <option value="GBP" className="text-black">GBP</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Loyalty */}
            <div className="glass rounded-2xl p-5 bg-gradient-to-r from-amber-600/10 to-yellow-500/10 border-amber-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-bold">Gold Member</h3>
                  <p className="text-xs text-gray-600">1,200 loyalty points</p>
                </div>
              </div>
              <div className="w-full bg-teal-50 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
              <p className="text-xs text-gray-600">800 more points to reach Platinum</p>
            </div>
          </div>
        )}

        {/* Preferences Section */}
        {activeSection === 'preferences' && (
          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Charter Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Preferred Yacht Type</label>
                  <div className="relative">
                    <select
                      value={preferences.yachtType}
                      onChange={e => setPreferences(prev => ({ ...prev, yachtType: e.target.value }))}
                      className="w-full bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5 text-sm outline-none text-gray-800 appearance-none cursor-pointer"
                    >
                      {['All', 'Motor Yacht', 'Gulet', 'Sailing Yacht', 'Mega Yacht', 'Catamaran'].map(t => (
                        <option key={t} value={t} className="text-black">{t}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Preferred Destination</label>
                  <div className="relative">
                    <select
                      value={preferences.destination}
                      onChange={e => setPreferences(prev => ({ ...prev, destination: e.target.value }))}
                      className="w-full bg-gray-50 border border-teal-200 rounded-xl px-3 py-2.5 text-sm outline-none text-gray-800 appearance-none cursor-pointer"
                    >
                      {['All', 'Bodrum', 'Fethiye', 'Gocek', 'Marmaris'].map(d => (
                        <option key={d} value={d} className="text-black">{d}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">
                    Budget Range: &euro;{preferences.budgetMin.toLocaleString()} - &euro;{preferences.budgetMax.toLocaleString()} / day
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={500}
                      max={15000}
                      step={500}
                      value={preferences.budgetMin}
                      onChange={e => setPreferences(prev => ({ ...prev, budgetMin: Math.min(Number(e.target.value), prev.budgetMax - 500) }))}
                      className="w-full accent-teal-500"
                    />
                    <input
                      type="range"
                      min={500}
                      max={15000}
                      step={500}
                      value={preferences.budgetMax}
                      onChange={e => setPreferences(prev => ({ ...prev, budgetMax: Math.max(Number(e.target.value), prev.budgetMin + 500) }))}
                      className="w-full accent-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-600 mb-1 block">Typical Group Size</label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, guestCount: Math.max(1, prev.guestCount - 1) }))}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-teal-50 transition"
                    >
                      -
                    </button>
                    <div className="text-center flex-1">
                      <span className="text-2xl font-bold">{preferences.guestCount}</span>
                      <span className="text-sm text-gray-600 ml-2">guests</span>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, guestCount: Math.min(20, prev.guestCount + 1) }))}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-teal-50 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Sailing', 'Diving', 'Fishing', 'Water Sports', 'Photography',
                  'Gastronomy', 'History', 'Nightlife', 'Nature', 'Family-Friendly',
                  'Romantic', 'Adventure'
                ].map(interest => (
                  <button
                    key={interest}
                    className="glass px-3 py-1.5 rounded-full text-xs hover:bg-teal-600/20 hover:text-teal-400 hover:border-teal-500/30 transition"
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Notifications Section */}
        {activeSection === 'notifications' && (
          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Email Notifications</h3>
              <div className="space-y-4">
                {[
                  { key: 'bookingUpdates', label: 'Booking Updates', desc: 'Confirmations, changes, and reminders', icon: Calendar },
                  { key: 'promotions', label: 'Promotions & Offers', desc: 'Special deals and seasonal discounts', icon: Star },
                  { key: 'priceAlerts', label: 'Price Alerts', desc: 'Price drops on saved yachts', icon: Bell },
                  { key: 'newsletter', label: 'Newsletter', desc: 'Monthly sailing tips and destination guides', icon: Mail },
                ].map(item => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-teal-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        notifications[item.key as keyof typeof notifications] ? 'bg-teal-600' : 'bg-teal-50'
                      }`}
                    >
                      <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                        notifications[item.key as keyof typeof notifications] ? 'left-5.5 translate-x-0' : 'left-0.5'
                      }`}
                      style={{
                        left: notifications[item.key as keyof typeof notifications] ? '22px' : '2px'
                      }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Other Channels</h3>
              <div className="space-y-4">
                {[
                  { key: 'sms', label: 'SMS Notifications', desc: 'Urgent booking alerts via text', icon: Smartphone },
                  { key: 'pushNotifications', label: 'Push Notifications', desc: 'Real-time alerts on your device', icon: Bell },
                ].map(item => (
                  <div key={item.key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-teal-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        notifications[item.key as keyof typeof notifications] ? 'bg-teal-600' : 'bg-teal-50'
                      }`}
                    >
                      <div className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform"
                        style={{
                          left: notifications[item.key as keyof typeof notifications] ? '22px' : '2px'
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Security Section */}
        {activeSection === 'security' && (
          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Account Security</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-teal-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold">Phone Number</p>
                      <p className="text-xs text-gray-600">{profile.phone}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-teal-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold">Two-Factor Authentication</p>
                      <p className="text-xs text-green-400">Enabled via SMS</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-teal-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold">Active Sessions</p>
                      <p className="text-xs text-gray-600">2 devices logged in</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Payment Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Visa **** 4242</p>
                      <p className="text-xs text-gray-600">Expires 12/28</p>
                    </div>
                  </div>
                  <span className="text-xs text-green-400">Default</span>
                </div>
                <button className="w-full glass py-3 rounded-xl text-sm text-teal-500 hover:bg-gray-50 transition flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" /> Add Payment Method
                </button>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="font-bold text-sm mb-4 text-gray-600 uppercase tracking-wider">Data & Privacy</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-teal-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold">Privacy Policy</p>
                      <p className="text-xs text-gray-600">View our data handling practices</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/20 flex items-center justify-center">
                      <Download className="w-5 h-5 text-teal-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold">Download My Data</p>
                      <p className="text-xs text-gray-600">Export your account data</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="glass rounded-2xl p-5 border-red-500/20">
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-red-500/10 transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center">
                    <LogOut className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-red-400">Sign Out</p>
                    <p className="text-xs text-gray-600">Sign out of your account</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full glass safe-bottom z-50">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: Home, label: 'Home', href: '/dashboard' },
            { icon: Search, label: 'Search', href: '/yachts' },
            { icon: Calendar, label: 'Bookings', href: '/dashboard/bookings' },
            { icon: Heart, label: 'Favorites', href: '/dashboard/favorites' },
            { icon: User, label: 'Profile', href: '/dashboard/profile', active: true },
          ].map(item => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 py-1 px-4 ${item.active ? 'text-teal-500' : 'text-gray-600'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px]">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
