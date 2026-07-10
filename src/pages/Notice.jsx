import { motion } from 'framer-motion'
import { FaBell, FaCalendar, FaTag, FaArrowRight } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const Notice = () => {
  const notices = [
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
    },
  ]

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
