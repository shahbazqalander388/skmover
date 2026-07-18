import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import ServiceAreasSection from '../components/sections/ServiceAreas';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { serviceAreasSchemas } from '../seo/schemas';

const ServiceAreas = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.serviceAreas;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={serviceAreasSchemas()} />
      <div className="pt-24 lg:pt-32">
        <ServiceAreasSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default ServiceAreas;
