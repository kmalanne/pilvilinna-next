import type { Metadata } from 'next'

import { Assortment as AssortmentSection } from '@/containers/Assortment'
import { fetchAssortmentCollection } from '@/contentful/api'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.assortment.title,
  description: strings.assortment.description,
}

const Assortment = async () => {
  const data = await fetchAssortmentCollection()

  return <AssortmentSection data={data} />
}

export default Assortment
