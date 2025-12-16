'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WelcomeSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#f8f6f0] via-[#ffffff] to-[#f5f3ee]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Decorative sage leaves - top right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor" style={{ color: '#6b8e23' }}>
          <ellipse cx="100" cy="100" rx="40" ry="80" transform="rotate(45 100 100)" />
          <ellipse cx="120" cy="80" rx="30" ry="60" transform="rotate(20 120 80)" />
        </svg>
      </div>

      {/* Decorative sage leaves - bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="currentColor" style={{ color: '#6b8e23' }}>
          <ellipse cx="100" cy="100" rx="40" ry="80" transform="rotate(-30 100 100)" />
          <ellipse cx="80" cy="120" rx="30" ry="60" transform="rotate(-60 80 120)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading mb-8 leading-tight"
            style={{ color: '#6b8e23' }}
          >
            Welcome to Sage n Salt
          </h2>

          {/* Description */}
          <div className="space-y-6 text-lg md:text-xl text-primary/80 leading-relaxed mb-10">
            <p>
              Nestled in the coastal paradise of <span className="font-semibold" style={{ color: '#d4af37' }}>Rajbag Beach in South Goa</span>, Sage n Salt is a culinary haven where an island bakery meets inspired cuisine. Our establishment brings together the warmth of a traditional bakery, the casual elegance of a café, and the satisfying experience of a full-service restaurant.
            </p>
            
            <p>
              From hearty breakfasts to start your day to delightful dinners under the stars, we welcome you to savour life's simple pleasures at Sage n Salt, where every meal is crafted with care using quality ingredients.
            </p>
          </div>

          {/* Read More Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/about"
              className="inline-block px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
              style={{ 
                backgroundColor: '#d4af37',
                color: '#0d3b2f'
              }}
            >
              Read more
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
