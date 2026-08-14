'use client'

import { Banner } from '@/components/Banner/Banner'
import { RichText } from '@/components/RichText/RichText'
import type { OrderingData } from '@/lib/types'
import { strings } from '@/utils/strings'

import styles from './ordering.module.css'

export type OrderingProps = {
  data?: OrderingData
}

export const Ordering: React.FC<OrderingProps> = ({ data }: OrderingProps) => (
  <section aria-labelledby="ordering-title">
    <Banner
      text={strings.ordering.title}
      url={data?.bannerImage.url}
      description={data?.bannerImage.description}
    ></Banner>
    <div className={styles.Container}>
      <RichText document={data?.termsOfOrderingAndDelivery?.json} />
    </div>
  </section>
)
