import { useEffect, useState } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import ServiceAreas from '../components/sections/ServiceAreas';
import Statistics from '../components/sections/Statistics';
import Gallery from '../components/sections/Gallery';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import ContactCTA from '../components/sections/ContactCTA';
import LoadingScreen from '../components/ui/LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });

    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Layout>
        {!isLoading && (
          <>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Process />
            <ServiceAreas />
            <Statistics />
            <Gallery />
            <Testimonials />
            <FAQ />
            <ContactCTA />
            <Contact />
          </>
        )}
      </Layout>
    </>
  );
};

export default Home;
