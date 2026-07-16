import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import useScrollPosition from '../../hooks/useScrollPosition';

const BackToTop = () => {
  const { scrollY } = useScrollPosition();
  const isVisible = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
          }}
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
