'use client'

const batches = [
  {
    id: 'batch-1',
    label: 'Batch 1',
    range: 'Nov 18 – Dec 4',
    orders: '#1774 – #2297',
    status: 'SHIPPED',
    statusClass: 'bg-white/20 text-white',
    note: 'Shipped 1/13/26. Check email or DM for tracking. Zip-up orders in Batch 2.',
  },
  {
    id: 'batch-2',
    label: 'Batch 2',
    range: 'Dec 5 – Dec 15',
    orders: '#2298 – #2693',
    status: 'IN PACKING',
    statusClass: 'bg-brand-red/30 text-white border border-brand-red/50',
    note: 'Bulk arrived 2/5/26. Labels created. Check email for tracking. Aiming to ship by 2/10/26.',
  },
  {
    id: 'batch-3',
    label: 'Batch 3',
    range: 'Dec 16 – Jan 6',
    orders: '#2694 – #3206',
    status: 'IN PACKING',
    statusClass: 'bg-brand-red/30 text-white border border-brand-red/50',
    note: 'Bulk arrived 2/5/26. Labels created. Check email for tracking. Aiming to ship by 2/10/26.',
  },
]

export default function ShippingUpdates() {
  return (
    <section
      id="fulfillment"
      className="relative z-10 px-4 pb-12 sm:px-6 sm:pb-16 safe-area-inset"
      aria-labelledby="fulfillment-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="fulfillment-heading"
          className="font-condensed text-sm font-semibold uppercase tracking-[0.07em] text-white/70 mb-4"
        >
          Fulfillment Updates
        </h2>
        <div className="space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="rounded border border-white/5 bg-black/40 p-3 sm:p-4"
            >
              <div className="flex flex-wrap items-center gap-2 gap-y-1">
                <span className="font-condensed text-sm font-semibold text-white tracking-[0.07em]">
                  {batch.label}
                </span>
                <span
                  className={`inline-flex px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.07em] ${batch.statusClass}`}
                >
                  {batch.status}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/70">
                {batch.range} · Orders {batch.orders}
              </p>
              <p className="mt-2 text-xs text-white/80 leading-relaxed">
                {batch.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
