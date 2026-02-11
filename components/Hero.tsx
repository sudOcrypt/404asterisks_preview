'use client'

export default function Hero() {
  return (
    <section className="relative z-10 px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-14 safe-area-inset">
      <h1 className="font-condensed text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl break-words">
        404ASTERISKS
      </h1>
      <p className="mt-4 font-condensed text-xl font-semibold tracking-tight text-white/95 sm:text-2xl md:text-3xl hero-loading">
        Next Drop Loading
        <span className="inline-block animate-pulse-dot" aria-hidden>.</span>
      </p>
      <p className="mx-auto mt-4 max-w-md text-sm text-white/80 sm:text-base">
        Get early access texts + 10% off your first drop. No spam.
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs text-white/60">
        For order updates, check Instagram story{' '}
        <a
          href="https://instagram.com/404asterisks"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-white/90 transition-colors"
        >
          @404asterisks
        </a>{' '}
        (updates every 3 days).
      </p>
    </section>
  )
}
