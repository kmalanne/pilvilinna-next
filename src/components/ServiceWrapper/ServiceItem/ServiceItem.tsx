// import Image from 'next/image'
import type React from 'react'

import type { ServiceItem as TServiceItem } from '@/contentful/types'

import styles from './serviceItem.module.css'

export type ServiceItemProps = {
  item: TServiceItem
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ item }: ServiceItemProps) => (
  <div className={styles.Item} aria-label="service">
    {/* <Image
      className={styles.Image}
      src="/images/logo.jpg"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '50%', height: '50%' }}
      loading="lazy"
      alt="todo"
    /> */}
    <h3 className={styles.Title}>{item.title}</h3>
    <p className={styles.Text}>{item.text}</p>
  </div>
)
