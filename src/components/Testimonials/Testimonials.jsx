import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaStar } from 'react-icons/fa'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS = [
  {
    name: 'Anjali Mehra',
    role: 'Home Chef, Mumbai',
    review:
      'The aroma alone tells you this is made differently. My grandmother approves — and she is very hard to impress.',
    initials: 'AM',
  },
  {
    name: 'Rohan Kapoor',
    role: 'Nutrition Coach, Delhi',
    review:
      'I recommend this to clients switching to healthier fats. Clean label, visible texture, consistent batches.',
    initials: 'RK',
  },
  {
    name: 'Sneha Iyer',
    role: 'Food Blogger, Bengaluru',
    review:
      "It's rare to find ghee this granular and golden. It's become the finishing touch on every dish I photograph.",
    initials: 'SI',
  },
]

/**
 * Testimonials
 * Modern review cards with a scroll reveal animation and simple
 * initials-based avatars (kept illustrative rather than photographic,
 * consistent with the rest of the brand's visual system).
 */
function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonials__card', {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials__grid',
          start: 'top 78%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="testimonials section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Trusted By</span>
          <h2 className="testimonials__title">What Our Customers Say</h2>
        </div>

        <div className="testimonials__grid">
          {REVIEWS.map((r) => (
            <div className="testimonials__card" key={r.name}>
              <div className="testimonials__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonials__text">&ldquo;{r.review}&rdquo;</p>
              <div className="testimonials__person">
                <span className="testimonials__avatar">{r.initials}</span>
                <div>
                  <p className="testimonials__name">{r.name}</p>
                  <p className="testimonials__role">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
