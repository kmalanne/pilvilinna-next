'use client'

import { Container as BSContainer } from 'react-bootstrap'

import { strings } from '@/utils/strings'

import styles from './ordering.module.css'
import { Banner } from '../../components/Banner/Banner'

const phoneNumber = process.env.NEXT_PUBLIC__PHONE_NUMBER
const phoneNumberDisplay = process.env.NEXT_PUBLIC__PHONE_NUMBER_DISPLAY

export const Ordering = () => (
  <section aria-labelledby="ordering-title">
    <Banner imgSrc="/images/banner-3.jpg" text={strings.ordering.title}></Banner>
    <BSContainer className={styles.Container}>
      <h2 className={styles.Heading} id="ordering-title">
        title_2:
      </h2>
      <p className={styles.Text}>
        {'info_1'}{' '}
        <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
          &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
        </a>{' '}
        info_2 <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>.
      </p>
      <p className={styles.Text}>info_3</p>
      <p className={styles.Text}>info_4</p>
      <h2 className={styles.Heading} id="delivery-title">
        title_3:
      </h2>
      <p className={styles.Text}>
        <strong>info_5</strong>
        info_6
      </p>
      <h2 className={styles.Heading} id="payment-title">
        title_4:
      </h2>
      <p className={styles.Text}>
        <strong>info_7</strong>
        info_8
      </p>
      <p className={styles.Text}>
        info_9
        <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
        info_10
        <strong>info_11</strong>
      </p>
      <p className={styles.Text}>info_12</p>
      <p className={styles.Text}>info_13</p>
    </BSContainer>
  </section>
)
