import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GiCow, GiMilkCarton, GiCheeseWedge, GiButter, GiWhisk, GiFire, GiHoneyJar } from 'react-icons/gi'
import './Process.css'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { icon: <GiCow />, title: 'Grass-Fed Cow', desc: 'Free-grazing A2 cows on open pasture.' },
  { icon: <GiMilkCarton />, title: 'Fresh Milk', desc: 'Milked daily and delivered within hours.' },
  { icon: <GiCheeseWedge />, title: 'Curd', desc: 'Naturally cultured overnight, the traditional way.' },
  { icon: <GiButter />, title: 'Butter', desc: 'Hand-extracted from the settled cream.' },
  { icon: <GiWhisk />, title: 'Bilona Churning', desc: 'Slow-churned in a wooden vessel, by hand.' },
  { icon: <GiFire />, title: 'Slow Heating', desc: 'Simmered gently over a controlled flame.' },
  { icon: <GiHoneyJar />, title: 'Pure Ghee', desc: 'Golden, aromatic, and ready for your table.' },
]

/**
 * Process
 * A vertical (desktop: horizontal) timeline of the Bilona method. The
 * connecting line "draws" itself via a scaleX/scaleY ScrollTrigger tween
 * as the reader scrolls, and each step fades in when it enters view —
 * numbering here is meaningful because it is a literal sequence of steps.
 */
function Process() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process__line-fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.process__track',
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      )

      gsap.utils.toArray('.process__step').forEach((step, i) => {
        gsap.from(step, {
          opacity: 0,
          y: 34,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
          delay: (i % 4) * 0.05,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="process section" id="process" ref={sectionRef}>
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The Bilona Method</span>
          <h2 className="process__title">From Pasture to Pure Ghee</h2>
          <p className="process__subtitle">
            Seven unhurried steps, honoring a process that hasn't changed in generations.
          </p>
        </div>

        <div className="process__track">
          <div className="process__line">
            <div className="process__line-fill" />
          </div>

          {STEPS.map((step, i) => (
            <div className="process__step" key={step.title}>
              <span className="process__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="process__icon">{step.icon}</span>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
