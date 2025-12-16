import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string
}

export function generatePageMetadata({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  keywords,
}: SEOProps): Metadata {
  const siteName = 'Sage N Salt'
  const fullTitle = `${title} | ${siteName}`
  const baseUrl = 'https://sagensalt.com' // Replace with actual domain

  return {
    title: fullTitle,
    description,
    keywords: keywords || 'Indian restaurant, biryani, Indian food, restaurant near me, fine dining',
    authors: [{ name: 'Sage N Salt' }],
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : baseUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Restaurant Schema for Local SEO
export function generateRestaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Sage N Salt',
    image: 'https://sagensalt.com/logo.jpg', // Replace with actual logo URL
    '@id': 'https://sagensalt.com',
    url: 'https://sagensalt.com',
    telephone: '+916300591870',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[ENTER_STREET_ADDRESS]',
      addressLocality: '[ENTER_CITY]',
      addressRegion: '[ENTER_STATE]',
      postalCode: '[ENTER_PINCODE]',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.2453225,
      longitude: 80.1510646,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '11:00',
        closes: '23:00',
      },
    ],
    servesCuisine: ['Indian', 'Biryani', 'Chinese'],
    hasMenu: 'https://sagensalt.com/menu',
    acceptsReservations: 'True',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '[ENTER_RATING]',
      reviewCount: '[ENTER_REVIEW_COUNT]',
    },
    sameAs: [
      'https://www.instagram.com/sage.nsalt',
      'https://zoma.to/r/22394794',
      'https://www.swiggy.com/menu/1286711',
    ],
  }
}

// Menu Schema without prices
export function generateMenuSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Sage N Salt Menu',
    description: 'Authentic Indian cuisine with modern artisan preparations',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Biryani',
        description: 'Signature biryanis prepared with premium ingredients',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Chicken Biryani',
            description: 'Aromatic basmati rice with tender chicken',
            suitableForDiet: 'https://schema.org/NonVegetarianDiet',
          },
          {
            '@type': 'MenuItem',
            name: 'Mutton Biryani',
            description: 'Slow-cooked mutton with fragrant spices',
            suitableForDiet: 'https://schema.org/NonVegetarianDiet',
          },
          {
            '@type': 'MenuItem',
            name: 'Veg Biryani',
            description: 'Garden fresh vegetables with aromatic rice',
            suitableForDiet: 'https://schema.org/VegetarianDiet',
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Starters',
        description: 'Appetizers to begin your meal',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Chicken 65',
            description: 'Spicy deep-fried chicken appetizer',
            suitableForDiet: 'https://schema.org/NonVegetarianDiet',
          },
          {
            '@type': 'MenuItem',
            name: 'Paneer 65',
            description: 'Crispy paneer in spicy coating',
            suitableForDiet: 'https://schema.org/VegetarianDiet',
          },
        ],
      },
    ],
  }
}

// Review Schema
export function generateReviewSchema(reviews: Array<{
  author: string
  rating: number
  text: string
  date: string
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Sage N Salt',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '[ENTER_RATING]',
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
      },
      reviewBody: review.text,
    })),
  }
}
