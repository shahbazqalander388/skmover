import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <motion.a
        href="https://wa.me/966547469226"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="whatsapp-pulse w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
        style={{ backgroundColor: '#25D366' }}
        aria-label={t.whatsapp.tooltip}
      >
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
