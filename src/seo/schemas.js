// ============================================================
// SK Movers – Per-page JSON-LD Schema builders
// ============================================================
import {
  BASE_URL, SITE_NAME, LOGO_URL, OG_IMAGE,
  PHONE, EMAIL, BUSINESS_LD, PAGES, buildUrl,
} from './seoConfig';

// ── Shared breadcrumb helper ─────────────────────────────────
const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

const homeCrumb = { name: 'Home', url: buildUrl('/') };

// ── Home ─────────────────────────────────────────────────────
export const homeSchemas = (faqItems = []) => {
  const schemas = [
    // WebSite — enables Google sitelinks search box
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: SITE_NAME,
      url: `${BASE_URL}/`,
      publisher: { '@id': `${BASE_URL}/#business` },
      inLanguage: ['en', 'ar', 'ur'],
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    // Full business entity
    BUSINESS_LD,
  ];

  // FAQPage if FAQ items are provided
  if (faqItems.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }

  return schemas;
};

// ── About ────────────────────────────────────────────────────
export const aboutSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': buildUrl('/about'),
    name: PAGES.about.title,
    description: PAGES.about.description,
    url: buildUrl('/about'),
    mainEntity: { '@id': `${BASE_URL}/#business` },
  },
  BUSINESS_LD,
  breadcrumb([homeCrumb, { name: 'About Us', url: buildUrl('/about') }]),
];

// ── Services ─────────────────────────────────────────────────
export const servicesSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: { '@id': `${BASE_URL}/#business` },
    serviceType: BUSINESS_LD.serviceType,
    areaServed: BUSINESS_LD.areaServed,
    name: 'Professional Moving & Packing Services',
    description: PAGES.services.description,
    url: buildUrl('/services'),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SAR',
      availability: 'https://schema.org/InStock',
    },
  },
  BUSINESS_LD,
  breadcrumb([homeCrumb, { name: 'Services', url: buildUrl('/services') }]),
];

// ── Service Areas ────────────────────────────────────────────
export const serviceAreasSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': buildUrl('/service-areas'),
    name: PAGES.serviceAreas.title,
    description: PAGES.serviceAreas.description,
    url: buildUrl('/service-areas'),
    mainEntity: { '@id': `${BASE_URL}/#business` },
  },
  BUSINESS_LD,
  breadcrumb([homeCrumb, { name: 'Service Areas', url: buildUrl('/service-areas') }]),
];

// ── Gallery ──────────────────────────────────────────────────
export const gallerySchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'SK Movers – Moving Gallery',
    description: PAGES.gallery.description,
    url: buildUrl('/gallery'),
    publisher: { '@id': `${BASE_URL}/#business` },
  },
  BUSINESS_LD,
  breadcrumb([homeCrumb, { name: 'Gallery', url: buildUrl('/gallery') }]),
];

// ── Why Choose Us ────────────────────────────────────────────
export const whyChooseUsSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': buildUrl('/why-choose-us'),
    name: PAGES.whyChooseUs.title,
    description: PAGES.whyChooseUs.description,
    url: buildUrl('/why-choose-us'),
    mainEntity: { '@id': `${BASE_URL}/#business` },
  },
  BUSINESS_LD,
  breadcrumb([homeCrumb, { name: 'Why Choose Us', url: buildUrl('/why-choose-us') }]),
];

// ── Testimonials ─────────────────────────────────────────────
export const testimonialsSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': buildUrl('/testimonials'),
    name: PAGES.testimonials.title,
    description: PAGES.testimonials.description,
    url: buildUrl('/testimonials'),
    mainEntity: { '@id': `${BASE_URL}/#business` },
  },
  BUSINESS_LD,
  breadcrumb([homeCrumb, { name: 'Testimonials', url: buildUrl('/testimonials') }]),
];

// ── FAQ ──────────────────────────────────────────────────────
export const faqSchemas = (faqItems = []) => {
  const schemas = [
    BUSINESS_LD,
    breadcrumb([homeCrumb, { name: 'FAQ', url: buildUrl('/faq') }]),
  ];

  if (faqItems.length > 0) {
    schemas.unshift({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': buildUrl('/faq'),
      name: PAGES.faq.title,
      url: buildUrl('/faq'),
      mainEntity: faqItems.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }

  return schemas;
};

// ── Contact ──────────────────────────────────────────────────
export const contactSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': buildUrl('/contact'),
    name: PAGES.contact.title,
    description: PAGES.contact.description,
    url: buildUrl('/contact'),
    mainEntity: { '@id': `${BASE_URL}/#business` },
  },
  BUSINESS_LD,
  breadcrumb([homeCrumb, { name: 'Contact', url: buildUrl('/contact') }]),
];

// ── 404 ──────────────────────────────────────────────────────
export const notFoundSchemas = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '404 – Page Not Found | SK Movers',
    description: 'The page you are looking for does not exist.',
    url: BASE_URL,
  },
];
