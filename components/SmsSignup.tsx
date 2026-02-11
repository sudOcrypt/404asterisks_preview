'use client'

import { useState, FormEvent } from 'react'

/**
 * WHERE TO WIRE THE SMS PROVIDER LATER
 * -------------------------------------
 * 1. Replace handleSubmit's console.log with a call to your API route (e.g. POST /api/sms-signup).
 * 2. In that route, integrate your SMS provider (Twilio, Postscript, Attentive, etc.): validate, store phone, and trigger opt-in flow.
 * 3. Keep the same payload shape: { phone: string } with E.164 or 10-digit US. Add consent timestamp if required.
 */

function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, '')
  return digits.slice(-10)
}

function formatPhone(value: string): string {
  const d = normalizePhone(value)
  if (d.length <= 3) return d.replace(/(\d{0,3})/, '($1')
  if (d.length <= 6) return d.replace(/(\d{3})(\d{0,3})/, '($1) $2')
  return d.replace(/(\d{3})(\d{3})(\d{0,4})/, '($1) $2-$3')
}

function isValidUSPhone(phone: string): boolean {
  return /^\d{10}$/.test(normalizePhone(phone))
}

export default function SmsSignup() {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value
    setPhone(formatPhone(raw))
    setError(null)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    if (!isValidUSPhone(phone)) {
      setError('Enter a valid 10-digit US number.')
      return
    }
    const normalized = normalizePhone(phone)
    console.log('SMS signup:', { phone: normalized })
    setSubmitted(true)
    setPhone('')
  }

  if (submitted) {
    return (
      <section className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-md rounded-lg border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <p className="font-condensed text-lg font-semibold text-white">
            You’re on the list.
          </p>
          <p className="mt-1 text-sm text-white/70">
            We’ll text you early access + your code.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative z-10 px-4 pb-16 sm:px-6 sm:pb-20 safe-area-inset" aria-labelledby="signup-heading">
      <div className="mx-auto max-w-md">
        <h2
          id="signup-heading"
          className="font-condensed text-xl font-bold uppercase tracking-tight text-white text-center sm:text-2xl"
        >
          Early Access + 10% Off
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-5 rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
        >
          <label htmlFor="phone" className="sr-only">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="(555) 000-0000"
            value={phone}
            onChange={handleChange}
            className="w-full rounded border border-white/20 bg-black/60 px-4 py-3.5 text-white placeholder:text-white/40 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
            aria-invalid={!!error}
            aria-describedby={error ? 'phone-error' : undefined}
          />
          {error && (
            <p id="phone-error" className="mt-2 text-xs text-brand-red" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded bg-white py-3.5 min-h-[48px] font-condensed text-sm font-bold uppercase tracking-wider text-black transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black touch-manipulation"
          >
            Text Me Early Access
          </button>
          <p className="mt-4 text-[11px] leading-relaxed text-white/60">
            By subscribing, you agree to receive recurring automated marketing texts. Msg & data rates may apply. Reply{' '}
            <strong>STOP</strong> to cancel, <strong>HELP</strong> for help.{' '}
            <a href="https://terms.pscr.pt/legal/shop/quv55n-1x/terms_of_service" target="_blank" rel="noopener noreferrer" className="underline underline-offset-1 hover:text-white/80">Terms</a>
            {' · '}
            <a href="https://terms.pscr.pt/legal/shop/quv55n-1x/privacy_policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-1 hover:text-white/80">Privacy</a>
          </p>
        </form>
      </div>
    </section>
  )
}
