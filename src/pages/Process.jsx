import { useEffect } from 'react';
import AOS from 'aos';
import { Workflow } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import ProcessSection from '../components/sections/Process';
import WhyChooseUsSection from '../components/sections/WhyChooseUs';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { processSchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.process;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={processSchemas()} />

      <PageHeader
        badge={t.process?.badge || 'How We Work'}
        badgeIcon={Workflow}
        title={t.process?.title || 'Our Simple'}
        titleHighlight={t.process?.titleHighlight || 'Moving Process'}
        subtitle={t.process?.subtitle || 'We make relocating easy with our streamlined 4-step process across Saudi Arabia.'}
        breadcrumbs={[{ label: t.nav?.process || 'How It Works', path: '/process' }]}
      />

      <div>
        <ProcessSection />
        <WhyChooseUsSection />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Process;
