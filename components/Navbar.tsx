'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
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
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-primary/95 backdrop-blur-sm border-b border-accent/10 shadow-lg">
      <div className="container-custom px-4 md:px-6 h-20 flex items-center justify-between">
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

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-accent hover:text-accent/70 font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Social Links - Desktop only */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://zoma.to/r/22394794"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/70 hover:text-accent transition-colors text-sm"
          >
            Zomato
          </a>
          <a
            href="https://www.swiggy.com/menu/1286711?source=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/70 hover:text-accent transition-colors text-sm"
          >
            Swiggy
          </a>
        </div>
      </div>
    </nav>
  )
}
