import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Automatically load all images from the public/gallery folder.
// Using { eager: true } means Vite resolves URLs at build/dev time —
// just restart the dev server after adding new images to public/gallery/.
const imageFiles = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,webp,gif,svg}', { eager: true });

const galleryItems = Object.keys(imageFiles)
  // Sort alphabetically so order is consistent regardless of filesystem order
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((path, index) => {
    // Strip the leading "/public" prefix (Vite serves public/ at the root)
    const relativePath = path.replace('/public', '');

    // URL-encode each path segment individually so filenames with spaces,
    // parentheses, or other special characters resolve correctly in the browser.
    const encodedSrc = relativePath
      .split('/')
      .map((segment) => encodeURIComponent(segment))
      .join('/');

    return {
      id: index + 1,
      src: encodedSrc,
      alt: `SK Movers Gallery – Image ${index + 1}`,
    };
  });

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setLightboxIndex((i) => (i + 1) % galleryItems.length);

  // If no images are found, we return null or empty section
  if (galleryItems.length === 0) {
    return null;
  }

  return (
    <section
      id="gallery"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-800/50"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay without text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
                >
                  <ZoomIn className="w-6 h-6 text-white shadow-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].alt}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
              />

              {/* Controls */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 md:top-4 md:right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 bg-black/50 hover:bg-black/80"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 bg-black/50 hover:bg-black/80 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 bg-black/50 hover:bg-black/80 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
