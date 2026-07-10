import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaUser, FaPhone, FaEnvelope, FaBook, FaGraduationCap, 
  FaDownload, FaClock, FaCheckCircle, FaCalculator, FaRupeeSign, FaPercent 
} from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    class: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  // Calculator State
  const [calcCourse, setCalcCourse] = useState('JEE Main & Advanced')
  const [academicMarks, setAcademicMarks] = useState(85)
  const [appliedScholarship, setAppliedScholarship] = useState(null)

  const courseFees = {
    'JEE Main & Advanced': 150000,
    'NEET Preparation': 140000,
    'MHT CET': 80000,
    'Foundation Batch (Class 8-10)': 60000,
    'Class 8-10 Board Preparation': 45000,
    'Class 11-12 Science': 70000,
    'Spoken English': 15000,
    'Computer Courses': 25000
  }

  const getScholarshipPercent = (marks) => {
    if (marks >= 95) return 90
    if (marks >= 90) return 50
    if (marks >= 80) return 25
    if (marks >= 70) return 10
    return 0
  }

  const getCourseDisplayName = (key) => {
    // Helper to format course key
    return key
  }

  const originalFee = courseFees[calcCourse] || 0
  const discountPercent = getScholarshipPercent(academicMarks)
  const discountAmount = originalFee * (discountPercent / 100)
  const finalFee = originalFee - discountAmount

  const handleApplyScholarship = () => {
    setFormData({
      ...formData,
      course: calcCourse,
      message: `I qualify for a ${discountPercent}% scholarship based on my score of ${academicMarks}%. Please enroll me in this course with the adjusted fees of ₹${finalFee.toLocaleString('en-IN')}.`
    })
    setAppliedScholarship({
      course: calcCourse,
      percent: discountPercent,
      original: originalFee,
      discount: discountAmount,
      final: finalFee
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData, appliedScholarship)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setAppliedScholarship(null)
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        class: '',
        message: ''
      })
    }, 4000)
  }

  const courses = [
    'JEE Main & Advanced',
    'NEET Preparation',
    'MHT CET',
    'Foundation Batch (Class 8-10)',
    'Class 8-10 Board Preparation',
    'Class 11-12 Science',
    'Spoken English',
    'Computer Courses'
  ]

  const classes = ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Other']

  const documents = [
    'Recent passport-size photographs (2 copies)',
    'Previous year\'s marksheet',
    'School ID proof',
    'Aadhar card copy',
    'Parent\'s ID proof',
    'Admission form duly filled and signed'
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
              Admission Form
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Take the first step towards academic success. Complete the form to initiate counseling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <SectionHeader
              title="Admission Inquiry Form"
              subtitle="Join Excellence Academy"
              description="Fill out the form below and our counselor will contact you shortly."
            />

            {submitted ? (
              <Card className="text-center py-12">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-2">
                  Form Submitted Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our counselor will contact you within 24 hours.
                </p>
              </Card>
            ) : (
              <Card>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {appliedScholarship && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3 text-green-800 dark:text-green-300">
                        <FaPercent className="text-lg" />
                        <div>
                          <span className="font-bold text-sm">
                            {appliedScholarship.percent}% Scholarship Applied!
                          </span>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">
                            Course: {appliedScholarship.course} • Fees: ₹{appliedScholarship.final.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setAppliedScholarship(null)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Course *
                      </label>
                      <div className="relative">
                        <FaBook className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                          name="course"
                          required
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none text-gray-900 dark:text-white"
                        >
                          <option value="">Select a course</option>
                          {courses.map(course => (
                            <option key={course} value={course}>{course}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Class *
                      </label>
                      <div className="relative">
                        <FaGraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                          name="class"
                          required
                          value={formData.class}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none text-gray-900 dark:text-white"
                        >
                          <option value="">Select class</option>
                          {classes.map(cls => (
                            <option key={cls} value={cls}>{cls}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Scholarship & Fee Calculator Widget */}
            <Card hover className="relative overflow-hidden border border-gray-200 dark:border-gray-805 bg-white dark:bg-gray-900 shadow-md">
              <div className="flex items-center space-x-2 border-b dark:border-gray-800 pb-3 mb-4">
                <FaCalculator className="text-xl text-primary" />
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white uppercase tracking-wider text-sm">
                  Scholarship Estimator
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wider">
                    Select Target Course
                  </label>
                  <select
                    value={calcCourse}
                    onChange={(e) => setCalcCourse(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm text-gray-950 dark:text-white"
                  >
                    {Object.keys(courseFees).map(course => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Academic Score / Marks
                    </label>
                    <span className="text-sm font-bold text-primary dark:text-secondary">{academicMarks}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={academicMarks}
                    onChange={(e) => setAcademicMarks(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>50% Marks</span>
                    <span>100% Marks</span>
                  </div>
                </div>

                {/* Live Breakdown Sheet */}
                <div className="bg-gray-50 dark:bg-gray-850 p-3.5 rounded-xl border border-gray-150 dark:border-gray-800 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                    <span>Base Annual Fee:</span>
                    <span className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <FaRupeeSign className="text-[10px]" /> {originalFee.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                    <span>Scholarship Level:</span>
                    <span className="font-bold text-green-500 flex items-center">
                      {discountPercent > 0 ? `${discountPercent}% Off` : 'None'}
                    </span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
                      <span>Discount Saved:</span>
                      <span className="font-semibold text-green-500 flex items-center">
                        - <FaRupeeSign className="text-[10px]" /> {discountAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  <div className="border-t dark:border-gray-800 pt-2 flex items-center justify-between font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                    <span>Estimated Net Fee:</span>
                    <span className="text-primary dark:text-secondary flex items-center font-bold">
                      <FaRupeeSign className="text-xs" /> {finalFee.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <Button 
                  type="button" 
                  onClick={handleApplyScholarship} 
                  className="w-full !py-2.5 text-xs font-semibold"
                >
                  Apply with This Scholarship
                </Button>
              </div>
            </Card>

            {/* Download Brochure */}
            <Card hover>
              <div className="text-center">
                <FaDownload className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Download Brochure
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Get detailed information about our courses and fee structure.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download PDF
                </Button>
              </div>
            </Card>

            {/* Fee Structure */}
            <Card hover>
              <div className="text-center">
                <FaBook className="text-4xl text-secondary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Fee Structure
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  View detailed fee structure for all courses.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Fees
                </Button>
              </div>
            </Card>

            {/* Batch Timing */}
            <Card hover>
              <div className="text-center">
                <FaClock className="text-4xl text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Batch Timings
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Check available batch timings for your preferred course.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Timings
                </Button>
              </div>
            </Card>

            {/* Contact */}
            <Card gradient>
              <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-4">
                Need Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Our admission counselors are here to help you choose the right course.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Phone:</span> +91 98765 43210
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Email:</span> admission@excellenceacademy.com
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Required Documents */}
      <Section gradient>
        <SectionHeader
          title="Required Documents"
          subtitle="Documents for Admission"
          description="Please bring the following documents when you visit our center for admission."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">{doc}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Admission Process */}
      <Section>
        <SectionHeader
          title="Admission Process"
          subtitle="Simple Steps to Enroll"
          description="Follow these simple steps to complete your admission process."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Fill Form', desc: 'Submit the admission form online or at our center' },
            { step: '2', title: 'Counseling', desc: 'Meet our counselor for course guidance' },
            { step: '3', title: 'Assessment', desc: 'Take a simple assessment test if required' },
            { step: '4', title: 'Enrollment', desc: 'Complete fee payment and start learning' },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{item.step}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Admission
