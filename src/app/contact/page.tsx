'use client'

import Head from 'next/head'

import { Banner } from '../../components/Banner/Banner'

const Contact = () => (
  <>
    <Head>
      <title>title</title>
      <meta name="description" content="description" />
    </Head>
    <section aria-label="title">
      <Banner imgSrc="/images/banner-2.jpg" text="contact"></Banner>
    </section>
  </>
)

export default Contact
