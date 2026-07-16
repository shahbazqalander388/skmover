import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, Map } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t, dir } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.gallery, path: '/gallery' },
    { label: t.nav.contact, path: '/contact' },
    { label: t.nav.faq, path: '/faq' },
  ];

  const services = [
    'Furniture Moving', 'House Shifting', 'Office Relocation',
    'Packing & Unpacking', 'Furniture Assembly', 'Storage Services',
  ];

  const areas = ['Riyadh', 'Jeddah', 'Dammam', 'Medina', 'Jubail', 'Khobar'];

  return (
    <footer
      dir={dir}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%)' }}
    >
      {/* Top gradient border */}
      <div className="gradient-divider" />

      {/* Decorative orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"
                style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
              >
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">
                  SK{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #f97316, #fb923c)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Movers
                  </span>
                </div>
                <div className="text-xs text-blue-400 font-medium">{t.footer.tagline}</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-3">{t.footer.followUs}</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/19KLfzBnrE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(59,89,152,0.2)', border: '1px solid rgba(59,89,152,0.4)' }}
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-4 h-4 text-blue-500" />
                </a>
                <a
                  href="https://maps.app.goo.gl/LL1CgQrLtKbwXKFF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(234,67,53,0.2)', border: '1px solid rgba(234,67,53,0.4)' }}
                  aria-label="Google Maps"
                >
                  <Map className="w-4 h-4 text-red-400" />
                </a>
                <a
                  href="https://wa.me/966547469226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)' }}
                  aria-label="WhatsApp"
                >
                  <span className="text-green-400 text-sm font-bold">W</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span
                className="w-1 h-5 rounded-full inline-block"
                style={{ background: 'linear-gradient(to bottom, #3b82f6, #f97316)' }}
              />
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span
                className="w-1 h-5 rounded-full inline-block"
                style={{ background: 'linear-gradient(to bottom, #3b82f6, #f97316)' }}
              />
              {t.footer.services}
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <span
                className="w-1 h-5 rounded-full inline-block"
                style={{ background: 'linear-gradient(to bottom, #3b82f6, #f97316)' }}
              />
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+966547469226"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(249,115,22,0.15)' }}
                  >
                    <Phone className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{t.contact.phone}</div>
                    <div className="text-sm font-medium" dir="ltr">+966 54 746 9226</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:skmovers41@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(59,130,246,0.15)' }}
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{t.contact.email}</div>
                    <div className="text-sm font-medium" dir="ltr">skmovers41@gmail.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(34,197,94,0.15)' }}
                  >
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{t.contact.location}</div>
                    <div className="text-sm font-medium">{t.contact.locationValue}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {areas.slice(0, 3).map((area) => (
                        <span
                          key={area}
                          className="text-xs px-2 py-0.5 rounded-full text-gray-400"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gradient-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-red-500">❤️</span>
            <span>for SK Movers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
