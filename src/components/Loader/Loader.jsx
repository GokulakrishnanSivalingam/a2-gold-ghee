import { AnimatePresence, motion } from 'framer-motion'
import './Loader.css'

/**
 * Loader
 * Full-screen brand intro shown while the page's first assets settle.
 * Purely presentational — driven by the `isLoading` flag from App.
 */
function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="loader__graphic">
            <motion.div
              className="loader__ring ring--outer"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'linear' }}
            />
            <motion.div
              className="loader__ring ring--middle"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2.6, ease: 'linear' }}
            />
            <motion.div
              className="loader__ring ring--inner"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
            />
            <motion.div
              className="loader__core"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <motion.div
            className="loader__brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="loader__letter">A2</span>
            <span className="loader__word">GOLD GHEE</span>
          </motion.div>

          <motion.p
            className="loader__caption"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Slow-churned. Never rushed.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
