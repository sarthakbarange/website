import { motion } from 'framer-motion'
import { FaHistory, FaBullseye, FaEye, FaHeart, FaAward, FaUsers, FaBook, FaLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'

const About = () => {
  const timeline = [
    { year: '2010', event: 'Excellence Academy founded with 50 students' },
    { year: '2013', event: 'First batch of JEE selections - 25 students' },
    { year: '2015', event: 'Expanded to NEET preparation' },
    { year: '2017', event: 'Opened second center in the city' },
    { year: '2019', event: 'Achieved 100+ JEE Advanced selections' },
    { year: '2021', event: 'Launched online learning platform' },
    { year: '2023', event: '500+ selections in JEE/NEET' },
    { year: '2024', event: '10,000+ students enrolled across all programs' },
  ]

  const values = [
    {
      icon: FaHeart,
      title: 'Student First',
      description: 'We prioritize student success and well-being above everything else.',
      color: 'text-red-500'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our teaching methods for better learning outcomes.',
      color: 'text-yellow-500'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Fostering a supportive community of learners and educators.',
      color: 'text-blue-500'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Striving for the highest standards in education and results.',
      color: 'text-purple-500'
    },
  ]

  const achievements = [
    { number: '500+', label: 'JEE/NEET Selections', icon: FaAward },
    { number: '10000+', label: 'Students Taught', icon: FaUsers },
    { number: '20+', label: 'Expert Faculty', icon: FaBook },
    { number: '15+', label: 'Years of Excellence', icon: FaHistory },
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
              About Excellence Academy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Empowering students to achieve their dreams through quality education and expert guidance since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <Section>
        <SectionHeader
          title="Our Journey"
          subtitle="A Legacy of Excellence"
          description="From a small coaching center to a premier institute, our journey has been marked by continuous growth and countless success stories."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
              alt="Students"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Excellence Academy was founded in 2010 with a vision to provide quality coaching to students aspiring for competitive exams. What started as a small coaching center with 50 students has now grown into a premier institute with over 10,000 students across various programs.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our journey has been marked by continuous innovation, dedicated faculty, and unwavering commitment to student success. Over the years, we have helped hundreds of students achieve their dreams of getting into top engineering and medical colleges.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Today, Excellence Academy stands as a testament to what can be achieved with passion, dedication, and a student-first approach. We continue to evolve and adapt to the changing educational landscape while staying true to our core values.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section gradient>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card hover className="h-full">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <FaBullseye className="text-3xl text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide accessible, high-quality coaching that empowers students to achieve their academic goals and build successful careers. We aim to create a learning environment that fosters critical thinking, problem-solving skills, and overall personality development.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card hover className="h-full">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <FaEye className="text-3xl text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the most trusted and preferred coaching institute in the country, known for producing top rankers in competitive exams while maintaining the highest standards of education and ethical practices. We envision a future where every student has access to quality education.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <SectionHeader
          title="Core Values"
          subtitle="What We Stand For"
          description="Our values guide everything we do and form the foundation of our institution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <value.icon className={`text-4xl ${value.color} mx-auto mb-4`} />
                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Teaching Methodology */}
      <Section dark>
        <SectionHeader
          title="Teaching Methodology"
          subtitle="Our Approach to Learning"
          description="We follow a student-centric approach that combines traditional teaching with modern techniques for optimal results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Concept-Based Learning',
              description: 'Focus on understanding concepts rather than rote memorization for long-term retention.',
              icon: FaLightbulb
            },
            {
              title: 'Interactive Sessions',
              description: 'Engaging classroom discussions and doubt-clearing sessions for active participation.',
              icon: FaUsers
            },
            {
              title: 'Regular Assessment',
              description: 'Continuous evaluation through tests, quizzes, and assignments to track progress.',
              icon: FaBook
            },
            {
              title: 'Personalized Attention',
              description: 'Small batch sizes ensure individual attention and customized guidance.',
              icon: FaHeart
            },
            {
              title: 'Practical Application',
              description: 'Real-world examples and problem-solving to apply theoretical knowledge.',
              icon: FaAward
            },
            {
              title: 'Technology Integration',
              description: 'Smart classrooms and digital tools for enhanced learning experience.',
              icon: FaLightbulb
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card glass hover className="h-full">
                <item.icon className="text-3xl text-primary mb-4" />
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader
          title="Our Journey So Far"
          subtitle="Milestones & Achievements"
          description="A timeline of our major achievements and growth over the years."
        />

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <Card hover>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-primary">{item.year}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{item.event}</p>
                    </div>
                  </Card>
                </div>
                <div className="hidden md:flex w-8 h-8 bg-primary rounded-full items-center justify-center z-10 mx-4">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Director's Message */}
      <Section gradient>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
              alt="Director"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft">
              <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
                Director's Message
              </h3>
              <div className="w-20 h-1 bg-primary mb-6" />
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">
                "At Excellence Academy, we believe that every student has the potential to excel. Our role is to provide the right guidance, resources, and environment to unlock that potential. Over the years, we have seen countless students transform their lives through quality education and dedicated effort."
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                "Our commitment to student success remains unwavering. We continuously innovate our teaching methods, upgrade our study material, and train our faculty to ensure that our students receive the best possible coaching. Join us on this journey of excellence and let's build a brighter future together."
              </p>
              <div>
                <h4 className="font-heading font-bold text-lg text-gray-900 dark:text-white">
                  Dr. Rajesh Kumar
                </h4>
                <p className="text-primary">Founder & Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Achievements */}
      <Section>
        <SectionHeader
          title="Our Achievements"
          subtitle="Numbers That Speak"
          description="Our track record of success and commitment to excellence."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <achievement.icon className="text-4xl text-primary mx-auto mb-4" />
              <div className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-2">
                {achievement.number}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Campus Images */}
      <Section>
        <SectionHeader
          title="Our Campus"
          subtitle="World-Class Infrastructure"
          description="Take a virtual tour of our modern facilities designed for optimal learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
            'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600',
          ].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="overflow-hidden p-0">
                <img
                  src={image}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button to="/gallery" icon={<FaAward />} iconPosition="right">
            View Full Gallery
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Join Excellence Academy?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards your academic success. Admissions for 2024-25 are now open!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/admission" size="lg" variant="accent">
              Apply Now
            </Button>
            <Button to="/contact" size="lg" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

export default About
