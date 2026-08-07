import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import './CTA.css'

gsap.registerPlugin(ScrollTrigger)

/**
 * CTA
 * A dark, high-contrast full-width band that closes the persuasive arc
 * of the page before the contact form — an animated gold sheen drifts
 * across the background to keep it from feeling static.
 */
function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta__content > *', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.to('.cta__sheen', {
        x: '120%',
        duration: 4.5,
        repeat: -1,
        ease: 'power1.inOut',
        repeatDelay: 1.2,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="cta" ref={sectionRef}>
      <div className="cta__sheen" aria-hidden="true" />
      <div className="container cta__content">
        <span className="eyebrow" style={{ color: 'var(--color-gold-light)', justifyContent: 'center' }}>
          Limited Batches Weekly
        </span>
        <h2 className="cta__title">Taste the difference tradition makes.</h2>
        <p className="cta__desc">
          Every jar is hand-poured in small weekly batches. Once a batch sells out, the next
          begins churning — never rushed, never mass-produced.
        </p>
        <motion.a
          href="#products"
          className="btn btn-primary cta__btn"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Order Now
        </motion.a>
      </div>
    </section>
  )
}

export default CTA
