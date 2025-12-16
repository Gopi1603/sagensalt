'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: '[REVIEWER_NAME_1]',
      rating: 5,
      text: '[Customer review text placeholder]',
      platform: 'Google',
    },
    {
      name: '[REVIEWER_NAME_2]',
      rating: 5,
      text: '[Customer review text placeholder]',
      platform: 'Zomato',
    },
    {
      name: '[REVIEWER_NAME_3]',
      rating: 5,
      text: '[Customer review text placeholder]',
      platform: 'Google',
    },
  ]

  return (
    <section className="section-padding bg-primary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading text-accent text-center mb-4">
            What Our Guests Say
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary border border-accent/20 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-light/80 mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="text-accent font-semibold">{review.name}</p>
                  <p className="text-text-light/60 text-sm">{review.platform}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-text-light/60 text-sm">
              Google Reviews embed can be added here
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
