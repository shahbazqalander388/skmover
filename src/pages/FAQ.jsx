import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import FAQSection from '../components/sections/FAQ';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { faqSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.faq;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={faqSchemas(t.faq?.items || [])} />
      <div className="pt-24 lg:pt-32">
        <FAQSection />
      </div>
    </Layout>
  );
};

export default FAQ;
