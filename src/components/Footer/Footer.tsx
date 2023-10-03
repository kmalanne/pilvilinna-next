'use client'

import type React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import styles from './footer.module.css'
import { SocialMediaLinkWrapper } from '../SocialMediaLinkWrapper'

const phoneNumber = process.env.NEXT_PUBLIC__PHONE_NUMBER
const phoneNumberDisplay = process.env.NEXT_PUBLIC__PHONE_NUMBER_DISPLAY

export const Footer: React.FC = () => (
  <footer>
    <Container className={styles.Container}>
      <Row>
        <Col className={styles.Col} sm>
          <div className={styles.Heading}>email:</div>
          <a
            className={styles.Link}
            href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;"
          >
            &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
          </a>
        </Col>
        <Col className={styles.Col} sm>
          <div className={styles.Heading}>phone:</div>
          <a className={styles.Link} href={`tel:${phoneNumber}`}>
            {phoneNumberDisplay}
          </a>
        </Col>
        <Col className={styles.Col} sm>
          <div className={styles.Heading}>company:</div>
          <p className={styles.Text}>Pilvilinnan leipomo (2507048-6), Nokia</p>
          <a className={styles.Link} href="https://www.oivahymy.fi/" target="_blank">
            oivahymy.fi
          </a>
        </Col>
      </Row>
      <Row>
        <Col className={styles.SocialMediaCol}>
          <SocialMediaLinkWrapper />
        </Col>
      </Row>
    </Container>
  </footer>
)
