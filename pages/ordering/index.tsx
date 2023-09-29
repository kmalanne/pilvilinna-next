import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Container as BSContainer } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../../components/Layout/Layout';
import { Banner } from '../../components/Banner/Banner';

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
const phoneNumberDisplay = process.env.NEXT_PUBLIC_PHONE_NUMBER_DISPLAY;

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
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Ordering = () => {
  const { t } = useTranslation('ordering');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <section aria-labelledby="ordering-title">
        <Banner imgSrc="/images/banner-3.jpg" text={t('title')}></Banner>
        <Container>
          <Title id="ordering-title">{t('title_2')}:</Title>
          <Text>
            {t('info_1')}{' '}
            <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;">
              &#105;&#110;&#102;&#111;&#064;&#112;&#105;&#108;&#118;&#105;&#108;&#105;&#110;&#110;&#097;&#110;&#108;&#101;&#105;&#112;&#111;&#109;&#111;&#046;&#102;&#105;
            </a>{' '}
            {t('info_2')}{' '}
            <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
          </Text>
          <Text>{t('info_3')}</Text>
          <Text>{t('info_4')}</Text>
          <Title id="delivery-title">{t('title_3')}:</Title>
          <Text>
            <strong>{t('info_5')}</strong>
            {t('info_6')}
          </Text>
          <Title id="payment-title">{t('title_4')}:</Title>
          <Text>
            <strong>{t('info_7')}</strong>
            {t('info_8')}
          </Text>
          <Text>
            {t('info_9')}
            <a href={`tel:${phoneNumber}`}>{phoneNumberDisplay}</a>
            {t('info_10')}
            <strong>{t('info_11')}</strong>
          </Text>
          <Text>{t('info_12')}</Text>
          <Text>{t('info_13')}</Text>
        </Container>
      </section>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'ordering',
      'component',
      'contact',
      'navigation',
    ])),
  },
});

Ordering.Layout = Layout;
export default Ordering;
