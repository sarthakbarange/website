import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import resultsData from '../data/results.json'

const Results = () => {
  const currentYear = new Date().getFullYear()
  const yearResults = resultsData.filter(r => r.year === currentYear)

  const statistics = [
    { number: '500+', label: 'Total Selections', icon: FaTrophy },
    { number: '100+', label: 'JEE Advanced', icon: FaMedal },
    { number: '200+', label: 'NEET', icon: FaAward },
    { number: '150+', label: 'Other Exams', icon: FaStar },
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
              Our Results
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Celebrating the success of our students who have made us proud with their exceptional performances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <Section pattern>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="text-4xl text-primary mx-auto mb-4" />
              <div className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Top Rankers */}
      <Section>
        <SectionHeader
          title={`Top Rankers ${currentYear}`}
          subtitle="Our Pride"
          description="Meet the brilliant minds who have achieved top ranks in various competitive exams."
          badge="Latest Results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yearResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="text-center">
                <div className="relative w-36 h-36 mx-auto mb-4">
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    #{result.rank}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-1">
                  {result.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {result.exam} - Rank {result.rank}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {result.currentStatus}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  <FaTrophy className="mr-2" />
                  {result.course}
                </div>
                <div className="mt-4 pt-4 border-t dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    "{result.quote}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Success Stories */}
      <Section gradient>
        <SectionHeader
          title="Success Stories"
          subtitle="Student Testimonials"
          description="Hear from our successful students about their journey and experience at Excellent Academy."
        />

        <div className="space-y-6">
          {resultsData.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white">
                        {result.name}
                      </h3>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">
                        Rank #{result.rank}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">
                      {result.exam} • {result.currentStatus}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      "{result.quote}"
                    </p>
                  </div>
                  <div className="text-center">
                    <FaTrophy className="text-4xl text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-500 dark:text-gray-400">{result.course}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Year-wise Results */}
      <Section dark>
        <SectionHeader
          title="Previous Year Results"
          subtitle="Consistent Performance"
          description="Our consistent track record of producing top rankers year after year."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { year: 2023, selections: '450+', toppers: 'AIR 156' },
            { year: 2022, selections: '380+', toppers: 'AIR 234' },
            { year: 2021, selections: '320+', toppers: 'AIR 312' },
          ].map((year, index) => (
            <motion.div
              key={year.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card glass hover className="text-center">
                <div className="text-5xl font-heading font-bold text-white mb-2">
                  {year.year}
                </div>
                <div className="text-2xl text-primary mb-1">{year.selections}</div>
                <p className="text-gray-300 text-sm">Total Selections</p>
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <p className="text-yellow-400 font-medium">Best Rank: {year.toppers}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-16 text-center">
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Want to Be Our Next Top Ranker?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join Excellent Academy and let us help you achieve your dreams. Admissions for the new academic year are now open!
          </p>
          <Button to="/admission" size="lg" variant="accent">
            Apply Now
          </Button>
        </div>
      </Section>
    </>
  )
}

export default Results
