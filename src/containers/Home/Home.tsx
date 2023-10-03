'use client'

import { faBirthdayCake, faBreadSlice, faCookie } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

import { Service } from '@/components/ServiceWrapper'
import { Testimonial } from '@/components/TestimonialWrapper'
import { AppRoute } from '@/utils/route'
import { strings } from '@/utils/strings'

import styles from './home.module.css'

const testimonials = [
  { text: 'testimonial_1', author: 'Essi, Tampere' },
  { text: 'testimonial_2', author: 'Mari, Ylöjärvi' },
  { text: 'testimonial_3', author: 'Sanna, Pirkkala' },
  { text: 'testimonial_4', author: 'Jonna, Nokia' },
]

const serviceItems = [
  {
    icon: faBirthdayCake,
    title: 'assortment_choice_1_title',
    text: 'assortment_choice_1_description',
  },
  {
    icon: faBreadSlice,
    title: 'assortment_choice_2_title',
    text: 'assortment_choice_2_description',
  },
  {
    icon: faCookie,
    title: 'assortment_choice_3_title',
    text: 'assortment_choice_3_description',
  },
]

export const Home = () => (
  <section aria-labelledby="title">
    <div className={styles.HeroContainer}>
      <Image
        src="/images/hero.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      ></Image>
      <h1 className={styles.Heading} id="title">
        {strings.home.title}
      </h1>
      <p className={styles.HeroText}>{strings.home.slogan}</p>
      <div className={styles.LinkButton}>
        <Link href={AppRoute.Contact}>{strings.contact.contact}</Link>
      </div>
    </div>
    <Container className={styles.BakerContainer}>
      <h2 className="sr-only">{strings.home.headingAbout}</h2>
      <Row>
        <Col className={styles.ImageWrapper} lg={6} md={12}>
          <Image
            src="/images/anna.jpg"
            width={483}
            height={746}
            layout="responsive"
            loading="lazy"
            objectFit="contain"
            alt="Pilvilinnan leipomo leipuri ja omistaja"
          />
        </Col>
        <Col className={styles.BakerTextWrapper} lg={6} md={12}>
          <p>info_1</p>
          <p>info_2</p>
          <p className={styles.Signature}>{strings.home.signature}</p>
        </Col>
      </Row>
    </Container>
    <Container className={styles.ServiceContainer}>
      <h2 className={styles.SubHeading}>{strings.home.headingServices}</h2>
      <Service serviceItems={serviceItems} />
    </Container>
    <Container className={styles.TestimonialContainer}>
      <h2 className={styles.SubHeading}>{strings.home.headingTestimonials}</h2>
      <Testimonial testimonials={testimonials} />
    </Container>
  </section>
)
