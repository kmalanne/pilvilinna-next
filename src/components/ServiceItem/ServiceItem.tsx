import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'

import styles from './serviceItem.module.css'

export interface IServiceItemProps {
  title: string
  text: string
  icon: IconDefinition
}

export const ServiceItem: React.FC<IServiceItemProps> = (props: IServiceItemProps) => {
  const { icon, text, title } = props

  return (
    <div className={styles.Item} aria-label="service">
      <FontAwesomeIcon icon={icon} size="4x"></FontAwesomeIcon>
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Text}>{text}</p>
    </div>
  )
}
