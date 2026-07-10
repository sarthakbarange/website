import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  glass = false,
  gradient = false,
  onClick = null,
}) => {
  const baseStyles = 'rounded-2xl p-6 shadow-soft transition-all duration-300'

  const variants = {
    default: 'bg-white dark:bg-gray-800',
    glass: 'glass bg-white/10 dark:bg-gray-900/10',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20',
  }

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : ''

  const cardStyles = `${baseStyles} ${glass ? variants.glass : gradient ? variants.gradient : variants.default} ${hoverStyles} ${className}`

  const MotionComponent = motion.div

  return (
    <MotionComponent
      className={cardStyles}
      onClick={onClick}
      whileHover={hover ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </MotionComponent>
  )
}

export default Card
