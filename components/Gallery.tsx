'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  const images = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery image ${i + 1}`,
  }))

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading text-accent text-center mb-4">
            Gallery
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-accent/20"
              >
                <span className="text-accent/50">[IMAGE {image.id}]</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
