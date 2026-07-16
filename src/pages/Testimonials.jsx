import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import TestimonialsSection from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Testimonials | SK Movers - Read Our Client Reviews</title>
        <meta name="description" content="Read reviews from our satisfied customers. SK Movers has successfully completed hundreds of relocations across Riyadh, Jeddah, Dammam, and beyond." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <TestimonialsSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Testimonials;
