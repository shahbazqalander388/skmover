import { Helmet } from 'react-helmet-async';
import { BASE_URL, SITE_NAME, OG_IMAGE_META } from './seoConfig';

/**
 * PageSeo — drop-in SEO <head> tags for any page.
 *
 * Renders: canonical, OG, Twitter Card, hreflang (en/ar/ur),
 * meta-description, keywords, and robots directives.
 *
 * @param {Object}  props
 * @param {string}  props.title       – page <title>
 * @param {string}  props.description – meta description
 * @param {string}  props.path        – route path, e.g. "/about"
 * @param {string}  [props.keywords]  – comma-separated keywords
 * @param {string}  [props.ogType]    – OG type (default "website")
 */
const PageSeo = ({ title, description, path = '/', keywords, ogType = 'website' }) => {
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE_META.url} />
      <meta property="og:image:width" content={OG_IMAGE_META.width} />
      <meta property="og:image:height" content={OG_IMAGE_META.height} />
      <meta property="og:image:alt" content={OG_IMAGE_META.alt} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_SA" />
      <meta property="og:locale:alternate" content="ur_PK" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE_META.url} />
      <meta name="twitter:image:alt" content={OG_IMAGE_META.alt} />

      {/* Hreflang — all languages share the same URL (client-side switching) */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ur" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};

export default PageSeo;
