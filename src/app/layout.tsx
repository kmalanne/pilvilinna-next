import type { Metadata, Viewport } from 'next'
import { Fraunces, Josefin_Slab } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { fetchContactCollection } from '@/lib/api'
import '../style/globals.css'

const josefinSlab = Josefin_Slab({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pilvilinnanleipomo.fi'),
  title: {
    default: 'Pilvilinnan leipomo – Tilauskakut ja leivonnaiset Nokialla',
    template: '%s | Pilvilinnan leipomo',
  },
  description:
    'Pilvilinnan leipomo on kotileipomo Nokialla. Teemme yksilöllisiä tilauskakkuja, täytekakkuja ja herkullisia leivonnaisia juhliin ja arkeen. Tilaa oma unelmakakkusi!',
  applicationName: 'Pilvilinnan leipomo',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'tilauskakut Nokia',
    'kakku Nokia',
    'täytekakku',
    'juhlakakut',
    'hääkakut',
    'kotileipomo Nokia',
    'kotileipomo Pirkanmaa',
    'leivonnaiset',
    'leipomo Nokia',
    'pilvilinnan leipomo',
    'Anna Jaatinen',
    'custom cakes',
    'bakery Nokia Finland',
  ],
  authors: [{ name: 'Kai-Mikael Alanne' }],
  creator: 'Pilvilinnan leipomo',
  publisher: 'Pilvilinnan leipomo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Pilvilinnan leipomo – Tilauskakut ja leivonnaiset Nokialla',
    description:
      'Kotileipomo Nokialla. Yksilölliset tilauskakut, täytekakut ja leivonnaiset juhliin ja arkeen.',
    url: 'https://pilvilinnanleipomo.fi',
    siteName: 'Pilvilinnan leipomo',
    locale: 'fi_FI',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Pilvilinnan leipomo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilvilinnan leipomo – Tilauskakut ja leivonnaiset Nokialla',
    description:
      'Kotileipomo Nokialla. Yksilölliset tilauskakut, täytekakut ja leivonnaiset juhliin ja arkeen.',
    images: ['/images/logo.jpg'],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#5d4f91',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await fetchContactCollection()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Pilvilinnan leipomo',
    description:
      'Kotileipomo Nokialla. Yksilölliset tilauskakut, täytekakut ja leivonnaiset juhliin ja arkeen.',
    image: 'https://pilvilinnanleipomo.fi/images/logo.jpg',
    url: 'https://pilvilinnanleipomo.fi',
    telephone: data?.phoneNumber,
    email: data?.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nokia',
      addressRegion: 'Pirkanmaa',
      addressCountry: 'FI',
    },
    areaServed: 'Nokia, Pirkanmaa',
    priceRange: '€€',
  }

  return (
    <html lang="fi">
      <body className={`${josefinSlab.variable} ${fraunces.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header data={data} />
        <Navigation />
        <main>{children}</main>
        <Footer data={data} />
      </body>
    </html>
  )
}
