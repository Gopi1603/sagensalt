'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

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
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/veg_starters.png',
      description: 'Crispy, flavorful vegetarian appetizers'
    },
    {
      title: 'Non-Veg Starters',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/non_veg_starters.png',
      description: 'Succulent chicken, fish, and seafood'
    },
    {
      title: 'Biryani',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/biryanis.png',
      description: 'Aromatic rice with spices and meat'
    },
    {
      title: 'Chinese',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/chinesse.png',
      description: 'Indo-Chinese fusion favorites'
    },
    {
      title: 'Juices & Beverages',
      image: 'https://ik.imagekit.io/gopichakradhar/sagensalt/juices_beaverges.png',
      description: 'Fresh juices and refreshing drinks'
    }
  ]

  // Duplicate categories for infinite scroll effect
  const duplicatedCategories = [...categories, ...categories, ...categories]

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header with title left and button right */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading"
            style={{ color: '#228B22' }}
          >
            Our Menu
          </motion.h2>
          
          {showButton && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/menu"
                className="inline-block px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl bg-accent text-primary hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                View Menu
              </Link>
            </motion.div>
          )}
        </div>

        {/* Desktop Grid / Mobile Carousel */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
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
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  
                  {/* Border effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-accent/20 group-hover:border-accent/40 transition-colors z-10"></div>
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

        {/* Mobile Carousel with infinite scroll */}
        <div className="md:hidden overflow-hidden relative">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -((categories.length * (160 + 16)))],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedCategories.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="flex-shrink-0 w-40 group cursor-pointer"
              >
                <Link href="/menu" className="block">
                  {/* Circular Image Container */}
                  <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl mb-3 bg-primary/10">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                    
                    {/* Border effect */}
                    <div className="absolute inset-0 rounded-full border-4 border-accent/20 group-hover:border-accent/40 transition-colors z-10"></div>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-base font-heading text-accent text-center group-hover:text-accent/80 transition-colors">
                    {category.title}
                  </h3>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
