import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'

import styles from './testimonialItem.module.css'

export interface ITestimonialItemProps {
  author: string
  text: string
}

export const TestimonialItem: React.FC<ITestimonialItemProps> = (props: ITestimonialItemProps) => {
  const { author, text } = props

  return (
    <div className={styles.Item} aria-label="testimonial_item">
      <FontAwesomeIcon icon={faUserCircle} size="4x" inverse></FontAwesomeIcon>
      <div className={styles.Statement}>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        <div className={styles.Author}>{author}</div>
      </div>
    </div>
  )
}
