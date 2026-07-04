import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'HQ',        href: '#hq'      },
  { label: 'Origin',    href: '#origin'  },
  { label: 'Missions',  href: '#missions'},
  { label: 'Arsenal',   href: '#arsenal' },
  { label: 'Cyber Lab', href: '#cyberlab'},
  { label: 'Timeline',  href: '#timeline'},
  { label: 'Signal Me', href: '#signal'  },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const onLink = (href) => { setMenuOpen(false); setActiveLink(href) }

  return (
    <>
      <header
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          right:          0,
          zIndex:         'var(--z-nav)',
          height:         scrolled ? '50px' : '60px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          padding:        '0 clamp(16px, 4vw, 40px)',
          background:     'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom:   '1px solid var(--border)',
          transition:     'height 0.28s ease',
        }}
        role="banner"
      >
        {/* Logo */}
        <a
          href="#hq"
          aria-label="KAI COSMIC — Home"
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(0.78rem, 2vw, 0.95rem)',
            letterSpacing: '0.12em',
            color:         'var(--ink)',
            display:       'flex',
            alignItems:    'center',
            gap:           4,
            flexShrink:    0,
          }}
        >
          KAI<span style={{ color: 'var(--red)' }}>.</span>COSMIC
        </a>

        {/* Desktop links */}
        <nav
          className="nav-desktop"
          style={{ display: 'flex', gap: 'clamp(14px, 2.5vw, 28px)', alignItems: 'center' }}
          aria-label="Main navigation"
        >
          {navLinks.map(lk => (
            <NavLink
              key={lk.href}
              link={lk}
              active={activeLink === lk.href}
              onClick={() => onLink(lk.href)}
            />
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 6 }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display:         'block',
                width:           20,
                height:          1.5,
                background:      'var(--ink)',
                borderRadius:    1,
                transformOrigin: 'center',
                transition:      'transform 0.22s ease, opacity 0.18s ease',
                transform:
                  i === 0 && menuOpen ? 'translateY(6.5px) rotate(45deg)' :
                  i === 2 && menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{
              position:      'fixed',
              top:           scrolled ? 50 : 60,
              left:          0,
              right:         0,
              bottom:        0,
              zIndex:        99,
              background:    'rgba(255,255,255,0.98)',
              backdropFilter:'blur(16px)',
              padding:       'var(--s5) clamp(16px, 4vw, 40px) var(--s7)',
              overflowY:     'auto',
            }}
            aria-label="Mobile navigation"
          >
            {navLinks.map((lk, i) => (
              <motion.a
                key={lk.href}
                href={lk.href}
                onClick={() => onLink(lk.href)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.035 }}
                style={{
                  display:       'block',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '1rem',
                  color:         'var(--ink)',
                  padding:       '14px 0',
                  borderBottom:  '1px solid var(--border)',
                  letterSpacing: '0.01em',
                }}
              >
                {lk.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Responsive rules */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: flex  !important; }
        }
      `}</style>
    </>
  )
}

/* ---- Nav link with underline ---- */
function NavLink({ link, active, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={link.href}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-current={active ? 'page' : undefined}
      style={{
        fontFamily:    'var(--font-body)',
        fontSize:      '0.76rem',
        fontWeight:    400,
        letterSpacing: '0.04em',
        color:         active ? 'var(--ink)' : 'var(--gray)',
        position:      'relative',
        paddingBottom: '2px',
        transition:    'color 0.18s ease',
        whiteSpace:    'nowrap',
      }}
    >
      {link.label}
      <span style={{
        position:   'absolute',
        bottom:     0,
        left:       0,
        height:     '1px',
        background: 'var(--ink)',
        width:      (hov || active) ? '100%' : '0%',
        transition: 'width 0.22s ease',
      }} aria-hidden="true" />
    </a>
  )
}
