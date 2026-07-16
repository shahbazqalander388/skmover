import { motion } from 'framer-motion';
import { Users, Shield, DollarSign, Clock, Truck, HeadphonesIcon, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const whyIcons = [Users, Shield, DollarSign, Clock, Truck, HeadphonesIcon];
const whyColors = ['#3b82f6', '#f97316', '#22c55e', '#a855f7', '#eab308', '#06b6d4'];

const WhyChooseUs = () => {
  const { t, dir } = useLanguage();

  return (
    <section
      id="why-us"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0a1628 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(59,130,246,0.5) 35px,
            rgba(59,130,246,0.5) 36px
          )`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <ThumbsUp className="w-3.5 h-3.5" />
            {t.whyUs.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.whyUs.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.whyUs.titleHighlight}
            </span>{' '}
            {t.whyUs.title2}
          </h2>
          <p className="section-subtitle mx-auto">{t.whyUs.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.items.map((item, index) => {
            const Icon = whyIcons[index % whyIcons.length];
            const color = whyColors[index % whyColors.length];

            return (
              <motion.div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                whileHover={{ y: -6 }}
                className="relative p-7 rounded-2xl group cursor-default overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `rgba(${color === '#3b82f6' ? '59,130,246' : color === '#f97316' ? '249,115,22' : color === '#22c55e' ? '34,197,94' : color === '#a855f7' ? '168,85,247' : color === '#eab308' ? '234,179,8' : '6,182,212'},0.08)` }}
                />

                {/* Number */}
                <div
                  className="text-7xl font-black leading-none mb-4 opacity-5 group-hover:opacity-10 transition-opacity select-none absolute top-2 right-4"
                  style={{ color }}
                >
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `rgba(${color === '#3b82f6' ? '59,130,246' : color === '#f97316' ? '249,115,22' : color === '#22c55e' ? '34,197,94' : color === '#a855f7' ? '168,85,247' : color === '#eab308' ? '234,179,8' : '6,182,212'},0.15)`,
                    border: `1px solid rgba(${color === '#3b82f6' ? '59,130,246' : color === '#f97316' ? '249,115,22' : color === '#22c55e' ? '34,197,94' : color === '#a855f7' ? '168,85,247' : color === '#eab308' ? '234,179,8' : '6,182,212'},0.3)`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
