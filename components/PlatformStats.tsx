'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, ShoppingBag, UtensilsCrossed, Trophy } from 'lucide-react'

const stats = [
  {
    platform: 'Swiggy',
    logo: 'https://ik.imagekit.io/gopichakradhar/sagensalt/swiggylogo.jfif',
    href: 'https://www.swiggy.com/menu/1286711?source=sharing',
    color: '#FC8019',
    bgGradient: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-200',
    rating: 4.1,
    reviews: '115 ratings',
    orders: '700+',
    orderLabel: 'orders in 90 days',
    magicBorder: 'magic-border-swiggy',
  },
  {
    platform: 'Zomato',
    logo: 'https://ik.imagekit.io/gopichakradhar/sagensalt/zomotologo.jfif',
    href: 'https://zoma.to/r/22394794',
    color: '#E23744',
    bgGradient: 'from-red-50 to-rose-50',
    borderColor: 'border-red-200',
    rating: 4.0,
    reviews: '100+ ratings',
    orders: '800+',
    orderLabel: 'orders in 90 days',
    magicBorder: 'magic-border-zomato',
  },
]

const milestones = [
  {
    icon: UtensilsCrossed,
    value: '2200+',
    label: 'Dine-in Orders Served',
    color: '#228B22',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    icon: Trophy,
    value: '4K+',
    label: 'Orders in 90-Day Milestone',
    color: '#b8860b',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
]

export default function PlatformStats() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-5xl font-heading text-center mb-4"
            style={{ color: '#228B22' }}
          >
            Our Highlights
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-4"></div>
          <p className="text-center text-text-light/70 text-base md:text-lg mb-12">
            First 90 days — and already making waves! 🚀
          </p>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <motion.a
                key={stat.platform}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className={`${stat.magicBorder} rounded-xl p-6 flex flex-col gap-4 cursor-pointer`}
              >
                {/* Platform header */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 flex-shrink-0" style={{ borderColor: stat.color }}>
                    <Image
                      src={stat.logo}
                      alt={stat.platform}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.platform}
                  </span>
                </div>

                {/* Rating row */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i <= Math.round(stat.rating) ? 'fill-current' : 'opacity-30'}
                        style={{ color: stat.color }}
                      />
                    ))}
                  </div>
                  <span className="text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.rating}
                  </span>
                  <span className="text-text-light/60 text-sm">/ 5</span>
                </div>

                <div className="text-sm text-text-light/70">{stat.reviews}</div>

                {/* Orders stat */}
                <div className="flex items-center gap-2 mt-auto">
                  <ShoppingBag size={20} style={{ color: stat.color }} />
                  <span className="text-3xl font-bold" style={{ color: stat.color }}>
                    {stat.orders}
                  </span>
                  <span className="text-text-light/70 text-sm">{stat.orderLabel}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Milestone Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {milestones.map((m, index) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className={`${m.bg} ${m.border} border-2 rounded-xl p-6 flex flex-col items-center text-center gap-3`}
                >
                  <Icon size={36} style={{ color: m.color }} />
                  <span className="text-4xl font-bold" style={{ color: m.color }}>
                    {m.value}
                  </span>
                  <span className="text-text-light/70 text-base">{m.label}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
