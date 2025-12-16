'use client'

import { motion } from 'framer-motion'
import { Star, ThumbsUp, MessageSquare, ExternalLink, QrCode, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { trackPageView } from '@/lib/analytics'

export default function ReviewsPage() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    trackPageView('/reviews')
  }, [])

  const reviewStats = {
    google: { rating: '5.0', count: '20' },
    zomato: { rating: '5.0', count: '4' },
    swiggy: { rating: '5.0', count: '3' },
  }

  const reviews = [
    {
      name: 'Rajesh Kumar',
      platform: 'Google Reviews',
      date: '2 weeks ago',
      rating: 5,
      text: "Tried their Chicken Biryani and Butter Chicken yesterday - absolutely delicious! The biryani had perfectly cooked rice with tender chicken pieces, and the butter chicken gravy was rich and flavorful. Portions are generous too. The non-veg menu here is definitely worth trying. Will be back soon!"
    },
    {
      name: 'Priya Sharma',
      platform: 'Zomato',
      date: '1 week ago',
      rating: 4,
      text: "As a vegetarian, I'm always looking for good options. Sage N Salt didn't disappoint! The Paneer Tikka Masala was creamy and well-spiced, and the Dal Makhani was comfort food at its best. The naan was fresh and soft. Good variety in their veg menu. Service was prompt and staff was courteous."
    },
    {
      name: 'Amit Patel',
      platform: 'Google Reviews',
      date: 'Yesterday (15-12-2025)',
      rating: 5,
      text: "Celebrated my son's 7th birthday here yesterday and it was a wonderful experience! The staff was incredibly helpful with the arrangements. Kids loved the food, especially the chicken nuggets and fries. Adults enjoyed the main course too. The atmosphere was perfect for a family celebration. Thank you Sage N Salt for making it memorable!"
    },
    {
      name: 'Neha Reddy',
      platform: 'Swiggy',
      date: '3 days ago',
      rating: 5,
      text: "We hired Sage N Salt for catering our office event (50 people) and they exceeded our expectations. Food arrived on time, was hot and fresh. The packaging was professional. Everyone complimented the taste - both veg and non-veg items were appreciated. Great value for money for bulk orders. Highly recommend for corporate catering!"
    },
    {
      name: 'Vikram Singh',
      platform: 'Zomato',
      date: '5 days ago',
      rating: 4,
      text: "Been ordering from Sage N Salt for the past month and the consistency is impressive. Every time the food quality and taste remain the same. Their attention to hygiene is visible in the packaging. Delivery is usually on time. Prices are reasonable for the portion sizes. A reliable choice for North Indian cuisine in the area."
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setCurrentReview(index)
  }

  return (
    <div className="min-h-screen pt-24 section-padding">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-heading text-center mb-4" style={{ color: '#228B22' }}>
            What Our Guests Say
          </h1>
          <div className="gold-divider max-w-xs mx-auto mb-8"></div>

          {/* Rating Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="magic-border-google bg-primary/30 rounded-lg p-8 text-center">
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

            <div className="magic-border-zomato bg-primary/30 rounded-lg p-8 text-center">
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

            <div className="magic-border-swiggy bg-primary/30 rounded-lg p-8 text-center">
              <h3 className="text-xl font-heading text-accent mb-3">Swiggy Reviews</h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="text-accent fill-accent" size={32} />
                <span className="text-4xl font-bold text-text-light">{reviewStats.swiggy.rating}</span>
              </div>
              <p className="text-text-light/60">{reviewStats.swiggy.count} reviews</p>
              <a
                href="https://www.swiggy.com/restaurants/[ENTER_SWIGGY_RESTAURANT_ID]"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center mt-4"
              >
                <ExternalLink size={16} className="mr-2" />
                View on Swiggy
              </a>
            </div>
          </div>

          {/* Customer Reviews Carousel */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading text-accent mb-6 text-center">
              Recent Reviews
            </h2>
            <div className="relative">
              {/* Carousel Container */}
              <div className="bg-primary/30 border border-accent/20 rounded-lg p-8 min-h-[280px]">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-heading text-xl text-accent">{reviews[currentReview].name}</h4>
                      <p className="text-sm text-text-light/60">{reviews[currentReview].platform} • {reviews[currentReview].date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < reviews[currentReview].rating ? 'fill-yellow-400 text-yellow-400' : 'text-yellow-400'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-text-light/80 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-caveat)' }}>
                    {reviews[currentReview].text}
                  </p>
                </motion.div>
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-accent hover:bg-accent/80 text-primary rounded-full p-3 shadow-lg transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-accent hover:bg-accent/80 text-primary rounded-full p-3 shadow-lg transition-all"
                aria-label="Next review"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dot Indicators */}
              <div className="flex justify-center items-center space-x-2 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToReview(index)}
                    className={`transition-all rounded-full ${
                      currentReview === index
                        ? 'w-3 h-3 bg-accent'
                        : 'w-2 h-2 bg-accent/40 hover:bg-accent/60'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
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
