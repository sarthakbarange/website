import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBell, FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const Notice = () => {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    const loadNotices = () => {
      try {
        const storedNotices = localStorage.getItem('notices')
        if (storedNotices) {
          const parsed = JSON.parse(storedNotices)
          // Sort by date descending so newest are on top
          const sorted = parsed.sort((a, b) => new Date(b.date) - new Date(a.date))
          setNotices(sorted)
        }
      } catch (err) {
        console.error(err)
      }
    }

    loadNotices()

    window.addEventListener('notices-updated', loadNotices)
    return () => window.removeEventListener('notices-updated', loadNotices)
  }, [])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
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
              Notice Board
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stay updated with the latest announcements, exam schedules, and important notifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notices */}
      <Section>
        <SectionHeader
          title="Important Notices"
          subtitle="Latest Updates"
          description="Stay informed about important announcements and updates."
          badge={<FaBell className="mr-2" />}
        />

        <div className="space-y-4">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className={`flex items-start space-x-4 ${notice.important ? 'border-l-4 border-l-red-500' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-xs text-primary font-medium">
                      {new Date(notice.date).toLocaleString('default', { month: 'short' })}
                    </span>
                    <span className="text-lg text-primary font-bold">
                      {new Date(notice.date).getDate()}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {notice.important && (
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded text-xs font-medium">
                        Important
                      </span>
                    )}
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      {notice.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    {notice.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {notice.content}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(notice.date)}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section gradient>
        <SectionHeader
          title="Upcoming Events"
          subtitle="Mark Your Calendar"
          description="Important dates and events you don't want to miss."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { date: 'Jan 20', event: 'JEE Main Mock Test', type: 'Exam' },
            { date: 'Jan 25', event: 'Scholarship Test', type: 'Scholarship' },
            { date: 'Feb 1', event: 'New Batch Commencement', type: 'Admission' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {item.date}
                </div>
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-2">
                  {item.event}
                </h3>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {item.type}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Notice
