import type { Metadata } from 'next'
import { Playfair_Display, Inter, Caveat, Akaya_Telivigala } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const akaya = Akaya_Telivigala({
  subsets: ['latin'],
  variable: '--font-akaya',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable} ${akaya.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}
