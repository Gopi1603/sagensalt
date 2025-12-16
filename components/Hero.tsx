'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#f8f6f0] via-[#f5f3ee] to-[#ede9dc]">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 lg:px-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left py-12"
          >
            {/* Brand Name */}
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-heading mb-4 leading-tight"
              style={{ color: '#d4af37' }}
            >
              Sage N Salt
            </h1>
            
            {/* Tagline */}
            <p 
              className="text-2xl md:text-3xl lg:text-4xl mb-12 font-light italic"
              style={{ color: '#6b8e23' }}
            >
              Let's spice it up
            </p>
            
            {/* Zomato Logo and QR Code */}
            <div className="flex items-center gap-6 mb-10">
              {/* Zomato Logo Button */}
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e23744] hover:bg-[#c91d2a] transition-all duration-300 rounded-xl p-5 flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <div className="text-white text-3xl font-bold tracking-wide">
                  zomato
                </div>
              </a>
              
              {/* QR Code */}
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-[#0d3b2f] rounded-xl p-3 bg-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="w-28 h-28 bg-white flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="white"/>
                    <g fill="black">
                      {/* QR Code pattern */}
                      <rect x="5" y="5" width="20" height="20"/>
                      <rect x="75" y="5" width="20" height="20"/>
                      <rect x="5" y="75" width="20" height="20"/>
                      <rect x="10" y="10" width="10" height="10" fill="white"/>
                      <rect x="80" y="10" width="10" height="10" fill="white"/>
                      <rect x="10" y="80" width="10" height="10" fill="white"/>
                      <rect x="30" y="10" width="6" height="6"/>
                      <rect x="40" y="10" width="6" height="6"/>
                      <rect x="50" y="10" width="6" height="6"/>
                      <rect x="60" y="10" width="6" height="6"/>
                      <rect x="30" y="30" width="6" height="6"/>
                      <rect x="50" y="30" width="6" height="6"/>
                      <rect x="70" y="30" width="6" height="6"/>
                      <rect x="30" y="50" width="6" height="6"/>
                      <rect x="50" y="50" width="6" height="6"/>
                      <rect x="70" y="50" width="6" height="6"/>
                      <rect x="30" y="70" width="6" height="6"/>
                      <rect x="50" y="70" width="6" height="6"/>
                      <rect x="70" y="70" width="6" height="6"/>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Order Now Button */}
            <a
              href="https://zoma.to/r/22394794"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-14 py-4 text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              style={{ 
                backgroundColor: '#d4af37',
                color: '#0d3b2f'
              }}
            >
              Order now
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Placeholder for food image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355] to-[#6b5544] flex items-center justify-center">
              <div className="text-center text-accent/40">
                <p className="text-4xl font-heading mb-4">[HERO FOOD IMAGE]</p>
                <p className="text-lg text-text-light/60">Replace with your delicious dish photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
