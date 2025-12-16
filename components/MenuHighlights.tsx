'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MenuHighlights() {
  const categories = [
    {
      name: 'Appetizers',
      description: 'Curated starters to begin your culinary journey',
    },
    {
      name: 'Main Course',
      description: 'Artisan preparations showcasing regional mastery',
    },
    {
      name: 'Breads & Rice',
      description: 'Freshly prepared traditional accompaniments',
    },
    {
      name: 'Desserts',
      description: 'Sweet conclusions with a modern twist',
    },
    {
      name: 'Beverages',
      description: 'Refreshing drinks and specialty beverages',
    },
    {
      name: 'Specials',
      description: 'Chef recommendations and seasonal offerings',
    },
  ]

  return (
    <section id="menu" className="section-padding bg-primary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-4" style={{ color: '#228B22' }}>
            Our Menu
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary border border-accent/30 rounded-lg p-6 hover:border-accent transition-all duration-300"
              >
                <h3 className="text-2xl font-heading text-accent mb-2">{category.name}</h3>
                <p className="text-text-light/70 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" className="btn-primary inline-block">
              View Full Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
