'use client'

import { motion } from 'framer-motion'
import { Heart, Star, Quote } from 'lucide-react'

const highlights = [
  {
    emoji: '🍛',
    quote: 'Best biryani in Khammam — fresh, aromatic, and perfectly spiced every single time!',
    author: 'Rajesh K.',
    platform: 'Swiggy',
    rating: 5,
  },
  {
    emoji: '🌿',
    quote: 'Loved the ambiance and the variety on the menu. Dine-in experience is absolutely worth it.',
    author: 'Priya M.',
    platform: 'Dine-in',
    rating: 5,
  },
  {
    emoji: '🔥',
    quote: 'Kaju Chicken Dry is a must-try. The flavors are out of this world!',
    author: 'Arun S.',
    platform: 'Zomato',
    rating: 5,
  },
  {
    emoji: '📦',
    quote: 'Packaging is always neat and food arrives hot. Consistent quality every order.',
    author: 'Neha R.',
    platform: 'Swiggy',
    rating: 5,
  },
]

export default function CustomerLove() {
  return (
    <section className="section-padding bg-primary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Heart size={28} className="text-rose-500 fill-rose-500" />
              <h2
                className="text-3xl md:text-5xl font-heading text-center"
                style={{ color: '#228B22' }}
              >
                Our Customers Love Us
              </h2>
              <Heart size={28} className="text-rose-500 fill-rose-500" />
            </div>
            <div className="gold-divider max-w-xs w-full mx-auto"></div>
            <p className="text-text-light/70 text-base md:text-lg mt-4 text-center">
              Real words from our happy guests
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary border border-accent/20 rounded-2xl p-5 flex flex-col gap-3 hover:border-accent/50 hover:shadow-md transition-all duration-300"
              >
                {/* Emoji icon */}
                <span className="text-3xl">{item.emoji}</span>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <div className="flex gap-2 flex-1">
                  <Quote size={16} className="text-accent/30 flex-shrink-0 mt-1" />
                  <p className="text-text-light/80 text-sm leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>

                {/* Author & Platform */}
                <div className="flex justify-between items-center pt-2 border-t border-accent/10">
                  <span className="text-sm font-semibold text-accent">{item.author}</span>
                  <span className="text-xs text-text-light/50 bg-accent/5 px-2 py-0.5 rounded-full">
                    {item.platform}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
