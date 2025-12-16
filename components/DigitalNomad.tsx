'use client'

import { motion } from 'framer-motion'
import { Wifi, Armchair, Clock } from 'lucide-react'
import Image from 'next/image'

export default function DigitalNomad() {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Free WiFi',
      description: 'Stay connected throughout your visit'
    },
    {
      icon: <Armchair className="w-6 h-6" />,
      title: 'Comfortable Work Spaces',
      description: 'Tables suitable for working while enjoying our food and beverages'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'All-Day Service',
      description: 'Work at your own pace from morning until evening'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-[#f8f6f0] to-[#ffffff]">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading text-center mb-16"
          style={{ color: '#228B22' }}
        >
          Digital Nomad Friendly
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://ik.imagekit.io/gopichakradhar/sagensalt/digital_sagensalt.jpg"
              alt="Digital Nomad Workspace"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-accent leading-relaxed mb-8">
              Working from Khammam? Sage n Salt provides the perfect environment for digital nomads with:
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-accent/20" style={{ color: '#d4af37' }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#0d3b2f' }}>
                      {feature.title}
                    </h3>
                    <p className="text-primary/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
