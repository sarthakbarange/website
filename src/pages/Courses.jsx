import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaSearch, FaFilter, FaBook, FaClock, FaUsers, FaRupeeSign, 
  FaInfoCircle, FaMagic, FaArrowRight, FaArrowLeft, FaTimes, FaUndo, FaStar 
} from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'
import coursesData from '../data/courses.json'

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Course Finder Quiz State
  const [quizStep, setQuizStep] = useState(0) // 0: Start, 1: Class, 2: Goal, 3: Format, 4: Recommendation
  const [quizAnswers, setQuizAnswers] = useState({
    classLevel: '',
    goal: '',
    format: ''
  })
  const [recommendedCourse, setRecommendedCourse] = useState(null)

  const categories = ['All', 'Engineering', 'Medical', 'Foundation', 'School', 'Skill Development', 'State Level']

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openModal = (course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCourse(null)
  }

  // Course Finder Quiz Logic
  const startQuiz = () => {
    setQuizStep(1)
    setQuizAnswers({ classLevel: '', goal: '', format: '' })
    setRecommendedCourse(null)
  }

  const selectAnswer = (field, value) => {
    const newAnswers = { ...quizAnswers, [field]: value }
    setQuizAnswers(newAnswers)

    // Advance to next step automatically on select
    if (quizStep < 3) {
      setQuizStep(quizStep + 1)
    } else {
      // Calculate Recommendation on last step selection
      calculateRecommendation(newAnswers)
      setQuizStep(4)
    }
  }

  const handlePrevStep = () => {
    if (quizStep > 1) {
      setQuizStep(quizStep - 1)
    }
  }

  const calculateRecommendation = (answers) => {
    const { classLevel, goal, format } = answers
    let recommended = null

    // Logic based on answers
    if (classLevel === 'Class 8-10') {
      if (goal === 'JEE' || goal === 'NEET') {
        recommended = coursesData.find(c => c.id === 4) // Foundation Batch
      } else {
        recommended = coursesData.find(c => c.id === 7) // Class 8-10 Boards
      }
    } else if (classLevel === 'Class 11' || classLevel === 'Class 12' || classLevel === 'Repeater') {
      if (goal === 'JEE') {
        recommended = coursesData.find(c => c.id === 1) // JEE Course
      } else if (goal === 'NEET') {
        recommended = coursesData.find(c => c.id === 2) // NEET Course
      } else if (goal === 'Boards') {
        recommended = coursesData.find(c => c.id === 8) // 11-12 Science
      } else {
        recommended = coursesData.find(c => c.id === 3) // MHT CET
      }
    } else {
      // Skill Development target
      if (goal === 'Skills') {
        recommended = coursesData.find(c => c.id === 6) // Computer Courses
      } else {
        recommended = coursesData.find(c => c.id === 5) // Spoken English
      }
    }

    // Default Fallback
    if (!recommended) {
      recommended = coursesData.find(c => c.id === 1)
    }

    setRecommendedCourse(recommended)
  }

  const quizClasses = [
    { label: 'Class 8 - 10 (High School)', value: 'Class 8-10' },
    { label: 'Class 11 (Intermediate 1st Yr)', value: 'Class 11' },
    { label: 'Class 12 (Intermediate 2nd Yr)', value: 'Class 12' },
    { label: 'Class 12 Passed (Repeater / Dropper)', value: 'Repeater' },
    { label: 'College Student or Working Professional', value: 'Professional' }
  ]

  const quizGoals = [
    { label: 'JEE Main & Advanced (Engineering)', value: 'JEE' },
    { label: 'NEET UG (Medical Entrance)', value: 'NEET' },
    { label: 'School Board Exams Score Booster', value: 'Boards' },
    { label: 'Skill Upgradation & Careers', value: 'Skills' }
  ]

  const quizFormats = [
    { label: 'Weekday Evening Batches (Mon-Fri)', value: 'Weekdays' },
    { label: 'Weekend Intensive Classes (Sat-Sun)', value: 'Weekends' },
    { label: 'Flexible Self-Paced Timing', value: 'Flexible' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive coaching programs designed to help you achieve your academic goals and excel in competitive exams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Finder Interactive Widget */}
      <Section className="!pb-0">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {quizStep === 0 ? (
              <motion.div
                key="step-start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gradient-to-r from-primary/90 to-secondary/90 dark:from-primary/95 dark:to-secondary/95 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="space-y-3 z-10 text-left">
                  <span className="inline-flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-xs font-semibold">
                    <FaMagic className="text-yellow-300 mr-1.5" />
                    Interactive Advisor
                  </span>
                  <h3 className="font-heading font-bold text-2xl">
                    Find Your Perfect Batch in 30 Seconds!
                  </h3>
                  <p className="text-sm text-white/90 max-w-xl">
                    Answer 3 simple questions about your current grade and future academic objective to get a personalized recommendation.
                  </p>
                </div>

                <Button 
                  onClick={startQuiz} 
                  variant="accent" 
                  size="lg" 
                  icon={FaArrowRight}
                  className="z-10 shrink-0 shadow-lg"
                >
                  Start Course Finder
                </Button>
              </motion.div>
            ) : quizStep <= 3 ? (
              <motion.div
                key={`step-quiz-${quizStep}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-805 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-left text-gray-900 dark:text-white"
              >
                {/* Header & Close */}
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-6 relative z-10">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider font-mono">
                    Step {quizStep} of 3 • Course Finder
                  </span>
                  <button 
                    onClick={() => setQuizStep(0)} 
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-white"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-150 dark:bg-gray-800 h-1.5 rounded-full mb-6 relative z-10">
                  <div 
                    className="bg-primary h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${(quizStep / 3) * 100}%` }}
                  />
                </div>

                {/* Questions */}
                {quizStep === 1 && (
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-4">
                      Select your current academic standard:
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {quizClasses.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => selectAnswer('classLevel', item.value)}
                          className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-primary/50 hover:bg-primary/5 text-left transition-all text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                          <span className="font-medium text-sm sm:text-base">{item.label}</span>
                          <FaChevronRight className="text-gray-400 text-xs" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 2 && (
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-4">
                      What is your primary academic goal or target?
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {quizGoals.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => selectAnswer('goal', item.value)}
                          className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-primary/50 hover:bg-primary/5 text-left transition-all text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                          <span className="font-medium text-sm sm:text-base">{item.label}</span>
                          <FaChevronRight className="text-gray-400 text-xs" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {quizStep === 3 && (
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-4">
                      Choose your preferred batch format or schedule:
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {quizFormats.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => selectAnswer('format', item.value)}
                          className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-primary/50 hover:bg-primary/5 text-left transition-all text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                          <span className="font-medium text-sm sm:text-base">{item.label}</span>
                          <FaChevronRight className="text-gray-400 text-xs" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Back Navigation Button */}
                {quizStep > 1 && (
                  <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4 flex justify-start relative z-10">
                    <button 
                      onClick={handlePrevStep}
                      className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-primary transition-colors font-mono"
                    >
                      <FaArrowLeft className="mr-1.5" /> BACK
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="step-result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-805 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-gray-900 dark:text-white"
              >
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={() => setQuizStep(0)} 
                    className="text-gray-450 hover:text-gray-700 dark:hover:text-white text-lg"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="text-center mb-6 relative z-10">
                  <FaStar className="text-yellow-500 text-4xl mx-auto mb-2 animate-bounce" />
                  <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white">
                    Recommended Course For You!
                  </h3>
                  <p className="text-xs text-gray-450 mt-1 uppercase tracking-wider font-mono">
                    Based on your preferences
                  </p>
                </div>

                {/* Recommendation Card */}
                {recommendedCourse && (
                  <div className="bg-gray-50 dark:bg-gray-850 border border-gray-150 dark:border-gray-800 rounded-2xl p-5 sm:p-6 mb-6 flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <img
                      src={recommendedCourse.image}
                      alt={recommendedCourse.name}
                      className="w-full md:w-48 h-36 object-cover rounded-xl shadow border border-gray-200 dark:border-gray-700"
                    />
                    <div className="text-left space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 bg-primary/10 text-primary dark:text-secondary rounded-full text-xs font-semibold border border-primary/20">
                          {recommendedCourse.category}
                        </span>
                        <span className="text-xs text-green-600 font-bold font-mono">
                          ADMISSIONS OPEN
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                        {recommendedCourse.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {recommendedCourse.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 pt-1 font-mono">
                        <div>⏱️ {recommendedCourse.duration}</div>
                        <div>📖 {recommendedCourse.class}</div>
                        <div>👥 {recommendedCourse.timing}</div>
                        <div className="font-bold text-primary">💰 {recommendedCourse.fees}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <Button onClick={() => openModal(recommendedCourse)} variant="accent">
                    View Course Details
                  </Button>
                  <Button to="/admission" variant="secondary">
                    Enroll in this Batch
                  </Button>
                  <button 
                    onClick={startQuiz} 
                    className="text-xs text-gray-400 hover:text-primary hover:underline font-semibold flex items-center font-mono"
                  >
                    <FaUndo className="mr-1.5" /> RETAKE QUIZ
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* Search and Filter Section */}
      <Section>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <FaFilter className="text-gray-400" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {course.category}
                    </div>
                    {course.status === 'Open' && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                        Admissions Open
                      </div>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaBook className="mr-2 text-primary" />
                      <span>{course.class}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaClock className="mr-2 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaUsers className="mr-2 text-primary" />
                      <span>{course.timing}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FaRupeeSign className="mr-2 text-primary" />
                      <span>{course.fees}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t dark:border-gray-800 pt-4 mt-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {course.seats} seats available
                  </span>
                  <Button
                    size="sm"
                    onClick={() => openModal(course)}
                    icon={FaInfoCircle}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No courses found matching your search.
            </p>
          </div>
        )}
      </Section>

      {/* Course Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedCourse?.name}
        size="lg"
      >
        {selectedCourse && (
          <div className="space-y-6">
            <img
              src={selectedCourse.image}
              alt={selectedCourse.name}
              className="w-full h-64 object-cover rounded-xl"
            />

            <div>
              <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Course Description
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {selectedCourse.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-805">
                <div className="flex items-center mb-2">
                  <FaBook className="text-primary mr-2" />
                  <span className="font-medium text-gray-950 dark:text-white">Class</span>
                </div>
                <p className="text-gray-650 dark:text-gray-400 text-sm">{selectedCourse.class}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-805">
                <div className="flex items-center mb-2">
                  <FaClock className="text-primary mr-2" />
                  <span className="font-medium text-gray-950 dark:text-white">Duration</span>
                </div>
                <p className="text-gray-655 dark:text-gray-400 text-sm">{selectedCourse.duration}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-805">
                <div className="flex items-center mb-2">
                  <FaRupeeSign className="text-primary mr-2" />
                  <span className="font-medium text-gray-955 dark:text-white">Fees</span>
                </div>
                <p className="text-gray-660 dark:text-gray-400 text-sm">{selectedCourse.fees}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-805">
                <div className="flex items-center mb-2">
                  <FaUsers className="text-primary mr-2" />
                  <span className="font-medium text-gray-960 dark:text-white">Timing</span>
                </div>
                <p className="text-gray-665 dark:text-gray-400 text-sm">{selectedCourse.timing}</p>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Subjects Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCourse.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Course Features
              </h4>
              <ul className="space-y-2">
                {selectedCourse.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Available Seats:
                </span>
                <span className="ml-2 font-semibold text-primary">
                  {selectedCourse.seats}
                </span>
              </div>
              <Button to="/admission" size="lg">
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default Courses
