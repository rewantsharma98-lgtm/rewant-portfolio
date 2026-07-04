import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../../styles/loader.css'

/* ─────────────────────────────────────────────────────────────────
   KAI COSMIC — COMIC LOADER
   Flow:
     0-2.8s  → 4 comic panels stagger in one by one
     2.8-4s  → panels fade, title slam appears
     4-5s    → white curtain wipe out
   ─────────────────────────────────────────────────────────────────*/

const GRID_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
  exit:   { opacity: 0, transition: { duration: 0.22 } },
}

const PANEL_VARIANTS = {
  hidden:  { opacity: 0, y: 22, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
}

export default function Loader({ onComplete }) {
  const [stage, setStage] = useState(0)
  // 0 = panels  |  1 = title  |  2 = exit

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2800)
    const t2 = setTimeout(() => setStage(2), 4100)
    const t3 = setTimeout(() => onComplete?.(), 4900)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          key="cl-root"
          className="cl-stage"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* ── Halftone bg dot pattern */}
          <div className="cl-halftone" aria-hidden="true" />

          {/* ── STAGE 0: comic panels ───────────────────────── */}
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="panels"
                className="cl-grid"
                variants={GRID_VARIANTS}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Panel 1 — large left, red */}
                <motion.div
                  className="cl-panel cl-panel--red cl-panel--large"
                  variants={PANEL_VARIANTS}
                >
                  <span className="cl-panel-num" aria-hidden="true">01</span>
                  <CodeGlyph />
                  <p className="cl-caption">BOOT SEQUENCE<br/>INITIATED</p>
                </motion.div>

                {/* Panel 2 — top right, dark */}
                <motion.div
                  className="cl-panel cl-panel--dark cl-panel--top-right"
                  variants={PANEL_VARIANTS}
                >
                  <span className="cl-panel-num" aria-hidden="true">02</span>
                  <TerminalGlyph />
                  <p className="cl-caption">LOADING SYSTEMS…</p>
                </motion.div>

                {/* Panel 3 — bottom right, white with red border */}
                <motion.div
                  className="cl-panel cl-panel--white cl-panel--bottom-right"
                  variants={PANEL_VARIANTS}
                >
                  <span className="cl-panel-num" aria-hidden="true">03</span>
                  <ShieldGlyph />
                  <p className="cl-caption">SECURITY CHECK ✓</p>
                </motion.div>

                {/* Panel 4 — speech bubble bottom strip */}
                <motion.div
                  className="cl-panel cl-panel--strip"
                  variants={PANEL_VARIANTS}
                >
                  <span className="cl-panel-num" aria-hidden="true">04</span>
                  <div className="cl-bubble-wrap">
                    <div className="cl-bubble">
                      Brace yourself —<br/><strong>Kai is incoming.</strong>
                    </div>
                    <div className="cl-bubble-tail" aria-hidden="true" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── STAGE 1: title slam ─────────────────────────── */}
          <AnimatePresence mode="wait">
            {stage === 1 && (
              <motion.div
                key="title"
                className="cl-title-frame"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0,  scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Registration corners */}
                <span className="cl-corner cl-corner--tl" aria-hidden="true" />
                <span className="cl-corner cl-corner--tr" aria-hidden="true" />
                <span className="cl-corner cl-corner--bl" aria-hidden="true" />
                <span className="cl-corner cl-corner--br" aria-hidden="true" />

                <motion.span
                  className="cl-eyebrow"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.28 }}
                >
                  ISSUE NO. 01 — INTERACTIVE CV
                </motion.span>

                <motion.div
                  className="cl-title-wrap"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="cl-title-line cl-title-kai">KAI</span>
                  <span className="cl-title-line cl-title-cosmic">COSMIC</span>
                </motion.div>

                <motion.div
                  className="cl-title-rule"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.44, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                />

                <motion.span
                  className="cl-tagline"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.62, duration: 0.3 }}
                >
                  Web Developer · Cybersecurity Enthusiast
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── SVG Glyphs ──────────────────────────────────────────────── */

function CodeGlyph() {
  return (
    <svg className="cl-glyph" viewBox="0 0 80 52" fill="none" aria-hidden="true">
      {/* < */}
      <path d="M22 10 L6 26 L22 42" stroke="currentColor" strokeWidth="4"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* / */}
      <path d="M36 8 L44 44" stroke="currentColor" strokeWidth="4"
        strokeLinecap="round"/>
      {/* > */}
      <path d="M58 10 L74 26 L58 42" stroke="currentColor" strokeWidth="4"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function TerminalGlyph() {
  return (
    <svg className="cl-glyph" viewBox="0 0 72 54" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="66" height="48" rx="4"
        stroke="currentColor" strokeWidth="3"/>
      {/* Top bar */}
      <line x1="3" y1="15" x2="69" y2="15" stroke="currentColor" strokeWidth="2.5"/>
      {/* Dots */}
      <circle cx="12" cy="9" r="2" fill="currentColor"/>
      <circle cx="20" cy="9" r="2" fill="currentColor"/>
      <circle cx="28" cy="9" r="2" fill="currentColor"/>
      {/* Caret */}
      <path d="M13 26 L22 33 L13 40" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"/>
      {/* Underscore blink */}
      <line x1="26" y1="40" x2="38" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  )
}

function ShieldGlyph() {
  return (
    <svg className="cl-glyph" viewBox="0 0 60 68" fill="none" aria-hidden="true">
      <path d="M30 4 L54 14 L54 34 C54 50 30 64 30 64 C30 64 6 50 6 34 L6 14 Z"
        stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round"/>
      <path d="M19 34 L27 42 L42 26"
        stroke="currentColor" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}