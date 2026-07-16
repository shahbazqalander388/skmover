import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/Contact';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | SK Movers - Get a Free Moving Quote</title>
        <meta name="description" content="Contact SK Movers today for a free, no-obligation quote for your relocation needs in Saudi Arabia. We are available 24/7." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
