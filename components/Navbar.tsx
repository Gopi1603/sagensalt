'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isTransparent = isHomePage && !isScrolled

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
      <nav className={`fixed top-0 left-0 right-0 z-[60] backdrop-blur-sm border-b transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent border-white/10' 
          : 'bg-primary/95 border-accent/10 shadow-lg'
      }`}>
        <div className="container-custom px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo Text */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <span className={`text-2xl md:text-3xl transition-colors ${
              isTransparent ? 'text-white' : 'text-[#228B22]'
            }`} style={{ fontFamily: "'TAN PEARL', serif" }}>
              Sage N Salt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative group ${
                  isTransparent 
                    ? 'text-white hover:text-amber-400' 
                    : 'text-accent hover:text-accent/70'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isTransparent ? 'bg-amber-400' : 'bg-accent'
                }`}></span>
              </Link>
            ))}
            
            {/* Social Links */}
            <a
              href="https://zoma.to/r/22394794"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 transition-colors text-sm font-semibold"
            >
              Zomato
            </a>
            <a
              href="https://www.swiggy.com/menu/1286711?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-semibold"
            >
              Swiggy
            </a>
          </div>

          {/* Hamburger Menu Button (Mobile & Tablet) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent 
                ? 'text-white hover:bg-white/10' 
                : 'text-accent hover:bg-accent/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-primary z-[70] shadow-2xl transform transition-transform duration-300 lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-accent/10">
            <span className="text-2xl text-accent" style={{ fontFamily: "'TAN PEARL', serif" }}>
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-accent hover:bg-accent/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col space-y-1 px-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-accent/70 hover:bg-accent/5 hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 px-4">
              <div className="border-t border-accent/10 pt-6">
                <p className="text-sm font-semibold text-accent/60 mb-3 px-4">Order Online</p>
                <div className="flex flex-col space-y-2">
                  <a
                    href="https://zoma.to/r/22394794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors font-semibold flex items-center justify-between"
                  >
                    <span>Zomato</span>
                    <span className="text-xs">→</span>
                  </a>
                  <a
                    href="https://www.swiggy.com/menu/1286711?source=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-lg text-orange-500 hover:bg-orange-50 transition-colors font-semibold flex items-center justify-between"
                  >
                    <span>Swiggy</span>
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
