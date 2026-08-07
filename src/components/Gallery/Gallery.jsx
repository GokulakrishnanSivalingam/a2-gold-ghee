import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import jar250ml from '../../assets/images/gheesmall.png'
import jar500ml from '../../assets/images/gheemedium.png'
import jar1l from '../../assets/images/gheelarge.png'
import './Gallery.css'

gsap.registerPlugin(ScrollTrigger)

const PRODUCTS = [
  {
    id: '250ml',
    size: '250 ml',
    name: 'The Starter Jar',
    desc: 'Perfect for first-time tasters and everyday cooking.',
    price: '₹549',
    image: jar250ml,
  },
  {
    id: '500ml',
    size: '500 ml',
    name: 'The Kitchen Staple',
    desc: 'Our most-loved size, made for the household that cooks daily.',
    price: '₹999',
    featured: true,
    image: jar500ml,
  },
  {
    id: '1l',
    size: '1 L',
    name: 'The Family Reserve',
    desc: 'Generous supply for families and gifting season.',
    price: '₹1,849',
    image: jar1l,
  },
]

/**
 * Gallery
 * Product showcase with three jar sizes. Hover state triggers an image
 * zoom, a golden glow, and an elevated shadow to signal purchase intent.
 */
function Gallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery__card', {
        opacity: 0,
        y: 44,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery__grid',
          start: 'top 78%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="gallery section" id="products" ref={sectionRef}>
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>The Collection</span>
          <h2 className="gallery__title">Choose Your Jar</h2>
          <p className="gallery__subtitle">
            Every size, hand-poured from the same small Bilona batch.
          </p>
        </div>

        <div className="gallery__grid">
          {PRODUCTS.map((product) => (
            <motion.div
              className={`gallery__card ${product.featured ? 'is-featured' : ''}`}
              key={product.id}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {product.featured && <span className="gallery__badge">Best Seller</span>}

              <div className="gallery__image-wrap">
                <img
                  src={product.image}
                  alt={`${product.name} — A2 Gold Ghee ${product.size}`}
                  className="gallery__image"
                  loading="lazy"
                />
              </div>

              <span className="gallery__size">{product.size}</span>
              <h3 className="gallery__name">{product.name}</h3>
              <p className="gallery__desc">{product.desc}</p>

              <div className="gallery__footer">
                <span className="gallery__price">{product.price}</span>
                <button className="btn btn-primary gallery__buy" type="button">
                  <HiOutlineShoppingBag />
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery