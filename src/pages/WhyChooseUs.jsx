import { useEffect } from 'react';
import AOS from 'aos';
import { ShieldCheck } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import WhyChooseUsSection from '../components/sections/WhyChooseUs';
import Statistics from '../components/sections/Statistics';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { whyChooseUsSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

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

      <PageHeader
        badge={t.whyUs?.badge || 'Why Choose SK Movers'}
        badgeIcon={ShieldCheck}
        title={t.whyUs?.title || 'The'}
        titleHighlight={t.whyUs?.titleHighlight ? `${t.whyUs.titleHighlight} ${t.whyUs.title2 || 'Difference'}` : 'SK Movers Difference'}
        subtitle={t.whyUs?.subtitle || 'We go above and beyond to ensure your move is completely stress-free, safe, and on-time.'}
        breadcrumbs={[{ label: t.nav?.whyUs || 'Why Choose Us', path: '/why-choose-us' }]}
      />

      <div>
        <WhyChooseUsSection />
        <Statistics />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default WhyChooseUs;
