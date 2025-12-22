'use client'

import { useEffect } from 'react'

// Declare Instagram global
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default function InstagramFeed() {
  const instagramPosts = [
    { url: 'https://www.instagram.com/p/DSIfj0rkt0a/', embed: 'https://www.instagram.com/p/DSIfj0rkt0a/embed' },
    { url: 'https://www.instagram.com/p/DSXFrx_ibde/', embed: 'https://www.instagram.com/p/DSXFrx_ibde/embed' },
    { url: 'https://www.instagram.com/p/DSMJ_jICZLh/', embed: 'https://www.instagram.com/p/DSMJ_jICZLh/embed' },
  ]

  useEffect(() => {
    // Load Instagram embed script if needed
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Process embeds when script loads
    const processEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    script.onload = processEmbeds
    // Also try to process if script already exists
    setTimeout(processEmbeds, 100)

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
          <h2 className="text-3xl md:text-4xl font-heading mb-4" style={{ color: '#228B22' }}>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {instagramPosts.map((post, i) => (
              <div
                key={i}
                className="bg-primary rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: 'calc(100% - 2px)',
                  }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
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
