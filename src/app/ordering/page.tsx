'use client'

// import type { Metadata } from 'next'
import { Container as BSContainer } from 'react-bootstrap'
import styled from 'styled-components'

import { strings } from '@/utils/strings'

import { Banner } from '../../components/Banner/Banner'

// export const metadata: Metadata = {
//   title: strings.ordering.title,
//   description: strings.ordering.description,
// }

const phoneNumber = process.env.NEXT_PUBLIC__PHONE_NUMBER
const phoneNumberDisplay = process.env.NEXT_PUBLIC__PHONE_NUMBER_DISPLAY

const Container = styled(BSContainer)`
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;
  padding: 90px;
  background-color: #ffffff;

  @media (max-width: 575px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 1100px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`

const Title = styled.h2`
  margin-bottom: 20px;
`

const Text = styled.p`
  font-size: 18px;
`

const Ordering = () => (
  <section aria-labelledby="ordering-title">
    <Banner imgSrc="/images/banner-3.jpg" text={strings.ordering.title}></Banner>
    <Container>
      <Title id="ordering-title">title_2:</Title>
      <Text>
        {'info_1'}{' '}
        <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
          &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
        </a>{' '}
        info_2 <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>.
      </Text>
      <Text>info_3</Text>
      <Text>info_4</Text>
      <Title id="delivery-title">title_3:</Title>
      <Text>
        <strong>info_5</strong>
        info_6
      </Text>
      <Title id="payment-title">title_4:</Title>
      <Text>
        <strong>info_7</strong>
        info_8
      </Text>
      <Text>
        info_9
        <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
        info_10
        <strong>info_11</strong>
      </Text>
      <Text>info_12</Text>
      <Text>info_13</Text>
    </Container>
  </section>
)

export default Ordering
