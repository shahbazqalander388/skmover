// ============================================================
// SK Movers – Central SEO Configuration
// ─────────────────────────────────────────────────────────────
// 🔧 TO SWITCH DOMAIN: Change BASE_URL only.
//    Every canonical URL, OG tag, sitemap entry and JSON-LD
//    reference derives from this one constant.
// ============================================================

export const BASE_URL      = 'https://skmover.vercel.app';
export const SITE_NAME     = 'SK Movers';
export const PHONE         = '+966547469226';
export const PHONE_DISPLAY = '+966 54 746 9226';
export const EMAIL         = 'skmovers41@gmail.com';
export const WHATSAPP_URL  = 'https://wa.me/966547469226';
export const FACEBOOK_URL  = 'https://www.facebook.com/share/19KLfzBnrE/';
export const MAPS_URL      = 'https://maps.app.goo.gl/LL1CgQrLtKbwXKFF9';
export const OG_IMAGE      = `${BASE_URL}/logo.png`;
export const LOGO_URL      = `${BASE_URL}/logo.png`;

/** Build an absolute URL for a given route path */
export const buildUrl = (path = '/') => `${BASE_URL}${path}`;

/** Service cities – referenced in JSON-LD and sitemap alike */
export const SERVICE_AREAS = [
  { name: 'Riyadh' },
  { name: 'Jeddah' },
  { name: 'Dammam' },
  { name: 'Medina' },
  { name: 'Jubail' },
  { name: 'Khobar' },
];

/** Shared OG image dimensions and alt text */
export const OG_IMAGE_META = {
  url:    OG_IMAGE,
  width:  '512',
  height: '512',
  alt:    'SK Movers – Professional Movers in Saudi Arabia',
};

/**
 * Reusable LocalBusiness / MovingCompany JSON-LD block.
 * Include this in every page's schema to give Google full
 * business context on every URL it crawls.
 */
export const BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': ['MovingCompany', 'LocalBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: SITE_NAME,
  alternateName: ['SK Movers Saudi Arabia', 'SK Moving Company KSA'],
  description:
    'Professional furniture moving Saudi Arabia, house shifting Riyadh, office relocation, and storage services across Saudi Arabia.',
  slogan: 'We Move With You',
  url: `${BASE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: OG_IMAGE,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SA',
    addressRegion: 'Riyadh',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.7136,
    longitude: 46.6752,
  },
  hasMap: MAPS_URL,
  areaServed: SERVICE_AREAS.map(({ name }) => ({ '@type': 'City', name })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    availableLanguage: ['English', 'Arabic', 'Urdu'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  },
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-23:59',
  paymentAccepted: 'Cash, Bank Transfer',
  currenciesAccepted: 'SAR',
  sameAs: [FACEBOOK_URL, WHATSAPP_URL],
  serviceType: [
    'Furniture Moving Saudi Arabia',
    'House Shifting Riyadh',
    'Office Relocation Saudi Arabia',
    'Packers and Movers Riyadh',
    'Storage Services Saudi Arabia',
    'Furniture Assembly',
    'Loading and Unloading',
  ],
};

/** Per-page SEO configuration — title, description, keywords */
export const PAGES = {
  home: {
    path: '/',
    title: 'SK Movers | Best Movers in Saudi Arabia & House Shifting Riyadh',
    description:
      'Looking for reliable movers in Saudi Arabia? SK Movers offers expert house shifting in Riyadh, furniture moving, and office relocation services. Get a free quote!',
    keywords:
      'movers in Saudi Arabia, packers and movers Riyadh, house shifting Riyadh, office relocation Saudi Arabia, furniture moving Saudi Arabia, storage services Saudi Arabia',
  },
  about: {
    path: '/about',
    title: 'About Us | Professional Packers and Movers Riyadh | SK Movers',
    description:
      'Discover SK Movers, your trusted packers and movers in Riyadh. We specialize in safe furniture moving, office relocation, and storage services across Saudi Arabia.',
    keywords:
      'about SK Movers, packers and movers Riyadh, moving company Saudi Arabia, reliable movers Riyadh, professional movers KSA',
  },
  services: {
    path: '/services',
    title: 'Moving Services | House Shifting & Furniture Moving Saudi Arabia',
    description:
      'Comprehensive moving services including house shifting Riyadh, office relocation Saudi Arabia, expert packing, and secure storage services. Book SK Movers today.',
    keywords:
      'house shifting Riyadh, furniture moving Saudi Arabia, office relocation Saudi Arabia, storage services Saudi Arabia, packing services Riyadh',
  },
  serviceAreas: {
    path: '/service-areas',
    title: 'Service Areas | Movers in Saudi Arabia, Riyadh, Jeddah, Dammam',
    description:
      'SK Movers serves all major regions. We are the top movers in Saudi Arabia, providing localized house shifting in Riyadh, Jeddah, Dammam, and more.',
    keywords:
      'movers in Saudi Arabia, house shifting Riyadh, movers Jeddah, movers Dammam, local movers Saudi Arabia, relocation services KSA',
  },
  gallery: {
    path: '/gallery',
    title: 'Gallery | SK Movers – Furniture Moving Saudi Arabia in Action',
    description:
      'View photos of our professional team handling house shifting in Riyadh and office relocation across Saudi Arabia. See our furniture moving expertise.',
    keywords:
      'SK Movers gallery, furniture moving Saudi Arabia, house shifting Riyadh photos, professional movers pictures',
  },
  whyChooseUs: {
    path: '/why-choose-us',
    title: 'Why Choose SK Movers | Top Office Relocation Saudi Arabia',
    description:
      'Why are we the best movers in Saudi Arabia? We offer 100% safe furniture moving, transparent pricing, and timely house shifting in Riyadh.',
    keywords:
      'best movers Saudi Arabia, reliable movers KSA, why choose SK Movers, packers and movers Riyadh, office relocation Saudi Arabia',
  },
  testimonials: {
    path: '/testimonials',
    title: 'Client Reviews | Trusted Movers in Saudi Arabia & Riyadh',
    description:
      'Read what our satisfied clients say about our house shifting in Riyadh and furniture moving services across Saudi Arabia. We deliver 5-star moving experiences.',
    keywords:
      'SK Movers reviews, packers and movers Riyadh reviews, moving company testimonials Saudi Arabia, best movers KSA feedback',
  },
  faq: {
    path: '/faq',
    title: 'FAQ | Moving, Packing & Storage Services Saudi Arabia',
    description:
      'Got questions about house shifting in Riyadh or office relocation in Saudi Arabia? Read our FAQ for details on pricing, packing, and storage services.',
    keywords:
      'moving FAQ Saudi Arabia, house shifting Riyadh questions, storage services Saudi Arabia FAQ, packing questions KSA',
  },
  contact: {
    path: '/contact',
    title: 'Contact SK Movers | Hire Packers and Movers Riyadh',
    description:
      'Contact SK Movers for a free quote on furniture moving, house shifting, and office relocation in Saudi Arabia. Call or WhatsApp us 24/7.',
    keywords:
      'contact movers Saudi Arabia, packers and movers Riyadh contact, house shifting Riyadh quote, hire movers KSA',
  },
};
