import type { Metadata } from 'next'

import { strings } from '@/utils/strings'

import { Banner } from '../../components/Banner/Banner'

export const metadata: Metadata = {
  title: strings.contact.title,
  description: strings.contact.description,
}

const Contact = () => (
  <section aria-label={strings.contact.title}>
    <Banner imgSrc="/images/banner-2.jpg" text={strings.contact.contact}></Banner>
  </section>
)

export default Contact
