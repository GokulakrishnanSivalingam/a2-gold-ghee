import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GheeJar from '../../assets/images/ghee.png'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

/**
 * About
 * Two-column editorial section telling the brand story, paired with a
 * scroll-revealed product visual. Uses GSAP ScrollTrigger for a
 * cinematic clip-path reveal rather than a plain fade.
 */
function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about__eyebrow, .about__title, .about__paragraph, .about__quote', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

      gsap.fromTo(
        '.about__image-frame',
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__image-frame">
            <img
  src={GheeJar}
  alt="A2 Gold Ghee Jar"
  class="hero-image"
/>
          </div>
          <div className="about__badge">
            <span className="about__badge-value">1</span>
            <span className="about__badge-label">
              Generation
              <br />
              Family Recipe
            </span>
          </div>
        </div>

        <div className="about__content">
          <span className="about__eyebrow eyebrow">Our Story</span>
          <h2 className="about__title">
            Rooted in ritual,
            <br />
            crafted for today.
          </h2>
          <p className="about__paragraph">
            A2 Gold Ghee began as a quiet promise between a grandmother and her
            copper vessel: never rush the milk, never trade purity for
            convenience. Decades later, that promise still guides every batch —
            from grass-fed A2 milk to curd, hand-churned butter to slow-simmered
            ghee, each step performed exactly as it always has been.
          </p>
          <p className="about__paragraph">
            What we've changed is how that ritual reaches you — in a jar
            designed for the modern kitchen, backed by lab-tested purity, and
            delivered with the same care it took to make.
          </p>
          <blockquote className="about__quote">
            "We didn't modernize the process. We modernized the way you
            experience it."
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About
