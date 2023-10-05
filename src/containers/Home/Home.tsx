'use client'

import Image from 'next/legacy/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

import { RichText } from '@/components/RichText'
import { ServiceWrapper } from '@/components/ServiceWrapper'
import { TestimonialWrapper } from '@/components/TestimonialWrapper'
import type { HomeData } from '@/contentful/types'
import { AppRoute } from '@/utils/route'
import { strings } from '@/utils/strings'

import styles from './home.module.css'

export type HomeProps = {
  data?: HomeData
}

export const Home = ({ data }: HomeProps) => (
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
            alt={strings.home.bakerImage}
          />
        </Col>
        <Col className={styles.BakerTextWrapper} lg={6} md={12}>
          <RichText document={data?.about.json} />
          <p className={styles.Signature}>{strings.home.signature}</p>
        </Col>
      </Row>
    </Container>
    <Container className={styles.ServiceContainer}>
      <h2 className={styles.SubHeading}>{strings.home.headingServices}</h2>
      <ServiceWrapper services={data?.serviceItemsCollection.items} />
    </Container>
    <Container className={styles.TestimonialContainer}>
      <h2 className={styles.SubHeading}>{strings.home.headingTestimonials}</h2>
      <TestimonialWrapper testimonials={data?.testimonialsCollection.items} />
    </Container>
  </section>
)
