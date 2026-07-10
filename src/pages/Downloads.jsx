import { motion } from 'framer-motion'
import { FaDownload, FaFilePdf, FaFileAlt, FaCalendar } from 'react-icons/fa'

import Section from '../components/Section'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'

const Downloads = () => {
  const downloads = [
    {
      id: 1,
      title: 'Course Brochure 2024-25',
      category: 'Brochure',
      size: '2.5 MB',
      date: 'Jan 2024',
      icon: FaFilePdf,
      description: 'Complete information about all courses and programs.'
    },
    {
      id: 2,
      title: 'Fee Structure',
      category: 'Fee',
      size: '1.2 MB',
      date: 'Jan 2024',
      icon: FaFileAlt,
      description: 'Detailed fee structure for all courses.'
    },
    {
      id: 3,
      title: 'JEE Syllabus 2024',
      category: 'Syllabus',
      size: '3.1 MB',
      date: 'Jan 2024',
      icon: FaFilePdf,
      description: 'Complete syllabus for JEE Main and Advanced.'
    },
    {
      id: 4,
      title: 'NEET Syllabus 2024',
      category: 'Syllabus',
      size: '2.8 MB',
      date: 'Jan 2024',
      icon: FaFilePdf,
      description: 'Complete syllabus for NEET examination.'
    },
    {
      id: 5,
      title: 'Batch Timetable',
      category: 'Timetable',
      size: '1.5 MB',
      date: 'Jan 2024',
      icon: FaFileAlt,
      description: 'Schedule for all batches and classes.'
    },
    {
      id: 6,
      title: 'Previous Year Papers - JEE',
      category: 'Papers',
      size: '5.2 MB',
      date: 'Jan 2024',
      icon: FaFilePdf,
      description: 'JEE previous year question papers with solutions.'
    },
    {
      id: 7,
      title: 'Previous Year Papers - NEET',
      category: 'Papers',
      size: '4.8 MB',
      date: 'Jan 2024',
      icon: FaFilePdf,
      description: 'NEET previous year question papers with solutions.'
    },
    {
      id: 8,
      title: 'Admission Form',
      category: 'Forms',
      size: '0.5 MB',
      date: 'Jan 2024',
      icon: FaFileAlt,
      description: 'Printable admission form for offline applications.'
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
              Downloads
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Access brochures, syllabus, fee structure, and other important documents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Grid */}
      <Section>
        <SectionHeader
          title="Available Downloads"
          subtitle="Important Documents"
          description="Download brochures, syllabus, fee structure, and other resources."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloads.map((download, index) => (
            <motion.div
              key={download.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <download.icon className="text-2xl text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-2">
                  {download.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {download.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <FaCalendar className="mr-1" />
                    {download.date}
                  </span>
                  <span>{download.size}</span>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <FaDownload />
                  <span>Download</span>
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Downloads
