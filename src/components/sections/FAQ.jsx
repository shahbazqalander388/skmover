import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FAQ = () => {
  const { t, dir } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)', filter: 'blur(60px)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            {t.faq.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.faq.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.faq.titleHighlight}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">{t.faq.subtitle}</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 40}
                className="overflow-hidden rounded-2xl transition-all duration-200"
                style={{
                  background: isOpen ? 'rgba(30,64,175,0.12)' : 'rgba(255,255,255,0.03)',
                  border: isOpen ? '1px solid rgba(59,130,246,0.35)' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold transition-all duration-200"
                      style={{
                        background: isOpen ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)',
                        color: isOpen ? '#60a5fa' : '#64748b',
                      }}
                    >
                      {index + 1}
                    </div>
                    <span
                      className="font-semibold text-sm sm:text-base transition-colors duration-200"
                      style={{ color: isOpen ? '#e2e8f0' : '#94a3b8' }}
                    >
                      {item.q}
                    </span>
                  </div>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{
                      background: isOpen ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)',
                    }}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-blue-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px mb-4" style={{ background: 'rgba(59,130,246,0.15)' }} />
                        <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div
          className="mt-12 text-center p-8 rounded-2xl"
          data-aos="fade-up"
          style={{
            background: 'linear-gradient(135deg, rgba(30,64,175,0.15) 0%, rgba(249,115,22,0.1) 100%)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          <HelpCircle className="w-10 h-10 text-blue-400 mx-auto mb-3 opacity-70" />
          <h3 className="text-white font-bold text-lg mb-2">{t.faq.stillHaveQuestions}</h3>
          <p className="text-gray-400 text-sm mb-5">
            We're here to help. Call or WhatsApp us anytime.
          </p>
          <a href="tel:+966547469226" className="btn-primary inline-flex">
            <Phone className="w-4 h-4" />
            {t.faq.contactUs}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
