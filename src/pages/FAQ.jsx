import { useEffect } from 'react';
import AOS from 'aos';
import { HelpCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import FAQSection from '../components/sections/FAQ';
import ContactCTA from '../components/sections/ContactCTA';
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

      <PageHeader
        badge={t.faq?.badge || 'Got Questions?'}
        badgeIcon={HelpCircle}
        title={t.faq?.title || 'Frequently Asked'}
        titleHighlight={t.faq?.titleHighlight || 'Questions'}
        subtitle={t.faq?.subtitle || 'Find quick answers to common questions regarding our moving rates, packing process, and scheduling.'}
        breadcrumbs={[{ label: t.nav?.faq || 'FAQ', path: '/faq' }]}
      />

      <div>
        <FAQSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default FAQ;
