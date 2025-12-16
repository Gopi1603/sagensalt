'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function WelcomeSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Pattern Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ik.imagekit.io/gopichakradhar/sagensalt/sagensalt_pattern.jpg"
          alt="Sage N Salt Pattern"
          fill
          className="object-cover"
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/40"></div>
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
            style={{ color: '#228B22' }}
          >
            Welcome to Sage n Salt
          </h2>

          {/* Description */}
          <div className="space-y-6 text-lg md:text-xl text-accent/80 leading-relaxed mb-10">
            <p>
              Nestled in the coastal paradise of <span className="font-semibold text-accent">Rajbag Beach in South Goa</span>, Sage n Salt is a culinary haven where an island bakery meets inspired cuisine. Our establishment brings together the warmth of a traditional bakery, the casual elegance of a café, and the satisfying experience of a full-service restaurant.
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
              className="inline-block px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg bg-accent text-primary"
            >
              Read more
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
