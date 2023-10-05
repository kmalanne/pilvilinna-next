import type { Metadata } from 'next'

import { Ordering as OrderingSection } from '@/containers/Ordering'
import { fetchOrderingCollection } from '@/contentful/api'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.ordering.title,
  description: strings.ordering.description,
}

const Ordering = async () => {
  const data = await fetchOrderingCollection()

  return <OrderingSection data={data} />
}

export default Ordering
