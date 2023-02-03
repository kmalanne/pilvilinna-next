import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container as BSContainer } from 'react-bootstrap';
import { Layout } from '../../components/Layout/Layout';
import { Banner } from '../../components/Banner/Banner';
import { Gallery } from '../../components/Gallery/Gallery';
import { IImageProps } from '../../components/Image/Image';

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
`;

const GalleryContainer = styled(Container)`
  background-color: #ffffff;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const ItemHeader = styled.div`
  margin-bottom: 20px;
  border-bottom: dotted 1px;
`;

const Text = styled.p`
  font-size: 18px;
`;

const ItemHeaderText = styled(Text)`
  margin-bottom: 0px;
  font-weight: bold;
`;

const ItemHeaderPrice = styled.span`
  float: right;
  color: #5e5185;
  font-size: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
`;

const InfoTextContainer = styled.div`
  margin-top: 40px;
`;

const getImages = (): Array<IImageProps> => {
  const images = [];
  for (let i = 1; i < 17; i++) {
    images.push({
      id: i,
      src: `/images/gallery-${i}.jpg`,
      layout: 'responsive',
      loading: 'lazy',
    } as IImageProps);
  }

  return images;
};

const Assortment = () => {
  const { t } = useTranslation('assortment');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <section aria-labelledby="assortment-title">
        <Banner imgSrc="/images/banner-1.jpg" text={t('banner')}></Banner>
        <Container>
          <Heading id="assortment-title">{t('heading')}</Heading>
          <ItemHeader>
            <ItemHeaderText>
              {t('unique_cake_title')}{' '}
              <ItemHeaderPrice>{t('price_from')} 90€</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <p>{t('unique_cake_description_1')}</p>
          <ul>
            <ListItem>
              10-12 {t('person')} <strong>90,00€</strong>
            </ListItem>
            <ListItem>
              18-20 {t('person')} <strong>120,00€</strong>
            </ListItem>
            <ListItem>
              25-30 {t('person')} <strong>140,00€</strong>
            </ListItem>
          </ul>
          <Text>{t('unique_cake_description_2')}</Text>
          <ul>
            <ListItem>{t('unique_cake_choice_1')}</ListItem>
            <ListItem>{t('unique_cake_choice_2')}</ListItem>
            <ListItem>{t('unique_cake_choice_3')}</ListItem>
            <ListItem>{t('unique_cake_choice_4')}</ListItem>
            <ListItem>{t('unique_cake_choice_5')}</ListItem>
            <ListItem>{t('unique_cake_choice_6')}</ListItem>
            <ListItem>{t('unique_cake_choice_7')}</ListItem>
            <ListItem>{t('unique_cake_choice_8')}</ListItem>
            <ListItem>{t('unique_cake_choice_9')}</ListItem>
          </ul>
          <ItemHeader>
            <ItemHeaderText>
              {t('mousse_cake_title')}{' '}
              <ItemHeaderPrice>{t('price_from')} 65€</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <Text>{t('mousse_cake_description')}</Text>
          <ul>
            <ListItem>
              {t('circa')} 10 {t('person')} <strong>65,00€</strong>
            </ListItem>
            <ListItem>
              {t('circa')} 15 {t('person')} <strong>85,00€</strong>
            </ListItem>
          </ul>
          <ItemHeader>
            <ItemHeaderText>
              {t('chocolate_cake_title')} <ItemHeaderPrice>80€</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <Text>{t('chocolate_cake_description_1')}</Text>
          <Text>
            {t('chocolate_cake_description_2')} <strong>7,90€</strong>
          </Text>
          <ItemHeader>
            <ItemHeaderText>
              {t('cupcake_title')} <ItemHeaderPrice>50€</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <Text>
            {t('cupcake_description_1')} <strong>+5-10€</strong>
          </Text>
          <Text>{t('cupcake_description_2')}</Text>
          <ul>
            <ListItem>{t('cupcake_choice_1')}</ListItem>
            <ListItem>{t('cupcake_choice_2')}</ListItem>
            <ListItem>{t('cupcake_choice_3')}</ListItem>
            <ListItem>{t('cupcake_choice_4')}</ListItem>
            <ListItem>{t('cupcake_choice_5')}</ListItem>
            <ListItem>{t('cupcake_choice_6')}</ListItem>
            <ListItem>{t('cupcake_choice_7')}</ListItem>
            <ListItem>{t('cupcake_choice_8')}</ListItem>
            <ListItem>{t('cupcake_choice_9')}</ListItem>
          </ul>
          <ItemHeader>
            <ItemHeaderText>
              {t('meringue_title')}{' '}
              <ItemHeaderPrice>0,80€/{t('pcs')}</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <ul>
            <ListItem>{t('meringue_choice_1')}</ListItem>
            <ListItem>{t('meringue_choice_2')}</ListItem>
            <ListItem>{t('meringue_choice_3')}</ListItem>
            <ListItem>{t('meringue_choice_4')}</ListItem>
            <ListItem>{t('meringue_choice_5')}</ListItem>
          </ul>
          <ItemHeader>
            <ItemHeaderText>
              {t('cookie_title')} <ItemHeaderPrice>1,50€/kpl</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <ul>
            <ListItem>{t('cookie_choice_1')}</ListItem>
            <ListItem>{t('cookie_choice_1')}</ListItem>
          </ul>
          <ItemHeader>
            <ItemHeaderText>
              {t('macaron_title')} <ItemHeaderPrice>40€</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <p>{t('macaron_description')}</p>
          <ul>
            <ListItem>{t('macaron_choice_1')}</ListItem>
            <ListItem>{t('macaron_choice_2')}</ListItem>
            <ListItem>{t('macaron_choice_3')}</ListItem>
            <ListItem>{t('macaron_choice_4')}</ListItem>
            <ListItem>{t('macaron_choice_5')}</ListItem>
            <ListItem>{t('macaron_choice_6')}</ListItem>
            <ListItem>{t('macaron_choice_7')}</ListItem>
            <ListItem>{t('macaron_choice_8')}</ListItem>
          </ul>
          <ItemHeader>
            <ItemHeaderText>
              {t('sandwich_cake_title')}{' '}
              <ItemHeaderPrice>{t('price_from')} 110€</ItemHeaderPrice>
            </ItemHeaderText>
          </ItemHeader>
          <Text>{t('sandwich_cake_description')}</Text>
          <ul>
            <ListItem>
              {t('sandwich_cake_choice_1')} <strong>110€</strong>
            </ListItem>
            <ListItem>
              {t('sandwich_cake_choice_2')} <strong>110€</strong>
            </ListItem>
            <ListItem>
              {t('sandwich_cake_choice_3')} <strong>110€</strong>
            </ListItem>
            <ListItem>
              {t('sandwich_cake_choice_4')} <strong>125€</strong>
            </ListItem>
            <ListItem>
              {t('sandwich_cake_choice_5')} <strong>125€</strong>
            </ListItem>
            <ListItem>
              {t('sandwich_cake_choice_6')} <strong>110€</strong>
            </ListItem>
          </ul>
          <ItemHeader>
            <ItemHeaderText>{t('bread_title')}</ItemHeaderText>
          </ItemHeader>
          <Text>
            {t('bread_description')} <strong>9,00€</strong> {t('pcs')}
          </Text>
          <InfoTextContainer>
            <Text>
              <strong>{t('info_1')}</strong>
            </Text>
            <Text>{t('info_2')}</Text>
            <Text>{t('info_3')}</Text>
          </InfoTextContainer>
        </Container>
        <GalleryContainer>
          <h2 className="sr-only">Cake gallery</h2>
          <Gallery images={getImages()}></Gallery>
        </GalleryContainer>
      </section>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'assortment',
      'component',
      'contact',
      'navigation',
    ])),
  },
});

Assortment.Layout = Layout;
export default Assortment;
