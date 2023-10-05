import type { Metadata } from 'next'

import { Home as HomeSection } from '@/containers/Home'
import { fetchHomeCollection } from '@/contentful/api'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.home.title,
  description: strings.home.description,
}

const Home = async () => {
  const data = await fetchHomeCollection()

  return <HomeSection data={data} />
}

export default Home
