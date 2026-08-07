import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlinePlus } from 'react-icons/hi'
import './FAQ.css'

const FAQS = [
  {
    q: 'What makes the Bilona method different?',
    a: 'The Bilona method churns curd (not cream) using a hand-operated wooden churner, then slow-cooks the butter over a low flame. It takes far longer than industrial methods, but yields a more granular, aromatic ghee with better nutrient retention.',
  },
  {
    q: 'Is A2 Gold Ghee suitable for lactose-intolerant customers?',
    a: 'Ghee is almost entirely fat with the milk solids removed during simmering, so it contains negligible lactose and casein. Most people with lactose sensitivity tolerate it well, though we recommend checking with a doctor for severe intolerances.',
  },
  {
    q: 'How should I store the ghee once opened?',
    a: 'Store at room temperature in a cool, dry place, always using a clean, dry spoon. Ghee does not require refrigeration and has a long natural shelf life thanks to its low moisture content.',
  },
  {
    q: 'Where does the milk come from?',
    a: 'We source exclusively from small family farms with grass-fed, free-grazing A2 cows, all within a short distance of our churning facility to keep the milk as fresh as possible.',
  },
  {
    q: 'Do you offer lab testing or certification?',
    a: 'Every batch is lab-tested for purity, adulteration, and fat content before it ships. Test summaries are available on request through our contact form.',
  },
]

/**
 * FAQ
 * Accordion built with Framer Motion's height auto-animate pattern.
 * Only one item can be open at a time to keep the layout predictable.
 */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section className="faq section" id="faq">
      <div className="container faq__inner">
        <div className="section-heading">
          <span className="eyebrow">Good to Know</span>
          <h2 className="faq__title">Frequently Asked Questions</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                <button
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <motion.span
                    className="faq__icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <HiOutlinePlus />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="faq__answer">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
