'use client'

import Link from 'next/link'
import { Lock, ChevronRight, Eye, Database, Shield, Cookie, Globe, Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    icon: Eye,
    content: `Eva Yacht Charter ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website, mobile application, and charter services.

This policy applies to all visitors, users, and customers of evayachtcharter.com and our related services. By using our services, you consent to the data practices described in this policy.

We comply with the Turkish Personal Data Protection Law (KVKK) No. 6698, the EU General Data Protection Regulation (GDPR) where applicable, and other relevant data protection legislation.`,
  },
  {
    id: 'collection',
    title: '2. Information We Collect',
    icon: Database,
    content: `We collect the following categories of personal data:

Identity Data: Full name, date of birth, nationality, passport/ID numbers for all charter guests.

Contact Data: Email address, phone number, postal address.

Booking Data: Charter dates, yacht preferences, destination choices, special requests, dietary requirements.

Financial Data: Payment card details (processed securely through our PCI-compliant payment provider), billing address, transaction history.

Technical Data: IP address, browser type, device information, operating system, app usage data, cookies, and similar tracking technologies.

Communication Data: Records of correspondence with our team, feedback, reviews, and survey responses.

Location Data: General location data when using our mobile application (only with your explicit consent).

We do not collect special category data (e.g., health information) unless voluntarily provided for specific charter accommodations.`,
  },
  {
    id: 'usage',
    title: '3. How We Use Your Data',
    icon: Shield,
    content: `We use your personal data for the following purposes:

Service Delivery: To process and manage your yacht charter bookings, provide customer support, and communicate booking details.

Account Management: To create and manage your account, authenticate your identity, and maintain your booking history and preferences.

Communication: To send booking confirmations, pre-charter information, on-trip updates, and post-charter surveys. To respond to your inquiries and requests.

Marketing (with consent): To send promotional offers, newsletters, new yacht arrivals, and seasonal deals. You can opt out at any time.

Service Improvement: To analyze usage patterns, improve our website and app, develop new features, and enhance the overall customer experience.

Legal Compliance: To comply with legal obligations, resolve disputes, and enforce our agreements.

Safety & Security: To protect our services against fraud, unauthorized access, and other security threats.`,
  },
  {
    id: 'sharing',
    title: '4. Data Sharing',
    icon: Globe,
    content: `We may share your personal data with the following parties:

Yacht Owners & Crews: Essential booking and guest information is shared with the yacht owner/operator and crew to facilitate your charter experience.

Payment Processors: Financial data is shared with our secure payment processing partners to complete transactions.

Service Providers: We work with trusted third-party providers for email communications, analytics, cloud hosting, and customer support tools. All providers are bound by data processing agreements.

Legal Authorities: We may disclose data when required by law, court order, or to protect our legal rights.

We never sell your personal data to third parties. We never share your data for third-party marketing without your explicit consent.`,
  },
  {
    id: 'cookies',
    title: '5. Cookies & Tracking',
    icon: Cookie,
    content: `Our website uses cookies and similar technologies to enhance your browsing experience:

Essential Cookies: Required for the website to function properly (e.g., session management, security).

Analytics Cookies: Help us understand how visitors interact with our website using tools like Google Analytics. Data is anonymized.

Preference Cookies: Remember your settings and preferences (e.g., language, currency).

Marketing Cookies: Used to deliver relevant advertisements and track campaign effectiveness. These are only set with your consent.

You can manage cookie preferences through your browser settings or our cookie consent banner. Disabling certain cookies may affect website functionality.`,
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    icon: Database,
    content: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:

- Booking data: 7 years from the charter date (for legal and accounting purposes)
- Account data: Until you delete your account or request data erasure
- Marketing data: Until you withdraw consent
- Technical/analytics data: 26 months
- Communication records: 3 years from last interaction

After the retention period, data is securely deleted or anonymized.`,
  },
  {
    id: 'rights',
    title: '7. Your Rights',
    icon: Shield,
    content: `Under applicable data protection laws, you have the following rights:

Right of Access: Request a copy of the personal data we hold about you.

Right to Rectification: Request correction of inaccurate or incomplete data.

Right to Erasure: Request deletion of your personal data (subject to legal retention requirements).

Right to Restrict Processing: Request limitation of how we process your data.

Right to Data Portability: Receive your data in a structured, commonly used format.

Right to Object: Object to processing based on legitimate interests or for direct marketing.

Right to Withdraw Consent: Where processing is based on consent, you may withdraw it at any time.

To exercise any of these rights, please contact us at privacy@evayachtcharter.com. We will respond within 30 days.`,
  },
  {
    id: 'security',
    title: '8. Data Security',
    icon: Lock,
    content: `We implement appropriate technical and organizational measures to protect your personal data:

- SSL/TLS encryption for all data in transit
- AES-256 encryption for sensitive data at rest
- Regular security audits and penetration testing
- Access controls and role-based permissions
- Secure, SOC 2 compliant cloud infrastructure
- Employee data protection training

While we strive to protect your data, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to promptly addressing any breach in accordance with applicable laws.`,
  },
  {
    id: 'changes',
    title: '9. Changes to This Policy',
    icon: Eye,
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. Material changes will be communicated via email or website notification.

We encourage you to review this policy periodically. The "last updated" date at the top indicates when the most recent changes were made.

Last updated: April 2026`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0c1222]">
      <Navbar />

      <div className="pt-16">
        {/* Hero */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-[#0c1222]" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
              <Lock className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-gray-300">Legal</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Privacy <span className="gold-text">Policy</span>
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
                  <s.icon className="w-3 h-3" />
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map(s => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{s.title}</h2>
                </div>
                <div className="text-sm text-gray-400 leading-relaxed whitespace-pre-line ml-13">
                  {s.content}
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="glass rounded-2xl p-6 mt-12 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold mb-1">Data Protection Officer</h3>
              <p className="text-sm text-gray-400">
                For privacy-related inquiries, contact us at{' '}
                <a href="mailto:privacy@evayachtcharter.com" className="text-blue-400 hover:text-blue-300">
                  privacy@evayachtcharter.com
                </a>
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
