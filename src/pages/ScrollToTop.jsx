import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Try the standard window scroll
    window.scrollTo(0, 0);

    // 2. Force the document element (HTML) to top
    document.documentElement.scrollTo(0, 0);

    // 3. Force the body to top
    document.body.scrollTo(0, 0);
    
    // 4. A tiny timeout to handle React rendering lag
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;