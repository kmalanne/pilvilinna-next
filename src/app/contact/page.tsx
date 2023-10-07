import type { Metadata } from 'next'

import { Contact as ContactSection } from '@/containers/Contact'
import { fetchContactCollection } from '@/lib/api'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.contact.title,
  description: strings.contact.description,
}

const Contact = async () => {
  const data = await fetchContactCollection()

  return <ContactSection data={data} />
}

export default Contact
