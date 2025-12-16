'use client'

import { motion } from 'framer-motion'

export default function OrderCTA() {
  const platforms = [
    {
      name: 'Zomato',
      href: 'https://zoma.to/r/22394794',
      color: 'from-red-600 to-red-700',
    },
    {
      name: 'Swiggy',
      href: 'https://www.swiggy.com/menu/1286711?source=sharing',
      color: 'from-orange-500 to-orange-600',
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
          <h2 className="text-3xl md:text-4xl font-heading text-accent mb-8">
            Order Online
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto bg-gradient-to-r ${platform.color} text-white font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                Order on {platform.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
