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
export const OG_IMAGE      = `${BASE_URL}/og-image.jpg`;
export const LOGO_URL      = `${BASE_URL}/logo.png`;
export const FOUNDED       = '2019';

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
  width:  '1200',
  height: '630',
  alt:    'SK Movers – Professional Moving & Packing Company in Saudi Arabia',
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
    'Professional furniture moving, house shifting, office relocation, packing, unpacking, and storage services throughout Saudi Arabia.',
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
  foundingDate: FOUNDED,
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
  sameAs: [FACEBOOK_URL, WHATSAPP_URL],
  serviceType: [
    'Furniture Moving', 'House Shifting', 'Office Relocation',
    'Packing Services', 'Unpacking Services', 'Furniture Assembly',
    'Furniture Disassembly', 'Loading and Unloading',
    'Safe Transportation', 'Storage Services',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '500',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
};

/** Per-page SEO configuration — title, description, keywords */
export const PAGES = {
  home: {
    path: '/',
    title: 'SK Movers – Professional Movers & Packers in Saudi Arabia',
    description:
      'SK Movers offers furniture moving, house shifting, office relocation, packing & storage across Saudi Arabia. Trusted, safe, on time. Call for a free quote.',
    keywords:
      'movers in Saudi Arabia, packers and movers Saudi Arabia, house shifting Saudi Arabia, furniture moving Saudi Arabia, moving company Saudi Arabia, office relocation Saudi Arabia, villa moving Saudi Arabia, local movers Saudi Arabia, professional movers KSA',
  },
  about: {
    path: '/about',
    title: 'About SK Movers | Trusted Moving Company in Saudi Arabia',
    description:
      'Learn about SK Movers – your trusted relocation partner in Saudi Arabia. 5+ years experience, 500+ happy clients, covering Riyadh, Jeddah, Dammam and more.',
    keywords:
      'about SK Movers, trusted movers Saudi Arabia, professional moving company KSA, reliable movers Saudi Arabia, SK Movers history',
  },
  services: {
    path: '/services',
    title: 'Moving Services | SK Movers – House Shifting & Office Relocation KSA',
    description:
      'SK Movers offers furniture moving, house shifting, office relocation, packing, unpacking, assembly, disassembly & storage across Saudi Arabia. Get a free quote today.',
    keywords:
      'furniture moving Saudi Arabia, house shifting Saudi Arabia, office relocation Saudi Arabia, packing services Saudi Arabia, storage services Saudi Arabia, villa moving Saudi Arabia, apartment moving Saudi Arabia, loading unloading Saudi Arabia',
  },
  serviceAreas: {
    path: '/service-areas',
    title: 'Service Areas | SK Movers – Riyadh, Jeddah, Dammam & More',
    description:
      'SK Movers serves all major cities in Saudi Arabia: Riyadh, Jeddah, Dammam, Medina, Jubail & Khobar. Professional relocation services at your doorstep.',
    keywords:
      'movers Riyadh, movers Jeddah, movers Dammam, movers Medina, movers Jubail, movers Khobar, local movers Saudi Arabia, moving services KSA cities, furniture moving Riyadh',
  },
  gallery: {
    path: '/gallery',
    title: 'Gallery | SK Movers – Professional Moving Team in Action',
    description:
      'Browse photos of SK Movers team completing successful residential and commercial moves across Saudi Arabia. See our professional handling of furniture and belongings.',
    keywords:
      'SK Movers gallery, moving photos Saudi Arabia, professional movers pictures, furniture moving team KSA, relocation photos',
  },
  whyChooseUs: {
    path: '/why-choose-us',
    title: 'Why Choose SK Movers | Best Movers in Saudi Arabia',
    description:
      'SK Movers: professional crew, 100% safe handling, transparent pricing, on-time delivery guaranteed. Discover why we are the #1 choice for relocation in Saudi Arabia.',
    keywords:
      'best movers Saudi Arabia, reliable movers KSA, affordable moving company Saudi Arabia, professional packers movers Saudi Arabia, why choose SK Movers',
  },
  testimonials: {
    path: '/testimonials',
    title: 'Customer Reviews | SK Movers – 5-Star Moving Company in KSA',
    description:
      'Read verified customer reviews of SK Movers from Riyadh, Jeddah, Dammam and more. 500+ happy clients rate us 5 stars for professional, safe moving services.',
    keywords:
      'SK Movers reviews, moving company reviews Saudi Arabia, best movers reviews KSA, customer testimonials movers, 5 star movers Saudi Arabia',
  },
  faq: {
    path: '/faq',
    title: 'FAQ | SK Movers – Moving Services Questions Answered',
    description:
      'Frequently asked questions about SK Movers: pricing, packing materials, booking lead time, office moves, storage options, insurance, and cities covered in Saudi Arabia.',
    keywords:
      'moving FAQ Saudi Arabia, movers questions KSA, moving cost Saudi Arabia, how to hire movers Saudi Arabia, packing questions KSA, storage FAQ Saudi Arabia',
  },
  contact: {
    path: '/contact',
    title: 'Contact SK Movers | Free Moving Quote – Saudi Arabia',
    description:
      'Contact SK Movers for a free, no-obligation moving quote. Available 24/7 across Saudi Arabia. Call or WhatsApp +966 54 746 9226, or fill out our contact form.',
    keywords:
      'contact movers Saudi Arabia, free moving quote Saudi Arabia, hire movers KSA, moving company contact Saudi Arabia, WhatsApp movers Saudi Arabia, 24/7 movers KSA',
  },
};
