'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-gradient mb-6">
            Sage N Salt
          </h1>
          <p className="text-xl md:text-2xl text-text-light/90 max-w-2xl mx-auto mb-12">
            Where Modern Artisan Cuisine Meets Timeless Indian Traditions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://zoma.to/r/22394794"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Order Now
            </a>
            <a
              href="tel:6300591870"
              className="btn-secondary w-full sm:w-auto"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
