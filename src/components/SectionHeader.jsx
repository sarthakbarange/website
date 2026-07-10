import { motion } from 'framer-motion'

const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = true,
  badge = null,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-primary font-medium mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
      
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.4 }}
        className={`h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-6 ${centered ? 'mx-auto' : ''}`}
        style={{ width: centered ? '80px' : '60px' }}
      />
    </div>
  )
}

export default SectionHeader
