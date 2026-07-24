import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is initialized
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search + location.hash,
        page_title: document.title,
      });
    }
  }, [location]);
};

export default usePageTracking;
