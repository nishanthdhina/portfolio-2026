import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/life" element={<LifeSection />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
