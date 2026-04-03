'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Search, Heart, Calendar, User } from 'lucide-react'

const tabs = [
  { icon: Home, label: 'Home', href: '/dashboard' },
  { icon: Search, label: 'Search', href: '/yachts' },
  { icon: Heart, label: 'Favorites', href: '/dashboard?tab=favorites' },
  { icon: Calendar, label: 'Bookings', href: '/dashboard?tab=bookings' },
  { icon: User, label: 'Profile', href: '/dashboard?tab=profile' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden">
      <div className="glass safe-bottom border-t border-white/10">
        <div className="flex items-center justify-around py-1.5">
          {tabs.map(tab => {
            const isActive =
              tab.href === '/dashboard'
                ? pathname === '/dashboard'
                : tab.href === '/yachts'
                ? pathname === '/yachts'
                : false

            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all ${
                  isActive
                    ? 'text-blue-400'
                    : 'text-gray-500 active:text-gray-300'
                }`}
              >
                <div className={`relative ${isActive ? 'scale-110' : ''} transition-transform`}>
                  <tab.icon className="w-5 h-5" />
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                  )}
                </div>
                <span className="text-[10px] font-medium">{tab.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
