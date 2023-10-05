import type React from 'react'

import type { ServiceItem as TServiceItem } from '@/contentful/types'

import styles from './serviceItem.module.css'

export type ServiceItemProps = {
  item: TServiceItem
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ item }: ServiceItemProps) => (
  <div className={styles.Item} aria-label="service">
    <h3 className={styles.Title}>{item.title}</h3>
    <p className={styles.Text}>{item.text}</p>
  </div>
)
