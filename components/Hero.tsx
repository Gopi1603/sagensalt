'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://ik.imagekit.io/gopichakradhar/sagensalt/herobg.jfif"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container-custom w-full relative z-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Brand Name */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif mb-6 text-primary leading-tight drop-shadow-2xl font-light tracking-wide">
            Sage N Salt
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-10 text-primary/90 font-light italic drop-shadow-lg">
            Let's spice it up
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {/* Zomato */}
            <motion.a
              href="https://zoma.to/r/22394794"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="relative w-12 h-12 md:w-14 md:h-14 bg-white/95 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <Image
                src="https://ik.imagekit.io/gopichakradhar/sagensalt/zomotologo.jfif"
                alt="Zomato"
                fill
                className="object-cover"
              />
            </motion.a>

            {/* Swiggy */}
            <motion.a
              href="https://www.swiggy.com/menu/1286711?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="relative w-12 h-12 md:w-14 md:h-14 bg-white/95 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <Image
                src="https://ik.imagekit.io/gopichakradhar/sagensalt/swiggylogo.jfif"
                alt="Swiggy"
                fill
                className="object-cover"
              />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/sagensalt"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="relative w-12 h-12 md:w-14 md:h-14 bg-white/95 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <Image
                src="https://ik.imagekit.io/gopichakradhar/sagensalt/insatgramlogo.jfif"
                alt="Instagram"
                fill
                className="object-cover"
              />
            </motion.a>
          </div>
          
          {/* CTA Button */}
          <motion.a
            href="https://zoma.to/r/22394794"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
            className="inline-block px-10 py-4 text-lg font-medium rounded-full bg-primary text-accent shadow-2xl hover:shadow-[0_0_40px_rgba(247,245,242,0.5)] transition-all border-2 border-primary/20"
          >
            Order Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
