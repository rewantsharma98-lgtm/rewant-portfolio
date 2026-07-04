import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

const chapters = [
  {
    head: 'How it started',
    body: 'A blank HTML file. One line changed a webpage — and that changed everything. The moment something I typed appeared on screen, I was hooked.',
  },
  {
    head: 'Why building',
    body: 'Every component is a puzzle. Every interaction is a conversation. Building websites is the closest thing to writing — with immediate, visible consequence.',
  },
  {
    head: 'Why security',
    body: 'Cybersecurity isn\'t about breaking — it\'s about understanding deeply enough to protect. The same curiosity that drives building drives defending.',
  },
]

export default function OriginPanel() {
  return (
    <section id="origin" className="section" aria-label="Origin Story">
      <div className="grid-40-60">

        {/* Left — large title + year */}
        <div
          className="pad col-left"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 400 }}
        >
          <span className="panel-num" aria-hidden="true">02</span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.25,0.46,0.45,0.94] }}
          >
            <span className="eyebrow" style={{ marginBottom: 'var(--s5)' }}>Origin</span>

            {/* Giant dimmed year — editorial device from reference image */}
            <div
              className="t-display"
              style={{
                fontSize:   'clamp(5rem, 10vw, 9rem)',
                color:      'var(--border)',
                lineHeight: 0.85,
                userSelect: 'none',
                marginBottom: 'var(--s5)',
              }}
              aria-hidden="true"
            >
              2024
            </div>

            <h2 className="t-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--ink)' }}>
              HOW IT<br />
              <span
                className="t-serif"
                style={{
                  color:         'var(--red)',
                  fontSize:      '0.68em',
                  textTransform: 'none',
                  letterSpacing: '0',
                }}
              >
                all started
              </span>
            </h2>
          </motion.div>

          <div style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.56rem',
            letterSpacing: '0.22em',
            color:         'var(--gray-light)',
            textTransform: 'uppercase',
          }}>
            Est. 2024 · Still Building
          </div>
        </div>

        {/* Right — story */}
        <div className="pad">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s7)' }}
          >
            {chapters.map(ch => (
              <motion.div key={ch.head} variants={staggerItem}>
                <h3
                  className="t-serif"
                  style={{ fontSize: '1.1rem', color: 'var(--ink)', marginBottom: 'var(--s3)' }}
                >
                  {ch.head}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.9rem',
                  color:      'var(--gray)',
                  lineHeight: 1.8,
                }}>
                  {ch.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
