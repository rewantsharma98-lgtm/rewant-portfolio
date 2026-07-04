import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

const events = [
  {
    year:  '2024',
    title: 'Started Web Development',
    desc:  'First HTML file. First CSS. First moment of — "I can build things from nothing."',
  },
  {
    year:  '2025',
    title: 'Built Client Projects',
    desc:  'Real clients, real deadlines. Delivery platforms, tourism apps, management systems. Real growth.',
  },
  {
    year:  '2026',
    title: 'Cybersecurity Journey Begins',
    desc:  'Linux. Networking. Web security. The builder became the analyst — still building, now defending.',
    accent: true,
  },
]

export default function TimelinePanel() {
  return (
    <section id="timeline" className="section" aria-label="Timeline — Career progression">

      <div className="pad-md" style={{ borderBottom:'1px solid var(--border)', position:'relative' }}>
        <span className="panel-num" aria-hidden="true">06</span>
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.4 }}
          transition={{ duration:0.6 }}
          style={{ display:'flex', alignItems:'baseline', gap:'var(--s7)', flexWrap:'wrap' }}
        >
          <h2 className="t-display" style={{ fontSize:'clamp(2.8rem, 6vw, 5.5rem)', color:'var(--ink)' }}>
            TIMELINE
          </h2>
          <span className="eyebrow" style={{ alignSelf:'flex-end', paddingBottom:'0.35em' }}>
            The Log
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount:0.1 }}
      >
        {events.map((ev, i) => (
          <motion.div
            key={ev.year}
            variants={staggerItem}
            style={{
              display:             'grid',
              gridTemplateColumns: '140px 1fr',
              borderBottom:        i < events.length-1 ? '1px solid var(--border)' : 'none',
            }}
          >
            {/* Year */}
            <div style={{
              padding:     'var(--s7) var(--s6)',
              borderRight: '1px solid var(--border)',
              display:     'flex',
              alignItems:  'flex-start',
            }}>
              <span
                className="t-display"
                style={{ fontSize:'2rem', color: ev.accent ? 'var(--red)' : 'var(--border-em)', lineHeight:1 }}
              >
                {ev.year}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding:'var(--s7) var(--s8)' }}>
              <h3 className="t-serif" style={{ fontSize:'1.1rem', color:'var(--ink)', marginBottom:'var(--s3)' }}>
                {ev.title}
              </h3>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.87rem', color:'var(--gray)', lineHeight:1.78 }}>
                {ev.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ borderTop:'1px solid var(--border)', padding:'var(--s4) var(--s7)' }}>
        <span className="eyebrow">// to_be_continued</span>
      </div>

    </section>
  )
}
