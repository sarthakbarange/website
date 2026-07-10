import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to = null,
  href = null,
  onClick = null,
  type = 'button',
  disabled = false,
  icon: Icon = null,
  iconPosition = 'left',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105',
    secondary: 'bg-white dark:bg-gray-800 text-primary border-2 border-primary hover:bg-primary hover:text-white',
    accent: 'bg-gradient-to-r from-accent to-orange-500 text-white hover:shadow-lg hover:shadow-accent/30 hover:scale-105',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
    danger: 'bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-4 text-xl',
  }

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2" />}
    </>
  )

  const MotionComponent = motion.button

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={buttonStyles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {content}
    </MotionComponent>
  )
}

export default Button
