'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>
        <Image
          src="https://ik.imagekit.io/gopichakradhar/sagensalt/herobg_sagensalt_khammam.jpg"
          alt="Sage N Salt Restaurant"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* LEFT SIDE - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-6 md:space-y-8 max-w-2xl"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight uppercase"
              style={{ fontFamily: "'TAN PEARL', serif" }}
            >
              Flavors
              <br />
              <span className="text-amber-400">Sage N Salt</span>
            </motion.h1>

            {/* Sub-heading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light max-w-xl"
              style={{ fontFamily: 'var(--font-akaya)' }}
            >
              From crispy veg starters to aromatic biryanis and refreshing juices,
              Sage N Salt brings you bold flavors, fresh ingredients, and unforgettable taste.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-amber-500 hover:bg-amber-600 text-black shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                View Menu
              </Link>
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black text-white transition-all duration-300 hover:scale-105"
              >
                Order Now
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-4 pt-6"
            >
              <span className="text-sm text-gray-400 uppercase tracking-wider">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="https://zoma.to/r/22394794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                >
                  <Image
                    src="https://ik.imagekit.io/gopichakradhar/sagensalt/zomotologo.jfif"
                    alt="Zomato"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                </a>
                <a
                  href="https://www.swiggy.com/menu/1286711?source=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                >
                  <Image
                    src="https://ik.imagekit.io/gopichakradhar/sagensalt/swiggylogo.jfif"
                    alt="Swiggy"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                </a>
                <a
                  href="https://www.instagram.com/sagensalt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 border border-white/20"
                >
                  <Image
                    src="https://ik.imagekit.io/gopichakradhar/sagensalt/insatgramlogo.jfif"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image space (handled by background) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}
