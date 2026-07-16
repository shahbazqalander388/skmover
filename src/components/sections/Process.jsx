import { Workflow } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Process = () => {
  const { t, dir } = useLanguage();

  const stepColors = ['#3b82f6', '#f97316', '#22c55e', '#a855f7'];

  return (
    <section
      id="process"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <Workflow className="w-3.5 h-3.5" />
            {t.process.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.process.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.process.titleHighlight}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">{t.process.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-px hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3) 20%, rgba(249,115,22,0.3) 50%, rgba(34,197,94,0.3) 80%, transparent)',
              transform: 'translateY(-50%)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => {
              const color = stepColors[index];
              const colorRgb = color === '#3b82f6' ? '59,130,246' : color === '#f97316' ? '249,115,22' : color === '#22c55e' ? '34,197,94' : '168,85,247';

              return (
                <div
                  key={step.step}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative text-center group"
                >
                  {/* Step circle */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `rgba(${colorRgb},0.15)`,
                        border: `2px solid rgba(${colorRgb},0.4)`,
                        boxShadow: `0 0 30px rgba(${colorRgb},0.2)`,
                      }}
                    >
                      <span
                        className="text-2xl font-black"
                        style={{ color }}
                      >
                        {step.step}
                      </span>
                      {/* Outer ring on hover */}
                      <div
                        className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ border: `1px solid rgba(${colorRgb},0.2)` }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="p-6 rounded-2xl transition-all duration-300 group-hover:-translate-y-2"
                    style={{
                      background: `rgba(${colorRgb},0.05)`,
                      border: `1px solid rgba(${colorRgb},0.15)`,
                    }}
                  >
                    <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
