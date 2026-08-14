'use client'

import Image from 'next/image'
import Link from 'next/link'

import { RichText } from '@/components/RichText/RichText'
import { ServiceWrapper } from '@/components/ServiceWrapper/ServiceWrapper'
import { TestimonialWrapper } from '@/components/TestimonialWrapper/TestimonialWrapper'
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
      {data?.heroImage.url && (
        <Image
          src={data.heroImage.url}
          alt={data.heroImage.description || 'Pilvilinnan leipomon tilauskakku'}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority={true}
        ></Image>
      )}
      <h1 className={styles.Heading} id="title">
        {strings.home.title}
      </h1>
      <p className={styles.HeroText}>{data?.slogan}</p>
      <div className={styles.HeroActions}>
        <Link className={styles.LinkButton} href={AppRoute.Contact}>
          {strings.contact.contact}
        </Link>
        <Link className={styles.LinkButtonSecondary} href={AppRoute.Assortment}>
          {strings.home.assortmentCta}
        </Link>
      </div>
    </div>
    <div className={styles.BakerContainer}>
      <div className={styles.BakerInner}>
        <div className={styles.BakerMedia}>
          <div className={styles.BakerFrame}>
            {data?.bakerImage.url && (
              <Image
                src={data.bakerImage.url}
                alt={data.bakerImage.description || 'Leipuri Anna, Pilvilinnan leipomo'}
                width={0}
                height={0}
                sizes="(max-width: 991px) 70vw, 40vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
              />
            )}
          </div>
          <p className={styles.Signature}>{strings.home.signature}</p>
        </div>
        <div className={styles.BakerTextWrapper}>
          <h2 className={styles.Eyebrow}>{strings.home.headingAbout}</h2>
          <RichText document={data?.about.json} />
        </div>
      </div>
    </div>
    <div className={styles.ServiceContainer}>
      <h2 className={styles.SubHeading}>{strings.home.headingServices}</h2>
      <ServiceWrapper services={data?.serviceItemsCollection.items} />
    </div>
    <div className={styles.TestimonialContainer}>
      <h2 className={styles.SubHeading}>{strings.home.headingTestimonials}</h2>
      <TestimonialWrapper testimonials={data?.testimonialsCollection.items} />
    </div>
  </section>
)
