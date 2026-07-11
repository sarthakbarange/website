import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGraduationCap, FaAward, FaChalkboardTeacher } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import facultyData from '../data/faculty.json'

const Faculty = () => {
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
              Our Faculty
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet our team of experienced educators dedicated to shaping the future of our students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <Section>
        <SectionHeader
          title="Expert Faculty Members"
          subtitle="Learn from the Best"
          description="Our faculty consists of IITians, Doctors, and experienced educators who bring years of expertise and passion for teaching."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyData.map((faculty, index) => (
            <motion.div
              key={faculty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                  />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white text-xs" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-1">
                  {faculty.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {faculty.qualification}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {faculty.experience} Experience
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {faculty.specialization}
                </p>

                <div className="flex justify-center space-x-2 mb-4">
                  {faculty.social.linkedin && (
                    <a
                      href={faculty.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaLinkedin className="text-sm" />
                    </a>
                  )}
                  {faculty.social.twitter && (
                    <a
                      href={faculty.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaTwitter className="text-sm" />
                    </a>
                  )}
                </div>

                <div className="border-t dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <FaAward className="mr-1 text-accent" />
                    <span>Key Achievement</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                    {faculty.achievements[0]}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Our Faculty */}
      <Section gradient>
        <SectionHeader
          title="Why Our Faculty Stands Out"
          subtitle="Excellent in Teaching"
          description="Our faculty members are not just teachers but mentors who guide students towards success."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaGraduationCap,
              title: 'IITians & Doctors',
              description: 'Our faculty includes alumni from top IITs and medical colleges with deep subject expertise.'
            },
            {
              icon: FaAward,
              title: 'Proven Track Record',
              description: 'Consistent production of top rankers in JEE, NEET, and board examinations.'
            },
            {
              icon: FaChalkboardTeacher,
              title: 'Teaching Excellent',
              description: 'Innovative teaching methods that make complex concepts easy to understand.'
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
    </>
  )
}

export default Faculty
