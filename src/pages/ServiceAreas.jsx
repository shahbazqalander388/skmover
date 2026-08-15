import { useEffect } from 'react';
import AOS from 'aos';
import { MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ServiceAreasSection from '../components/sections/ServiceAreas';
import Statistics from '../components/sections/Statistics';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { serviceAreasSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const ServiceAreas = () => {
  const { t } = useLanguage();

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

      <PageHeader
        badge={t.areas?.badge || 'We Serve Across Saudi Arabia'}
        badgeIcon={MapPin}
        title={t.areas?.title || 'Our'}
        titleHighlight={t.areas?.titleHighlight || 'Service Areas'}
        subtitle={t.areas?.subtitle || 'Providing professional moving, house shifting, and relocation services across all major cities in Saudi Arabia.'}
        breadcrumbs={[{ label: t.nav?.serviceAreas || 'Service Areas', path: '/service-areas' }]}
      />

      <div>
        <ServiceAreasSection />
        <Statistics />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default ServiceAreas;
