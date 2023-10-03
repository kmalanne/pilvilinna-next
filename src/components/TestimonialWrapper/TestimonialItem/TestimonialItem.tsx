import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'

import styles from './testimonialItem.module.css'

export type TestimonialItemProps = {
  author: string
  text: string
}

export const TestimonialItem: React.FC<TestimonialItemProps> = (props: TestimonialItemProps) => {
  const { author, text } = props

  return (
    <div className={styles.Item} aria-label="testimonial_item">
      <FontAwesomeIcon icon={faUserCircle} size="4x" inverse></FontAwesomeIcon>
      <div className={styles.TextWrapper}>
        <p className={styles.Statement} dangerouslySetInnerHTML={{ __html: text }}></p>
        <p className={styles.Author}>{author}</p>
      </div>
    </div>
  )
}
