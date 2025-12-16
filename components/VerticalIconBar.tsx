'use client'

import { ExternalLink } from 'lucide-react'

export default function VerticalIconBar() {
  const links = [
    {
      name: 'Zomato',
      href: 'https://zoma.to/r/22394794',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.5 14.5h3v1h-3v-1zm0-2h3v1h-3v-1zm0-2h3v1h-3v-1z"/>
          <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm-3 0c0-4.136-3.364-7.5-7.5-7.5S4.5 7.864 4.5 12s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"/>
        </svg>
      ),
    },
    {
      name: 'Swiggy',
      href: 'https://www.swiggy.com/menu/1286711?source=sharing',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sage.nsalt?igsh=bXYwNGVrOWl4YXFt',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z"/>
        </svg>
      ),
    },
  ]

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-text-light transition-colors p-2 hover:scale-110 transform duration-300"
          aria-label={link.name}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
