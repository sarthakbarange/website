import { FaPhone } from 'react-icons/fa'

const CallFloat = () => {
  const phoneNumber = '+919876543210' // Replace with actual number

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="call-float"
      aria-label="Call us"
    >
      <FaPhone size={20} />
    </a>
  )
}

export default CallFloat
