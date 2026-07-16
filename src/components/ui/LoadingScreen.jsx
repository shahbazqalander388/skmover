import { motion, AnimatePresence } from 'framer-motion';
import { Truck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const LoadingScreen = ({ isLoading }) => {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)' }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Animated truck */}
            <motion.div
              animate={{ x: [-15, 15] }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.8, ease: 'easeInOut' }}
              className="flex items-center justify-center"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                  boxShadow: '0 0 40px rgba(59,130,246,0.5)',
                }}
              >
                <Truck className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Logo text */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-black text-white tracking-tight"
              >
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
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-blue-300 text-sm font-medium mt-1 tracking-widest uppercase"
              >
                We Move With You
              </motion.p>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                  className="w-2 h-2 rounded-full bg-blue-400"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
