import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';

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
