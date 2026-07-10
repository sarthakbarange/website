import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowRight, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import blogData from '../data/blog.json'

const Blog = () => {
  const categories = ['All', 'JEE', 'NEET', 'Study Tips', 'MHT CET', 'Foundation']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBlogs = selectedCategory === 'All'
    ? blogData
    : blogData.filter(blog => blog.category === selectedCategory)

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
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stay updated with the latest exam news, study tips, and educational insights from our experts.
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
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <FaCalendar className="mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                  <div className="flex items-center">
                    <FaUser className="text-primary mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{blog.author}</span>
                  </div>
                  <Button to={`/blog/${blog.id}`} variant="ghost" size="sm" icon={FaArrowRight}>
                    Read More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section gradient>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get the latest exam updates and study tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Blog
