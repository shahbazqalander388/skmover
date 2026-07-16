import { Phone, MessageCircle, FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ContactCTA = () => {
  const { t, dir } = useLanguage();

  return (
    <section
      dir={dir}
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0f172a 100%)' }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(249,115,22,0.6) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(59,130,246,0.6) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-orange-300 mb-6"
            style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
          >
            🚚 Available 24/7 – Saudi Arabia
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.3)' }}
          >
            {t.cta.title}
          </h2>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+966547469226"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 hover:-translate-y-1 w-full sm:w-auto justify-center"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                boxShadow: '0 8px 30px rgba(249,115,22,0.4)',
              }}
            >
              <Phone className="w-5 h-5" />
              {t.cta.callNow}
            </a>
            <a
              href="https://wa.me/966547469226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 hover:-translate-y-1 w-full sm:w-auto justify-center"
              style={{
                background: '#25D366',
                boxShadow: '0 8px 30px rgba(37,211,102,0.35)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              {t.cta.whatsapp}
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 hover:-translate-y-1 border-2 border-white/30 hover:border-white/60 hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <FileText className="w-5 h-5" />
              {t.cta.freeQuote}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
