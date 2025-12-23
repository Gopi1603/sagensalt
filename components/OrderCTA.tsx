'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function OrderCTA() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  const platforms = [
    {
      name: 'Zomato',
      href: 'https://zoma.to/r/22394794',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/zoamto_boy.jfif',
      color: '#E23744', // Zomato red
    },
    {
      name: 'Swiggy',
      href: 'https://www.swiggy.com/menu/1286711?source=sharing',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/swiggy_boy.jfif',
      color: '#FC8019', // Swiggy orange
    },
  ]

  return (
    <section className="section-padding bg-primary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-8" style={{ color: '#228B22' }}>
            Order Online
          </h2>
          <div className="flex flex-row gap-4 md:gap-8 justify-center items-center max-w-4xl mx-auto px-4">
            {platforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-1 max-w-sm group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setHoveredPlatform(platform.name)}
                onMouseLeave={() => setHoveredPlatform(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-2xl">
                  {/* Main Image */}
                  <Image
                    src={platform.image}
                    alt={`Order on ${platform.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Shine Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={hoveredPlatform === platform.name ? { x: '200%' } : { x: '-100%' }}
                    transition={{
                      duration: 0.8,
                      ease: 'easeInOut',
                    }}
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Brand Name Text */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      hoveredPlatform === platform.name
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider drop-shadow-2xl"
                      style={{
                        color: platform.color,
                        textShadow: `0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px ${platform.color}80`,
                      }}
                    >
                      {platform.name}
                    </span>
                  </motion.div>
                  
                  {/* Border Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-xl border-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: platform.color }}
                  />
                </div>
                
                {/* Static Label Below Image */}
                <p
                  className="text-center mt-3 text-lg md:text-xl font-semibold"
                  style={{ color: platform.color }}
                >
                  {platform.name}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
