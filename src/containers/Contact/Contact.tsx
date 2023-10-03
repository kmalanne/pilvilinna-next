import { Banner } from '@/components/Banner'
import { strings } from '@/utils/strings'

export const Contact = () => (
  <section aria-label={strings.contact.title}>
    <Banner imgSrc="/images/banner-2.jpg" text={strings.contact.contact}></Banner>
  </section>
)
