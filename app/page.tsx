import { Metadata } from 'next'
import Script from 'next/script'
import Hero from '@/components/Hero'
import MenuCategories from '@/components/MenuCategories'
import DigitalNomad from '@/components/DigitalNomad'
import WelcomeSection from '@/components/WelcomeSection'
import OrderCTA from '@/components/OrderCTA'
import SignatureDishes from '@/components/SignatureDishes'
import MenuHighlights from '@/components/MenuHighlights'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Location from '@/components/Location'
import InstagramFeed from '@/components/InstagramFeed'
import FestivalTheme from '@/components/FestivalTheme'
import { generatePageMetadata, generateRestaurantSchema } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'Home - Modern Artisan Indian Cuisine',
  description: 'Sage N Salt offers authentic Indian cuisine with modern artisan preparations. Order biryani, starters, and more. Fresh preparation daily. FSSAI certified.',
  canonical: '/',
  keywords: 'Indian restaurant, biryani near me, Indian food, best restaurant, authentic Indian cuisine, fresh biryani, [ENTER_CITY] restaurant, fine dining [ENTER_CITY]',
})

export default function Home() {
  const restaurantSchema = generateRestaurantSchema()

  return (
    <>
      <Script
        id="restaurant-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        strategy="afterInteractive"
      />
      <FestivalTheme />
      <Hero />
      <MenuCategories />
      <DigitalNomad />
      <WelcomeSection />
      <OrderCTA />
      <SignatureDishes />
      <MenuHighlights />
      <Gallery />
      <Reviews />
      <InstagramFeed />
      <Location />
    </>
  )
}
