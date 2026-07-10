import { motion } from 'framer-motion'
import { FaLaptop, FaClock, FaCheckCircle, FaStar, FaPlay, FaTrophy } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const OnlineTest = () => {
  const features = [
    {
      icon: FaLaptop,
      title: 'Real Exam Interface',
      description: 'Practice with an interface similar to actual competitive exams.'
    },
    {
      icon: FaClock,
      title: 'Timed Tests',
      description: 'All tests are timed to simulate real exam conditions.'
    },
    {
      icon: FaCheckCircle,
      title: 'Instant Results',
      description: 'Get detailed analysis and results immediately after the test.'
    },
    {
      icon: FaStar,
      title: 'Performance Tracking',
      description: 'Track your progress with detailed analytics and insights.'
    },
  ]

  const testPackages = [
    {
      name: 'JEE Main Test Series',
      tests: '20 Full Tests + 50 Part Tests',
      price: '₹2,999',
      features: ['Chapter-wise tests', 'All India ranking', 'Detailed solutions', 'Performance analysis']
    },
    {
      name: 'NEET Test Series',
      tests: '20 Full Tests + 50 Part Tests',
      price: '₹2,999',
      features: ['Subject-wise tests', 'National ranking', 'NCERT-based questions', 'Doubt support']
    },
    {
      name: 'Foundation Test Series',
      tests: '30 Tests',
      price: '₹1,499',
      features: ['Class 8-10 coverage', 'Olympiad pattern', 'Concept-based questions', 'Progress tracking']
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
              Online Test Series
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Practice with our comprehensive online test series and boost your exam preparation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <Section>
        <SectionHeader
          title="Why Choose Our Test Series?"
          subtitle="Key Features"
          description="Our online test platform offers the best practice experience for competitive exams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <feature.icon className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Test Packages */}
      <Section gradient>
        <SectionHeader
          title="Test Packages"
          subtitle="Choose Your Plan"
          description="Select the test series that suits your preparation needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{pkg.tests}</p>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Buy Now</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Free Demo Test */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <FaPlay className="text-6xl text-primary mx-auto mb-6" />
          <h3 className="font-heading font-bold text-3xl text-white mb-4">
            Try a Free Demo Test
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Experience our test platform with a free demo test. No registration required!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="accent">
              Start Demo Test
            </Button>
            <Button size="lg" variant="secondary">
              View Sample Questions
            </Button>
          </div>
        </div>
      </Section>

      {/* Login Placeholder */}
      <Section>
        <div className="max-w-md mx-auto">
          <Card>
            <div className="text-center mb-6">
              <FaTrophy className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                Student Login
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Login to access your purchased test series and view results.
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
              <Button className="w-full">Login</Button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{' '}
                <a href="#" className="text-primary hover:underline">
                  Register here
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}

export default OnlineTest
