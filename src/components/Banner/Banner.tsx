import Image from 'next/image'

import styles from './banner.module.css'

export type BannerProps = {
  text: string
  url?: string
  description?: string
}

export const Banner = ({ text, url, description }: BannerProps) => (
  <div className={styles.Container} aria-labelledby="title">
    {url && (
      <Image
        src={url}
        alt={description || 'alt'}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority={true}
      />
    )}
    <h1 id="title" className={styles.Title}>
      {text}
    </h1>
  </div>
)
