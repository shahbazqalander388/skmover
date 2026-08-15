import { useEffect } from 'react';
import AOS from 'aos';
import { Award } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import AboutSection from '../components/sections/About';
import Statistics from '../components/sections/Statistics';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { aboutSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

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

      <PageHeader
        badge={t.about?.badge || 'About SK Movers'}
        badgeIcon={Award}
        title={t.about?.title || 'Your Trusted Relocation'}
        titleHighlight={t.about?.titleHighlight || 'Partner'}
        subtitle={t.about?.description1 || 'Professional furniture moving, house shifting, and office relocation services across Saudi Arabia.'}
        breadcrumbs={[{ label: t.nav?.about || 'About Us', path: '/about' }]}
      />

      <div>
        <AboutSection />
        <Statistics />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default About;
