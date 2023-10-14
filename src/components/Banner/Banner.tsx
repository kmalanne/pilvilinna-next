import Image from 'next/image'
import type React from 'react'

import styles from './banner.module.css'

export type BannerProps = {
  text: string
  url?: string
  description?: string
}

export const Banner: React.FC<BannerProps> = ({ text, url, description }: BannerProps) => (
  <div className={styles.Container} aria-labelledby="title">
    <Image
      src={url || ''}
      alt={description || 'alt'}
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
