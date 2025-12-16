'use client'

import { motion } from 'framer-motion'

export default function SignatureDishes() {
  const dishes = [
    {
      name: 'Chicken Dum Biryani',
      description: 'Aromatic basmati rice slow-cooked with tender chicken and signature spices',
    },
    {
      name: 'S&S Special Chicken Biryani',
      description: 'Our unique take on the classic, crafted with premium ingredients',
    },
    {
      name: 'Kaju Chicken Dry',
      description: 'Tender chicken pieces tossed with cashews in a rich, flavorful preparation',
    },
    {
      name: 'Apollo Fish',
      description: 'Crispy fish in our signature spicy coating, a chef favorite',
    },
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading text-accent text-center mb-4">
            Signature Creations
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary/30 border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
              >
                <div className="aspect-square bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-accent/50 text-sm">[IMAGE]</span>
                </div>
                <h3 className="text-xl font-heading text-accent mb-2">{dish.name}</h3>
                <p className="text-text-light/70 text-sm">{dish.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
