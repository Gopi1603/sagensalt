import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VerticalIconBar from '@/components/VerticalIconBar'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sage N Salt - Modern Artisan Indian Cuisine',
  description: 'Premium Indian restaurant offering modern artisan cuisine in an elegant yet welcoming atmosphere.',
  keywords: 'Indian restaurant, fine dining, artisan cuisine, Sage N Salt',
  openGraph: {
    title: 'Sage N Salt - Modern Artisan Indian Cuisine',
    description: 'Premium Indian restaurant offering modern artisan cuisine',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <VerticalIconBar />
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}
