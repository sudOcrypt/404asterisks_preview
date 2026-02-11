import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import BackgroundLogo from '@/components/BackgroundLogo'

const condensed = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-condensed',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '404ASTERISKS — Next Drop Loading',
  description: 'Early access + 10% off. Streetwear. Next drop loading.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${condensed.variable} ${sans.variable}`}>
      <body className="min-h-screen min-h-dvh flex flex-col bg-black">
        <BackgroundLogo />
        <div className="relative z-10 flex min-h-screen min-h-dvh flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
