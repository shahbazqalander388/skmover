import { useEffect } from 'react';
import AOS from 'aos';
import { Layers } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ServicesSection from '../components/sections/Services';
import Process from '../components/sections/Process';
import ServiceAreasSection from '../components/sections/ServiceAreas';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { servicesSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

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

      <PageHeader
        badge={t.services?.badge || 'Our Services'}
        badgeIcon={Layers}
        title={t.services?.title || 'Everything You Need for a'}
        titleHighlight={t.services?.titleHighlight || 'Perfect Move'}
        subtitle={t.services?.subtitle || 'We offer a comprehensive range of moving, shifting, packing, and storage services across Saudi Arabia.'}
        breadcrumbs={[{ label: t.nav?.services || 'Services', path: '/services' }]}
      />

      <div>
        <ServicesSection />
        <Process />
        <ServiceAreasSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Services;
