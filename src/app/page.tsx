import type { Metadata } from 'next'

import { Home as HomeSection } from '@/containers/Home/Home'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.home.title,
  description: strings.home.description,
}

const Home = () => <HomeSection />

export default Home
