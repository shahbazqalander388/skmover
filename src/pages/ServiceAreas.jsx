import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import ServiceAreasSection from '../components/sections/ServiceAreas';
import ContactCTA from '../components/sections/ContactCTA';

const ServiceAreas = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Service Areas | SK Movers - Serving Riyadh, Jeddah, Dammam</title>
        <meta name="description" content="SK Movers provides relocation services across Saudi Arabia, covering major cities including Riyadh, Jeddah, Dammam, Medina, Jubail, and Khobar." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <ServiceAreasSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default ServiceAreas;
