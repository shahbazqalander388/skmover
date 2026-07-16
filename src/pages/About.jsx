import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import AboutSection from '../components/sections/About';
import Statistics from '../components/sections/Statistics';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About Us | SK Movers - Professional Relocation Services in KSA</title>
        <meta name="description" content="Learn more about SK Movers, your trusted partner for professional furniture moving, packing, and relocation services across Saudi Arabia." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <AboutSection />
        <Statistics />
      </div>
    </Layout>
  );
};

export default About;
