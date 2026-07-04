import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

const categories = [
  {
    id:    'FE',
    label: 'Frontend',
    note:  'Interface & Experience',
    skills:['HTML','CSS','JavaScript','TypeScript','React'],
  },
  {
    id:    'BE',
    label: 'Backend',
    note:  'Data & Infrastructure',
    skills:['Node.js','Express','MongoDB'],
  },
  {
    id:    'CY',
    label: 'Cybersecurity',
    note:  'Offense Informs Defense',
    skills:['Linux','Networking','OWASP','Nmap','Burp Suite'],
  },
]

function Skill({ name }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.div
      onHoverStart={() => setHov(true)}
      onHoverEnd={()  => setHov(false)}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.15 }}
      style={{
        fontFamily:  'var(--font-body)',
        fontSize:    '0.96rem',
        color:       hov ? 'var(--ink)' : 'var(--gray)',
        display:     'flex',
        alignItems:  'center',
        gap:         'var(--s3)',
        cursor:      'default',
        transition:  'color 0.15s ease',
        userSelect:  'none',
      }}
    >
      <span style={{
        width:      12,
        height:     1,
        background: hov ? 'var(--red)' : 'var(--border-em)',
        display:    'inline-block',
        flexShrink: 0,
        transition: 'background 0.15s ease',
      }} aria-hidden="true" />
      {name}
    </motion.div>
  )
}

export default function ArsenalPanel() {
  return (
    <section id="arsenal" className="section" aria-label="Arsenal — Skills">

      <div className="pad-md" style={{ borderBottom:'1px solid var(--border)', position:'relative' }}>
        <span className="panel-num" aria-hidden="true">04</span>
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.4 }}
          transition={{ duration:0.6 }}
          style={{ display:'flex', alignItems:'baseline', gap:'var(--s7)', flexWrap:'wrap' }}
        >
          <h2 className="t-display" style={{ fontSize:'clamp(2.8rem, 6vw, 5.5rem)', color:'var(--ink)' }}>
            ARSENAL
          </h2>
          <span className="eyebrow" style={{ alignSelf:'flex-end', paddingBottom:'0.35em' }}>
            Tech Loadout
          </span>
        </motion.div>
      </div>

      <motion.div
        className="grid-3up"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount:0.15 }}
      >
        {categories.map(cat => (
          <motion.div
            key={cat.id}
            variants={staggerItem}
            className="grid-cell"
            style={{ padding:'var(--s7) var(--s6) var(--s8)' }}
          >
            <div style={{ marginBottom:'var(--s6)' }}>
              <div style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '1.2rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color:         'var(--ink)',
                marginBottom:  'var(--s1)',
              }}>
                {cat.label}
              </div>
              <div style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.56rem',
                letterSpacing: '0.16em',
                color:         'var(--gray-light)',
                textTransform: 'uppercase',
              }}>
                {cat.note}
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:'var(--s3)' }}>
              {cat.skills.map(s => <Skill key={s} name={s} />)}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div style={{ borderTop:'1px solid var(--border)', padding:'var(--s4) var(--s7)' }}>
        <span className="eyebrow">// always_upgrading</span>
      </div>

    </section>
  )
}
