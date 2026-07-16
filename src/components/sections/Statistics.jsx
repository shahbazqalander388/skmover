import { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { TrendingUp, Users, Map, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const statIcons = [Users, TrendingUp, Map, Award];
const statColors = ['#3b82f6', '#f97316', '#22c55e', '#a855f7'];

const Statistics = () => {
  const { t, dir } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="statistics"
      dir={dir}
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1e3a8a 50%, #0a1628 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            {t.stats.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.stats.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.stats.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.items.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            const color = statColors[index % statColors.length];
            const colorRgb = color === '#3b82f6' ? '59,130,246' : color === '#f97316' ? '249,115,22' : color === '#22c55e' ? '34,197,94' : '168,85,247';

            return (
              <div
                key={stat.label}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="relative text-center p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
                style={{
                  background: `rgba(${colorRgb},0.08)`,
                  border: `1px solid rgba(${colorRgb},0.2)`,
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 4px 30px rgba(${colorRgb},0.1)`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `rgba(${colorRgb},0.15)` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>

                {/* Counter */}
                <div
                  className="text-4xl lg:text-5xl font-black mb-2 tabular-nums"
                  style={{ color }}
                >
                  {isInView ? (
                    <>
                      <span>{stat.value}</span>
                      {stat.suffix}
                    </>
                  ) : (
                    <>0{stat.suffix}</>
                  )}
                </div>

                <div className="text-gray-300 font-semibold text-sm">{stat.label}</div>

                {/* Bottom glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-t-full opacity-50"
                  style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
