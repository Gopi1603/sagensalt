'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const whatsappNumber = '6300591870'
  const message = encodeURIComponent('Hi! I would like to know more about Sage N Salt.')
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-primary p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
