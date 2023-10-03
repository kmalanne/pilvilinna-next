import type { Metadata } from 'next'

import { Assortment as AssortmentSection } from '@/containers/Assortment'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.assortment.title,
  description: strings.assortment.description,
}

const Assortment = () => <AssortmentSection />

export default Assortment
