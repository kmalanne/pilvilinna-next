'use client'

import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'
import { Container } from 'react-bootstrap'

import styles from './header.module.css'
import { SocialMediaLinkWrapper } from '../SocialMediaLinkWrapper'

const phoneNumber = process.env.NEXT_PUBLIC__PHONE_NUMBER
const phoneNumberDisplay = process.env.NEXT_PUBLIC__PHONE_NUMBER_DISPLAY

export const Header: React.FC = () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>
      <div className={styles.LeftContainer}>
        <a className={styles.Link} href={`tel:${phoneNumber}`} aria-label="phone">
          <FontAwesomeIcon className={styles.Icon} icon={faPhoneAlt} size="lg"></FontAwesomeIcon>
          {phoneNumberDisplay}
        </a>
        <a
          className={styles.Link}
          href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;"
          aria-label="email"
        >
          <FontAwesomeIcon className={styles.Icon} icon={faEnvelope} size="lg"></FontAwesomeIcon>
          &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
        </a>
      </div>
      <div className={styles.RightContainer}>
        <SocialMediaLinkWrapper />
      </div>
    </Container>
  </header>
)
