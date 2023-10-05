import type React from 'react'

import type { ServiceItem as TServiceItem } from '@/contentful/types'

import styles from './service.module.css'
import { ServiceItem } from './ServiceItem'

export type ServiceWrapperProps = {
  services?: Array<TServiceItem>
}

export const ServiceWrapper: React.FC<ServiceWrapperProps> = ({ services }: ServiceWrapperProps) => {
  if (!services) {
    return null
  }
  return (
    <div className={styles.GridContainer}>
      {services.map((service, index) => (
        <ServiceItem key={index} item={service} />
      ))}
    </div>
  )
}
