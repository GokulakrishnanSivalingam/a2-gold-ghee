import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from 'react-icons/fa'
import './Footer.css'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Process', href: '#process' },
  { label: 'Products', href: '#products' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com' },
  { icon: <FaPinterestP />, label: 'Pinterest', href: 'https://pinterest.com' },
  { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com' },
]

/**
 * Footer
 * Brand sign-off with logo, navigation, socials, and copyright.
 */
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-mark">A2</span>
            <span className="footer__logo-text">
              Gold Ghee
              <em>Bilona Craft</em>
            </span>
          </a>
          <p className="footer__tagline">Pure, hand-churned ghee for a modern table.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="footer__social-icon"
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} A2 Gold Ghee. All rights reserved. <strong>Developed by Gokulakrishnan</strong></p>
          <p className="footer__credit">Crafted with care, the traditional way.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
