import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Loader        from './components/Loader/Loader'
import Navbar        from './components/Navbar/Navbar'
import HeroPanel     from './components/panels/HeroPanel'
import OriginPanel   from './components/panels/OriginPanel'
import MissionsPanel from './components/panels/MissionsPanel'
import ArsenalPanel  from './components/panels/ArsenalPanel'
import CyberLabPanel from './components/panels/CyberLabPanel'
import TimelinePanel from './components/panels/TimelinePanel'
import SignalPanel   from './components/panels/SignalPanel'
import FooterPanel   from './components/panels/FooterPanel'
import CosmicSpider  from './components/Spider/CosmicSpider'

import './styles/globals.css'
import './styles/panels.css'
import './styles/loader.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!loaded && (
          <Loader key="loader" onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loaded && (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            {/* Spider roams the full page */}
            <CosmicSpider />

            <Navbar />

            <main
              role="main"
              aria-label="KAI COSMIC — Interactive CV"
              style={{ paddingTop: '60px' }}
            >
              {/* Editorial magazine wrapper — contains left/right border */}
              <div className="magazine">
                <HeroPanel />
                <OriginPanel />
                <MissionsPanel />
                <ArsenalPanel />
                <CyberLabPanel />
                <TimelinePanel />
                <SignalPanel />
                <FooterPanel />
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
