'use client'

import { motion } from 'framer-motion'
import { Flame, Leaf, Circle, ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { trackPageView } from '@/lib/analytics'
import MenuCategories from '@/components/MenuCategories'

interface MenuItem {
  name: string
  type: 'veg' | 'nonveg'
  spice: 'mild' | 'medium' | 'spicy'
  portion?: 'Single' | 'Share' | 'Family'
  badge?: 'Chef Special' | 'Most Ordered'
}

const menuData = {
  beverages: [
    { name: 'Thumbs Up Glass 250ml', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Sprite Glass 250ml', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Water Bottle 1000ml', type: 'veg' as const, spice: 'mild' as const },
  ],
  biryani: [
    { name: 'Chicken 65 Biryani', type: 'nonveg' as const, spice: 'spicy' as const, portion: 'Single' as const },
    { name: 'Chicken Dum Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const, badge: 'Most Ordered' as const },
    { name: 'Chicken Dum Biryani Family Pack', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Family' as const },
    { name: 'Chicken Dum Biryani Mini', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Chicken Fry Piece Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Chicken Lollipop Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Egg Biryani', type: 'nonveg' as const, spice: 'mild' as const, portion: 'Single' as const },
    { name: 'Mushroom Biryani', type: 'veg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Paneer Biryani', type: 'veg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Prawns Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
    { name: 'Prawns Family Pack', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Family' as const },
    { name: 'S&S Special Chicken Biryani', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const, badge: 'Chef Special' as const },
  ],
  breadsAndNaans: [
    { name: 'Phulka', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Rumali Roti', type: 'veg' as const, spice: 'mild' as const },
  ],
  chinese: [
    { name: 'Boiled Egg Manchurian', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chicken Fried Rice', type: 'nonveg' as const, spice: 'mild' as const, badge: 'Most Ordered' as const },
    { name: 'Chicken Fried Rice (Normal Rice)', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Chicken Manchurian Chinese', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chicken Noodles', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Double Egg Fried Rice (Normal Rice)', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Double Egg Noodles', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Egg Fried Rice', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Egg Fried Rice (Normal Rice)', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Egg Manchurian Fried Rice', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Egg Manchurian Fried Rice (Normal Rice)', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Egg Manchurian Noodles', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Egg Noodles', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Flash Man Noodles', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Jeera Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kaju Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kaju Jeera Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Schezwan Chicken Fried Rice', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Schezwan Chicken Fried Rice (Normal Rice)', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Schezwan Chicken Noodles', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Special Veg Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Special Veg Fried Rice (Normal Rice)', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Veg Fried Rice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Veg Fried Rice (Normal Rice)', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Veg Manchurian', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Veg Noodles', type: 'veg' as const, spice: 'mild' as const },
  ],
  combos: [
    { name: 'Celebration Feast', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Family' as const },
    { name: 'Sharing Feast', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Share' as const },
    { name: 'Solo Feast', type: 'nonveg' as const, spice: 'medium' as const, portion: 'Single' as const },
  ],
  extra: [
    { name: 'Boiled Egg', type: 'nonveg' as const, spice: 'mild' as const },
    { name: 'Chicken Piece', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Curd Rice', type: 'veg' as const, spice: 'mild' as const },
  ],
  icecreams: [
    { name: 'Arabian Fantasy Cone', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Butterscotch Premium Ice Cream 500ml', type: 'veg' as const, spice: 'mild' as const },
    { name: 'CHOCO Mocha', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Choco Bar', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Chocolate Premium Ice Cream 500ml', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Double Cone', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Jamun Ice Cream With Fruit 500ml', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Jamun Sorbet', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Jr. Butterscotch Cone', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Jr. CHOCO Cone', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Jr. Strawberry Cone', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Malai Kulfi', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Mango Ice Cream With Fruit 500ml', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Mango Sorbet', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Matka Kulfi', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Nutty Bar', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Pista Cone', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Red Velvet Cone', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Rose Kulfi', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Triple Bar', type: 'veg' as const, spice: 'mild' as const },
  ],
  juices: [
    { name: 'ABC Juice (Apple + Beetroot + Carrot)', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Apple Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Beetroot Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Carrot + Beetroot Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Carrot Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Grapes Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kiwi Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Musk Melon Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Orange Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Papaya Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Pineapple Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Pomegranate + Grape Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Pomegranate Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Sapota Juice', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Watermelon Juice', type: 'veg' as const, spice: 'mild' as const },
  ],
  mainCourse: [
    { name: 'Boneless Chicken Curry', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Butter Chicken', type: 'nonveg' as const, spice: 'medium' as const, badge: 'Most Ordered' as const },
    { name: 'Chicken Curry', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Egg Curry', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Egg Fry', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Egg Gravy Masala', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Kadai Chicken', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Kadai Paneer', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Kaju Chicken Curry', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Kaju Paneer', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Mushroom Masala', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Palak Paneer', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Paneer Butter Masala', type: 'veg' as const, spice: 'mild' as const, badge: 'Most Ordered' as const },
    { name: 'Paneer Methi Chaman', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Punjabi Chicken', type: 'nonveg' as const, spice: 'spicy' as const },
  ],
  nonVegStarters: [
    { name: 'Apollo Fish', type: 'nonveg' as const, spice: 'spicy' as const, badge: 'Chef Special' as const },
    { name: 'Chicken 555', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Chicken 65', type: 'nonveg' as const, spice: 'spicy' as const, badge: 'Most Ordered' as const },
    { name: 'Chicken Lollipop', type: 'nonveg' as const, spice: 'medium' as const, badge: 'Most Ordered' as const },
    { name: 'Chicken Majestic', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Chilli Chicken (Dry)', type: 'nonveg' as const, spice: 'spicy' as const, badge: 'Most Ordered' as const },
    { name: 'Chilli Egg', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Chilli Fish', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Chilli Prawns', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Dragon Chicken', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Egg 65', type: 'nonveg' as const, spice: 'spicy' as const },
    { name: 'Egg Manchurian', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Garlic Chicken', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Garlic Fish', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Garlic Prawns', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Kaju Chicken Dry', type: 'nonveg' as const, spice: 'medium' as const, badge: 'Chef Special' as const },
    { name: 'Loose Prawns', type: 'nonveg' as const, spice: 'medium' as const },
    { name: 'Pepper Chicken', type: 'nonveg' as const, spice: 'spicy' as const },
  ],
  vegStarters: [
    { name: 'Baby Corn 65', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Baby Corn Majestic', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Baby Corn Manchurian', type: 'veg' as const, spice: 'medium' as const, badge: 'Most Ordered' as const },
    { name: 'Chilli Baby Corn', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Chilli Mushroom', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Chilli Paneer', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Crispy Baby Corn', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Crispy Corn', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kaju Fry (100Gm)', type: 'veg' as const, spice: 'mild' as const },
    { name: 'Kaju Paneer Dry', type: 'veg' as const, spice: 'medium' as const, badge: 'Chef Special' as const },
    { name: 'Mushroom 65', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Mushroom Manchurian', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Paneer 555', type: 'veg' as const, spice: 'spicy' as const },
    { name: 'Paneer 65', type: 'veg' as const, spice: 'spicy' as const, badge: 'Most Ordered' as const },
    { name: 'Paneer Majestic', type: 'veg' as const, spice: 'medium' as const },
    { name: 'Paneer Manchurian', type: 'veg' as const, spice: 'medium' as const },
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

function MenuSection({ title, items, filterType, isOpen, onToggle }: { 
  title: string; 
  items: MenuItem[]; 
  filterType: 'all' | 'veg' | 'nonveg';
  isOpen: boolean;
  onToggle: () => void;
}) {
  const filteredItems = filterType === 'all' 
    ? items 
    : items.filter(item => item.type === filterType);
  
  if (filteredItems.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      {/* Category Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg p-4 mb-4 transition-colors"
      >
        <h2 className="text-2xl md:text-3xl font-heading text-accent">{title}</h2>
        {isOpen ? (
          <ChevronUp className="text-accent" size={28} />
        ) : (
          <ChevronDown className="text-accent" size={28} />
        )}
      </button>

      {/* Category Items */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {filteredItems.map((item, index) => (
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
        </motion.div>
      )}
    </motion.div>
  )
}

export default function MenuPage() {
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    beverages: false,
    biryani: false,
    breadsAndNaans: false,
    chinese: false,
    combos: false,
    extra: false,
    icecreams: false,
    juices: false,
    mainCourse: false,
    nonVegStarters: false,
    vegStarters: false,
  });

  useEffect(() => {
    trackPageView('/menu')
  }, [])

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen pt-24">
      <MenuCategories showButton={false} />
      <div className="container-custom max-w-6xl section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-center mb-4" style={{ color: '#228B22' }}>
            Our Menu
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-8"></div>

          {/* Veg/Non-Veg Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-primary/30 border border-accent/20 rounded-lg p-1">
              <button
                onClick={() => setFilterType('all')}
                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                  filterType === 'all' 
                    ? 'bg-accent text-primary' 
                    : 'text-accent hover:bg-accent/10'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterType('veg')}
                className={`px-6 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${
                  filterType === 'veg' 
                    ? 'bg-green-500 text-white' 
                    : 'text-accent hover:bg-accent/10'
                }`}
              >
                <div className="w-4 h-4 border-2 border-current flex items-center justify-center">
                  <Circle size={8} className="fill-current" />
                </div>
                Veg
              </button>
              <button
                onClick={() => setFilterType('nonveg')}
                className={`px-6 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${
                  filterType === 'nonveg' 
                    ? 'bg-red-500 text-white' 
                    : 'text-accent hover:bg-accent/10'
                }`}
              >
                <div className="w-4 h-4 border-2 border-current flex items-center justify-center">
                  <Circle size={8} className="fill-current" />
                </div>
                Non-Veg
              </button>
            </div>
          </div>
          
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-8 text-center">
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

          <MenuSection 
            title="Beverages" 
            items={menuData.beverages} 
            filterType={filterType}
            isOpen={openSections.beverages}
            onToggle={() => toggleSection('beverages')}
          />
          <MenuSection 
            title="Biryani" 
            items={menuData.biryani} 
            filterType={filterType}
            isOpen={openSections.biryani}
            onToggle={() => toggleSection('biryani')}
          />
          <MenuSection 
            title="Breads and Naans" 
            items={menuData.breadsAndNaans} 
            filterType={filterType}
            isOpen={openSections.breadsAndNaans}
            onToggle={() => toggleSection('breadsAndNaans')}
          />
          <MenuSection 
            title="Chinese" 
            items={menuData.chinese} 
            filterType={filterType}
            isOpen={openSections.chinese}
            onToggle={() => toggleSection('chinese')}
          />
          <MenuSection 
            title="Combos" 
            items={menuData.combos} 
            filterType={filterType}
            isOpen={openSections.combos}
            onToggle={() => toggleSection('combos')}
          />
          <MenuSection 
            title="Extra" 
            items={menuData.extra} 
            filterType={filterType}
            isOpen={openSections.extra}
            onToggle={() => toggleSection('extra')}
          />
          <MenuSection 
            title="Ice Creams" 
            items={menuData.icecreams} 
            filterType={filterType}
            isOpen={openSections.icecreams}
            onToggle={() => toggleSection('icecreams')}
          />
          <MenuSection 
            title="Juices" 
            items={menuData.juices} 
            filterType={filterType}
            isOpen={openSections.juices}
            onToggle={() => toggleSection('juices')}
          />
          <MenuSection 
            title="Main Course" 
            items={menuData.mainCourse} 
            filterType={filterType}
            isOpen={openSections.mainCourse}
            onToggle={() => toggleSection('mainCourse')}
          />
          <MenuSection 
            title="Non-Veg Starters" 
            items={menuData.nonVegStarters} 
            filterType={filterType}
            isOpen={openSections.nonVegStarters}
            onToggle={() => toggleSection('nonVegStarters')}
          />
          <MenuSection 
            title="Veg Starters" 
            items={menuData.vegStarters} 
            filterType={filterType}
            isOpen={openSections.vegStarters}
            onToggle={() => toggleSection('vegStarters')}
          />
        </motion.div>
      </div>
    </div>
  )
}
