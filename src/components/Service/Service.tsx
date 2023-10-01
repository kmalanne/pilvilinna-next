import type React from 'react'

import styles from './service.module.css'
import { ServiceItem, type ServiceItemProps } from './ServiceItem/ServiceItem'

export type ServiceProps = {
  serviceItems: Array<ServiceItemProps>
}

export const Service: React.FC<ServiceProps> = (props: ServiceProps) => {
  const { serviceItems } = props

  return (
    <div className={styles.GridContainer}>
      {serviceItems.map((service, index) => (
        <ServiceItem key={index} title={service.title} text={service.text} icon={service.icon} />
      ))}
    </div>
  )
}
