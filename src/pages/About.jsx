import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import AboutSection from '../components/sections/About';
import Statistics from '../components/sections/Statistics';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { aboutSchemas } from '../seo/schemas';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.about;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={aboutSchemas()} />
      <div className="pt-24 lg:pt-32">
        <AboutSection />
        <Statistics />
      </div>
    </Layout>
  );
};

export default About;
