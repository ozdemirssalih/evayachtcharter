'use client'

import Link from 'next/link'
import { FileText, ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const sections = [
  {
    id: 'agreement',
    title: '1. Agreement Overview',
    content: `These Terms and Conditions ("Agreement") govern the use of Eva Yacht Charter's services, including website access, yacht charter bookings, and related services. By accessing our website or booking a charter, you ("Client") agree to be bound by these terms in their entirety.

Eva Yacht Charter ("Company") operates as a licensed yacht charter brokerage registered in Bodrum, Mugla, Turkey. The Company acts as an intermediary between the Client and the yacht owner/operator.

This Agreement shall be governed by and construed in accordance with the laws of the Republic of Turkey. Any disputes arising from this Agreement shall be subject to the exclusive jurisdiction of the courts of Bodrum, Mugla.`,
  },
  {
    id: 'booking',
    title: '2. Booking & Reservation',
    content: `A charter booking is confirmed upon receipt of the signed Charter Agreement and the required deposit payment. The standard deposit is 50% of the total charter fee, due at the time of booking. The remaining balance is due 30 days prior to the charter commencement date.

For bookings made within 30 days of the charter date, full payment is required at the time of booking. All prices are quoted in Euros unless otherwise specified. The Company reserves the right to adjust prices due to currency fluctuations or unforeseen circumstances.

The Client must provide accurate personal information for all guests at the time of booking, including full names, passport numbers, and any special requirements. Failure to provide accurate information may result in booking complications.`,
  },
  {
    id: 'cancellation',
    title: '3. Cancellation & Refund Policy',
    content: `Cancellations must be submitted in writing via email to info@evayachtcharter.com. The following cancellation schedule applies:

- More than 60 days before departure: Full refund minus 10% administrative fee
- 30-60 days before departure: 50% refund of the total charter fee
- Less than 30 days before departure: No refund

If the Company cancels the charter due to yacht unavailability, mechanical failure, or force majeure events, the Client will receive a full refund or the option to reschedule. The Company is not liable for any consequential damages, travel expenses, or additional costs incurred by the Client.

We strongly recommend that all Clients purchase comprehensive travel insurance to protect against unforeseen cancellations, medical emergencies, and trip interruptions.`,
  },
  {
    id: 'responsibilities',
    title: '4. Client Responsibilities',
    content: `The Client agrees to treat the yacht and all equipment with reasonable care. Any damage caused by the Client or their guests beyond normal wear and tear will be charged to the Client. A security deposit may be required and held during the charter period.

The Client must comply with all instructions from the Captain regarding safety, navigation, and vessel operation. The Captain has absolute authority over all matters relating to the safety of the yacht and its passengers.

The following activities are prohibited on board: illegal drug use, reckless behavior, exceeding the maximum passenger capacity, operating the yacht without the Captain's permission, and any activity that may endanger the safety of passengers or the vessel.

The Client is responsible for obtaining appropriate travel documents, visas, and permits for all destinations included in the itinerary. The Company can provide guidance but is not responsible for ensuring compliance.`,
  },
  {
    id: 'apa',
    title: '5. Advance Provisioning Allowance (APA)',
    content: `An Advance Provisioning Allowance (APA) of 20-35% of the charter fee is collected prior to boarding. The APA covers operating expenses including fuel, food and beverages, port fees, marina charges, and other incidental costs.

The Captain will maintain a detailed accounting of all APA expenditures. At the end of the charter, the Client will receive a full accounting, and any unused APA funds will be promptly refunded. If expenses exceed the APA, the Client is responsible for the additional amount.

Special requests such as premium wines, specific food items, or additional excursions may be arranged through the APA at the Client's expense.`,
  },
  {
    id: 'liability',
    title: '6. Limitation of Liability',
    content: `The Company acts as a broker and is not the owner or operator of the yachts. While the Company exercises due diligence in selecting vessels and crews, the Company's liability is limited to the commission received on the charter.

The Company is not liable for personal injury, death, property damage, or any other loss arising from the charter unless caused by the Company's gross negligence or willful misconduct. The yacht owner's insurance provides primary coverage for incidents during the charter.

The Company is not responsible for weather conditions, mechanical breakdowns, or other events beyond its control that may affect the charter itinerary. In such cases, the Captain may modify the route in the interest of safety.

The total aggregate liability of the Company under any circumstances shall not exceed the total charter fee paid by the Client.`,
  },
  {
    id: 'itinerary',
    title: '7. Itinerary & Route Changes',
    content: `While the Company and Captain will make every effort to follow the agreed itinerary, routes may be modified due to weather conditions, sea state, port availability, or safety concerns. The Captain has final authority over all routing decisions.

Custom itinerary requests should be communicated at least 7 days before the charter commencement. Last-minute changes may not be possible due to provisioning and port reservation requirements.

Visits to foreign ports (e.g., Greek islands) may require additional documentation and fees, which are the Client's responsibility. The Company will advise on requirements for international itineraries.`,
  },
  {
    id: 'privacy',
    title: '8. Data Protection',
    content: `The Company collects and processes personal data in accordance with applicable data protection laws and our Privacy Policy. By booking a charter, the Client consents to the collection and processing of personal data necessary for the provision of services.

For full details on how we handle personal data, please refer to our Privacy Policy page.`,
  },
  {
    id: 'amendments',
    title: '9. Amendments',
    content: `The Company reserves the right to amend these Terms and Conditions at any time. Updated terms will be posted on our website with the effective date. Clients are encouraged to review the terms periodically.

Changes to these terms will not affect bookings already confirmed under the previous version of the terms. Any material changes will be communicated to active booking holders via email.

Last updated: April 2026`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0c1222]">
      <Navbar />

      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-[#0c1222]" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-gray-300">Legal</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Terms & <span className="gold-text">Conditions</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Last updated: April 2026
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-16">
          {/* Quick Nav */}
          <div className="glass rounded-2xl p-5 mb-8">
            <h3 className="text-sm font-bold mb-3 text-gray-400 uppercase tracking-wider">Contents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition py-1"
                >
                  <ChevronRight className="w-3 h-3" />
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map(s => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-xl font-bold mb-4 text-white">{s.title}</h2>
                <div className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                  {s.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact for questions */}
          <div className="glass rounded-2xl p-6 mt-12 text-center">
            <p className="text-sm text-gray-400 mb-3">
              Have questions about our terms? Contact our legal team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl text-sm font-semibold transition"
            >
              Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
