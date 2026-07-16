import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const cityData = [
  { name: 'Riyadh', ar: 'الرياض', ur: 'ریاض', emoji: '🏙️', isCapital: true },
  { name: 'Jeddah', ar: 'جدة', ur: 'جدہ', emoji: '🌊', isCapital: false },
  { name: 'Dammam', ar: 'الدمام', ur: 'دمام', emoji: '🛢️', isCapital: false },
  { name: 'Medina', ar: 'المدينة المنورة', ur: 'مدینہ منورہ', emoji: '🕌', isCapital: false },
  { name: 'Jubail', ar: 'الجبيل', ur: 'جبیل', emoji: '🏭', isCapital: false },
  { name: 'Khobar', ar: 'الخبر', ur: 'خبر', emoji: '🌅', isCapital: false },
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
      {/* Saudi Arabia silhouette hint */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <span className="text-[20rem] select-none">🇸🇦</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* City Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {cityData.map((city, index) => {
            const displayName = language === 'ar' ? city.ar : language === 'ur' ? city.ur : city.name;

            return (
              <motion.div
                key={city.name}
                data-aos="zoom-in"
                data-aos-delay={index * 60}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative text-center p-5 rounded-2xl cursor-default group"
                style={{
                  background: city.isCapital
                    ? 'linear-gradient(135deg, rgba(30,64,175,0.25) 0%, rgba(59,130,246,0.15) 100%)'
                    : 'rgba(255,255,255,0.04)',
                  border: city.isCapital
                    ? '1px solid rgba(59,130,246,0.4)'
                    : '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {city.isCapital && (
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
                  >
                    Capital
                  </div>
                )}

                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {city.emoji}
                </div>
                <div className="text-white font-bold text-sm">{displayName}</div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-green-400 text-[10px] font-medium">Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(30,64,175,0.15) 0%, rgba(249,115,22,0.1) 100%)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-lg">Don't see your city?</h3>
            <p className="text-gray-400 text-sm">Contact us and we'll see how we can help!</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:+966547469226" className="btn-accent">
              <Phone className="w-4 h-4" />
              {t.areas.contactUs}
            </a>
            <a
              href="https://wa.me/966547469226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:scale-105"
              style={{ background: '#25D366' }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
