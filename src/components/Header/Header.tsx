'use client'

import { Icon } from '@/components/Icon'
import type { ContactData } from '@/lib/types'

import styles from './header.module.css'
import { SocialMediaLinkWrapper } from '../SocialMediaLinkWrapper'

export type HeaderProps = {
  data?: ContactData
}

export const Header = ({ data }: HeaderProps) => (
  <header className={styles.Header}>
    <div className={styles.Container}>
      <div className={styles.LeftContainer}>
        <a className={styles.Link} href={`tel:${data?.phoneNumber}`}>
          <Icon className={styles.Icon} name="phone" size="lg" />
          {data?.phoneNumber}
        </a>
        <a className={styles.Link} href={`mailto:${data?.email}`}>
          <Icon className={styles.Icon} name="envelope" size="lg" />
          {data?.email}
        </a>
      </div>
      <div className={styles.RightContainer}>
        <SocialMediaLinkWrapper />
      </div>
    </div>
  </header>
)
