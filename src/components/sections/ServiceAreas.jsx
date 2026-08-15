import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { FaCity, FaWater, FaIndustry, FaMosque, FaWarehouse, FaSun, FaWhatsapp } from 'react-icons/fa6';
import { useLanguage } from '../../context/LanguageContext';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/gtm';

const cityData = [
  { name: 'Riyadh', ar: 'الرياض', ur: 'ریاض', Icon: FaCity, isCapital: true },
  { name: 'Jeddah', ar: 'جدة', ur: 'جدہ', Icon: FaWater, isCapital: false },
  { name: 'Dammam', ar: 'الدمام', ur: 'دمام', Icon: FaIndustry, isCapital: false },
  { name: 'Medina', ar: 'المدينة المنورة', ur: 'مدینہ منورہ', Icon: FaMosque, isCapital: false },
  { name: 'Jubail', ar: 'الجبيل', ur: 'جبیل', Icon: FaWarehouse, isCapital: false },
  { name: 'Khobar', ar: 'الخبر', ur: 'خبر', Icon: FaSun, isCapital: false },
];

const ServiceAreas = () => {
  const { t, dir, language } = useLanguage();

  return (
    <section
      id="service-areas"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <MapPin className="w-3.5 h-3.5" />
            {t.areas.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.areas.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.areas.titleHighlight}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">{t.areas.subtitle}</p>
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cityData.map((city, index) => {
            const cityName =
              language === 'ar' ? city.ar : language === 'ur' ? city.ur : city.name;
            const CityIcon = city.Icon;

            return (
              <motion.div
                key={city.name}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-7 rounded-2xl group overflow-hidden transition-all duration-300"
                style={{
                  background: city.isCapital
                    ? 'linear-gradient(135deg, rgba(30,64,175,0.4) 0%, rgba(15,23,42,0.8) 100%)'
                    : 'rgba(255,255,255,0.03)',
                  border: city.isCapital
                    ? '1px solid rgba(59,130,246,0.4)'
                    : '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {city.isCapital && (
                  <div
                    className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-blue-300"
                    style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)' }}
                  >
                    Capital
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <CityIcon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{cityName}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {t.areas.coverage} {cityName} & {t.areas.surrounding}
                </p>

                <div className="flex gap-3">
                  <a
                    href="tel:+966547469226"
                    onClick={() => trackPhoneClick(`city_card_${city.name}`)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
                    aria-label={`Call for moving services in ${cityName}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {t.nav.callNow}
                  </a>
                  <a
                    href="https://wa.me/966547469226"
                    onClick={() => trackWhatsAppClick(`city_card_${city.name}`, `Moving Inquiry for ${city.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105"
                    style={{ background: 'rgba(37,211,102,0.2)', border: '1px solid rgba(37,211,102,0.4)', color: '#4ade80' }}
                    aria-label={`WhatsApp for moving services in ${cityName}`}
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Coverage Note */}
        <div
          data-aos="fade-up"
          className="text-center p-6 rounded-2xl max-w-2xl mx-auto"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-gray-300 text-sm">{t.areas.allKingdom}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
