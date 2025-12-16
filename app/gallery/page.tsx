'use client'

import { motion } from 'framer-motion'
import { UtensilsCrossed, Home as HomeIcon, ChefHat } from 'lucide-react'

export default function GalleryPage() {
  const foodImages = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    alt: `Food image ${i + 1}`,
  }))

  const ambienceImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `Ambience image ${i + 1}`,
  }))

  const kitchenImages = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    alt: `Kitchen hygiene image ${i + 1}`,
  }))

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-center mb-4" style={{ color: '#228B22' }}>
            Gallery
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          {/* Food Section */}
          <section className="mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <UtensilsCrossed className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-heading" style={{ color: '#228B22' }}>Our Food</h2>
            </div>
            <p className="text-center text-text-light/70 mb-8 max-w-2xl mx-auto">
              Every dish is prepared fresh to order. What you see is what we serve—no filters, just authentic flavors.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {foodImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-accent/20"
                >
                  <div className="text-center">
                    <span className="text-accent/50 text-sm">[FOOD {image.id}]</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="gold-divider mb-16"></div>

          {/* Ambience Section */}
          <section className="mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <HomeIcon className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-heading text-accent">Ambience</h2>
            </div>
            <p className="text-center text-text-light/70 mb-8 max-w-2xl mx-auto">
              Comfortable seating, clean spaces, and a welcoming atmosphere for families and friends.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ambienceImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="aspect-video bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-accent/20"
                >
                  <div className="text-center">
                    <span className="text-accent/50 text-sm">[AMBIENCE {image.id}]</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="gold-divider mb-16"></div>

          {/* Kitchen & Hygiene Section */}
          <section className="mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <ChefHat className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-heading text-accent">Kitchen & Hygiene</h2>
            </div>
            <p className="text-center text-text-light/70 mb-4 max-w-2xl mx-auto">
              Clean kitchen, quality ingredients, proper food handling. See where your food is prepared.
            </p>
            <p className="text-center text-accent/80 text-sm mb-8">
              FSSAI License: 13625003000281
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {kitchenImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-accent/20"
                >
                  <div className="text-center">
                    <span className="text-accent/50 text-sm">[KITCHEN {image.id}]</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center mt-16 pt-8 border-t border-accent/20">
            <p className="text-xl text-text-light/80 mb-6">Visit us and experience it yourself</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6300591870" className="btn-primary">
                Call for Reservations
              </a>
              <a href="#contact" className="btn-secondary">
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
