import { lazy, Suspense, useEffect, useState } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import LoadingScreen from '../components/ui/LoadingScreen';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { homeSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

// Lazy load below-the-fold components
const About = lazy(() => import('../components/sections/About'));
const Services = lazy(() => import('../components/sections/Services'));
const WhyChooseUs = lazy(() => import('../components/sections/WhyChooseUs'));
const Process = lazy(() => import('../components/sections/Process'));
const ServiceAreas = lazy(() => import('../components/sections/ServiceAreas'));
const Statistics = lazy(() => import('../components/sections/Statistics'));
const Gallery = lazy(() => import('../components/sections/Gallery'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const FAQ = lazy(() => import('../components/sections/FAQ'));
const Contact = lazy(() => import('../components/sections/Contact'));
const ContactCTA = lazy(() => import('../components/sections/ContactCTA'));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });

    // Reduce artificial loading delay to improve LCP/FCP metrics
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const page = PAGES.home;

  return (
    <>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={homeSchemas(t.faq?.items || [])} />

      <LoadingScreen isLoading={isLoading} />
      <Layout>
        <>
          <Hero />
          <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
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
          </Suspense>
        </>
      </Layout>
    </>
  );
};

export default Home;
