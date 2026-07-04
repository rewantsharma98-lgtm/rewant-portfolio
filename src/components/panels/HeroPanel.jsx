import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { staggerContainer, staggerItem } from '../../utils/animations'

export default function HeroPanel() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 })

  return (
    <section
      id="hq"
      ref={ref}
      className="hero-section section"
      aria-label="Hero — Hello Human"
      style={{ borderTop: 'none', background: 'var(--bg)' }}
    >
      <span className="panel-num" aria-hidden="true">01</span>

      {/* Very faint grid lines — editorial paper feel */}
      <div style={{
        position:   'absolute',
        inset:      0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        opacity: 0.35,
        pointerEvents: 'none',
      }} aria-hidden="true" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 'var(--s5)', position: 'relative' }}
      >

        {/* Eyebrow */}
        <motion.span variants={staggerItem} className="eyebrow">
          Web Developer · Cybersecurity Enthusiast
        </motion.span>

        {/* Main headline */}
        <motion.div variants={staggerItem}>
          <h1
            className="t-display"
            style={{
              fontSize:   'clamp(5rem, 12vw, 11rem)',
              color:      'var(--ink)',
              lineHeight: 0.88,
            }}
          >
            HELLO
          </h1>
          <h1
            className="t-display"
            style={{
              fontSize:   'clamp(5rem, 12vw, 11rem)',
              color:      'var(--red)',
              lineHeight: 0.9,
            }}
          >
            HUMAN
          </h1>
        </motion.div>

        {/* Name */}
        <motion.div
          variants={staggerItem}
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--s4)', paddingTop: 'var(--s2)' }}
        >
          <span className="rule-red" aria-hidden="true" />
          <span
            className="t-serif"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.85rem)', color: 'var(--ink)' }}
          >
            I'm Kai
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={staggerItem}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize:   'clamp(0.88rem, 1.4vw, 1rem)',
            color:      'var(--gray)',
            lineHeight: 1.8,
            maxWidth:   420,
          }}
        >
          Building digital experiences and exploring secure systems.
        </motion.p>

        {/* Speech bubble */}
        <motion.div variants={staggerItem}>
          <SpeechBubble>Your friendly digital neighborhood builder.</SpeechBubble>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={staggerItem}
          style={{ display: 'flex', gap: 'var(--s3)', flexWrap: 'wrap', paddingTop: 'var(--s2)' }}
        >
          <a href="#missions" className="btn btn-solid" aria-label="Explore Universe">
            Explore Universe
          </a>
          <a href="#missions" className="btn btn-ghost" aria-label="View Missions">
            View Missions
          </a>
        </motion.div>

      </motion.div>

      {/* Bottom rule — starts with red accent then fades */}
      <div
        style={{
          position:   'absolute',
          bottom:     0,
          left:       0,
          right:      0,
          height:     '1px',
          background: 'linear-gradient(to right, var(--red) 80px, var(--border) 80px)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}

function SpeechBubble({ children }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{
        fontFamily:  'var(--font-body)',
        fontSize:    '0.82rem',
        fontStyle:   'italic',
        color:       'var(--gray)',
        background:  'var(--surface)',
        border:      '1px solid var(--border-em)',
        padding:     '9px 16px',
        maxWidth:    300,
        lineHeight:  1.55,
      }}>
        "{children}"
      </div>
      <div style={{
        position:    'absolute',
        bottom:      -7,
        left:        18,
        width:       0, height: 0,
        borderLeft:  '6px solid transparent',
        borderRight: '6px solid transparent',
        borderTop:   '7px solid var(--border-em)',
      }} aria-hidden="true" />
    </div>
  )
}
