import { strings } from '@/utils/strings'

import { Banner } from '../../components/Banner/Banner'

export const Contact = () => (
  <section aria-label={strings.contact.title}>
    <Banner imgSrc="/images/banner-2.jpg" text={strings.contact.contact}></Banner>
  </section>
)
