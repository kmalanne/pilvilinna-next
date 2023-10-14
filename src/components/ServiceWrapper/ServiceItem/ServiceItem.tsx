import Image from 'next/image'
import type React from 'react'

import type { ServiceItem as TServiceItem } from '@/lib/types'

import styles from './serviceItem.module.css'

export type ServiceItemProps = {
  item: TServiceItem
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ item }: ServiceItemProps) => (
  <div className={styles.Item} aria-label="service">
    <div className={styles.Image}>
      <Image
        src={item.image.url}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        loading="lazy"
        alt={item.image.description}
      />
    </div>
    <h3 className={styles.Title}>{item.title}</h3>
    <p className={styles.Text}>{item.text}</p>
  </div>
)
