'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Car, Award, Shield, ChefHat } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-accent text-center mb-4">
            Visit Us
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Map */}
            <div className="bg-primary/30 border border-accent/20 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.28586598786457!2d80.15080340000001!3d17.2453225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34596c5a61113d%3A0x3d0a79ff744d8b7c!2sSage%20N%20Salt!5e0!3m2!1sen!2sin!4v1734355200000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-accent mb-2">Location</h3>
                  <p className="text-text-light/80 leading-relaxed">
                    Sage N Salt<br />
                    2-96/3/1, 6, Jammi Banda Rd<br />
                    beside Mythri KPS (Aditya) Theatre, Yedulapuram<br />
                    Khammam, Telangana 507001
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Sage+N+Salt/@17.2453225,80.1508034,20z/data=!4m6!3m5!1s0x3a34596c5a61113d:0x3d0a79ff744d8b7c!8m2!3d17.2453225!4d80.1510646!16s%2Fg%2F11mrqhcf37?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="gold-divider"></div>

              <div className="flex items-start space-x-4">
                <Phone size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-accent mb-2">Phone</h3>
                  <a
                    href="tel:6300591870"
                    className="text-text-light/80 hover:text-accent transition-colors text-lg"
                  >
                    6300591870
                  </a>
                  <p className="text-text-light/60 text-sm mt-1">Call for reservations or takeout</p>
                </div>
              </div>

              <div className="gold-divider"></div>

              <div className="flex items-start space-x-4">
                <Clock size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-accent mb-2">Operating Hours</h3>
                  <div className="text-text-light/80 space-y-1">
                    <p>Daily: 11:00 AM - 11:00 PM</p>
                    <p className="text-accent/80 text-sm mt-2">Open all 7 days</p>
                  </div>
                </div>
              </div>

              <div className="gold-divider"></div>

              <div className="flex items-start space-x-4">
                <Car size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading text-accent mb-2">Parking</h3>
                  <p className="text-text-light/80">Street-level parking available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-primary/30 border border-accent/20 rounded-lg p-8">
            <h2 className="text-2xl font-heading text-accent text-center mb-6">Get In Touch</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6300591870"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
              <a
                href={`https://wa.me/6300591870?text=${encodeURIComponent('Hi! I would like to know more about Sage N Salt.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                WhatsApp Us
              </a>
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Order Online
              </a>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 pt-8 border-t border-accent/20 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-text-light/70">
              <div className="flex items-center space-x-2">
                <Award className="text-accent" size={20} />
                <span>FSSAI: 13625003000281</span>
              </div>
              <div className="flex items-center space-x-2">
                <ChefHat className="text-accent" size={20} />
                <span>Fresh Preparation Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-accent" size={20} />
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
