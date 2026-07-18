import { useEffect } from 'react';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import GallerySection from '../components/sections/Gallery';
import PageSeo from '../seo/PageSeo';
import JsonLd from '../seo/JsonLd';
import { PAGES } from '../seo/seoConfig';
import { gallerySchemas } from '../seo/schemas';

const Gallery = () => {
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
      <div className="pt-24 lg:pt-32">
        <GallerySection />
      </div>
    </Layout>
  );
};

export default Gallery;
