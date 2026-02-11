/**
 * 404ASTERISKS — Password / Holding Page
 *
 * HOW TO SWAP THE LOGO IMAGE PATH
 * --------------------------------
 * Edit components/BackgroundLogo.tsx and set LOGO_SRC to your asset path
 * (e.g. "/redasterisk.png"). Put the file in /public/.
 *
 * WHERE TO WIRE THE SMS PROVIDER LATER
 * -----------------------------------
 * In components/SmsSignup.tsx, replace the console.log in handleSubmit
 * with a fetch to your API (e.g. POST /api/sms-signup). In that route,
 * integrate Twilio, Postscript, Attentive, etc.: validate, store phone,
 * and trigger opt-in. Keep payload shape { phone: string } (10-digit US or E.164).
 */

import TopBar from '@/components/TopBar'
import Hero from '@/components/Hero'
import ShippingUpdates from '@/components/ShippingUpdates'
import SmsSignup from '@/components/SmsSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen min-h-dvh flex-col w-full min-w-0 overflow-x-hidden">
      <TopBar />
      <Hero />
      <ShippingUpdates />
      <SmsSignup />
      <Footer />
    </main>
  )
}
