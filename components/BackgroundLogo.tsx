'use client'

const LOGO_SRC = '/redasterisk.png'

/* Constellation: particles with % position (for SVG: left=x, top=y in 0–100) */
const PARTICLES = [
  { top: 5, left: 8, size: 'w-1', delay: '0s' },
  { top: 12, left: 92, size: 'w-0.5', delay: '2s' },
  { top: 18, left: 25, size: 'w-1.5', delay: '4s' },
  { top: 25, left: 70, size: 'w-1', delay: '1s' },
  { top: 30, left: 15, size: 'w-0.5', delay: '6s' },
  { top: 38, left: 85, size: 'w-1', delay: '3s' },
  { top: 42, left: 48, size: 'w-0.5', delay: '5s' },
  { top: 52, left: 8, size: 'w-1.5', delay: '0.5s' },
  { top: 58, left: 95, size: 'w-1', delay: '7s' },
  { top: 65, left: 32, size: 'w-0.5', delay: '2.5s' },
  { top: 75, left: 72, size: 'w-1', delay: '4.5s' },
  { top: 82, left: 18, size: 'w-1.5', delay: '1.5s' },
  { top: 90, left: 88, size: 'w-0.5', delay: '3.5s' },
  { top: 8, left: 55, size: 'w-1', delay: '5.5s' },
  { top: 48, left: 22, size: 'w-0.5', delay: '6.5s' },
  { top: 70, left: 58, size: 'w-1', delay: '0.8s' },
]

/* Pairs of particle indices to connect with lines (constellation network) */
const CONNECTIONS: [number, number][] = [
  [0, 2], [0, 14], [2, 4], [2, 14], [4, 6], [4, 13],
  [6, 7], [6, 13], [6, 15], [7, 9], [7, 12], [9, 10], [9, 15],
  [10, 11], [10, 3], [11, 12], [13, 15], [1, 3], [3, 8], [5, 8], [5, 3],
]

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

function ConstellationLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-60 blur-[1px]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id="line-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" />
        </filter>
      </defs>
      <g stroke="rgb(255, 42, 42)" strokeWidth="0.35" fill="none" filter="url(#line-blur)">
        {CONNECTIONS.map(([a, b], i) => {
          const pA = PARTICLES[a]
          const pB = PARTICLES[b]
          if (!pA || !pB) return null
          return (
            <line
              key={i}
              x1={pA.left}
              y1={pA.top}
              x2={pB.left}
              y2={pB.top}
            />
          )
        })}
      </g>
    </svg>
  )
}

function Particle({
  top,
  left,
  size,
  delay,
}: {
  top: number
  left: number
  size: string
  delay: string
}) {
  return (
    <span
      className={`absolute aspect-square rounded-full bg-brand-red particle-float blur-[1.5px] opacity-90 ${size}`}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: delay,
      }}
    />
  )
}

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
      {/* Constellation: lines first, then particles */}
      <ConstellationLines />
      {PARTICLES.map((props, i) => (
        <Particle key={`p-${i}`} {...props} />
      ))}
      {/* Small floating asterisks — same blur, various sizes */}
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
