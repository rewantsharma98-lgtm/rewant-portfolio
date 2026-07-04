import { useEffect, useRef, useState } from 'react'

/* ─────────────────────────────────────────────────────────────────
   COSMIC SPIDER — lives IN the document, not the viewport
   
   · position: absolute  → spider is part of the page
   · Wander steering in full document coordinates
   · Roams all sections (Hero → Footer)
   · When you scroll, you pass it — it doesn't follow you
   · Silk trail in same document space
   ─────────────────────────────────────────────────────────────────*/

const SIZE        = 26
const MAX_SPEED   = 0.9
const WANDER_RATE = 0.055
const WANDER_DIST = 26
const WANDER_RAD  = 16
const STEER_STR   = 0.035
const MARGIN      = 60
const REPULSE     = 0.2

/* Returns full document dimensions */
function getDocSize() {
  return {
    w: Math.max(document.documentElement.scrollWidth,  window.innerWidth),
    h: Math.max(document.documentElement.scrollHeight, window.innerHeight),
  }
}

function SpiderSVG({ legPhase = 0 }) {
  const A = legPhase === 0
  return (
    <svg
      width={SIZE}
      height={SIZE * 1.25}
      viewBox="0 0 28 35"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <line x1="14" y1="0" x2="14" y2="5"
        stroke="rgba(17,17,17,0.28)" strokeWidth="0.6"/>

      {/* Left legs */}
      <path d={A ? 'M12 14 Q7 11 2 9'  : 'M12 14 Q7 10 1 7' }  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>
      <path d={A ? 'M11 17 Q5 17 1 18' : 'M11 17 Q5 16 0 18'}  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>
      <path d={A ? 'M11 20 Q5 22 2 27' : 'M11 20 Q5 23 1 29'}  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>
      <path d={A ? 'M12 23 Q7 26 4 31' : 'M12 23 Q7 27 5 33'}  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>

      {/* Right legs */}
      <path d={A ? 'M16 14 Q21 11 26 9'  : 'M16 14 Q21 10 27 7' }  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>
      <path d={A ? 'M17 17 Q23 17 27 18' : 'M17 17 Q23 16 28 18'}  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>
      <path d={A ? 'M17 20 Q23 22 26 27' : 'M17 20 Q23 23 27 29'}  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>
      <path d={A ? 'M16 23 Q21 26 24 31' : 'M16 23 Q21 27 23 33'}  stroke="#1a1a1a" strokeWidth="0.85" strokeLinecap="round" fill="none"/>

      {/* Body */}
      <ellipse cx="14" cy="24" rx="5.5" ry="7"   fill="#111111"/>
      <ellipse cx="14" cy="26" rx="2.2" ry="3.5"  fill="#ef4444" opacity="0.55"/>
      <ellipse cx="14" cy="14" rx="5"   ry="4.5"  fill="#1a1a1a"/>
      {/* Eyes */}
      <circle cx="12"   cy="13"   r="1.3"  fill="#ef4444"/>
      <circle cx="16"   cy="13"   r="1.3"  fill="#ef4444"/>
      <circle cx="12.4" cy="12.6" r="0.5"  fill="rgba(255,255,255,0.9)"/>
      <circle cx="16.4" cy="12.6" r="0.5"  fill="rgba(255,255,255,0.9)"/>
    </svg>
  )
}

