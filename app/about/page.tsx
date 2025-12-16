'use client'

import { motion } from 'framer-motion'
import { ChefHat, Award, Clock } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-center mb-4" style={{ color: '#228B22' }}>
            About US
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-12"></div>

          <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="https://ik.imagekit.io/gopichakradhar/sagensalt/Logo.png" 
                alt="Sage N Salt Logo" 
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-xl text-text-light/90 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-caveat)' }}>
                Sage N Salt started with a simple goal: serve good food made the right way, every single time.
              </p>
              <p className="text-lg text-text-light/80 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-caveat)' }}>
                We focus on what matters—fresh ingredients, proper preparation, and consistent taste. No shortcuts. No compromises. Just food that keeps people coming back.
              </p>
              <p className="text-lg text-text-light/80 leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
                Our kitchen prepares each dish to order. Our recipes stay the same. Our standards don't change. That's how we've built a reputation in the community.
              </p>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-12 flex flex-col md:flex-row gap-8 items-center bg-accent/5 rounded-lg p-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-heading text-accent mb-4">Meet the Founders</h3>
              <p className="text-xl text-text-light/90 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-caveat)' }}>
                <span className="font-semibold text-accent">Swathi & Bhanu</span> — a married couple who turned their shared passion for authentic Indian cuisine into reality.
              </p>
              <p className="text-lg text-text-light/80 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-caveat)' }}>
                Sage N Salt is more than a restaurant—it's our dream project. What started as conversations over home-cooked meals grew into a commitment to serve the kind of food we'd want to eat ourselves.
              </p>
              <p className="text-lg text-text-light/80 leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
                Together, we've built a place where quality isn't negotiable, where every dish reflects our values, and where guests become part of our extended family.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="founders-image-card">
                <div className="founders-image-border">
                  <h2 className="founders-overlay-text">Swathi & Bhanu</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary/30 border border-accent/20 rounded-lg p-6 text-center">
              <ChefHat className="text-accent mx-auto mb-4" size={40} />
              <h3 className="text-xl font-heading text-accent mb-3">Fresh Preparation</h3>
              <p className="text-text-light/70 text-sm" style={{ fontFamily: 'var(--font-caveat)' }}>
                Every dish is made to order. No pre-cooked meals, no reheating.
              </p>
            </div>
            <div className="bg-primary/30 border border-accent/20 rounded-lg p-6 text-center">
              <Award className="text-accent mx-auto mb-4" size={40} />
              <h3 className="text-xl font-heading text-accent mb-3">Quality Ingredients</h3>
              <p className="text-text-light/70 text-sm" style={{ fontFamily: 'var(--font-caveat)' }}>
                We source good ingredients and don't substitute to cut costs.
              </p>
            </div>
            <div className="bg-primary/30 border border-accent/20 rounded-lg p-6 text-center">
              <Clock className="text-accent mx-auto mb-4" size={40} />
              <h3 className="text-xl font-heading text-accent mb-3">Consistency</h3>
              <p className="text-text-light/70 text-sm" style={{ fontFamily: 'var(--font-caveat)' }}>
                Same recipes, same process, same taste—whether it's lunch or dinner, weekday or weekend.
              </p>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-heading text-accent mb-4 text-center">What We Stand For</h3>
            <ul className="space-y-3 text-text-light/80" style={{ fontFamily: 'var(--font-caveat)' }}>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <span>Transparency in ingredients and preparation methods</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <span>Clean kitchen and proper food handling—FSSAI certified (13625003000281)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <span>Fair portions and honest service</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-accent mt-1">•</span>
                <span>Making Indian cuisine accessible without compromising authenticity</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg text-text-light/80 mb-6" style={{ fontFamily: 'var(--font-caveat)' }}>
              Come try our food. If it's good, tell your friends. If it's not, tell us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6300591870" className="btn-primary">
                Call: 6300591870
              </a>
              <a href="#contact" className="btn-secondary">
                Visit Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
