import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import WhyChooseUsSection from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Why Choose Us | SK Movers - Reliable & Affordable Services</title>
        <meta name="description" content="Discover why SK Movers is the preferred choice for relocation in Saudi Arabia. We offer professional, safe, and affordable moving services." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <WhyChooseUsSection />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default WhyChooseUs;
