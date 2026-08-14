import type { Metadata } from 'next'

import { Ordering as OrderingSection } from '@/containers/Ordering/Ordering'
import { fetchOrderingCollection } from '@/lib/api'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.ordering.title,
  description: strings.ordering.description,
  alternates: {
    canonical: '/ordering',
  },
  openGraph: {
    title: strings.ordering.title,
    description: strings.ordering.description,
    url: '/ordering',
  },
}

const Ordering = async () => {
  const data = await fetchOrderingCollection()

  return <OrderingSection data={data} />
}

export default Ordering
