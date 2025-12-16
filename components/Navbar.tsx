'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-accent/20">
        <div className="container-custom px-4 h-16 flex items-center justify-between">
          {/* Left spacer */}
          <div className="w-10"></div>

          {/* Centered Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-heading text-accent hover:text-gradient transition-colors">
            Sage N Salt
          </Link>

          {/* Right hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-accent hover:text-text-light transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-primary flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl md:text-4xl font-heading text-accent hover:text-gradient transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
