'use client'

import { Container as BSContainer } from 'react-bootstrap'

import { Banner } from '@/components/Banner'
import { RichText } from '@/components/RichText'
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
    <BSContainer className={styles.Container}>
      <RichText document={data?.termsOfOrderingAndDelivery?.json} />
    </BSContainer>
  </section>
)
