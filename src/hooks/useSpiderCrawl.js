import { useEffect, useState, useCallback } from 'react'

/**
 * useSpiderCrawl
 * Returns { active, path, variant } for the spider mascot.
 * Triggers a new crawl event every 15–20 seconds.
 */
export function useSpiderCrawl() {
  const [active, setActive] = useState(false)
  const [variant, setVariant] = useState('crawl-top') // crawl-top | hang-right | swing-center

  const variants = ['crawl-top', 'hang-right', 'swing-center']

  const trigger = useCallback(() => {
    const v = variants[Math.floor(Math.random() * variants.length)]
    setVariant(v)
    setActive(true)
  }, [])

  useEffect(() => {
    // Initial delay 4s to let loader finish
    const initial = setTimeout(() => {
      trigger()
    }, 4500)

    return () => clearTimeout(initial)
  }, [trigger])

  useEffect(() => {
    if (!active) return

    // After animation, wait 15-20s then trigger again
    const done = setTimeout(() => {
      setActive(false)
      const next = 15000 + Math.random() * 5000
      setTimeout(trigger, next)
    }, 9000)

    return () => clearTimeout(done)
  }, [active, trigger])

  return { active, variant }
}
