import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Josefin_Slab } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { fetchContactCollection } from '@/lib/api'
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
    url: 'https://pilvilinnanleipomo.fi',
    siteName: 'Pilvilinnan leipomo',
    locale: 'fi_FI',
    type: 'website',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await fetchContactCollection()

  return (
    <html lang="fi">
      <body className={josefinSlab.className}>
        <Header data={data} />
        <Navigation />
        <main>{children}</main>
        <Footer data={data} />
      </body>
    </html>
  )
}
