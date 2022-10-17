import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout } from '../../components/Layout/Layout';
import { Banner } from '../../components/Banner/Banner';

const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <Head>
        <title>{t('contact_info')}</title>
        <meta name="description" content="Pilvilinnan leipomo yhteystiedot" />
      </Head>
      <section className="contact" aria-label={t('contact_info')}>
        <Banner imgUrl="/images/banner-2.jpg" text={t('contact')}></Banner>
      </section>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'component',
      'contact',
      'navigation',
    ])),
  },
});

Contact.Layout = Layout;
export default Contact;
