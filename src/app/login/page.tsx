'use client'

import { useState } from 'react'
import { Anchor, Phone, ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [loading, setLoading] = useState(false)

  const handleSendOtp = async () => {
    if (!phone || phone.length < 10) return alert('Please enter a valid phone number')
    setLoading(true)
    // TODO: Supabase phone auth
    // const { error } = await supabase.auth.signInWithOtp({ phone: `+90${phone}` })
    setTimeout(() => { setStep('otp'); setLoading(false) }, 1000)
  }

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 6) return alert('Please enter the 6-digit code')
    setLoading(true)
    // TODO: Supabase verify OTP
    // const { error } = await supabase.auth.verifyOtp({ phone: `+90${phone}`, token: otp, type: 'sms' })
    setTimeout(() => { setLoading(false); window.location.href = '/dashboard' }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0c1222] flex items-center justify-center px-4 safe-top safe-bottom">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Anchor className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold gold-text">Eva Yacht</span>
          </div>
          <h1 className="text-xl font-bold mb-1">Welcome Back</h1>
          <p className="text-sm text-gray-400">Sign in with your phone number</p>
        </div>

        <div className="glass rounded-2xl p-6">
          {step === 'phone' ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Phone Number</label>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-3">
                  <span className="text-sm text-gray-400">+90</span>
                  <input
                    type="tel"
                    placeholder="5XX XXX XX XX"
                    value={phone}
                    onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="bg-transparent text-sm w-full outline-none text-white"
                  />
                  <Phone className="w-4 h-4 text-gray-500" />
                </div>
              </div>
              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ArrowRight className="w-4 h-4" /> Send Code</>}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">Verification Code</label>
                <p className="text-xs text-gray-500 mb-2">Sent to +90 {phone}</p>
                <input
                  type="text"
                  placeholder="000000"
                  maxLength={6}
                  value={otp}
                  onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-2xl tracking-[0.5em] font-mono outline-none focus:border-blue-500 transition"
                />
              </div>
              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify & Sign In'}
              </button>
              <button onClick={() => setStep('phone')} className="w-full text-xs text-gray-500 hover:text-gray-300 transition">
                Change phone number
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Don't have an account? <Link href="/register" className="text-blue-400 hover:text-blue-300">Create Account</Link>
        </p>
        <p className="text-center mt-3">
          <Link href="/" className="text-xs text-gray-600 hover:text-gray-400">Back to Home</Link>
        </p>
      </div>
    </div>
  )
}
