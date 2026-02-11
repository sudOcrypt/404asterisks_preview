'use client'

const LOGO_SRC = '/redasterisk.png'

const FLOATING_ASTERISKS = [
  { top: '8%', left: '12%', size: 'w-16', delay: '0s' },
  { top: '15%', left: '78%', size: 'w-12', delay: '1.5s' },
  { top: '22%', left: '6%', size: 'w-20', delay: '3s' },
  { top: '35%', left: '88%', size: 'w-14', delay: '0.5s' },
  { top: '45%', left: '4%', size: 'w-10', delay: '2s' },
  { top: '55%', left: '92%', size: 'w-20', delay: '4s' },
  { top: '68%', left: '10%', size: 'w-14', delay: '1s' },
  { top: '72%', left: '82%', size: 'w-16', delay: '2.5s' },
  { top: '85%', left: '18%', size: 'w-11', delay: '3.5s' },
  { top: '12%', left: '45%', size: 'w-9', delay: '2.2s' },
  { top: '78%', left: '55%', size: 'w-12', delay: '1.8s' },
  { top: '40%', left: '22%', size: 'w-10', delay: '4.2s' },
  { top: '60%', left: '68%', size: 'w-14', delay: '0.3s' },
]

function FloatingAsterisk({
  top,
  left,
  size,
  delay,
}: {
  top: string
  left: string
  size: string
  delay: string
}) {
  return (
    <img
      src={LOGO_SRC}
      alt=""
      className={`absolute aspect-square opacity-[0.3] blur-[2px] asterisk-float object-contain ${size}`}
      style={{ top, left, animationDelay: delay }}
    />
  )
}

export default function BackgroundLogo() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      <div className="absolute inset-0 bg-black/60" />
      {/* Small floating asterisks */}
      {FLOATING_ASTERISKS.map((props, i) => (
        <FloatingAsterisk key={i} {...props} />
      ))}
      {/* Main centered asterisk — no movement */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[min(90vmax,1200px)] aspect-square opacity-[0.18] blur-xl">
          <img
            src={LOGO_SRC}
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const fallback = target.nextElementSibling as HTMLElement
              if (fallback) fallback.classList.remove('hidden')
            }}
          />
          <div
            className="hidden absolute inset-0 flex items-center justify-center text-brand-red select-none"
            style={{ fontSize: 'min(55vmin, 720px)', lineHeight: 1 }}
          >
            *
          </div>
        </div>
      </div>
    </div>
  )
}
