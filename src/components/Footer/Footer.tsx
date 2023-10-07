'use client'

import type React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import type { ContactData } from '@/lib/types'
import { strings } from '@/utils/strings'

import styles from './footer.module.css'
import { SocialMediaLinkWrapper } from '../SocialMediaLinkWrapper'

export type FooterProps = {
  data?: ContactData
}

export const Footer: React.FC<FooterProps> = ({ data }: FooterProps) => (
  <footer>
    <Container className={styles.Container}>
      <Row>
        <Col className={styles.Col} sm>
          <div className={styles.Heading}>{strings.footer.email}:</div>
          <a className={styles.Link} href={`mailto:${data?.email}`}>
            {data?.email}
          </a>
        </Col>
        <Col className={styles.Col} sm>
          <div className={styles.Heading}>{strings.footer.phone}:</div>
          <a className={styles.Link} href={`tel:${data?.phoneNumber}`}>
            {data?.phoneNumber}
          </a>
        </Col>
        <Col className={styles.Col} sm>
          <div className={styles.Heading}>{strings.footer.company}:</div>
          <p className={styles.Text}>{data?.companyInfo}</p>
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
