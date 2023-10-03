import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Josefin_Slab } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import '../style/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const josefinSlab = Josefin_Slab({ weight: '400', subsets: ['latin'] })

config.autoAddCss = false

export const metadata = {
  title: 'Pilvilinnan leipomo',
  description: 'Pilvilinnan leipomo, kotileipomo Nokia, Finland',
  applicationName: 'Pilvilinnan leipomo',
  referrer: 'origin-when-cross-origin',
  keywords: [
    [
      'pilvilinna',
      'leipomo',
      'kakku',
      'leivonnainen',
      'Anna Jaatinen',
      'pilvilinnan leipomo',
      'bakery',
      'cake',
      'pastry',
    ],
  ],
  authors: [{ name: 'Kai-Mikael Alanne' }],
  openGraph: {
    title: 'Pilvilinnan leipomo',
    description: 'Pilvilinnan leipomo, kotileipomo Nokia, Finland',
    url: 'https://pilvilinnanleipomi.fi',
    siteName: 'Pilvilinnan leipomo',
    locale: 'fi_FI',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className={josefinSlab.className}>
        <Header />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
