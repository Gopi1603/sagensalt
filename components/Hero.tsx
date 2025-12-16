'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#f5f3ee] via-[#e8e5dc] to-[#f5f3ee]">
      <div className="container-custom w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left px-6 lg:px-12 py-12"
          >
            {/* Brand Name */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading mb-4" style={{ color: '#d4af37' }}>
              Sage N Salt
            </h1>
            
            {/* Tagline */}
            <p className="text-2xl md:text-3xl mb-12" style={{ color: '#6b8e23' }}>
              Let's spice it up
            </p>
            
            {/* Zomato Logo and QR Code */}
            <div className="flex items-center gap-6 mb-8">
              {/* Zomato Logo */}
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e23744] hover:bg-[#c91d2a] transition-colors rounded-lg p-4 flex items-center justify-center"
              >
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="white">
                  <text x="2" y="18" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="white">
                    zomato
                  </text>
                </svg>
              </a>
              
              {/* QR Code Placeholder */}
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-primary rounded-lg p-2 bg-white hover:scale-105 transition-transform"
              >
                <div className="w-24 h-24 bg-white flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="white"/>
                    {/* QR Code pattern simulation */}
                    <g fill="black">
                      <rect x="5" y="5" width="20" height="20"/>
                      <rect x="75" y="5" width="20" height="20"/>
                      <rect x="5" y="75" width="20" height="20"/>
                      <rect x="30" y="10" width="8" height="8"/>
                      <rect x="50" y="10" width="8" height="8"/>
                      <rect x="30" y="30" width="8" height="8"/>
                      <rect x="50" y="30" width="8" height="8"/>
                      <rect x="70" y="30" width="8" height="8"/>
                      <rect x="30" y="50" width="8" height="8"/>
                      <rect x="50" y="50" width="8" height="8"/>
                      <rect x="70" y="50" width="8" height="8"/>
                      <rect x="30" y="70" width="8" height="8"/>
                      <rect x="50" y="70" width="8" height="8"/>
                      <rect x="70" y="70" width="8" height="8"/>
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
              className="inline-block px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
            className="relative h-[500px] lg:h-[700px] rounded-l-3xl overflow-hidden"
          >
            {/* Placeholder for food image - replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355] to-[#6b5544]">
              <div className="absolute inset-0 flex items-center justify-center text-accent/30 text-6xl font-heading">
                [HERO IMAGE]
              </div>
            </div>
            
            {/* You can replace the placeholder above with actual image: */}
            {/* <Image
              src="/images/hero-food.jpg"
              alt="Delicious Indian cuisine at Sage N Salt"
              fill
              className="object-cover"
              priority
            /> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
