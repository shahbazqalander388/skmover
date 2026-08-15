/**
 * Google Tag Manager & GA4 Event Tracking Helper
 * Optimized for SK Movers – Saudi Arabia Furniture Moving & Shifting
 */

export const pushToDataLayer = (data) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

/**
 * Track Phone Call Click
 * @param {string} source - Where the call button was clicked (e.g. 'hero', 'navbar', 'contact', 'footer')
 */
export const trackPhoneClick = (source = 'general') => {
  pushToDataLayer({
    event: 'contact_call_click',
    event_category: 'Lead Generation',
    event_label: `Phone Call from ${source}`,
    business_niche: 'Moving and Relocation Services Saudi Arabia',
    phone_number: '+966547469226',
    conversion_type: 'Direct Phone Call',
  });
};

/**
 * Track WhatsApp Inquiry Click
 * @param {string} source - Where WhatsApp was clicked
 * @param {string} service - Specific moving service inquired
 */
export const trackWhatsAppClick = (source = 'general', service = 'General Moving Inquiry') => {
  pushToDataLayer({
    event: 'whatsapp_chat_click',
    event_category: 'Lead Generation',
    event_label: `WhatsApp Chat from ${source}`,
    service_inquired: service,
    business_niche: 'Furniture Moving & House Shifting KSA',
    conversion_type: 'WhatsApp Lead',
  });
};

/**
 * Track Quote / Message Form Submission
 * @param {Object} formData - Details submitted by client
 */
export const trackQuoteSubmission = ({ name, phone, service, city = 'Saudi Arabia' }) => {
  pushToDataLayer({
    event: 'generate_lead',
    event_category: 'Conversions',
    event_label: `Quote Request for ${service || 'Moving Service'}`,
    service_requested: service || 'Full Relocation',
    city_target: city,
    customer_name: name,
    business_niche: 'Packers and Movers Saudi Arabia',
    value: 1.0,
    currency: 'SAR',
  });
};

/**
 * Track City Service Area Interest
 * @param {string} cityName - Riyadh, Jeddah, Dammam, etc.
 */
export const trackCityAreaView = (cityName) => {
  pushToDataLayer({
    event: 'view_service_area',
    event_category: 'Engagement',
    event_label: `Service Area - ${cityName}`,
    target_city: cityName,
    country: 'Saudi Arabia',
  });
};
