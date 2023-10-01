'use client'

import { faBirthdayCake, faBreadSlice, faCookie } from '@fortawesome/free-solid-svg-icons'
// import type { Metadata } from 'next'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

import { AppRoute } from '@/utils/route'
import { strings } from '@/utils/strings'

import { ServiceItem } from '../components/ServiceItem/ServiceItem'
import { TestimonialItem } from '../components/TestimonialItem/TestimonialItem'

// export const metadata: Metadata = {
//   title: strings.home.title,
//   description: strings.home.description,
// }

const FluidContainer = styled.div`
  position: relative;
  padding: 8rem 2rem;
  margin-bottom: 0px;
  border-radius: 0px;

  > span {
    z-index: -10;
  }

  @media (min-width: 800px) {
    padding: 14rem 2rem;
  }

  @media (min-width: 1000px) {
    padding: 18rem 2rem;
    height: calc(100vh - 85px);
  }
`

const Heading = styled.h1`
  position: relative;
  z-index: 1;
`

const HeroText = styled.p`
  position: relative;
  z-index: 1;
`

const LinkButton = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
  padding: 5px 30px;
  line-height: 32px;
  height: auto;
  text-align: center;
  background-color: #dddddd;
  border-radius: 23px;
  font-size: 18px;
  font-weight: bold;

  > a {
    color: #454545;
    text-decoration: none;
  }

  &:hover {
    background-color: #454545;
    transition: all 300ms linear !important;

    > a {
      color: #dddddd;
    }
  }
`

const BakerContainer = styled(Container)`
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;
  padding: 3rem;
  background-color: #f0f3f8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23766ca4' fill-opacity='0.05' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");

  @media (min-width: 1100px) {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
`

const ImageWrapper = styled(Col)`
  align-self: center;

  & > span {
    box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (min-width: 1000px) {
    padding: 6rem;
  }
`

const BakerTextWrapper = styled(Col)`
  margin: auto;
  font-size: 130%;
  padding: 0 20px;
  text-align: center;

  @media (max-width: 991px) {
    margin: 50px auto auto;
    padding: 0;
  }

  @media (max-width: 575px) {
    font-size: 17px;
  }
`

const Signature = styled.p`
  margin-top: 10px;
  font-size: 130%;
  font-style: italic;
  text-align: center;
`

const ServiceContainer = styled(Container)`
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;
  background-color: #fff;
  padding: 3rem;

  @media (max-width: 575px) {
    padding: 2rem;
  }
`

const ServiceTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 30px;
`

const TestimonialContainer = styled(Container)`
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;
  padding: 2rem;
  background-color: #5e5185;

  @media (min-width: 1100px) {
    padding: 6rem 3rem;
  }
`

const TestimonialCol = styled(Col)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Home = () => (
  <section aria-labelledby="title">
    <FluidContainer>
      <Image
        src="/images/hero.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      ></Image>
      <Heading id="title">{strings.home.title}</Heading>
      <HeroText>{strings.home.slogan}</HeroText>
      <LinkButton>
        <Link href={AppRoute.Contact}>{strings.contact.contact}</Link>
      </LinkButton>
    </FluidContainer>
    <BakerContainer>
      <h2 className="sr-only">{strings.home.about}</h2>
      <Row>
        <ImageWrapper lg={6} md={12}>
          <Image
            src="/images/anna.jpg"
            width={483}
            height={746}
            layout="responsive"
            loading="lazy"
            objectFit="contain"
            alt="Pilvilinnan leipomo leipuri ja omistaja"
          />
        </ImageWrapper>
        <BakerTextWrapper lg={6} md={12}>
          <p>info_1</p>
          <p>info_2</p>
          <Signature>{strings.home.signature}</Signature>
        </BakerTextWrapper>
      </Row>
    </BakerContainer>
    <ServiceContainer>
      <ServiceTitle>assortment_title</ServiceTitle>
      <Row>
        <Col sm={12} md={4}>
          <ServiceItem
            icon={faBirthdayCake}
            title="assortment_choice_1_title"
            text="assortment_choice_1_description"
          />
        </Col>
        <Col sm={12} md={4}>
          <ServiceItem
            icon={faBreadSlice}
            title="assortment_choice_2_title"
            text="assortment_choice_2_description"
          />
        </Col>
        <Col sm={12} md={4}>
          <ServiceItem
            icon={faCookie}
            title="assortment_choice_3_title"
            text="assortment_choice_3_description"
          />
        </Col>
      </Row>
    </ServiceContainer>
    <TestimonialContainer>
      <h2 className="sr-only">testimonial_title</h2>
      <Row>
        <TestimonialCol sm={12} md={6}>
          <TestimonialItem text="testimonial_1" author="Essi, Tampere" />
        </TestimonialCol>
        <TestimonialCol sm={12} md={6}>
          <TestimonialItem text="testimonial_2" author="Mari, Ylöjärvi" />
        </TestimonialCol>
      </Row>
      <Row>
        <TestimonialCol sm={12} md={6}>
          <TestimonialItem text="testimonial_3" author="Sanna, Pirkkala" />
        </TestimonialCol>
        <TestimonialCol sm={12} md={6}>
          <TestimonialItem text="testimonial_4" author="Jonna, Nokia" />
        </TestimonialCol>
      </Row>
    </TestimonialContainer>
  </section>
)

export default Home