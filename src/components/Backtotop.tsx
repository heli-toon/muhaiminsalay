import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#f6700d] hover:bg-[#EA3500] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:cursor-pointer z-50"
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up text-xl"></i>
        </button>
      )}
    </>
  );
}