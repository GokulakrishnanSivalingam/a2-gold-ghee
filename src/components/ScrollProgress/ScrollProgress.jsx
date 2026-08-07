import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './ScrollProgress.css'

/**
 * ScrollProgress
 * Thin gold hairline fixed to the top edge that fills as the reader
 * moves through the page. Uses a spring so it feels alive, not mechanical.
 */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`scroll-progress ${visible ? 'is-visible' : ''}`} aria-hidden="true">
      <motion.div className="scroll-progress__bar" style={{ scaleX }} />
    </div>
  )
}

export default ScrollProgress
