import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { HiOutlineArrowDown } from 'react-icons/hi'
import GheeJar from '../../assets/images/GheeJar'
import './Hero.css'

const STATS = [
  { value: 100, suffix: '%', label: 'Pure A2 Ghee' },
  { value: 12, suffix: 'hrs', label: 'Bilona Churned' },
  { value: 0, suffix: '', label: 'Chemicals Added', display: 'Zero' },
  { value: 5, suffix: '★', label: 'Lab Tested Batches' },
]

/**
 * Hero
 * Full-viewport opening statement: animated gradient atmosphere, a
 * floating jar illustration, a GSAP-timed headline reveal, and a
 * counted-up statistics row that anchors the brand's core promises.
 */
function Hero() {
  const headlineRef = useRef(null)
  const statRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero__eyebrow', { opacity: 0, y: 16, duration: 0.6 })
        .from(
          '.hero__line',
          { opacity: 0, y: '100%', duration: 0.9, stagger: 0.12 },
          '-=0.3'
        )
        .from('.hero__desc', { opacity: 0, y: 16, duration: 0.7 }, '-=0.5')
        .from('.hero__actions > *', { opacity: 0, y: 16, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.hero__visual', { opacity: 0, scale: 0.88, duration: 1 }, '-=0.9')
        .from('.hero__stat', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.5')

      // Animated counters
      statRefs.current.forEach((el, i) => {
        if (!el) return
        const target = STATS[i]
        if (typeof target.value !== 'number' || target.display) return
        const counter = { val: 0 }
        gsap.to(counter, {
          val: target.value,
          duration: 1.6,
          delay: 1.4,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(counter.val) + target.suffix
          },
        })
      })

      // Gentle floating jar
      gsap.to('.hero__visual-jar', {
        y: -18,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Ambient gradient drift
      gsap.to('.hero__aura', {
        rotate: 360,
        duration: 60,
        repeat: -1,
        ease: 'none',
      })
    }, headlineRef)

    return () => ctx.revert()
  }, [])

  const particles = Array.from({ length: 16 })

  return (
    <section className="hero" id="home" ref={headlineRef}>
      <div className="hero__aura" aria-hidden="true" />

      <div className="hero__particles" aria-hidden="true">
        {particles.map((_, i) => (
          <span
            key={i}
            className="hero__particle"
            style={{
              left: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 8) * 0.6}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow eyebrow">Traditional Bilona &middot; Est. Heritage</span>

          <h1 className="hero__headline">
            <span className="hero__line-wrap">
              <span className="hero__line">Liquid Gold,</span>
            </span>
            <span className="hero__line-wrap">
              <span className="hero__line hero__line--accent">Churned Slowly.</span>
            </span>
          </h1>

          <p className="hero__desc">
            A2 Gold Ghee is hand-churned from grass-fed A2 milk using the centuries-old
            Bilona method — no shortcuts, no machines, no compromise. Just pure,
            golden ghee crafted for a modern table.
          </p>

          <div className="hero__actions">
            <a href="#products" className="btn btn-primary">
              Shop the Collection
            </a>
            <a href="#process" className="btn btn-outline">
              Discover Our Craft
            </a>
          </div>

          <div className="hero__stats">
            {STATS.map((stat, i) => (
              <div className="hero__stat" key={stat.label}>
                <span
                  className="hero__stat-value"
                  ref={(el) => (statRefs.current[i] = el)}
                >
                  {stat.display ?? `0${stat.suffix}`}
                </span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="hero__visual"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="hero__visual-ring" />
          <GheeJar className="hero__visual-jar" id="hero" />
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span>Scroll</span>
        <HiOutlineArrowDown className="hero__scroll-icon" />
      </a>
    </section>
  )
}

export default Hero
