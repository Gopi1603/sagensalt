'use client'

import { useEffect } from 'react'

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script if needed
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="section-padding bg-primary/50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading text-accent mb-4">
            Follow Our Journey
          </h2>
          <div className="gold-divider max-w-xs mx-auto mb-6"></div>
          <a
            href="https://www.instagram.com/sage.nsalt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-text-light transition-colors inline-flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z"/>
            </svg>
            <span>@sage.nsalt</span>
          </a>
        </div>

        {/* Instagram Grid - Manual or Embedded */}
        <div className="bg-primary/30 border border-accent/20 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <a
                key={i}
                href="https://www.instagram.com/sage.nsalt"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-accent/10 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex items-center justify-center border border-accent/20"
              >
                <span className="text-accent/50 text-sm">[INSTA POST {i + 1}]</span>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-text-light/60 text-sm mb-4">
              Replace with actual Instagram feed using Elfsight or similar widget
            </p>
            <a
              href="https://www.instagram.com/sage.nsalt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              View More on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
