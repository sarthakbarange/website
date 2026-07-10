import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaPhone, FaEnvelope, FaBook, FaGraduationCap, FaDownload, FaClock, FaCheckCircle } from 'react-icons/fa'

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
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
              Admission
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Take the first step towards your academic success. Fill out the admission form to enroll in our courses.
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
              title="Admission Form"
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
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
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
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
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
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
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
