import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaBook, FaClock, FaUsers, FaRupeeSign, FaInfoCircle } from 'react-icons/fa'

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
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
              <Card hover className="h-full overflow-hidden">
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

                <div className="flex items-center justify-between">
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
              <p className="text-gray-600 dark:text-gray-400">
                {selectedCourse.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <FaBook className="text-primary mr-2" />
                  <span className="font-medium text-gray-900 dark:text-white">Class</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{selectedCourse.class}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <FaClock className="text-primary mr-2" />
                  <span className="font-medium text-gray-900 dark:text-white">Duration</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{selectedCourse.duration}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <FaRupeeSign className="text-primary mr-2" />
                  <span className="font-medium text-gray-900 dark:text-white">Fees</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{selectedCourse.fees}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <FaUsers className="text-primary mr-2" />
                  <span className="font-medium text-gray-900 dark:text-white">Timing</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{selectedCourse.timing}</p>
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
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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
                  <li key={index} className="flex items-start">
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
