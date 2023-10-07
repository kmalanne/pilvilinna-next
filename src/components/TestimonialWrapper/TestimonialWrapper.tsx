import type React from 'react'

import type { TestimonialItem as TTestimonialItem } from '@/lib/types'

import styles from './testimonial.module.css'
import { TestimonialItem } from './TestimonialItem'

export type TestimonialWrapperProps = {
  testimonials?: Array<TTestimonialItem>
}

export const TestimonialWrapper: React.FC<TestimonialWrapperProps> = ({
  testimonials,
}: TestimonialWrapperProps) => {
  if (!testimonials) {
    return null
  }

  return (
    <div className={styles.GridContainer}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.TestimonialCol}>
          <TestimonialItem item={testimonial} />
        </div>
      ))}
    </div>
  )
}
