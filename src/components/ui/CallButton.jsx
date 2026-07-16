import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallButton = () => {
  return (
    <motion.a
      href="tel:+966547469226"
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
        boxShadow: '0 4px 20px rgba(249, 115, 22, 0.5)',
      }}
      aria-label="Call SK Movers"
    >
      <Phone className="w-5 h-5 text-white" />
    </motion.a>
  );
};

export default CallButton;
