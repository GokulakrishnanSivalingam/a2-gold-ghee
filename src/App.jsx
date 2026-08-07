import { useEffect, useState } from 'react'
import useLenis from './hooks/useLenis'

import Loader from './components/Loader/Loader'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import ScrollTop from './components/ScrollTop/ScrollTop'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Process from './components/Process/Process'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useLenis()

  useEffect(() => {
    // Simulated brand-forward loading sequence — gives the page-load
    // moment a deliberate, unhurried feel instead of a blank flash.
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
  }, [isLoading])

  return (
    <>
      <Loader isLoading={isLoading} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App
