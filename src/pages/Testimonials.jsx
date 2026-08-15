import { useEffect } from 'react';
import AOS from 'aos';
import { Star } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import TestimonialsSection from '../components/sections/Testimonials';
import Statistics from '../components/sections/Statistics';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { testimonialsSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

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

      <PageHeader
        badge={t.testimonials?.badge || 'Customer Satisfaction'}
        badgeIcon={Star}
        title={t.testimonials?.title || 'What Our'}
        titleHighlight={t.testimonials?.titleHighlight || 'Clients Say'}
        subtitle={t.testimonials?.subtitle || 'Real feedback from satisfied home, villa, and office moving clients across Saudi Arabia.'}
        breadcrumbs={[{ label: t.nav?.testimonials || 'Testimonials', path: '/testimonials' }]}
      />

      <div>
        <TestimonialsSection />
        <Statistics />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Testimonials;
