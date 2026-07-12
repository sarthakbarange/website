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

    // Initialize default notices if not present
    if (!localStorage.getItem('notices')) {
      const defaultNotices = [
        {
          id: 1,
          title: 'Admission Open for 2024-25 Academic Year',
          category: 'Admission',
          date: '2024-01-15',
          content: 'Admissions are now open for all courses for the 2024-25 academic year. Visit our center or apply online.',
          important: true
        },
        {
          id: 2,
          title: 'Free Mock Test Series - JEE Main 2024',
          category: 'Exam',
          date: '2024-01-10',
          content: 'Register for our free mock test series for JEE Main 2024. Tests will be conducted every Sunday.',
          important: true
        },
        {
          id: 3,
          title: 'New Foundation Batch Starting for Class 8',
          category: 'New Course',
          date: '2024-01-05',
          content: 'A new foundation batch for Class 8 students will start from February 1st. Limited seats available.',
          important: false
        },
        {
          id: 4,
          title: 'Winter Vacation Schedule',
          category: 'Holiday',
          date: '2023-12-20',
          content: 'The institute will remain closed from December 25th to January 1st for winter vacation.',
          important: false
        },
        {
          id: 5,
          title: 'Result Declaration - Mid-Term Exams',
          category: 'Result',
          date: '2023-12-15',
          content: 'Mid-term examination results have been declared. Students can collect their report cards from the office.',
          important: false
        },
        {
          id: 6,
          title: 'Parent-Teacher Meeting Schedule',
          category: 'Meeting',
          date: '2023-12-10',
          content: 'Parent-teacher meeting will be held on December 20th. All parents are requested to attend.',
          important: false
        },
        {
          id: 7,
          title: 'Scholarship Test Registration',
          category: 'Scholarship',
          date: '2023-12-05',
          content: 'Registration open for scholarship test. Top performers will get up to 50% scholarship on course fees.',
          important: true
        },
        {
          id: 8,
          title: 'Change in Batch Timings',
          category: 'Schedule',
          date: '2023-12-01',
          content: 'Due to exam season, batch timings have been revised. New schedule effective from December 5th.',
          important: false
        }
      ]
      localStorage.setItem('notices', JSON.stringify(defaultNotices))
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
        
        <main className="pt-16 sm:pt-[4.5rem] md:pt-20">
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
            <Route path="/admin" element={<AdminDashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
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
