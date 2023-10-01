import type { Metadata } from 'next'

import { Ordering as OrderingSection } from '@/containers/Ordering/Ordering'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.ordering.title,
  description: strings.ordering.description,
}

const Ordering = () => <OrderingSection />

export default Ordering
