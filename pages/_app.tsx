import Head from 'next/head';
import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import GlobalStyle from '../theme/globalStyles';

const Noop = ({ children }: any) => <>{children}</>;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Pilvilinnan leipomo - Sinun haaveidesi mukaiset kakut ja leivonnaiset"
        />
        <meta
          name="keywords"
          content="pilvilinna, leipomo, kakku, leivonnainen, Anna Jaatinen, pilvilinnan leipomo, bakery, cake, pastry"
        />
        <meta name="author" content="Kai-Mikael Alanne" />
      </Head>
      <GlobalStyle />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
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

export default appWithTranslation(MyApp);
