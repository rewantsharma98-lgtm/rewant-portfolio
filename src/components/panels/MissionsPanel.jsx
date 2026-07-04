import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

const missions = [
  { id:'01', year:'2025', title:'CafeFlow',             category:'SaaS · Indian Cafe',   desc:'Full-stack SaaS for Indian cafes — order management, menu builder, and Level 1 Security Lab.' },
  { id:'02', year:'2025', title:'Darjeeling SideSeen',  category:'Tourism · Discovery',  desc:'Premium tourism discovery platform for Darjeeling with guide profiles and curated routes.' },
  { id:'03', year:'2025', title:'Learn Hub',            category:'EdTech · Platform',    desc:'Learning platform with course management, progress tracking, and clean content experience.' },
  { id:'04', year:'2025', title:'Club Café Management', category:'Dashboard · Internal', desc:'Internal management system for club cafés — orders, inventory, staff, and sales analytics.' },
  { id:'05', year:'2024', title:'North Route',          category:'Travel · Discovery',   desc:'Travel discovery platform focused on northern routes and destination exploration.' },
]

function Card({ m, colIndex }) {
  const [hov, setHov] = useState(false)

  return (
    <motion.article
      variants={staggerItem}
      onHoverStart={() => setHov(true)}
      onHoverEnd={()  => setHov(false)}
      className="grid-cell"
      aria-label={`${m.title} — ${m.category}`}
      style={{
        padding:    'var(--s6)',
        background: hov ? 'var(--surface)' : 'var(--bg)',
        transition: 'background 0.22s ease',
        cursor:     'default',
      }}
    >
      {/* Number + year */}
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'var(--s5)' }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.56rem', letterSpacing:'0.18em', color:'var(--gray-light)' }}>
          {m.id}
        </span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.56rem', letterSpacing:'0.12em', color:'var(--gray-light)' }}>
          {m.year}
        </span>
      </div>

      {/* Title */}
      <h3
        className="t-display"
        style={{ fontSize:'1.35rem', color: hov ? 'var(--ink)' : 'var(--ink-light)', marginBottom:'var(--s2)', transition:'color 0.18s' }}
      >
        {m.title}
      </h3>

      {/* Category */}
      <span style={{
        fontFamily:'var(--font-mono)', fontSize:'0.58rem', letterSpacing:'0.14em',
        textTransform:'uppercase', color:'var(--red)', display:'block', marginBottom:'var(--s4)',
      }}>
        {m.category}
      </span>

      {/* Description */}
      <p style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--gray)', lineHeight:1.75 }}>
        {m.desc}
      </p>

      {/* Hover bottom line */}
      <div style={{
        position:'absolute', bottom:0, left:0,
        height:'1.5px', background:'var(--ink)',
        width: hov ? '100%' : '0%', transition:'width 0.3s ease',
      }} aria-hidden="true" />
    </motion.article>
  )
}

export default function MissionsPanel() {
  return (
    <section id="missions" className="section" aria-label="Missions — Projects">

      <div className="pad-md" style={{ borderBottom:'1px solid var(--border)', position:'relative' }}>
        <span className="panel-num" aria-hidden="true">03</span>
        <motion.div
          initial={{ opacity:0, y:16 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, amount:0.4 }}
          transition={{ duration:0.6 }}
          style={{ display:'flex', alignItems:'baseline', gap:'var(--s7)', flexWrap:'wrap' }}
        >
          <h2 className="t-display" style={{ fontSize:'clamp(2.8rem, 6vw, 5.5rem)', color:'var(--ink)' }}>
            FIELD REPORTS
          </h2>
          <span className="eyebrow" style={{ alignSelf:'flex-end', paddingBottom:'0.35em' }}>
            {missions.length} missions completed
          </span>
        </motion.div>
      </div>

      <motion.div
        className="grid-missions"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount:0.08 }}
      >
        {missions.map((m,i) => <Card key={m.id} m={m} colIndex={i%3} />)}
      </motion.div>

    </section>
  )
}
