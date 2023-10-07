'use client'

import { Container as BSContainer } from 'react-bootstrap'

import { Banner } from '@/components/Banner'
import { Gallery } from '@/components/Gallery'
import type { GalleryImageProps } from '@/components/Gallery/Image'
import { RichText } from '@/components/RichText'
import type { AssortmentData } from '@/contentful/types'
import { strings } from '@/utils/strings'

import styles from './assortment.module.css'

export type AssortmentProps = {
  data?: AssortmentData
}

const getImages = (): Array<GalleryImageProps> => {
  const images = []
  for (let i = 1; i < 17; i++) {
    images.push({
      id: i,
      src: `/images/gallery-${i}.jpg`,
      layout: 'responsive',
      loading: 'lazy',
    } as GalleryImageProps)
  }

  return images
}

export const Assortment = ({ data }: AssortmentProps) => (
  <section className={styles.Assortment} aria-labelledby="assortment-title">
    <Banner imgSrc="/images/banner-1.jpg" text={strings.assortment.title}></Banner>
    <BSContainer className={styles.Container}>
      <h2 className={styles.Heading} id="assortment-title">
        {strings.assortment.title}
      </h2>
      {data?.productsCollection.items.map((product, i) => (
        <div key={i}>
          <div className={styles.ItemHeader}>
            <p className={styles.ItemHeaderText}>
              {product.title} <span className={styles.ItemHeaderPrice}>{product.price}</span>
            </p>
          </div>
          <div className={styles.ListItem}>
            <RichText document={product.description.json} />
          </div>
        </div>
      ))}
      <div className={styles.InfoText}>
        <RichText document={data?.infoText.json} />
      </div>
    </BSContainer>
    <BSContainer className={`${styles.Container} ${styles.GalleryContainer}`}>
      <h2 className="sr-only">Cake gallery</h2>
      <Gallery images={getImages()}></Gallery>
    </BSContainer>
  </section>
)
