import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div id="loading-screen">
      <motion.div
        className="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="absolute mt-16 text-white font-heading font-bold text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Excellent Academy
      </motion.div>
    </div>
  )
}

export default LoadingScreen
