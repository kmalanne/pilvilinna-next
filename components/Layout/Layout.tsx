import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';

config.autoAddCss = false;

export const Layout: React.FC = ({ children }: any) => {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
