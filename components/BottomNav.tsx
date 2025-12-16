'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, UtensilsCrossed, Image as ImageIcon, Star, Mail } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/menu', label: 'Menu', icon: UtensilsCrossed },
    { href: '/gallery', label: 'Gallery', icon: ImageIcon },
    { href: '/reviews', label: 'Reviews', icon: Star },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/98 backdrop-blur-sm border-t border-accent/10 shadow-lg">
      <div className="flex items-center justify-around h-16">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive
                  ? 'text-accent'
                  : 'text-accent/50 hover:text-accent/70'
              }`}
            >
              <Icon size={22} />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
