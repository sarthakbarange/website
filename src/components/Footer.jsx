import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGraduationCap } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Online Test', path: '/online-test' },
    { name: 'Results', path: '/results' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const courses = [
    { name: 'JEE Main & Advanced', path: '/courses' },
    { name: 'NEET', path: '/courses' },
    { name: 'MHT CET', path: '/courses' },
    { name: 'Foundation (8-10)', path: '/courses' },
    { name: 'Spoken English', path: '/courses' },
    { name: 'Computer Courses', path: '/courses' },
  ]

  const importantLinks = [
    { name: 'Admissions', path: '/admission' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Notice Board', path: '/notice' },
    { name: 'Careers', path: '/careers' },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Excellent Academy</h3>
                <p className="text-xs text-gray-400">Empowering Future Leaders</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Excellent Academy is a premier coaching institute dedicated to providing quality education and preparing students for competitive exams with comprehensive learning programs.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Education Street, Knowledge Park, City - 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:info@Excellentacademy.com" className="text-gray-400 hover:text-white transition-colors">
                  info@Excellentacademy.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-primary flex-shrink-0" />
                <span className="text-gray-400">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Excellent Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
