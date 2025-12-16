'use client'

import { motion } from 'framer-motion'
import { Flame, Leaf, Circle, BookOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { trackPageView, trackOrderClick, trackCallClick } from '@/lib/analytics'
import SimplePDFViewer from '@/components/SimplePDFViewer'
import MenuCategories from '@/components/MenuCategories'

interface MenuItem {
  name: string
  type: 'veg' | 'nonveg'
  spice: 'mild' | 'medium' | 'spicy'
  portion?: 'Single' | 'Share' | 'Family'
  badge?: 'Chef Special' | 'Most Ordered'
}

const menuData = {
  vegStarters: [
    { name: 'Crispy Corn', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Baby Corn 65', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Baby Corn Manchurian', type: 'veg' as const, spice: 'medium' as const, badge: 'Most Ordered' as const },
    { name: 'Chilli Baby Corn', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Crispy Baby Corn', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Baby Corn Majestic', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Paneer 65', type: 'veg' as const, spice: 'spicy' as const, badge: 'Most Ordered' as const },
    { name: 'Paneer Manchurian', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Chilli Paneer', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Paneer Majestic', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Paneer 555', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Kaju Paneer Dry', type: 'veg' as const, spice: 'medium' as const, badge: 'Chef Special' as const },
    { name: 'Kaju Fry (100gm)', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Mushroom 65', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Chilli Mushroom', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Mushroom Manchurian', type: 'veg' as const, spice: 'medium' as const },
  ],
  nonVegStarters: [
    { name: 'Egg 65', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Chilli Egg', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Egg Manchurian', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Garlic Chicken', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chicken 65', type: 'nonveg' as const, spice: 'spicy' as const, badge: 'Most Ordered' as const },
    { name: 'Chilli Chicken (Dry)', type: 'nonveg' as const, spice: 'spicy' as const, badge: 'Most Ordered' as const },
    { name: 'Chicken Majestic', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chicken Manchurian', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Pepper Chicken', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Chicken Lollipop', type: 'nonveg' as const, spice: 'medium' as const, badge: 'Most Ordered' as const },
    { name: 'Dragon Chicken', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Chicken 555', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Kaju Chicken Dry', type: 'nonveg' as const, spice: 'medium' as const, badge: 'Chef Special' as const },
    { name: 'Apollo Fish', type: 'nonveg' as const, spice: 'spicy' as const, badge: 'Chef Special' as const },
    { name: 'Chilli Fish', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Garlic Fish', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chilli Prawns', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Garlic Prawns', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Loose Prawns', type: 'nonveg' as const, spice: 'medium' as const },
  ],
  biryani: [
    { name: 'Egg Biryani', type: 'nonveg' as const, spice: 'mild' as const, portion: 'Single' as const },
    { name: 'Chicken Dum Biryani Mini', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Chicken Dum Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const, badge: 'Most Ordered' as const },
    { name: 'Chicken Dum Biryani Family Pack', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Family' as const },
    { name: 'Chicken Fry Piece Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Chicken Lollipop Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Chicken 65 Biryani', type: 'nonveg' as const, spice: 'spicy' as const, portion: 'Single' as const },
    { name: 'S&S Special Chicken Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const, badge: 'Chef Special' as const },
    { name: 'Prawns Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
  ],
  chinese: [
    { name: 'Veg Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Special Veg Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Jeera Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kaju Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kaju Jeera Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Egg Fried Rice', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Egg Manchurian Fried Rice', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chicken Fried Rice', type: 'nonveg' as const, spice: 'mild' as const, badge: 'Most Ordered' as const },
    { name: 'Schezwan Chicken Fried Rice', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Veg Noodles', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Egg Noodles', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Egg Manchurian Noodles', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chicken Noodles', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Schezwan Chicken Noodles', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Veg Manchurian', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Boiled Egg Manchurian', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chicken Manchurian', type: 'nonveg' as const, spice: 'medium' as const },
  ],
  juices: [
    { name: 'Musk Melon Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Pineapple Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Beetroot Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Carrot + Beetroot Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Carrot Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'ABC Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Pomegranate + Grape Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Sapota Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Apple Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Pomegranate Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kiwi Juice', type: 'veg' as const, spice: 'mild' as const },
  ],
}

function SpiceLevel({ level }: { level: 'mild' | 'medium' | 'spicy' }) {
  const flames = level === 'mild' ? 1 : level === 'medium' ? 2 : 3
  return (
    <div className="flex items-center space-x-0.5">
      {Array.from({ length: flames }).map((_, i) => (
        <Flame key={i} size={14} className="text-accent fill-accent" />
      ))}
      {Array.from({ length: 3 - flames }).map((_, i) => (
        <Flame key={i + flames} size={14} className="text-accent/20" />
      ))}
    </div>
  )
}

function VegIndicator({ type }: { type: 'veg' | 'nonveg' }) {
  return (
    <div className={`w-5 h-5 border-2 flex items-center justify-center ${
      type === 'veg' ? 'border-green-500' : 'border-red-500'
    }`}>
      <Circle size={10} className={type === 'veg' ? 'text-green-500 fill-green-500' : 'text-red-500 fill-red-500'} />
    </div>
  )
}

function MenuSection({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-heading text-accent mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-primary/30 border border-accent/20 rounded-lg p-4 hover:border-accent/50 transition-all">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-3">
                <VegIndicator type={item.type} />
                <h3 className="text-lg font-semibold text-text-light">{item.name}</h3>
              </div>
              <SpiceLevel level={item.spice} />
            </div>
            <div className="flex items-center space-x-3 ml-8">
              {item.portion && (
                <span className="text-xs text-text-light/60 bg-primary/50 px-2 py-1 rounded">
                  {item.portion}
                </span>
              )}
              {item.badge && (
                <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded border border-accent/30">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function MenuPage() {
  const [showPDFViewer, setShowPDFViewer] = useState(false)

  useEffect(() => {
    trackPageView('/menu')
  }, [])

  const handleViewPDFMenu = () => {
    setShowPDFViewer(true)
  }

  return (
    <div className="min-h-screen pt-24">
      <MenuCategories />
      <div className="container-custom max-w-6xl section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-accent text-center mb-4">
            Our Menu
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-8"></div>

          {/* PDF Menu Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleViewPDFMenu}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-primary rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <BookOpen size={24} />
              <span>View Full Menu (Flipbook)</span>
            </button>
            <p className="text-text-light/60 text-sm mt-3">Interactive page-turning menu with all items and prices</p>
          </div>
          
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-12 text-center">
            <p className="text-text-light/80 mb-3">
              Prices available on <a href="https://zoma.to/r/22394794" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Zomato</a> and <a href="https://www.swiggy.com/menu/1286711?source=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Swiggy</a>, or ask in-store.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Flame size={16} className="text-accent" />
                <span className="text-text-light/70">Spice Level</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-green-500 flex items-center justify-center">
                  <Circle size={8} className="text-green-500 fill-green-500" />
                </div>
                <span className="text-text-light/70">Veg</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-red-500 flex items-center justify-center">
                  <Circle size={8} className="text-red-500 fill-red-500" />
                </div>
                <span className="text-text-light/70">Non-Veg</span>
              </div>
            </div>
          </div>

          <MenuSection title="Veg Starters" items={menuData.vegStarters} />
          <MenuSection title="Non-Veg Starters" items={menuData.nonVegStarters} />
          <MenuSection title="Biryani" items={menuData.biryani} />
          <MenuSection title="Chinese" items={menuData.chinese} />
          <MenuSection title="Juices & Beverages" items={menuData.juices} />
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      {showPDFViewer && (
        <SimplePDFViewer
          pdfUrl="/menu.pdf"
          onClose={() => setShowPDFViewer(false)}
        />
      )}
    </div>
  )
}
