import type React from 'react'

import type { TestimonialItem as TTestimonialItem } from '@/contentful/types'

import styles from './testimonialItem.module.css'

export type TestimonialItemProps = {
  item: TTestimonialItem
}

export const TestimonialItem: React.FC<TestimonialItemProps> = ({ item }: TestimonialItemProps) => (
  <div className={styles.Item} aria-label="testimonial_item">
    <div className={styles.TextWrapper}>
      <p className={styles.Testimonial}>{item.testimonial}</p>
      <p className={styles.Author}>{item.author}</p>
    </div>
  </div>
)
