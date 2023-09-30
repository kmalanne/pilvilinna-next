'use client'

import Head from 'next/head'
import { Container as BSContainer } from 'react-bootstrap'
import styled from 'styled-components'

import { Banner } from '../../components/Banner/Banner'
import { Gallery } from '../../components/Gallery/Gallery'
import type { IImageProps } from '../../components/Image/Image'

const Container = styled(BSContainer)`
  padding: 90px;
  margin-right: 0px;
  margin-left: 0px;
  max-width: 100%;

  @media (max-width: 575px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (min-width: 1100px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`

const GalleryContainer = styled(Container)`
  background-color: #ffffff;
`

const Heading = styled.h2`
  margin-bottom: 20px;
`

const ItemHeader = styled.div`
  margin-bottom: 20px;
  border-bottom: dotted 1px;
`

const Text = styled.p`
  font-size: 18px;
`

const ItemHeaderText = styled(Text)`
  margin-bottom: 0px;
  font-weight: bold;
`

const ItemHeaderPrice = styled.span`
  float: right;
  color: #5e5185;
  font-size: 20px;
`

const ListItem = styled.li`
  font-size: 18px;
`

const InfoTextContainer = styled.div`
  margin-top: 40px;
`

const getImages = (): Array<IImageProps> => {
  const images = []
  for (let i = 1; i < 17; i++) {
    images.push({
      id: i,
      src: `/images/gallery-${i}.jpg`,
      layout: 'responsive',
      loading: 'lazy',
    } as IImageProps)
  }

  return images
}

const Assortment = () => (
  <>
    <Head>
      <title>title</title>
      <meta name="description" content="description" />
    </Head>
    <section aria-labelledby="assortment-title">
      <Banner imgSrc="/images/banner-1.jpg" text="banner"></Banner>
      <Container>
        <Heading id="assortment-title">heading</Heading>
        <ItemHeader>
          <ItemHeaderText>
            unique_cake_title <ItemHeaderPrice>price_from 98€</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <p>unique_cake_description_1</p>
        <ul>
          <ListItem>
            circa 10 person price_from <strong>90,00€</strong>
          </ListItem>
          <ListItem>
            circa 20 person price_from <strong>135,00€</strong>
          </ListItem>
          <ListItem>
            circa 30 person price_from <strong>175,00€</strong>
          </ListItem>
        </ul>
        <Text>unique_cake_description_2</Text>
        <ul>
          <ListItem>unique_cake_choice_1</ListItem>
          <ListItem>unique_cake_choice_2</ListItem>
          <ListItem>unique_cake_choice_3</ListItem>
          <ListItem>unique_cake_choice_4</ListItem>
          <ListItem>unique_cake_choice_5</ListItem>
          <ListItem>unique_cake_choice_6</ListItem>
        </ul>
        <ItemHeader>
          <ItemHeaderText>
            mousse_cake_title <ItemHeaderPrice>price_from 80€</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <Text>mousse_cake_description</Text>
        <ul>
          <ListItem>
            circa 12 person <strong>80,00€</strong>
          </ListItem>
        </ul>
        <ItemHeader>
          <ItemHeaderText>
            chocolate_cake_title <ItemHeaderPrice>80€</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <Text>chocolate_cake_description_1</Text>
        <Text>
          chocolate_cake_description_2 <strong>7,90€</strong>
        </Text>
        <ItemHeader>
          <ItemHeaderText>
            cupcake_title <ItemHeaderPrice>50€</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <Text>
          cupcake_description_1 <strong>+5-10€</strong>
        </Text>
        <Text>cupcake_description_2</Text>
        <ul>
          <ListItem>cupcake_choice_1</ListItem>
          <ListItem>cupcake_choice_2</ListItem>
          <ListItem>cupcake_choice_3</ListItem>
          <ListItem>cupcake_choice_4</ListItem>
          <ListItem>cupcake_choice_5</ListItem>
          <ListItem>cupcake_choice_6</ListItem>
          <ListItem>cupcake_choice_7</ListItem>
          <ListItem>cupcake_choice_8</ListItem>
          <ListItem>cupcake_choice_9</ListItem>
        </ul>
        <ItemHeader>
          <ItemHeaderText>
            meringue_title <ItemHeaderPrice>0,80€/pcs</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <ul>
          <ListItem>meringue_choice_1</ListItem>
          <ListItem>meringue_choice_2</ListItem>
          <ListItem>meringue_choice_3</ListItem>
          <ListItem>meringue_choice_4</ListItem>
          <ListItem>meringue_choice_5</ListItem>
        </ul>
        <ItemHeader>
          <ItemHeaderText>
            cookie_title <ItemHeaderPrice>1,50€/kpl</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <ul>
          <ListItem>cookie_choice_1</ListItem>
          <ListItem>cookie_choice_1</ListItem>
        </ul>
        <ItemHeader>
          <ItemHeaderText>
            macaron_title <ItemHeaderPrice>40€</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <p>macaron_description</p>
        <ul>
          <ListItem>macaron_choice_1</ListItem>
          <ListItem>macaron_choice_2</ListItem>
          <ListItem>macaron_choice_3</ListItem>
          <ListItem>macaron_choice_4</ListItem>
          <ListItem>macaron_choice_5</ListItem>
          <ListItem>macaron_choice_6</ListItem>
          <ListItem>macaron_choice_7</ListItem>
          <ListItem>macaron_choice_8</ListItem>
        </ul>
        <ItemHeader>
          <ItemHeaderText>
            sandwich_cake_title <ItemHeaderPrice>price_from 110€</ItemHeaderPrice>
          </ItemHeaderText>
        </ItemHeader>
        <Text>sandwich_cake_description</Text>
        <ul>
          <ListItem>
            sandwich_cake_choice_1 <strong>125€</strong>
          </ListItem>
          <ListItem>
            sandwich_cake_choice_2 <strong>125€</strong>
          </ListItem>
          <ListItem>
            sandwich_cake_choice_3 <strong>125€</strong>
          </ListItem>
          <ListItem>
            sandwich_cake_choice_4 <strong>125€</strong>
          </ListItem>
          <ListItem>
            sandwich_cake_choice_5 <strong>155€</strong>
          </ListItem>
          <ListItem>
            sandwich_cake_choice_6 <strong>155€</strong>
          </ListItem>
        </ul>
        <ItemHeader>
          <ItemHeaderText>bread_title</ItemHeaderText>
        </ItemHeader>
        <Text>
          bread_description <strong>9,00€</strong> pcs
        </Text>
        <InfoTextContainer>
          <Text>
            <strong>info_1</strong>
          </Text>
          <Text>info_2</Text>
          <Text>info_3</Text>
        </InfoTextContainer>
      </Container>
      <GalleryContainer>
        <h2 className="sr-only">Cake gallery</h2>
        <Gallery images={getImages()}></Gallery>
      </GalleryContainer>
    </section>
  </>
)

export default Assortment
