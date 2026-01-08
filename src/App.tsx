import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './components/Navbar'
import { NeuHero } from './components/Hero'
import { RevealBento } from './components/BentoGrid'
import { LifeSection } from './components/Life'

function HomePage() {
  return (
    <>
      <NeuHero />
      <RevealBento />
    </>
  )
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Check if there's a hash in the URL (like #about)
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life" element={<LifeSection />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  )
}

export default App
