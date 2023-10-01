import Image from 'next/legacy/image'
import type React from 'react'

import styles from './banner.module.css'

export interface IBannerProps {
  text: string
  imgSrc: string
}

export const Banner: React.FC<IBannerProps> = (props: IBannerProps) => {
  const { imgSrc, text } = props

  return (
    <div className={styles.Container} aria-labelledby="title">
      <Image
        src={imgSrc}
        alt={text}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      ></Image>
      <h1 id="title" className={styles.Title}>
        {text}
      </h1>
    </div>
  )
}
