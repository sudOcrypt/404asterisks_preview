'use client'

export default function TopBar() {
  function scrollToFulfillment() {
    document.getElementById('fulfillment')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header className="relative z-10 border-b border-white/10 safe-area-inset pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 min-h-[48px]">
        <button
          type="button"
          onClick={scrollToFulfillment}
          className="flex items-center gap-2 rounded border border-white/20 bg-white/5 px-3 py-2 min-h-[44px] text-xs font-medium uppercase tracking-wider text-white/90 hover:border-white/30 hover:bg-white/10 hover:text-white transition-colors touch-manipulation"
        >
          <img
            src="/redasterisk.png"
            alt=""
            aria-hidden
            className="h-5 w-5 object-contain shrink-0"
          />
          Shipping Status
        </button>
        <a
          href="/password"
          className="text-xs text-white/70 hover:text-white transition-colors py-2 min-h-[44px] flex items-center touch-manipulation"
        >
          Enter using password
        </a>
      </div>
    </header>
  )
}
