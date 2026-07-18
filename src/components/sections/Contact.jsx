import { useState } from 'react';
import { Phone, Mail, MapPin, Map, MessageCircle, Contact as ContactIcon, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { t, dir } = useLanguage();
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    // Validate required fields
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Build professionally formatted message
    const lines = [
      'Hello SK Movers,',
      '',
      'I would like to request your service.',
      '',
      `Full Name: ${form.name.trim()}`,
      `Phone Number: ${form.phone.trim()}`,
    ];
    if (form.email.trim()) lines.push(`Email: ${form.email.trim()}`);
    if (form.service) lines.push(`Service Required: ${form.service}`);
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`);
    lines.push('');
    lines.push('Please contact me. Thank you.');

    const message = lines.join('\n');
    const waUrl = `https://wa.me/966547469226?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const services = [
    'Furniture Moving', 'House Shifting', 'Office Relocation',
    'Packing & Unpacking', 'Furniture Assembly', 'Furniture Disassembly',
    'Loading & Unloading', 'Safe Transportation', 'Storage Services',
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+966 54 746 9226',
      href: 'tel:+966547469226',
      color: '#f97316',
      bg: 'rgba(249,115,22,0.12)',
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'skmovers41@gmail.com',
      href: 'mailto:skmovers41@gmail.com',
      color: '#3b82f6',
      bg: 'rgba(59,130,246,0.12)',
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: t.contact.locationValue,
      href: 'https://maps.app.goo.gl/LL1CgQrLtKbwXKFF9',
      color: '#22c55e',
      bg: 'rgba(34,197,94,0.12)',
    },
  ];

  return (
    <section
      id="contact"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      {/* Background orb */}
      <div
        className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <ContactIcon className="w-3.5 h-3.5" />
            {t.contact.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.contact.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.contact.titleHighlight}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info + Map */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
            {/* Contact cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : '_self'}
                rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg group"
                style={{
                  background: bg,
                  border: `1px solid rgba(${color === '#f97316' ? '249,115,22' : color === '#3b82f6' ? '59,130,246' : '34,197,94'},0.25)`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `rgba(${color === '#f97316' ? '249,115,22' : color === '#3b82f6' ? '59,130,246' : '34,197,94'},0.2)` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium mb-0.5">{label}</div>
                  <div className="text-white font-semibold text-sm" dir="ltr">{value}</div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://wa.me/966547469226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-all hover:-translate-y-1 text-xs font-medium"
                style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#4ade80' }}
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/share/19KLfzBnrE/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-all hover:-translate-y-1 text-xs font-medium"
                style={{ background: 'rgba(59,89,152,0.15)', border: '1px solid rgba(59,89,152,0.3)', color: '#60a5fa' }}
              >
                <FaFacebookF className="w-6 h-6" />
                Facebook
              </a>
              <a
                href="https://maps.app.goo.gl/LL1CgQrLtKbwXKFF9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-all hover:-translate-y-1 text-xs font-medium"
                style={{ background: 'rgba(234,67,53,0.1)', border: '1px solid rgba(234,67,53,0.25)', color: '#f87171' }}
              >
                <Map className="w-6 h-6" />
                Maps
              </a>
            </div>

            {/* Embedded Google Map */}
            <div
              className="map-container rounded-2xl overflow-hidden"
              style={{ height: '220px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.9484706956565!2d46.6752!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzAuNyJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SK Movers Location – Saudi Arabia"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(30,41,59,0.6)',
                border: '1px solid rgba(59,130,246,0.15)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <h3 className="text-white font-bold text-xl mb-6">Send Us a Message</h3>

              <form
                className="space-y-5"
                onSubmit={handleWhatsApp}
                aria-label="Contact form"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="contact-name">
                      {t.contact.form.name} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.placeholder.name}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-2"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: errors.name ? '1px solid rgba(239,68,68,0.7)' : '1px solid rgba(255,255,255,0.1)',
                        '--tw-ring-color': errors.name ? 'rgba(239,68,68,0.4)' : 'rgba(59,130,246,0.5)',
                      }}
                    />
                    {errors.name && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="contact-phone">
                      {t.contact.form.phone} *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.placeholder.phone}
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-2"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: errors.phone ? '1px solid rgba(239,68,68,0.7)' : '1px solid rgba(255,255,255,0.1)',
                        '--tw-ring-color': errors.phone ? 'rgba(239,68,68,0.4)' : 'rgba(59,130,246,0.5)',
                      }}
                    />
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="contact-email">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholder.email}
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-blue-500/50"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="contact-service">
                    {t.contact.form.service}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/50"
                    style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <option value="" className="bg-gray-900">{t.contact.form.placeholder.service}</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-gray-900">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5" htmlFor="contact-message">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.placeholder.message}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all focus:ring-2 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: errors.message ? '1px solid rgba(239,68,68,0.7)' : '1px solid rgba(255,255,255,0.1)',
                      '--tw-ring-color': errors.message ? 'rgba(239,68,68,0.4)' : 'rgba(59,130,246,0.5)',
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* WhatsApp Submit */}
                <button
                  type="submit"
                  id="whatsapp-submit-btn"
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #128C7E 0%, #25D366 60%, #2ecc71 100%)',
                    boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
                  }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Send via WhatsApp
                </button>

                <p className="text-gray-500 text-xs text-center">
                  * Clicking the button will open WhatsApp with your details pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
