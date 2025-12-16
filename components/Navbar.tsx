'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/catering', label: 'Catering' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-primary/95 backdrop-blur-sm border-b border-text-light/10 shadow-lg">
        <div className="container-custom px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-12 w-32 hover:opacity-80 transition-opacity">
            <Image
              src="https://ik.imagekit.io/gopichakradhar/sagensalt/logo.png"
              alt="Sage N Salt"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-light hover:text-accent transition-colors p-2 relative z-[70]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Slide-in Menu from Right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[56] w-full sm:w-96 bg-primary/98 backdrop-blur-md border-l border-text-light/10 shadow-2xl"
            >
              <nav className="flex flex-col h-full pt-28 pb-8 px-8">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-4 px-4 text-2xl font-heading text-text-light hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-300 hover:translate-x-2 group"
                      >
                        <span className="relative inline-block">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-8 border-t border-text-light/10"
                >
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://zoma.to/r/22394794"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-light/60 hover:text-accent transition-colors text-sm"
                    >
                      Zomato
                    </a>
                    <a
                      href="https://www.swiggy.com/menu/1286711?source=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-light/60 hover:text-accent transition-colors text-sm"
                    >
                      Swiggy
                    </a>
                    <a
                      href="https://www.instagram.com/sagensalt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-light/60 hover:text-accent transition-colors text-sm"
                    >
                      Instagram
                    </a>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
