import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'
import './ScrollTop.css'

/**
 * ScrollTop
 * Floating button that appears after the reader scrolls past the hero
 * and returns them to the top with a smooth (Lenis-driven) scroll.
 */
function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-top"
          onClick={handleClick}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          whileHover={{ scale: 1.08, boxShadow: '0 14px 30px -10px rgba(212,175,55,0.65)' }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollTop
