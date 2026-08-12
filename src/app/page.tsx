import type { Metadata } from 'next'

import { Home as HomeSection } from '@/containers/Home'
import { fetchHomeCollection } from '@/lib/api'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: {
    absolute: 'Pilvilinnan leipomo – Tilauskakut ja leivonnaiset Nokialla',
  },
  description: strings.home.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pilvilinnan leipomo – Tilauskakut ja leivonnaiset Nokialla',
    description: strings.home.description,
    url: '/',
  },
}

const Home = async () => {
  const data = await fetchHomeCollection()

  return <HomeSection data={data} />
}

export default Home
