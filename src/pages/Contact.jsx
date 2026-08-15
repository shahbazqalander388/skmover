import { useEffect } from 'react';
import AOS from 'aos';
import { Mail } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ContactSection from '../components/sections/Contact';
import ServiceAreasSection from '../components/sections/ServiceAreas';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { contactSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

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

      <PageHeader
        badge={t.contact?.badge || 'Get In Touch'}
        badgeIcon={Mail}
        title={t.contact?.title || 'Contact'}
        titleHighlight={t.contact?.titleHighlight || 'SK Movers'}
        subtitle={t.contact?.subtitle || 'Get a free, instant moving quote or contact our 24/7 customer support team.'}
        breadcrumbs={[{ label: t.nav?.contact || 'Contact', path: '/contact' }]}
      />

      <div>
        <ContactSection />
        <ServiceAreasSection />
      </div>
    </Layout>
  );
};

export default Contact;
