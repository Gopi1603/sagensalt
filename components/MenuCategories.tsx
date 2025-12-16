'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface MenuCategory {
  title: string
  image: string
  description: string
}

interface MenuCategoriesProps {
  showButton?: boolean
}

export default function MenuCategories({ showButton = true }: MenuCategoriesProps) {
  const categories: MenuCategory[] = [
    {
      title: 'Veg Starters',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/menu-veg.jpg',
      description: 'Crispy, flavorful vegetarian appetizers'
    },
    {
      title: 'Non-Veg Starters',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/menu-nonveg.jpg',
      description: 'Succulent chicken, fish, and seafood'
    },
    {
      title: 'Biryani',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/menu-biryani.jpg',
      description: 'Aromatic rice with spices and meat'
    },
    {
      title: 'Chinese',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/menu-chinese.jpg',
      description: 'Indo-Chinese fusion favorites'
    },
    {
      title: 'Juices & Beverages',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/menu-beverages.jpg',
      description: 'Fresh juices and refreshing drinks'
    }
  ]

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-accent mb-4">
            Our Menu
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <Link href="/menu" className="w-full">
                {/* Circular Image Container */}
                <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl mb-4 bg-primary/10">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-primary/30 text-4xl">🍽️</span>
                  </div>
                  
                  {/* Border effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-accent/20 group-hover:border-accent/40 transition-colors"></div>
                </div>

                {/* Category Title */}
                <h3 className="text-lg md:text-xl font-heading text-accent text-center mb-2 group-hover:text-accent/80 transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-accent/70 text-center hidden md:block">
                  {category.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu Button */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/menu"
              className="inline-block px-10 py-4 text-lg font-semibold rounded-xl bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              View Full Menu
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
