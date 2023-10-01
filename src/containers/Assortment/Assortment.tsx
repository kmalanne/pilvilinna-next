'use client'

import { Container as BSContainer } from 'react-bootstrap'

import { strings } from '@/utils/strings'

import styles from './assortment.module.css'
import { Banner } from '../../components/Banner/Banner'
import { Gallery } from '../../components/Gallery/Gallery'
import type { ImageProps } from '../../components/Image/Image'

const getImages = (): Array<ImageProps> => {
  const images = []
  for (let i = 1; i < 17; i++) {
    images.push({
      id: i,
      src: `/images/gallery-${i}.jpg`,
      layout: 'responsive',
      loading: 'lazy',
    } as ImageProps)
  }

  return images
}

export const Assortment = () => (
  <section aria-labelledby="assortment-title">
    <Banner imgSrc="/images/banner-1.jpg" text={strings.assortment.title}></Banner>
    <BSContainer className={styles.Container}>
      <h2 className={styles.Heading} id="assortment-title">
        {strings.assortment.title}
      </h2>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          unique_cake_title <span className={styles.ItemHeaderPrice}>price_from 98€</span>
        </p>
      </div>
      <p>unique_cake_description_1</p>
      <ul>
        <li className={styles.ListItem}>
          circa 10 person price_from <strong>90,00€</strong>
        </li>
        <li className={styles.ListItem}>
          circa 20 person price_from <strong>135,00€</strong>
        </li>
        <li className={styles.ListItem}>
          circa 30 person price_from <strong>175,00€</strong>
        </li>
      </ul>
      <p className={styles.Text}>unique_cake_description_2</p>
      <ul>
        <li className={styles.ListItem}>unique_cake_choice_1</li>
        <li className={styles.ListItem}>unique_cake_choice_2</li>
        <li className={styles.ListItem}>unique_cake_choice_3</li>
        <li className={styles.ListItem}>unique_cake_choice_4</li>
        <li className={styles.ListItem}>unique_cake_choice_5</li>
        <li className={styles.ListItem}>unique_cake_choice_6</li>
      </ul>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          mousse_cake_title <span className={styles.ItemHeaderPrice}>price_from 80€</span>
        </p>
      </div>
      <p className={styles.Text}>mousse_cake_description</p>
      <ul>
        <li className={styles.ListItem}>
          circa 12 person <strong>80,00€</strong>
        </li>
      </ul>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          chocolate_cake_title <span className={styles.ItemHeaderPrice}>80€</span>
        </p>
      </div>
      <p className={styles.Text}>chocolate_cake_description_1</p>
      <p className={styles.Text}>
        chocolate_cake_description_2 <strong>7,90€</strong>
      </p>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          cupcake_title <span className={styles.ItemHeaderPrice}>50€</span>
        </p>
      </div>
      <p className={styles.Text}>
        cupcake_description_1 <strong>+5-10€</strong>
      </p>
      <p className={styles.Text}>cupcake_description_2</p>
      <ul>
        <li className={styles.ListItem}>cupcake_choice_1</li>
        <li className={styles.ListItem}>cupcake_choice_2</li>
        <li className={styles.ListItem}>cupcake_choice_3</li>
        <li className={styles.ListItem}>cupcake_choice_4</li>
        <li className={styles.ListItem}>cupcake_choice_5</li>
        <li className={styles.ListItem}>cupcake_choice_6</li>
        <li className={styles.ListItem}>cupcake_choice_7</li>
        <li className={styles.ListItem}>cupcake_choice_8</li>
        <li className={styles.ListItem}>cupcake_choice_9</li>
      </ul>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          meringue_title <span className={styles.ItemHeaderPrice}>0,80€/pcs</span>
        </p>
      </div>
      <ul>
        <li className={styles.ListItem}>meringue_choice_1</li>
        <li className={styles.ListItem}>meringue_choice_2</li>
        <li className={styles.ListItem}>meringue_choice_3</li>
        <li className={styles.ListItem}>meringue_choice_4</li>
        <li className={styles.ListItem}>meringue_choice_5</li>
      </ul>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          cookie_title <span className={styles.ItemHeaderPrice}>1,50€/kpl</span>
        </p>
      </div>
      <ul>
        <li className={styles.ListItem}>cookie_choice_1</li>
        <li className={styles.ListItem}>cookie_choice_1</li>
      </ul>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          macaron_title <span className={styles.ItemHeaderPrice}>40€</span>
        </p>
      </div>
      <p>macaron_description</p>
      <ul>
        <li className={styles.ListItem}>macaron_choice_1</li>
        <li className={styles.ListItem}>macaron_choice_2</li>
        <li className={styles.ListItem}>macaron_choice_3</li>
        <li className={styles.ListItem}>macaron_choice_4</li>
        <li className={styles.ListItem}>macaron_choice_5</li>
        <li className={styles.ListItem}>macaron_choice_6</li>
        <li className={styles.ListItem}>macaron_choice_7</li>
        <li className={styles.ListItem}>macaron_choice_8</li>
      </ul>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>
          sandwich_cake_title <span className={styles.ItemHeaderPrice}>price_from 110€</span>
        </p>
      </div>
      <p className={styles.Text}>sandwich_cake_description</p>
      <ul>
        <li className={styles.ListItem}>
          sandwich_cake_choice_1 <strong>125€</strong>
        </li>
        <li className={styles.ListItem}>
          sandwich_cake_choice_2 <strong>125€</strong>
        </li>
        <li className={styles.ListItem}>
          sandwich_cake_choice_3 <strong>125€</strong>
        </li>
        <li className={styles.ListItem}>
          sandwich_cake_choice_4 <strong>125€</strong>
        </li>
        <li className={styles.ListItem}>
          sandwich_cake_choice_5 <strong>155€</strong>
        </li>
        <li className={styles.ListItem}>
          sandwich_cake_choice_6 <strong>155€</strong>
        </li>
      </ul>
      <div className={styles.ItemHeader}>
        <p className={styles.ItemHeaderText}>bread_title</p>
      </div>
      <p className={styles.Text}>
        bread_description <strong>9,00€</strong> pcs
      </p>
      <div className={styles.InfoTextContainer}>
        <p className={styles.Text}>
          <strong>info_1</strong>
        </p>
        <p className={styles.Text}>info_2</p>
        <p className={styles.Text}>info_3</p>
      </div>
    </BSContainer>
    <BSContainer className={`${styles.Container} ${styles.GalleryContainer}`}>
      <h2 className="sr-only">Cake gallery</h2>
      <Gallery images={getImages()}></Gallery>
    </BSContainer>
  </section>
)
