'use client'

import type { ContactData } from '@/lib/types'
import { strings } from '@/utils/strings'

import styles from './footer.module.css'
import { SocialMediaLinkWrapper } from '../SocialMediaLinkWrapper'

export type FooterProps = {
  data?: ContactData
}

export const Footer = ({ data }: FooterProps) => (
  <footer>
    <div className={styles.Container}>
      <div className={styles.Row}>
        <div className={styles.Col}>
          <div className={styles.Heading}>{strings.footer.email}:</div>
          <a className={styles.Link} href={`mailto:${data?.email}`}>
            {data?.email}
          </a>
        </div>
        <div className={styles.Col}>
          <div className={styles.Heading}>{strings.footer.phone}:</div>
          <a className={styles.Link} href={`tel:${data?.phoneNumber}`}>
            {data?.phoneNumber}
          </a>
        </div>
        <div className={styles.Col}>
          <div className={styles.Heading}>{strings.footer.company}:</div>
          <p className={styles.Text}>{data?.companyInfo}</p>
          <a className={styles.Link} href="https://www.oivahymy.fi/" target="_blank">
            oivahymy.fi
          </a>
        </div>
      </div>
      <div className={styles.Row}>
        <div className={styles.SocialMediaCol}>
          <SocialMediaLinkWrapper />
        </div>
      </div>
    </div>
  </footer>
)
