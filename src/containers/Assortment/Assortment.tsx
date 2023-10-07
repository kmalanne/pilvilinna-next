'use client'

import { Container as BSContainer } from 'react-bootstrap'

import { Banner } from '@/components/Banner'
import { Gallery } from '@/components/Gallery'
import { RichText } from '@/components/RichText'
import type { AssortmentData } from '@/lib/types'
import { strings } from '@/utils/strings'

import styles from './assortment.module.css'

export type AssortmentProps = {
  data?: AssortmentData
}

export const Assortment: React.FC<AssortmentProps> = ({ data }: AssortmentProps) => (
  <section className={styles.Assortment} aria-labelledby="assortment-title">
    <Banner
      text={strings.assortment.title}
      url={data?.bannerImage.url}
      description={data?.bannerImage.description}
    ></Banner>
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
      <Gallery images={data?.galleryImagesCollection.items}></Gallery>
    </BSContainer>
  </section>
)
