import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import TestimonialsSection from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { testimonialsSchemas } from '../seo/schemas';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.testimonials;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={testimonialsSchemas()} />
      <div className="pt-24 lg:pt-32">
        <TestimonialsSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Testimonials;
