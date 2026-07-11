import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import faqData from '../data/faq.json'

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState('All')
  const [openItem, setOpenItem] = useState(null)

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))]

  const filteredFAQs = openCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === openCategory)

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about admissions, courses, fees, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <Section>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setOpenCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                openCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center space-x-3">
                    <FaQuestionCircle className="text-primary flex-shrink-0" />
                    <span className="font-heading font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openItem === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section gradient>
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can't find the answer you're looking for? Please reach out to our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+919876543210" className="text-primary font-semibold">
              +91 98765 43210
            </a>
            <span className="text-gray-400">or</span>
            <a href="mailto:info@Excellentacademy.com" className="text-primary font-semibold">
              info@Excellentacademy.com
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

export default FAQ
