import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import WhyChooseUsSection from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { whyChooseUsSchemas } from '../seo/schemas';

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.whyChooseUs;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={whyChooseUsSchemas()} />
      <div className="pt-24 lg:pt-32">
        <WhyChooseUsSection />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default WhyChooseUs;
