import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import WhatsAppFloat from './components/WhatsAppFloat'
import CallFloat from './components/CallFloat'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Faculty from './pages/Faculty'
import Results from './pages/Results'
import Gallery from './pages/Gallery'
import Admission from './pages/Admission'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import Downloads from './pages/Downloads'
import Notice from './pages/Notice'
import OnlineTest from './pages/OnlineTest'
import Careers from './pages/Careers'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', !darkMode)
  }

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <ScrollProgress />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/results" element={<Results />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/online-test" element={<OnlineTest />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
        <WhatsAppFloat />
        <CallFloat />
      </div>
    </Router>
  )
}

export default App
