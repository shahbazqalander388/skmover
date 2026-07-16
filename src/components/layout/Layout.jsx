import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';
import WhatsAppButton from '../ui/WhatsAppButton';
import CallButton from '../ui/CallButton';
import BackToTop from '../ui/BackToTop';
import { useLanguage } from '../../context/LanguageContext';

const Layout = ({ children }) => {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
      <BackToTop />
    </div>
  );
};

export default Layout;
