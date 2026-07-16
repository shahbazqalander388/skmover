import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import ServicesSection from '../components/sections/Services';
import Process from '../components/sections/Process';
import ContactCTA from '../components/sections/ContactCTA';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Our Services | SK Movers - House Shifting & Office Relocation</title>
        <meta name="description" content="SK Movers offers comprehensive services including furniture moving, packing, unloading, and storage solutions in Riyadh, Jeddah, Dammam, and more." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <ServicesSection />
        <Process />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Services;
