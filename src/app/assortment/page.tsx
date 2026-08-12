import type { Metadata } from 'next'

import { Assortment as AssortmentSection } from '@/containers/Assortment'
import { fetchAssortmentCollection } from '@/lib/api'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.assortment.title,
  description: strings.assortment.description,
  alternates: {
    canonical: '/assortment',
  },
  openGraph: {
    title: strings.assortment.title,
    description: strings.assortment.description,
    url: '/assortment',
  },
}

const Assortment = async () => {
  const data = await fetchAssortmentCollection()

  return <AssortmentSection data={data} />
}

export default Assortment
