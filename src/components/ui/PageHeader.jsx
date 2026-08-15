import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PageHeader = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs = [],
}) => {
  const { dir } = useLanguage();

  return (
    <section
      dir={dir}
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #090d16 0%, #0f172a 60%, #111e38 100%)',
      }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.6) 0%, rgba(249,115,22,0.2) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Decorative subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-gray-400 mb-6"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(10px)',
          }}
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((item, idx) => (
            <span key={item.path || idx} className="flex items-center gap-2">
              <ChevronRight className={`w-3 h-3 text-gray-500 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              {item.path ? (
                <Link to={item.path} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-blue-400 font-semibold">{item.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-4"
          >
            <div className="section-badge">
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
              {badge}
            </div>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-title text-white mb-5"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
        >
          {title}{' '}
          {titleHighlight && (
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 60%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {titleHighlight}
            </span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-subtitle mx-auto max-w-2xl text-gray-300 text-base sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
