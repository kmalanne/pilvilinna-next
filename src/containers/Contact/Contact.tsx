import { Banner } from '@/components/Banner'
import type { ContactData } from '@/lib/types'
import { strings } from '@/utils/strings'

export type ContactProps = {
  data?: ContactData
}

export const Contact: React.FC<ContactProps> = ({ data }: ContactProps) => (
  <section aria-label={strings.contact.title}>
    <Banner
      text={strings.contact.contact}
      url={data?.bannerImage.url}
      description={data?.bannerImage.description}
    ></Banner>
  </section>
)
