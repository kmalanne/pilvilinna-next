import type { ServiceItem as TServiceItem } from '@/lib/types'

import styles from './service.module.css'
import { ServiceItem } from './ServiceItem'

export type ServiceWrapperProps = {
  services?: Array<TServiceItem>
}

export const ServiceWrapper = ({
  services,
}: ServiceWrapperProps) => {
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
