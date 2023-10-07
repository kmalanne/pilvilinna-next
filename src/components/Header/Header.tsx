'use client'

import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'
import { Container } from 'react-bootstrap'

import type { ContactData } from '@/lib/types'

import styles from './header.module.css'
import { SocialMediaLinkWrapper } from '../SocialMediaLinkWrapper'

export type HeaderProps = {
  data?: ContactData
}

export const Header: React.FC<HeaderProps> = ({ data }: HeaderProps) => (
  <header className={styles.Header}>
    <Container className={styles.Container}>
      <div className={styles.LeftContainer}>
        <a className={styles.Link} href={`tel:${data?.phoneNumber}`} aria-label="phone">
          <FontAwesomeIcon className={styles.Icon} icon={faPhoneAlt} size="lg"></FontAwesomeIcon>
          {data?.phoneNumber}
        </a>
        <a className={styles.Link} href={`mailto:${data?.email}`} aria-label="email">
          <FontAwesomeIcon className={styles.Icon} icon={faEnvelope} size="lg"></FontAwesomeIcon>
          {data?.email}
        </a>
      </div>
      <div className={styles.RightContainer}>
        <SocialMediaLinkWrapper />
      </div>
    </Container>
  </header>
)
