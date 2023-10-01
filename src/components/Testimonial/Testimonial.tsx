import type React from 'react'

import styles from './testimonial.module.css'
import { TestimonialItem, type TestimonialItemProps } from './TestimonialItem/TestimonialItem'

export type TestimonialProps = {
  testimonials: Array<TestimonialItemProps>
}

export const Testimonial: React.FC<TestimonialProps> = (props: TestimonialProps) => {
  const { testimonials } = props

  return (
    <div className={styles.GridContainer}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className={styles.TestimonialCol}>
          <TestimonialItem text={testimonial.text} author={testimonial.author} />
        </div>
      ))}
    </div>
  )
}
