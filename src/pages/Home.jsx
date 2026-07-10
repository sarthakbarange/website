import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaGraduationCap, FaUsers, FaTrophy, FaChalkboardTeacher, FaBookOpen, FaClock, FaStar, FaCheckCircle } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import coursesData from '../data/courses.json'
import testimonialsData from '../data/testimonials.json'
import resultsData from '../data/results.json'

const Home = () => {
  const features = [
    {
      icon: FaChalkboardTeacher,
      title: 'Experienced Faculty',
      description: 'IITians and Doctors with 10+ years of teaching experience',
      color: 'text-blue-500'
    },
    {
      icon: FaUsers,
      title: 'Small Batch Size',
      description: 'Personal attention with only 30 students per batch',
      color: 'text-green-500'
    },
    {
      icon: FaBookOpen,
      title: 'Comprehensive Study Material',
      description: 'Well-researched material with practice problems',
      color: 'text-purple-500'
    },
    {
      icon: FaClock,
      title: 'Regular Testing',
      description: 'Weekly tests with detailed performance analysis',
      color: 'text-orange-500'
    },
    {
      icon: FaTrophy,
      title: 'Proven Results',
      description: '500+ selections in JEE/NEET every year',
      color: 'text-yellow-500'
    },
    {
      icon: FaStar,
      title: 'Personal Mentorship',
      description: 'One-on-one guidance for every student',
      color: 'text-pink-500'
    }
  ]

  const statistics = [
    { number: '10000+', label: 'Students Enrolled', icon: FaUsers },
    { number: '500+', label: 'Selections', icon: FaTrophy },
    { number: '98%', label: 'Success Rate', icon: FaStar },
    { number: '20+', label: 'Expert Faculty', icon: FaChalkboardTeacher },
  ]

  const featuredCourses = coursesData.slice(0, 3)
  const featuredResults = resultsData.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/60 dark:from-primary/95 dark:via-primary/85 dark:to-secondary/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
            >
              <FaGraduationCap className="text-yellow-300" />
              <span className="text-white font-medium">Admissions Open for 2024-25</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight"
            >
              Empowering Students for a
              <span className="block text-yellow-300">Brighter Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Join Excellence Academy and transform your dreams into reality with expert guidance and comprehensive coaching for JEE, NEET, and Board Exams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button to="/admission" size="lg" icon={FaArrowRight}>
                Enroll Now
              </Button>
              <Button to="/courses" variant="secondary" size="lg" icon={FaArrowRight} iconPosition="right">
                Explore Courses
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
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
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section gradient>
        <SectionHeader
          title="Why Choose Excellence Academy?"
          subtitle="Our Unique Approach"
          description="We provide a holistic learning environment that focuses on academic excellence, personal growth, and overall development of every student."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <feature.icon className={`text-4xl ${feature.color} mb-4`} />
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Courses Preview Section */}
      <Section>
        <SectionHeader
          title="Our Popular Courses"
          subtitle="Comprehensive Programs"
          description="Explore our range of courses designed to help you achieve your academic goals."
          badge="New Admissions Open"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {course.category}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{course.duration}</span>
                  <span>{course.fees}</span>
                </div>
                <Button to="/courses" variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/courses" size="lg" icon={FaArrowRight} iconPosition="right">
            View All Courses
          </Button>
        </div>
      </Section>

      {/* Top Rankers Section */}
      <Section dark>
        <SectionHeader
          title="Our Top Achievers"
          subtitle="Success Stories"
          description="Meet the brilliant minds who have made us proud with their exceptional performances."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card glass hover className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {result.rank}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {result.name}
                </h3>
                <p className="text-primary mb-2">{result.exam} - Rank {result.rank}</p>
                <p className="text-gray-400 text-sm mb-4">{result.currentStatus}</p>
                <div className="inline-flex items-center text-yellow-400 text-sm">
                  <FaTrophy className="mr-2" />
                  {result.course}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/results" variant="secondary" size="lg" icon={FaArrowRight} iconPosition="right">
            View All Results
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section gradient>
        <SectionHeader
          title="What Our Students Say"
          subtitle="Student Testimonials"
          description="Hear from our students and parents about their experience with Excellence Academy."
        />

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card hover className="h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} • {testimonial.course}
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6"
            >
              Ready to Start Your Journey to Success?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Join thousands of successful students who have achieved their dreams with Excellence Academy. Admissions for 2024-25 are now open!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button to="/admission" size="lg" variant="accent" icon={FaArrowRight}>
                Apply Now
              </Button>
              <Button to="/contact" size="lg" variant="secondary" icon={FaArrowRight} iconPosition="right">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Latest Announcements */}
      <Section>
        <SectionHeader
          title="Latest Announcements"
          subtitle="Stay Updated"
          description="Important updates and announcements from Excellence Academy."
        />

        <div className="space-y-4">
          {[
            { date: 'Jan 15, 2024', title: 'Admission Open for 2024-25 Batch', tag: 'Admission' },
            { date: 'Jan 10, 2024', title: 'Free Mock Test Series Starting Soon', tag: 'Exam' },
            { date: 'Jan 5, 2024', title: 'New Foundation Batch for Class 8', tag: 'New Course' },
          ].map((announcement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex flex-col items-center justify-center">
                    <span className="text-xs text-primary font-medium">{announcement.date.split(',')[0]}</span>
                    <span className="text-lg text-primary font-bold">{announcement.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 dark:text-white">
                      {announcement.title}
                    </h4>
                    <span className="inline-block mt-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {announcement.tag}
                    </span>
                  </div>
                </div>
                <FaArrowRight className="text-gray-400" />
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button to="/notice" variant="outline" icon={FaArrowRight} iconPosition="right">
            View All Notices
          </Button>
        </div>
      </Section>
    </>
  )
}

export default Home
