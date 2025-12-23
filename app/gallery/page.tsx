'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766484397169.jpg?updatedAt=1766484644804',
      alt: 'Sagen Salt Gallery 1',
    },
    {
      id: 2,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766483702132.jpg?updatedAt=1766484645553',
      alt: 'Sagen Salt Gallery 2',
    },
    {
      id: 3,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766483793941.jpg?updatedAt=1766484645503',
      alt: 'Sagen Salt Gallery 3',
    },
    {
      id: 4,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766484069047.jpg?updatedAt=1766484645188',
      alt: 'Sagen Salt Gallery 4',
    },
    {
      id: 5,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766483661496.jpg?updatedAt=1766484645571',
      alt: 'Sagen Salt Gallery 5',
    },
    {
      id: 6,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766479226991.jpg?updatedAt=1766484645585',
      alt: 'Sagen Salt Gallery 6',
    },
    {
      id: 7,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/1766483737796.jpg?updatedAt=1766484645594',
      alt: 'Sagen Salt Gallery 7',
    },
    {
      id: 8,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/IMG-20251217-WA0004.jpg?updatedAt=1766484732870',
      alt: 'Sagen Salt Gallery 8',
    },
    {
      id: 9,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/20251218_224150.heic?updatedAt=1766484733307',
      alt: 'Sagen Salt Gallery 9',
    },
    {
      id: 10,
      src: 'https://ik.imagekit.io/gopichakradhar/sagensalt/Gallery/IMG-20251216-WA0002.jpg?updatedAt=1766484733114',
      alt: 'Sagen Salt Gallery 10',
    },
  ]

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

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="break-inside-avoid mb-4"
              >
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                    quality={90}
                    style={{ display: 'block' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 pt-8 border-t border-accent/20">
            <p className="text-xl text-text-light/80 mb-6">Visit us and experience it yourself</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6300591870" className="btn-primary">
                Call for Reservations
              </a>
              <a href="/contact" className="btn-secondary">
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
              fill
              className="object-contain"
              quality={95}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-2xl">×</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
