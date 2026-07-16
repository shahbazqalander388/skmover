import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧', native: 'English' },
  { code: 'ar', label: 'Arabic', flag: '🇸🇦', native: 'العربية' },
  { code: 'ur', label: 'Urdu', flag: '🇵🇰', native: 'اردو' },
];

const LanguageSwitcher = ({ mobile = false }) => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find((l) => l.code === language);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 font-medium text-sm ${
          mobile
            ? 'w-full justify-between text-white bg-white/5 hover:bg-white/10 border border-white/10'
            : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
        }`}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
        <span className="flex items-center gap-1.5">
          <span>{current?.flag}</span>
          <span>{current?.native}</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 rounded-xl overflow-hidden shadow-2xl min-w-[160px] ${
              mobile ? 'left-0 top-full mt-1 w-full' : 'right-0 top-full mt-2'
            }`}
            style={{
              background: 'rgba(15,23,42,0.98)',
              border: '1px solid rgba(59,130,246,0.25)',
              backdropFilter: 'blur(20px)',
            }}
            role="listbox"
            aria-label="Language options"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className="flex items-center justify-between gap-3 w-full px-4 py-3 text-sm transition-all duration-150 hover:bg-blue-500/10"
                style={{ color: language === lang.code ? '#60a5fa' : '#cbd5e1' }}
                role="option"
                aria-selected={language === lang.code}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{lang.flag}</span>
                  <div className="text-left">
                    <div className="font-medium">{lang.native}</div>
                    <div className="text-xs opacity-60">{lang.label}</div>
                  </div>
                </span>
                {language === lang.code && (
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
