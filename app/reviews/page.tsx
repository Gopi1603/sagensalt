'use client'

import { motion } from 'framer-motion'
import { Star, ThumbsUp, MessageSquare, ExternalLink, QrCode } from 'lucide-react'
import { useEffect } from 'react'
import { trackPageView } from '@/lib/analytics'

export default function ReviewsPage() {
  useEffect(() => {
    trackPageView('/reviews')
  }, [])

  const reviewStats = {
    google: { rating: '[ENTER_GOOGLE_RATING]', count: '[ENTER_GOOGLE_COUNT]' },
    zomato: { rating: '[ENTER_ZOMATO_RATING]', count: '[ENTER_ZOMATO_COUNT]' },
  }

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-accent text-center mb-4">
            What Our Guests Say
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-8"></div>

          {/* Rating Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-primary/30 border border-accent/20 rounded-lg p-8 text-center">
              <h3 className="text-xl font-heading text-accent mb-3">Google Reviews</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="text-accent fill-accent" size={32} />
                <span className="text-4xl font-bold text-text-light">{reviewStats.google.rating}</span>
              </div>
              <p className="text-text-light/60">{reviewStats.google.count} reviews</p>
              <a
                href="https://g.page/r/[ENTER_GOOGLE_PLACE_ID]/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center mt-4"
              >
                <ExternalLink size={16} className="mr-2" />
                View on Google
              </a>
            </div>

            <div className="bg-primary/30 border border-accent/20 rounded-lg p-8 text-center">
              <h3 className="text-xl font-heading text-accent mb-3">Zomato Reviews</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="text-accent fill-accent" size={32} />
                <span className="text-4xl font-bold text-text-light">{reviewStats.zomato.rating}</span>
              </div>
              <p className="text-text-light/60">{reviewStats.zomato.count} reviews</p>
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center mt-4"
              >
                <ExternalLink size={16} className="mr-2" />
                View on Zomato
              </a>
            </div>
          </div>

          {/* Google Reviews Embed */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading text-accent mb-6 text-center">
              Recent Reviews
            </h2>
            <div className="bg-primary/30 border border-accent/20 rounded-lg p-8">
              {/* Google Reviews Widget Placeholder */}
              <div className="text-center text-text-light/60">
                <p className="mb-4">
                  Add Google Reviews widget here using Elfsight or similar service:
                </p>
                <code className="text-sm bg-primary/50 px-3 py-1 rounded">
                  {`<script src="https://static.elfsight.com/platform/platform.js"></script>`}
                  <br />
                  {`<div class="elfsight-app-[YOUR_WIDGET_ID]"></div>`}
                </code>
                <p className="mt-4 text-xs">
                  Or manually display featured reviews below
                </p>
              </div>

              {/* Manual Featured Reviews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary border border-accent/20 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-text-light/80 mb-4 italic">
                    "[FEATURED_REVIEW_1_TEXT]"
                  </p>
                  <p className="text-accent font-semibold">[REVIEWER_NAME_1]</p>
                  <p className="text-text-light/60 text-sm">Google</p>
                </div>

                <div className="bg-primary border border-accent/20 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-text-light/80 mb-4 italic">
                    "[FEATURED_REVIEW_2_TEXT]"
                  </p>
                  <p className="text-accent font-semibold">[REVIEWER_NAME_2]</p>
                  <p className="text-text-light/60 text-sm">Zomato</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leave a Review Section */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 mb-12">
            <div className="text-center mb-6">
              <ThumbsUp className="text-accent mx-auto mb-4" size={48} />
              <h2 className="text-2xl md:text-3xl font-heading text-accent mb-3">
                Enjoyed Your Meal?
              </h2>
              <p className="text-text-light/80 max-w-2xl mx-auto">
                Your feedback helps us improve and helps others discover great food. Takes less than 2 minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/[ENTER_GOOGLE_PLACE_ID]/review"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Star size={20} className="mr-2" />
                Review on Google
              </a>
              <a
                href="https://zoma.to/r/22394794"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                <Star size={20} className="mr-2" />
                Review on Zomato
              </a>
            </div>
          </div>

          {/* In-Store QR Code Strategy */}
          <div className="bg-primary/30 border border-accent/20 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <QrCode className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-heading text-accent mb-3">
                  Dining With Us?
                </h3>
                <p className="text-text-light/80 mb-4">
                  Scan the QR code on your table to leave a quick review while your experience is fresh.
                </p>
                <div className="space-y-2 text-sm text-text-light/70">
                  <p className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Takes 30 seconds
                  </p>
                  <p className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Direct link to review page
                  </p>
                  <p className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Your feedback matters
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-8 text-center">
                <div className="bg-white p-4 rounded-lg inline-block mb-4">
                  <div className="w-48 h-48 bg-primary/20 flex items-center justify-center">
                    <span className="text-xs text-text-light/50">
                      [QR CODE<br />PLACEHOLDER]<br /><br />
                      Generate QR linking to:<br />
                      Google Review URL
                    </span>
                  </div>
                </div>
                <p className="text-text-light/60 text-sm">
                  Create QR code using qr-code-generator.com
                </p>
              </div>
            </div>
          </div>

          {/* Review Response Policy */}
          <div className="mt-12 text-center">
            <p className="text-text-light/60 text-sm">
              We read and respond to every review. Thank you for sharing your experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
