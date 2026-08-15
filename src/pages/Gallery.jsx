import { useEffect } from 'react';
import AOS from 'aos';
import { Camera } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/ui/PageHeader';
import GallerySection from '../components/sections/Gallery';
import Statistics from '../components/sections/Statistics';
import ContactCTA from '../components/sections/ContactCTA';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { gallerySchemas } from '../seo/schemas';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const page = PAGES.gallery;

  return (
    <Layout>
      <PageSeo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
      />
      <JsonLd data={gallerySchemas()} />

      <PageHeader
        badge={t.gallery?.badge || 'Our Work in Action'}
        badgeIcon={Camera}
        title={t.gallery?.title || 'Relocation'}
        titleHighlight={t.gallery?.titleHighlight || 'Gallery'}
        subtitle={t.gallery?.subtitle || 'Explore our moving fleet, packing standards, and professional crew across Saudi Arabia.'}
        breadcrumbs={[{ label: t.nav?.gallery || 'Gallery', path: '/gallery' }]}
      />

      <div>
        <GallerySection />
        <Statistics />
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Gallery;
