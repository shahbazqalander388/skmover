import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import FAQSection from '../components/sections/FAQ';

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>FAQ | SK Movers - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about moving and relocation services with SK Movers in Saudi Arabia. Pricing, packing, insurance, and more." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <FAQSection />
      </div>
    </Layout>
  );
};

export default FAQ;
