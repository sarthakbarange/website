import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaMoon, FaSun, FaGraduationCap, FaBell } from 'react-icons/fa'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowNotifications(false)
  }, [location])

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Load notifications from localStorage
  const loadNotices = () => {
    try {
      const storedNotices = localStorage.getItem('notices')
      if (storedNotices) {
        const parsed = JSON.parse(storedNotices)
        // Sort by date descending
        const sorted = parsed.sort((a, b) => new Date(b.date) - new Date(a.date))
        setNotifications(sorted.slice(0, 4))
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    loadNotices()

    const markedRead = sessionStorage.getItem('notificationsRead')
    if (markedRead === 'true') {
      setHasUnread(false)
    }

    const handleNoticesUpdate = () => {
      loadNotices()
      setHasUnread(true)
      sessionStorage.removeItem('notificationsRead')
    }

    window.addEventListener('notices-updated', handleNoticesUpdate)
    return () => window.removeEventListener('notices-updated', handleNoticesUpdate)
  }, [])

  const markAllAsRead = () => {
    setHasUnread(false)
    sessionStorage.setItem('notificationsRead', 'true')
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admission' },
    { name: 'Online Test', path: '/online-test' },
    { name: 'Results', path: '/results' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-darkBackground/95 backdrop-blur-md shadow-lg'
          : 'bg-white dark:bg-darkBackground'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-primary dark:text-white">
                Excellent Academy
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Empowering Future Leaders
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Notification Bell Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                aria-label="View notifications"
              >
                <FaBell className="text-gray-700 dark:text-gray-300 text-xl" />
                {hasUnread && (
                  <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-red-500 border-2 border-white dark:border-darkBackground rounded-full animate-pulse" />
                )}
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-80 bg-white/95 dark:bg-darkBackground/95 border border-gray-100 dark:border-gray-850 backdrop-blur-md shadow-2xl rounded-2xl p-4 overflow-hidden z-50 text-left"
                  >
                    <div className="flex items-center justify-between border-b dark:border-gray-800 pb-2 mb-3">
                      <h3 className="font-heading font-bold text-sm text-gray-900 dark:text-white">
                        Recent Notifications
                      </h3>
                      {hasUnread && (
                        <button
                          onClick={markAllAsRead}
                          className="text-xs text-primary dark:text-secondary hover:underline font-medium"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    <div className="space-y-3 max-h-72 overflow-y-auto">
                      {notifications.length > 0 ? (
                        notifications.map((notif) => (
                          <Link
                            key={notif.id}
                            to="/notice"
                            className="block p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-start justify-between">
                              <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary dark:text-secondary rounded text-[10px] font-medium mb-1">
                                {notif.category}
                              </span>
                              {notif.important && (
                                <span className="w-2 h-2 bg-red-500 rounded-full" />
                              )}
                            </div>
                            <h4 className="font-heading font-semibold text-xs text-gray-950 dark:text-white mb-0.5 line-clamp-1">
                              {notif.title}
                            </h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                              {notif.content}
                            </p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center text-xs text-gray-500 py-4">
                          No notifications yet.
                        </p>
                      )}
                    </div>

                    <div className="border-t dark:border-gray-800 pt-2.5 mt-3 text-center">
                      <Link
                        to="/notice"
                        onClick={() => setShowNotifications(false)}
                        className="text-xs font-semibold text-primary dark:text-secondary hover:underline"
                      >
                        View all notices
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500 text-xl" />
              ) : (
                <FaMoon className="text-gray-700 text-xl" />
              )}
            </button>

            {/* Enroll Button */}
            <Link
              to="/admission"
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Notification Center for Mobile */}
            <Link
              to="/notice"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
              aria-label="Notifications"
            >
              <FaBell className="text-gray-700 dark:text-gray-300 text-lg" />
              {hasUnread && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border border-white dark:border-darkBackground rounded-full" />
              )}
            </Link>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 text-lg" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-gray-700 dark:text-gray-300 text-xl" />
              ) : (
                <FaBars className="text-gray-700 dark:text-gray-300 text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-darkBackground border-t dark:border-gray-800"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admission"
                className="block px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-sm font-medium text-center mt-4"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
