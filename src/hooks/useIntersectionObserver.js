import { useEffect, useRef, useState } from 'react'

/**
 * useIntersectionObserver
 * Returns a [ref, isVisible] tuple.
 * Once the element enters the viewport, isVisible flips to true and stays true.
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(el)
      }
    }, {
      threshold: options.threshold ?? 0.15,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      ...options
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
