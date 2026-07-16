import { CheckCircle2, Users, MapPin, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { t, dir } = useLanguage();

  const features = [
    { icon: CheckCircle2, text: t.about.feature1, color: '#3b82f6' },
    { icon: CheckCircle2, text: t.about.feature2, color: '#f97316' },
    { icon: CheckCircle2, text: t.about.feature3, color: '#22c55e' },
    { icon: CheckCircle2, text: t.about.feature4, color: '#a855f7' },
  ];

  const quickStats = [
    { icon: Award, value: '5+', label: t.about.yearsExp, color: '#f97316' },
    { icon: Users, value: '500+', label: t.about.happyClients, color: '#3b82f6' },
    { icon: MapPin, value: '6', label: t.about.citiesCovered, color: '#22c55e' },
  ];

  return (
    <section
      id="about"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Side */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="relative"
          >
            {/* Main card */}
            <div
              className="relative rounded-3xl overflow-hidden p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(30,64,175,0.2) 0%, rgba(59,130,246,0.1) 100%)',
                border: '1px solid rgba(59,130,246,0.25)',
              }}
            >
              {/* Icon grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🚚', label: 'Moving' },
                  { icon: '📦', label: 'Packing' },
                  { icon: '🏠', label: 'House Shifting' },
                  { icon: '🏢', label: 'Office Relocation' },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 p-5 rounded-2xl transition-all hover:scale-105 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="text-4xl">{icon}</span>
                    <span className="text-xs text-gray-400 font-medium text-center">{label}</span>
                  </div>
                ))}
              </div>

              {/* Quick stats inside card */}
              <div className="grid grid-cols-3 gap-3">
                {quickStats.map(({ icon: Icon, value, label, color }) => (
                  <div
                    key={label}
                    className="text-center p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <div className="text-2xl font-black mb-0.5" style={{ color }}>{value}</div>
                    <div className="text-[10px] text-gray-400 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl text-sm font-bold text-white shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                boxShadow: '0 8px 30px rgba(249,115,22,0.4)',
              }}
            >
              ⭐ Saudi Arabia's #1 Movers
            </div>
          </div>

          {/* Content Side */}
          <div data-aos="fade-left" data-aos-duration="800">
            <div className="section-badge mb-4">
              <Award className="w-3.5 h-3.5" />
              {t.about.badge}
            </div>

            <h2 className="section-title text-white mb-6">
              {t.about.title}{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t.about.titleHighlight}
              </span>
            </h2>

            <p className="section-subtitle mb-5">{t.about.description1}</p>
            <p className="section-subtitle mb-8">{t.about.description2}</p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-3.5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" style={{ color }} />
                  <span className="text-gray-300 text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="btn-primary inline-flex"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0 });
                window.location.href = '/about';
              }}
            >
              {t.about.learnMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
