import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, FileText, ChevronDown, Truck, Shield, Clock, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t, dir } = useLanguage();
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Particle floating animation
      particlesRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: gsap.utils.random(-30, 30),
            x: gsap.utils.random(-20, 20),
            rotation: gsap.utils.random(-15, 15),
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.3,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const badges = [
    { icon: Shield, text: '100% Safe', color: '#3b82f6' },
    { icon: Clock, text: 'On-Time', color: '#f97316' },
    { icon: Star, text: 'Trusted', color: '#eab308' },
    { icon: Truck, text: 'Professional', color: '#22c55e' },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
      dir={dir}
      aria-label="Hero section"
    >
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.5) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          className="absolute rounded-full opacity-20 pointer-events-none"
          style={{
            width: `${[8, 12, 6, 10, 8, 14, 6, 10][i]}px`,
            height: `${[8, 12, 6, 10, 8, 14, 6, 10][i]}px`,
            background: i % 2 === 0 ? '#3b82f6' : '#f97316',
            top: `${[20, 35, 60, 75, 45, 15, 80, 55][i]}%`,
            left: `${[10, 85, 15, 80, 50, 65, 35, 20][i]}%`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="section-badge">
              <Truck className="w-3.5 h-3.5" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title text-white mb-2"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            {t.hero.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Company tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span
              className="text-xl font-bold tracking-[0.3em] uppercase"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              SK Movers
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="tel:+966547469226" className="btn-accent w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              {t.hero.callNow}
            </a>
            <a
              href="https://wa.me/966547469226"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: '#25D366',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              {t.hero.whatsapp}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline w-full sm:w-auto"
            >
              <FileText className="w-5 h-5" />
              {t.hero.freeQuote}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            {badges.map(({ icon: Icon, text, color }, i) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                style={{
                  background: `rgba(${color === '#3b82f6' ? '59,130,246' : color === '#f97316' ? '249,115,22' : color === '#eab308' ? '234,179,8' : '34,197,94'},0.1)`,
                  border: `1px solid rgba(${color === '#3b82f6' ? '59,130,246' : color === '#f97316' ? '249,115,22' : color === '#eab308' ? '234,179,8' : '34,197,94'},0.25)`,
                }}
              >
                <Icon className="w-4 h-4" style={{ color }} />
                <span className="text-sm font-semibold text-white">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '1000+', label: 'Moves Done' },
              { value: '6', label: 'Cities' },
              { value: '5+', label: 'Years Exp.' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="p-4 rounded-2xl text-center"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="text-2xl sm:text-3xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #f97316)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {value}
                </div>
                <div className="text-xs text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-gray-400 text-xs tracking-widest uppercase">{t.hero.scrollDown}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