export default function CosmicSpider() {
  const [docH,     setDocH]     = useState(3000)
  const [pos,      setPos]      = useState({ x: 200, y: 300 })
  const [angle,    setAngle]    = useState(0)
  const [legPhase, setLegPhase] = useState(0)
  const [trail,    setTrail]    = useState([])
  const [paused,   setPaused]   = useState(false)

  const vxRef          = useRef(0.5)
  const vyRef          = useRef(0.5)
  const posRef         = useRef({ x: 200, y: 300 })
  const wanderAngleRef = useRef(Math.random() * Math.PI * 2)
  const docHRef        = useRef(3000)
  const isPaused       = useRef(false)
  const rafRef         = useRef(null)

  /* Measure full document height */
  useEffect(() => {
    const measure = () => {
      const { h } = getDocSize()
      docHRef.current = h
      setDocH(h)
    }
    measure()
    // Re-measure after content likely painted
    const t1 = setTimeout(measure, 600)
    const t2 = setTimeout(measure, 1800)
    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(t1); clearTimeout(t2)
      window.removeEventListener('resize', measure)
    }
  }, [])

  useEffect(() => {
    /* Start spider at a visible position near top */
    const sx = 120 + Math.random() * (window.innerWidth - 240)
    const sy = 200 + Math.random() * 300
    posRef.current = { x: sx, y: sy }
    setPos({ x: sx, y: sy })
    setTrail([{ x: sx, y: sy }])

    /* Leg walk */
    const legTimer = setInterval(() => {
      if (!isPaused.current) setLegPhase(p => p ^ 1)
    }, 130)

    /* Random pauses */
    let pauseTimeout
    const schedulePause = () => {
      pauseTimeout = setTimeout(() => {
        isPaused.current = true
        setPaused(true)
        setTimeout(() => {
          isPaused.current = false
          setPaused(false)
          wanderAngleRef.current = Math.random() * Math.PI * 2
          schedulePause()
        }, 700 + Math.random() * 1400)
      }, 3000 + Math.random() * 5000)
    }
    schedulePause()

    /* ── Wander steering in DOCUMENT space ─────────────────────── */
    const tick = () => {
      if (!isPaused.current) {
        const { x, y }  = posRef.current
        let vx           = vxRef.current
        let vy           = vyRef.current
        const W          = window.innerWidth
        const H          = docHRef.current  // ← full page height

        /* 1. Drift wander angle */
        wanderAngleRef.current += (Math.random() - 0.5) * WANDER_RATE * 2

        /* 2. Project wander circle ahead */
        const spd  = Math.hypot(vx, vy) || 0.01
        const cX   = x + (vx / spd) * WANDER_DIST
        const cY   = y + (vy / spd) * WANDER_DIST
        const wX   = cX + Math.cos(wanderAngleRef.current) * WANDER_RAD
        const wY   = cY + Math.sin(wanderAngleRef.current) * WANDER_RAD

        /* 3. Steer toward wander point */
        vx += (wX - x) * STEER_STR
        vy += (wY - y) * STEER_STR

        /* 4. Boundary repulsion — left/right edges & top/bottom of FULL page */
        if (x < MARGIN)       vx += REPULSE * (1 + (MARGIN - x) / MARGIN)
        if (x > W - MARGIN)   vx -= REPULSE * (1 + (x - (W - MARGIN)) / MARGIN)
        if (y < MARGIN)       vy += REPULSE * (1 + (MARGIN - y) / MARGIN)
        if (y > H - MARGIN)   vy -= REPULSE * (1 + (y - (H - MARGIN)) / MARGIN)

        /* 5. Clamp speed */
        const spd2 = Math.hypot(vx, vy)
        if (spd2 > MAX_SPEED) { vx = (vx / spd2) * MAX_SPEED; vy = (vy / spd2) * MAX_SPEED }

        const nx = Math.max(20, Math.min(W - 20, x + vx))
        const ny = Math.max(20, Math.min(H - 20, y + vy))

        /* 6. Face direction of travel */
        const facingDeg = Math.atan2(vy, vx) * (180 / Math.PI) + 90

        vxRef.current  = vx
        vyRef.current  = vy
        posRef.current = { x: nx, y: ny }

        setPos({ x: nx, y: ny })
        setAngle(facingDeg)
        setTrail(prev => {
          const next = [...prev, { x: nx, y: ny }]
          return next.length > 60 ? next.slice(next.length - 60) : next
        })
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearInterval(legTimer)
      clearTimeout(pauseTimeout)
    }
  }, [])

  /* Silk trail — absolute, same doc coords as spider */
  const trailPts = trail.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')

  return (
    /* Full-document overlay — position:absolute, covers entire page */
    <div
      style={{
        position:      'absolute',
        top:           0,
        left:          0,
        width:         '100%',
        height:        docH,
        pointerEvents: 'none',
        zIndex:        9998,
        overflow:      'visible',
      }}
      aria-hidden="true"
    >
      {/* Silk trail */}
      {trail.length > 1 && (
        <svg
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '100%',
            overflow: 'visible', pointerEvents: 'none',
          }}
        >
          <polyline
            points={trailPts}
            stroke="rgba(17,17,17,0.11)"
            strokeWidth="0.65"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {/* Spider body */}
      <div
        style={{
          position:   'absolute',
          left:       pos.x,
          top:        pos.y,
          transform:  `translate(-50%, -50%) rotate(${angle}deg)`,
          willChange: 'transform',
          filter:     'drop-shadow(0 0 2px rgba(239,68,68,0.4))',
          opacity:    paused ? 0.55 : 1,
          transition: 'opacity 0.35s ease',
        }}
      >
        <SpiderSVG legPhase={legPhase} />
      </div>
    </div>
  )
}
