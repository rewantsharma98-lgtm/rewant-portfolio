import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../utils/animations'

const items = [
  { num:'01', title:'Linux Systems',      desc:'Filesystem, permissions, shell scripting, process management, system administration.' },
  { num:'02', title:'Networking',         desc:'TCP/IP, DNS, HTTP, firewalls, packet analysis with Wireshark.' },
  { num:'03', title:'Web Security',       desc:'OWASP Top 10, XSS, SQL injection, CSRF, authentication vulnerabilities, Burp Suite.' },
  { num:'04', title:'Bug Bounty Learning',desc:'Responsible disclosure methodology, reconnaissance, structured reporting.' },
]

export default function CyberLabPanel() {
  return (
    <section id="cyberlab" className="section" aria-label="Cyber Lab — Learning journey">
      <div className="grid-40-60">

        {/* Left */}
        <div className="pad col-left" style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:360 }}>
          <span className="panel-num" aria-hidden="true">05</span>

          <motion.div
            initial={{ opacity:0, y:16 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.25 }}
            transition={{ duration:0.65 }}
          >
            <span className="eyebrow" style={{ marginBottom:'var(--s5)' }}>Cyber Lab</span>
            <h2 className="t-display" style={{ fontSize:'clamp(2.5rem, 5vw, 4.2rem)', color:'var(--ink)' }}>
              SECURE<br />ZONE
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity:0 }}
            whileInView={{ opacity:1 }}
            viewport={{ once:true }}
            transition={{ delay:0.3, duration:0.65 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontStyle:  'italic',
              fontSize:   '0.82rem',
              color:      'var(--gray)',
              lineHeight: 1.78,
              paddingTop: 'var(--s6)',
              borderTop:  '1px solid var(--border)',
              marginTop:  'var(--s7)',
            }}
          >
            I practice only inside legal learning environments and labs.
          </motion.p>
        </div>

        {/* Right */}
        <div className="pad">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount:0.15 }}
            style={{ display:'flex', flexDirection:'column' }}
          >
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                variants={staggerItem}
                style={{
                  display:             'grid',
                  gridTemplateColumns: '28px 1fr',
                  gap:                 'var(--s4)',
                  paddingTop:          i === 0 ? 0 : 'var(--s6)',
                  paddingBottom:       'var(--s6)',
                  borderBottom:        i < items.length-1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.56rem', letterSpacing:'0.16em', color:'var(--red)', paddingTop:3 }}>
                  {item.num}
                </span>
                <div>
                  <h3 className="t-serif" style={{ fontSize:'1.05rem', color:'var(--ink)', marginBottom:'var(--s2)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily:'var(--font-body)', fontSize:'0.83rem', color:'var(--gray)', lineHeight:1.75 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
