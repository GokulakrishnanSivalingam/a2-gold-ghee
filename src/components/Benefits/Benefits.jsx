import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import {
  GiFruitBowl,
  GiHealthNormal,
  GiChemicalDrop,
  GiWhisk,
  GiFarmTractor,
  GiCow,
} from 'react-icons/gi'
import './Benefits.css'

gsap.registerPlugin(ScrollTrigger)

const BENEFITS = [
  {
    icon: <GiFruitBowl />,
    title: 'Rich Nutrition',
    desc: 'Packed with fat-soluble vitamins A, D, E and K to support everyday vitality.',
  },
  {
    icon: <GiHealthNormal />,
    title: 'Healthy Fats',
    desc: 'A natural source of short and medium-chain fatty acids for sustained energy.',
  },
  {
    icon: <GiChemicalDrop />,
    title: 'No Chemicals',
    desc: 'Zero preservatives, additives, or artificial flavouring — ever.',
  },
  {
    icon: <GiWhisk />,
    title: 'Traditional Bilona',
    desc: 'Hand-churned in small batches using a centuries-old wooden churner.',
  },
  {
    icon: <GiFarmTractor />,
    title: 'Farm Fresh',
    desc: 'Sourced directly from trusted family farms, delivered within days.',
  },
  {
    icon: <GiCow />,
    title: 'Grass Fed',
    desc: 'Our cows graze freely on open pasture — no grain-fed shortcuts.',
  },
]

/**
 * Benefits
 * Six-card grid, each revealing with a gentle stagger on scroll and a
 * subtle lift-and-glow interaction on hover (Framer Motion).
 */
function Benefits() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.benefits__card', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefits__grid',
          start: 'top 78%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="benefits section" id="benefits" ref={sectionRef}>
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Why A2 Gold Ghee</span>
          <h2 className="benefits__title">Every Spoonful, Intentional</h2>
          <p className="benefits__subtitle">
            Six reasons our ghee is trusted in kitchens that care about what they cook with.
          </p>
        </div>

        <div className="benefits__grid">
          {BENEFITS.map((b) => (
            <motion.div
              className="benefits__card"
              key={b.title}
              whileHover={{ y: -10, boxShadow: '0 24px 50px -20px rgba(212,175,55,0.45)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="benefits__icon">{b.icon}</span>
              <h3 className="benefits__card-title">{b.title}</h3>
              <p className="benefits__card-desc">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
