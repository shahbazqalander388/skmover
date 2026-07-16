import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Testimonials = () => {
  const { t, dir } = useLanguage();

  return (
    <section
      id="testimonials"
      dir={dir}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #0a1628 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f97316, transparent)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="section-badge mx-auto mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            {t.testimonials.badge}
          </div>
          <h2 className="section-title text-white mb-4">
            {t.testimonials.title}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f97316, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t.testimonials.titleHighlight}
            </span>
          </h2>
          <p className="section-subtitle mx-auto">{t.testimonials.subtitle}</p>
        </div>

        {/* Swiper Carousel */}
        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={false}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            dir={dir === 'rtl' ? 'rtl' : 'ltr'}
            className="pb-12"
          >
            {t.testimonials.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative p-7 rounded-2xl h-full flex flex-col gap-5 group hover:-translate-y-2 transition-all duration-300"
                  style={{
                    background: 'rgba(30,41,59,0.6)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    backdropFilter: 'blur(12px)',
                    minHeight: '260px',
                  }}
                >
                  {/* Quote icon */}
                  <div
                    className="absolute top-5 right-5 opacity-20 group-hover:opacity-40 transition-opacity"
                    aria-hidden="true"
                  >
                    <Quote className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">"{item.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.name}</div>
                      <div className="text-gray-400 text-xs flex items-center gap-1">
                        <span>📍</span>
                        {item.location}
                      </div>
                    </div>
                    <div
                      className="ms-auto text-xs font-bold px-2 py-1 rounded-full"
                      style={{ background: 'rgba(249,115,22,0.15)', color: '#fb923c' }}
                    >
                      Verified ✓
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
