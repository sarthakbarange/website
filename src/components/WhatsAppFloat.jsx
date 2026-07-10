import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppFloat = () => {
  const phoneNumber = '919876543210' // Replace with actual number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppFloat
