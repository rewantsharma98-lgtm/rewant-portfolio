import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

export default function FooterPanel() {
  return (
    <footer id="footer" className="section" aria-label="Footer">

      <div className="pad" style={{ position:'relative', minHeight:320 }}>
        <span className="panel-num" aria-hidden="true">08</span>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.25 }}
          style={{ display:'flex', flexDirection:'column', gap:'var(--s5)' }}
        >
          <motion.span variants={staggerItem} className="eyebrow">
            08 — The End?
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="t-display"
            style={{ fontSize:'clamp(4.5rem, 11vw, 10rem)', color:'var(--ink)', lineHeight:0.88 }}
          >
            THE<br />
            <span style={{ color:'var(--red)' }}>END?</span>
          </motion.h2>

          <motion.div
            variants={staggerItem}
            style={{ display:'flex', alignItems:'center', gap:'var(--s5)' }}
          >
            <span className="rule-red" aria-hidden="true" />
            <span className="t-serif" style={{ fontSize:'1.3rem', color:'var(--gray)' }}>
              Not yet.
            </span>
          </motion.div>

          <motion.p
            variants={staggerItem}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.88rem',
              color:      'var(--gray-light)',
              lineHeight: 1.7,
              maxWidth:   300,
            }}
          >
            More missions are coming soon.
          </motion.p>
        </motion.div>

        {/* Bottom credit row */}
        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ delay:0.5, duration:0.65 }}
          style={{
            position:       'absolute',
            bottom:         'var(--s7)',
            left:           'var(--s8)',
            right:          'var(--s8)',
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'flex-end',
            flexWrap:       'wrap',
            gap:            'var(--s4)',
            borderTop:      '1px solid var(--border)',
            paddingTop:     'var(--s5)',
          }}
        >
          <span className="t-display" style={{ fontSize:'0.92rem', letterSpacing:'0.12em', color:'var(--border-em)' }}>
            KAI<span style={{ color:'var(--red)' }}>.</span>COSMIC
          </span>
          <span className="eyebrow">
            © 2026 · All missions reserved
          </span>
        </motion.div>
      </div>

    </footer>
  )
}
