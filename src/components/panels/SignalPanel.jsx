import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

const contacts = [
  { label:'GitHub',    Icon:FiGithub,    href:'https://github.com',    sub:'@kaicosmic'      },
  { label:'LinkedIn',  Icon:FiLinkedin,  href:'https://linkedin.com',  sub:'in/kaicosmic'    },
  { label:'Instagram', Icon:FiInstagram, href:'https://instagram.com', sub:'@kai.cosmic'     },
  { label:'Email',     Icon:FiMail,      href:'mailto:kai@example.com',sub:'kai@example.com' },
]

function Card({ c }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.a
      href={c.href}
      variants={staggerItem}
      onHoverStart={() => setHov(true)}
      onHoverEnd={()  => setHov(false)}
      target={c.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="grid-cell"
      aria-label={`${c.label}: ${c.sub}`}
      style={{
        display:        'flex',
        flexDirection:  'column',
        gap:            'var(--s5)',
        padding:        'var(--s7) var(--s6)',
        background:     hov ? 'var(--surface)' : 'var(--bg)',
        transition:     'background 0.2s ease',
        cursor:         'pointer',
        textDecoration: 'none',
        borderBottom:   '1px solid var(--border)',
      }}
    >
      <c.Icon
        size={18}
        color={hov ? 'var(--ink)' : 'var(--gray-light)'}
        style={{ transition:'color 0.18s ease' }}
        aria-hidden="true"
      />
      <div>
        <div
          className="t-display"
          style={{ fontSize:'1rem', color: hov ? 'var(--ink)' : 'var(--ink-light)', marginBottom:'var(--s1)', transition:'color 0.18s' }}
        >
          {c.label}
        </div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.56rem', letterSpacing:'0.1em', color:'var(--gray-light)' }}>
          {c.sub}
        </div>
      </div>
      {/* Hover red underline */}
      <div style={{ height:'1.5px', background:'var(--red)', width: hov ? '24px' : '0px', transition:'width 0.22s ease' }} aria-hidden="true" />
    </motion.a>
  )
}

export default function SignalPanel() {
  return (
    <section id="signal" className="section" aria-label="Signal Me — Contact">

      <div className="pad-md" style={{ borderBottom:'1px solid var(--border)', position:'relative' }}>
        <span className="panel-num" aria-hidden="true">07</span>
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.4 }}
          transition={{ duration:0.6 }}
        >
          <h2 className="t-display" style={{ fontSize:'clamp(2.8rem, 6vw, 5.5rem)', color:'var(--ink)' }}>
            SIGNAL ME
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.9rem',
            color:      'var(--gray)',
            lineHeight: 1.75,
            maxWidth:   400,
            marginTop:  'var(--s4)',
          }}>
            Got a mission? A collaboration? Drop a signal —
            I respond to all transmissions.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="grid-signal"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount:0.2 }}
      >
        {contacts.map(c => <Card key={c.label} c={c} />)}
      </motion.div>

      {/* Availability */}
      <div style={{
        borderTop:  '1px solid var(--border)',
        padding:    'var(--s4) var(--s7)',
        display:    'flex',
        alignItems: 'center',
        gap:        'var(--s3)',
      }}>
        <motion.span
          style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', display:'inline-block', flexShrink:0 }}
          animate={{ opacity:[1, 0.3, 1] }}
          transition={{ duration:2.4, repeat:Infinity, ease:'easeInOut' }}
          aria-hidden="true"
        />
        <span className="eyebrow">Available for missions</span>
      </div>

    </section>
  )
}
