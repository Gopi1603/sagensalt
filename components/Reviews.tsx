'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: 'Gopi Chakradhar',
      rating: 5,
      text: 'Good food and nice taste. Everything felt fresh and clean. Service was polite. Overall a good place to eat and worth trying.',
      platform: 'Google',
      link: 'https://maps.app.goo.gl/HWdnEX6zYmZZSRnn9',
      breakdown: {
        food: 5,
        service: 5,
        atmosphere: 5,
      },
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best restaurant in Khammam! Fresh ingredients, consistent taste, and reasonable prices. Their kaju chicken dry is a must-try. Ordered through Swiggy multiple times and the packaging is always perfect!',
      platform: 'Swiggy',
    },
    {
      name: 'Ananya Reddy',
      rating: 5,
      text: 'We ordered catering for our office event and Sage N Salt exceeded expectations! The food was fresh, arrived on time, and everyone loved the variety. Highly professional service. Will definitely use them again!',
      platform: 'Catering',
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
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-4" style={{ color: '#228B22' }}>
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
                {review.breakdown && (
                  <div className="mb-4 text-sm text-text-light/70 space-y-1">
                    <p>Food: {review.breakdown.food}</p>
                    <p>Service: {review.breakdown.service}</p>
                    <p>Atmosphere: {review.breakdown.atmosphere}</p>
                  </div>
                )}
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
