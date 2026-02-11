'use client'

const INSTAGRAM_URL = 'https://instagram.com/404asterisks'

function PackageIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  )
}

export default function ShippingStatusModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      <div
        className="fixed left-1/2 top-1/2 z-50 w-[min(90vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-brand-red bg-black shadow-xl"
        role="dialog"
        aria-labelledby="shipping-modal-title"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 text-brand-red/80 hover:text-brand-red transition-colors p-1"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-6 pt-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <PackageIcon />
            <h2 id="shipping-modal-title" className="font-condensed text-lg font-bold uppercase tracking-[0.14em] text-brand-red">
              Shipping Status
            </h2>
          </div>
          <p className="mt-4 text-sm text-brand-red/90 leading-relaxed">
            For shipping updates and order tracking information, please check our Instagram page.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded border border-brand-red bg-transparent px-5 py-2.5 font-condensed text-sm font-bold uppercase tracking-[0.12em] text-brand-red transition hover:bg-brand-red/10"
          >
            Visit @404asterisks
          </a>
        </div>
      </div>
    </>
  )
}
