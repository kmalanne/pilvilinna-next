'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

import { RichText } from '@/components/RichText'
import { ServiceWrapper } from '@/components/ServiceWrapper'
import { TestimonialWrapper } from '@/components/TestimonialWrapper'
import type { HomeData } from '@/lib/types'
import { AppRoute } from '@/utils/route'
import { strings } from '@/utils/strings'

import styles from './home.module.css'

export type HomeProps = {
  data?: HomeData
}

export const Home: React.FC<HomeProps> = ({ data }: HomeProps) => (
  <section aria-labelledby="title">
    <div className={styles.HeroContainer}>
      <Image
        src={data?.heroImage.url || ''}
        alt={data?.heroImage.description || 'alt'}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        priority={true}
      ></Image>
      <h1 className={styles.Heading} id="title">
        {strings.home.title}
      </h1>
      <p className={styles.HeroText}>{data?.slogan}</p>
      <Link className={styles.LinkButton} href={AppRoute.Contact}>
        {strings.contact.contact}
      </Link>
    </div>
    <Container className={styles.BakerContainer}>
      <h2 className="sr-only">{strings.home.headingAbout}</h2>
      <Row>
        <Col className={styles.BakerTextWrapper} lg={10} md={12}>
          <RichText document={data?.about.json} />
          <p className={styles.Signature}>{strings.home.signature}</p>
          <div className={styles.ImageWrapper}>
            <Image
              src={data?.bakerImage.url || ''}
              alt={data?.bakerImage.description || 'alt'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '40%', height: '40%' }}
              loading="lazy"
            />
          </div>
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
