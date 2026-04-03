'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Anchor, ChevronDown, HelpCircle, Ship, CreditCard, Calendar,
  Shield, MapPin, Users, Utensils, Phone, Mail, MessageCircle
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface FAQItem {
  question: string
  answer: string
  icon: typeof Ship
}

const faqCategories: { title: string; icon: typeof Ship; items: FAQItem[] }[] = [
  {
    title: 'Booking & Reservations',
    icon: Calendar,
    items: [
      {
        question: 'How do I book a yacht charter?',
        answer: 'You can book directly through our website by selecting your preferred yacht, dates, and destination. Alternatively, contact our charter specialists via phone or email for a personalized booking experience. A 50% deposit is required to confirm your reservation, with the balance due 30 days before departure.',
        icon: Ship,
      },
      {
        question: 'What is the cancellation policy?',
        answer: 'Cancellations made 60+ days before departure receive a full refund minus a 10% admin fee. Cancellations 30-60 days before departure receive a 50% refund. Within 30 days of departure, the charter fee is non-refundable. We strongly recommend purchasing travel insurance to protect your investment.',
        icon: Calendar,
      },
      {
        question: 'How far in advance should I book?',
        answer: 'For peak season (June-September), we recommend booking 3-6 months in advance to ensure the best selection. Shoulder season (April-May, October) bookings can be made 1-3 months ahead. Last-minute availability may be possible but with limited yacht options.',
        icon: Calendar,
      },
      {
        question: 'Can I modify my booking after confirmation?',
        answer: 'Yes, modifications are possible subject to availability. Date changes requested more than 30 days before departure incur no additional fees. Changes to yacht type or destination may result in price adjustments. Please contact our team as soon as possible to discuss any changes.',
        icon: Calendar,
      },
    ],
  },
  {
    title: 'Payment & Pricing',
    icon: CreditCard,
    items: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept Visa, Mastercard, American Express, PayPal, and bank wire transfers. For charters over $10,000, we can arrange installment plans. All payments are processed through our secure, PCI-compliant payment system.',
        icon: CreditCard,
      },
      {
        question: 'What is included in the charter price?',
        answer: 'The base charter fee includes the yacht, professional crew, insurance, standard equipment, bed linens, and towels. Not typically included are fuel, provisioning (food and beverages), port fees, and optional extras like water toys or diving equipment. We provide a detailed breakdown with every quote.',
        icon: CreditCard,
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No hidden fees. We believe in transparent pricing. The APA (Advance Provisioning Allowance) of 20-35% covers running expenses such as fuel, food, beverages, port fees, and tips. Any unused APA is refunded after the charter. Prices on our website are net charter fees.',
        icon: CreditCard,
      },
    ],
  },
  {
    title: 'On Board Experience',
    icon: Ship,
    items: [
      {
        question: 'What types of yachts are available?',
        answer: 'Our fleet includes Motor Yachts (fast and luxurious), Traditional Gulets (authentic Turkish sailing experience), Sailing Yachts (for wind enthusiasts), Mega Yachts (ultimate luxury), and Catamarans (stable and spacious). Each category offers various sizes from 14m to 42m, accommodating 4-16 guests.',
        icon: Ship,
      },
      {
        question: 'Can I customize the menu on board?',
        answer: 'Absolutely! Our onboard chefs prepare personalized menus based on your preferences. Whether you require vegetarian, vegan, halal, kosher, or allergy-friendly options, we accommodate all dietary needs. Share your preferences before boarding and enjoy gourmet meals throughout your voyage.',
        icon: Utensils,
      },
      {
        question: 'What water toys and activities are available?',
        answer: 'Depending on your yacht, activities may include jet skis, paddleboards, kayaks, snorkeling gear, water skiing, wakeboarding, fishing equipment, and inflatable water toys. Premium yachts may also offer diving equipment, SeaBobs, and flyboards. Specific availability is listed on each yacht page.',
        icon: Ship,
      },
      {
        question: 'Is the crew included?',
        answer: 'Yes, all our charter yachts come with a professional crew including a licensed captain and at least one deckhand/steward(ess). Larger yachts also include a dedicated chef. Crew members are trained in safety, hospitality, and local navigation. Tipping is customary at 10-15% of the charter fee.',
        icon: Users,
      },
    ],
  },
  {
    title: 'Safety & Insurance',
    icon: Shield,
    items: [
      {
        question: 'Are the yachts insured?',
        answer: 'All yachts in our fleet carry comprehensive insurance covering third-party liability, hull damage, and passenger personal accident. We partner with leading maritime insurance providers to ensure maximum protection. Guests are advised to carry personal travel insurance for additional coverage.',
        icon: Shield,
      },
      {
        question: 'What safety equipment is on board?',
        answer: 'Every yacht is equipped with life jackets for all guests, life rafts, fire extinguishers, first aid kits, EPIRB (Emergency Position Indicating Radio Beacon), VHF radio, GPS navigation, radar, and AIS. All safety equipment is inspected and certified annually.',
        icon: Shield,
      },
      {
        question: 'What happens in case of bad weather?',
        answer: 'Our experienced captains monitor weather conditions continuously. If conditions become unfavorable, the captain may suggest route modifications or seek shelter in protected bays. In extreme cases, departure may be postponed. Guest safety always takes top priority.',
        icon: Shield,
      },
    ],
  },
  {
    title: 'Destinations & Itineraries',
    icon: MapPin,
    items: [
      {
        question: 'Can I customize my itinerary?',
        answer: 'Yes! While we suggest popular routes, every itinerary is fully customizable. Work with your captain and our planning team to create your ideal route. Want to extend time at a particular bay or visit a specific restaurant? Just let us know and we will make it happen.',
        icon: MapPin,
      },
      {
        question: 'What are the best destinations for first-timers?',
        answer: 'For first-time charterers, we recommend Gocek (calm waters, beautiful islands), Fethiye (diverse attractions, Twelve Islands cruise), or Bodrum (vibrant culture, stunning bays). Each offers a perfect introduction to the Turkish Riviera with a mix of natural beauty, culture, and dining.',
        icon: MapPin,
      },
      {
        question: 'Do I need a passport for island hopping?',
        answer: 'A valid passport is required for all guests. If your route includes Greek islands (available from Bodrum and Marmaris), additional entry procedures apply. Our team handles all port documentation and customs formalities. We will advise on specific requirements based on your chosen itinerary.',
        icon: MapPin,
      },
    ],
  },
]

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="glass rounded-xl overflow-hidden transition-all hover:border-teal-500/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 text-left transition"
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-teal-600/30' : 'bg-gray-50'}`}>
          <item.icon className={`w-5 h-5 transition-colors ${isOpen ? 'text-teal-500' : 'text-gray-600'}`} />
        </div>
        <span className={`flex-1 font-semibold text-sm transition-colors ${isOpen ? 'text-gray-800' : 'text-gray-600'}`}>
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-teal-500' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pl-19">
          <p className="text-sm text-gray-600 leading-relaxed ml-14">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].title)

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-transparent to-white" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-teal-500" />
              <span className="text-xs text-gray-600">Help Center</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Frequently Asked <span className="gold-text">Questions</span>
            </h1>
            <p className="text-gray-600 text-sm max-w-lg">
              Everything you need to know about chartering a luxury yacht with Eva Yacht Charter
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 pb-16">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide -mt-4">
            {faqCategories.map(cat => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                  activeCategory === cat.title
                    ? 'bg-teal-600 text-white'
                    : 'glass text-gray-600 hover:text-gray-800 hover:bg-teal-50'
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.title}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          {faqCategories
            .filter(cat => cat.title === activeCategory)
            .map(cat => (
              <div key={cat.title} className="space-y-3">
                {cat.items.map((item, idx) => {
                  const key = `${cat.title}-${idx}`
                  return (
                    <AccordionItem
                      key={key}
                      item={item}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  )
                })}
              </div>
            ))}

          {/* Still Have Questions */}
          <div className="glass rounded-3xl p-8 md:p-10 text-center mt-12 bg-gradient-to-r from-teal-600/10 to-purple-600/10">
            <HelpCircle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Our charter specialists are ready to help you with any questions about your upcoming voyage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Contact Us
              </Link>
              <a
                href="tel:+905321234567"
                className="glass px-6 py-3 rounded-xl font-semibold text-sm hover:bg-teal-50 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
