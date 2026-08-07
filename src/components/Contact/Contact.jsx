import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineCheckCircle } from 'react-icons/hi'
import './Contact.css'

const INITIAL_FORM = { name: '', email: '', message: '' }

/**
 * Contact
 * Modern contact form (no backend — this is a front-end interview
 * assignment). Submission is simulated locally with a success state.
 */
function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm(INITIAL_FORM)
    }, 3200)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="contact__title">We'd Love to Hear From You</h2>
          <p className="contact__desc">
            Questions about a batch, bulk orders, or partnership ideas — reach out and our
            team will respond within one business day.
          </p>

          <ul className="contact__details">
            <li>
              <HiOutlineMail />
              <span>hello@a2goldghee.com</span>
            </li>
            <li>
              <HiOutlinePhone />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <HiOutlineLocationMarker />
              <span>Villupuram, India</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {submitted ? (
            <motion.div
              className="contact__success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <HiOutlineCheckCircle />
              <h3>Message Sent</h3>
              <p>Thank you — we'll be in touch shortly.</p>
            </motion.div>
          ) : (
            <>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary contact__submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
