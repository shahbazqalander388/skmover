import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import ServicesSection from '../components/sections/Services';
import Process from '../components/sections/Process';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { servicesSchemas } from '../seo/schemas';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.services;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={servicesSchemas()} />
      <div className="pt-24 lg:pt-32">
        <ServicesSection />
        <Process />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Services;
