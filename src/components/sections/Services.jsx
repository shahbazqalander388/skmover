import { motion } from 'framer-motion';
import {
  Sofa, Home, Building, Package, PackageOpen, Wrench,
  Truck, Shield, Warehouse, Settings, ArrowRight, Layers
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const iconMap = {
  sofa: Sofa,
  home: Home,
  building: Building,
  package: Package,
  packageopen: PackageOpen,
  wrench: Wrench,
  tool: Settings,
  truck: Truck,
  shield: Shield,
  warehouse: Warehouse,
};

const serviceColors = [
  { bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.25)', icon: '#60a5fa' },
  { bg: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.25)', icon: '#fb923c' },
  { bg: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.25)', icon: '#4ade80' },
  { bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.25)', icon: '#c084fc' },
  { bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.25)', icon: '#facc15' },
  { bg: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.25)', icon: '#f472b6' },
  { bg: 'rgba(14,165,233,0.12)', border: 'rgba(14,165,233,0.25)', icon: '#38bdf8' },
  { bg: 'rgba(239,68,68,0.12)', border: 'rgba(239,68,68,0.25)', icon: '#f87171' },
  { bg: 'rgba(20,184,166,0.12)', border: 'rgba(20,184,166,0.25)', icon: '#2dd4bf' },
  { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.25)', icon: '#818cf8' },
];

const Services = () => {
  const { t, dir } = useLanguage();

  return (
    <section
      id="services"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)' }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <Layers className="w-3.5 h-3.5" />
            {t.services.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.services.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.services.titleHighlight}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || Truck;
            const colors = serviceColors[index % serviceColors.length];

            return (
              <motion.div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                whileHover={{ y: -6, scale: 1.01 }}
                className="service-card glass-card rounded-2xl p-6 group cursor-default"
                role="article"
                aria-label={service.title}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                >
                  <Icon className="w-7 h-7" style={{ color: colors.icon }} />
                </div>

                <h3 className="text-white font-bold text-base mb-2 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>

                {/* Learn more */}
                <div
                  className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
                  style={{ color: colors.icon }}
                >
                  {t.services.learnMore}
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a href="/services" className="btn-primary">
            {t.services.viewAll}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
