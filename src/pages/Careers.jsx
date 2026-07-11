import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaRupeeSign, FaClock, FaUser } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const jobOpenings = [
    {
      id: 1,
      title: 'Physics Faculty (JEE)',
      department: 'Teaching',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹50,000 - ₹80,000/month',
      description: 'We are looking for an experienced Physics faculty to teach JEE aspirants. The candidate should have a strong academic background and passion for teaching.'
    },
    {
      id: 2,
      title: 'Chemistry Faculty (NEET)',
      department: 'Teaching',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹50,000 - ₹80,000/month',
      description: 'Join our team as a Chemistry faculty for NEET preparation. The role involves teaching organic and inorganic chemistry to medical aspirants.'
    },
    {
      id: 3,
      title: 'Mathematics Faculty',
      department: 'Teaching',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹45,000 - ₹70,000/month',
      description: 'We need a passionate Mathematics teacher for our foundation and JEE batches. Strong problem-solving skills are required.'
    },
    {
      id: 4,
      title: 'Academic Counselor',
      department: 'Administration',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹30,000 - ₹45,000/month',
      description: 'Counsel students and parents about course offerings, handle admissions, and provide academic guidance.'
    },
    {
      id: 5,
      title: 'Content Developer',
      department: 'Content',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '₹40,000 - ₹60,000/month',
      description: 'Create high-quality study material, practice problems, and test papers for various competitive exams.'
    },
    {
      id: 6,
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹35,000 - ₹50,000/month',
      description: 'Handle marketing activities, social media management, and promotional campaigns for the institute.'
    },
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
              Careers
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join our team and help shape the future of thousands of students. We're always looking for passionate educators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <Section>
        <SectionHeader
          title="Why Join Excellent Academy?"
          subtitle="Work With Us"
          description="Be part of a team that is dedicated to transforming education and empowering students."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaBriefcase,
              title: 'Growth Opportunities',
              description: 'Continuous learning and career growth opportunities in a dynamic environment.'
            },
            {
              icon: FaUser,
              title: 'Competitive Compensation',
              description: 'Industry-leading salary and benefits package for deserving candidates.'
            },
            {
              icon: FaClock,
              title: 'Work-Life Balance',
              description: 'Flexible working hours and a supportive work culture.'
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <item.icon className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Job Openings */}
      <Section gradient>
        <SectionHeader
          title="Current Openings"
          subtitle="Job Opportunities"
          description="Explore our current job openings and find the perfect role for you."
        />

        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-primary" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <FaBriefcase className="mr-2 text-primary" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2 text-primary" />
                        {job.experience}
                      </div>
                      <div className="flex items-center">
                        <FaRupeeSign className="mr-2 text-primary" />
                        {job.salary}
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => setFormData({ ...formData, position: job.title })}>
                    Apply Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionHeader
              title="Apply Now"
              subtitle="Join Our Team"
              description="Fill out the form below and we'll get back to you if your profile matches our requirements."
            />

            {submitted ? (
              <Card className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We'll review your application and get back to you soon.
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
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Position *
                      </label>
                      <input
                        type="text"
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        placeholder="Position you're applying for"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Experience
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Your work experience"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about yourself and why you want to join us"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Resume *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
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
            <Card>
              <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-4">
                What We Look For
              </h3>
              <ul className="space-y-3">
                {[
                  'Passion for teaching',
                  'Strong subject knowledge',
                  'Excellent communication skills',
                  'Team player attitude',
                  'Willingness to learn and grow'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card gradient>
              <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-4">
                Need Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Contact our HR team for any queries regarding job openings.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Email:</span> careers@Excellentacademy.com
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Careers
