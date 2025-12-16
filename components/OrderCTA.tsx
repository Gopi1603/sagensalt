'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OrderCTA() {
  const platforms = [
    {
      name: 'Zomato',
      href: 'https://zoma.to/r/22394794',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/zoamto_boy.jfif',
    },
    {
      name: 'Swiggy',
      href: 'https://www.swiggy.com/menu/1286711?source=sharing',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/swiggy_boy.jfif',
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
          <div className="flex flex-row gap-4 md:gap-6 justify-center items-center max-w-4xl mx-auto px-4">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-1 max-w-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={platform.image}
                    alt={`Order on ${platform.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
