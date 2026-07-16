import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import Layout from '../components/layout/Layout';
import GallerySection from '../components/sections/Gallery';

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Gallery | SK Movers - Professional Moving Team at Work</title>
        <meta name="description" content="View our gallery of successful residential and commercial moves across Saudi Arabia. See the SK Movers team handling furniture with care and professionalism." />
      </Helmet>
      <div className="pt-24 lg:pt-32">
        <GallerySection />
      </div>
    </Layout>
  );
};

export default Gallery;
