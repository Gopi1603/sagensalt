'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  const images = [
    {
      id: 1,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/digital_sagensalt.jpg?updatedAt=1765880111781',
      alt: 'Sagen Salt Digital Workspace',
    },
    {
      id: 2,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766483737796.jpg?updatedAt=1766484645594',
      alt: 'Sagen Salt Gallery Image',
    },
    {
      id: 3,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766483702132.jpg?updatedAt=1766484645553',
      alt: 'Sagen Salt Cuisine',
    },
  ]

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-4" style={{ color: '#228B22' }}>
            Gallery
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link href="/gallery" className="btn-secondary inline-block">
              View Full Gallery
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
