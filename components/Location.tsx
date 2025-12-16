'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Location() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading text-accent text-center mb-4">
            Visit Us
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="aspect-video bg-accent/10 rounded-lg overflow-hidden border border-accent/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.30658093389576!2d80.15074275434017!3d17.245322500474526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34596c5a61113d%3A0x3d0a79ff744d8b7c!2sSage%20N%20Salt!5e0!3m2!1sen!2sin!4v1765859511394!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-accent mb-2">Address</h3>
                  <p className="text-text-light/80">
                    2-96/3/1, 6, Jammi Banda Rd<br />
                    beside Mythri KPS (Aditya) Theatre<br />
                    Yedulapuram, Khammam, Telangana 507001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-accent mb-2">Contact</h3>
                  <a 
                    href="tel:6300591870" 
                    className="text-text-light/80 hover:text-accent transition-colors"
                  >
                    6300591870
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-accent mb-2">Hours</h3>
                  <p className="text-text-light/80">Daily: 11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:6300591870"
                  className="btn-primary inline-block"
                >
                  Call for Reservations
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary inline-block"
                >
                  Full Contact Info
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
