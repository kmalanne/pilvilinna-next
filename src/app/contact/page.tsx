import type { Metadata } from 'next'

import { Contact as ContactSection } from '@/containers/Contact/Contact'
import { strings } from '@/utils/strings'

export const metadata: Metadata = {
  title: strings.contact.title,
  description: strings.contact.description,
}

const Contact = () => <ContactSection />

export default Contact
