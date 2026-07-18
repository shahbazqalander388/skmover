import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import ContactSection from '../components/sections/Contact';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { contactSchemas } from '../seo/schemas';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.contact;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={contactSchemas()} />
      <div className="pt-24 lg:pt-32">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
