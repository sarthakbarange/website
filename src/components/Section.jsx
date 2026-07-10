import { motion } from 'framer-motion'

const Section = ({
  children,
  className = '',
  id = '',
  dark = false,
  gradient = false,
  pattern = false,
}) => {
  const baseStyles = 'py-16 md:py-20 lg:py-24'

  const variants = {
    default: 'bg-background dark:bg-darkBackground',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10',
  }

  const patternOverlay = pattern ? (
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>
  ) : null

  return (
    <section
      id={id}
      className={`${baseStyles} ${dark ? variants.dark : gradient ? variants.gradient : variants.default} ${className} relative`}
    >
      {patternOverlay}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

export default Section
