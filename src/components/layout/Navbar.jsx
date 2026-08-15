import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Phone, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = () => {
  const { t, dir } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const normalizePath = (p) => {
    if (!p) return '/';
    const clean = p.split('?')[0].split('#')[0];
    return clean.length > 1 && clean.endsWith('/') ? clean.slice(0, -1) : clean;
  };

  const currentPath = normalizePath(location.pathname);
  const isHomeRoute = currentPath === '/' || currentPath === '/home';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav?.home || 'Home', path: '/home', sectionId: 'hero' },
    { label: t.nav?.about || 'About', path: '/about', sectionId: 'about' },
    { label: t.nav?.services || 'Services', path: '/services', sectionId: 'services' },
    { label: t.nav?.process || 'Process', path: '/process', sectionId: 'process' },
    { label: t.nav?.whyUs || 'Why Us', path: '/why-choose-us', sectionId: 'why-us' },
    { label: t.nav?.serviceAreas || 'Service Areas', path: '/service-areas', sectionId: 'service-areas' },
    { label: t.nav?.gallery || 'Gallery', path: '/gallery', sectionId: 'gallery' },
    { label: t.nav?.faq || 'FAQ', path: '/faq', sectionId: 'faq' },
    { label: t.nav?.contact || 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  // ScrollSpy observer on Home route with dynamic URL address bar synchronization
  useEffect(() => {
    if (!isHomeRoute) {
      setActiveSection('');
      return;
    }

    let lastUpdatedPath = window.location.pathname;

    const updateUrl = (newPath) => {
      if (window.location.pathname !== newPath && lastUpdatedPath !== newPath) {
        lastUpdatedPath = newPath;
        window.history.replaceState(null, '', newPath);
      }
    };

    const handleScrollSpy = () => {
      // Top of page
      if (window.scrollY < 120) {
        setActiveSection('hero');
        updateUrl('/home');
        return;
      }

      // Bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact');
        updateUrl('/contact');
        return;
      }

      // 35% viewport trigger offset for natural section detection
      const scrollTrigger = window.scrollY + Math.min(window.innerHeight * 0.35, 280);

      const sections = navLinks
        .map((link) => {
          const el = document.getElementById(link.sectionId);
          if (!el) return null;
          return {
            id: link.sectionId,
            path: link.path,
            top: el.offsetTop,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollTrigger >= sections[i].top) {
          setActiveSection(sections[i].id);
          updateUrl(sections[i].path);
          return;
        }
      }

      setActiveSection('hero');
      updateUrl('/home');
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    const timer = setTimeout(handleScrollSpy, 150);

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      clearTimeout(timer);
    };
  }, [isHomeRoute, t]);

  const handleNavClick = (e, link) => {
    setMobileOpen(false);

    if (isHomeRoute) {
      e.preventDefault();
      if (link.path === '/home' || link.path === '/' || link.sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('hero');
        window.history.pushState(null, '', '/home');
      } else {
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(link.sectionId);
          window.history.pushState(null, '', link.path);
        } else {
          navigate(link.path);
        }
      }
    }
  };

  const isActive = (link) => {
    if (isHomeRoute) {
      if (link.path === '/home' || link.path === '/') {
        return activeSection === 'hero';
      }
      return activeSection === link.sectionId;
    }
    return currentPath === normalizePath(link.path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'navbar-scrolled' : 'bg-slate-950/70 backdrop-blur-md border-b border-white/5'
        }`}
        dir={dir}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/home"
              onClick={(e) => {
                if (isHomeRoute) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveSection('hero');
                  window.history.pushState(null, '', '/home');
                }
              }}
              className="flex items-center gap-3 group flex-shrink-0"
              aria-label="SK Movers Home"
            >
              <div
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  boxShadow: '0 4px 15px rgba(59,130,246,0.4)',
                }}
              >
                <Truck className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-black text-white leading-none">
                  SK{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #f97316, #fb923c)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Movers
                  </span>
                </div>
                <div className="text-[10px] text-blue-300 font-medium tracking-wider uppercase hidden sm:block">
                  We Move With You
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative px-3 py-2 text-xs 2xl:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                      active
                        ? 'text-blue-400 bg-blue-500/10 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-blue-400"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="tel:+966547469226"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                  boxShadow: '0 4px 15px rgba(249,115,22,0.35)',
                }}
              >
                <Phone className="w-4 h-4" />
                {t.nav?.callNow || 'Call Now'}
              </a>
            </div>

            {/* Mobile: Language + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: dir === 'rtl' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: dir === 'rtl' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${dir === 'rtl' ? 'left-0' : 'right-0'} bottom-0 w-80 z-40 lg:hidden overflow-y-auto`}
              style={{
                background: 'rgba(15,23,42,0.98)',
                borderLeft: dir === 'rtl' ? 'none' : '1px solid rgba(59,130,246,0.2)',
                borderRight: dir === 'rtl' ? '1px solid rgba(59,130,246,0.2)' : 'none',
                backdropFilter: 'blur(20px)',
              }}
              dir={dir}
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link
                  to="/home"
                  onClick={(e) => {
                    setMobileOpen(false);
                    if (isHomeRoute) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setActiveSection('hero');
                      window.history.pushState(null, '', '/home');
                    }
                  }}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
                  >
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white leading-none">SK Movers</div>
                    <div className="text-[10px] text-blue-400 mt-0.5 uppercase tracking-wider">We Move With You</div>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile nav links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          active
                            ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20 font-semibold'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 space-y-3 border-t border-white/10 mt-4">
                <a
                  href="tel:+966547469226"
                  className="flex items-center justify-center text-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ background: 'linear-gradient(135deg, #f97316, #fb923c)' }}
                >
                  <Phone className="w-4 h-4" />
                  {t.nav?.callNow || 'Call Now'}
                </a>
                <a
                  href="https://wa.me/966547469226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ background: '#25D366' }}
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
