import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
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
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
          <div className="flex flex-col space-y-2 md:space-y-3">
            {/* Spacer to align with contact buttons */}
            <div className="w-11 h-11 md:w-12 md:h-12"></div>
            <div className="w-11 h-11 md:w-12 md:h-12"></div>
            <div className="w-11 h-11 md:w-12 md:h-12"></div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-11 h-11 md:w-12 md:h-12 bg-gray-600 hover:bg-gray-700 text-white border border-gray-500 hover:border-gray-600 rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-4 h-4 md:w-5 md:h-5" />

              {/* Tooltip */}
              <div className="hidden md:block absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Lên đầu trang
                {/* Arrow pointing to button */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-l-2 border-transparent border-l-gray-800"></div>
              </div>

              {/* Mobile label */}
              <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium whitespace-nowrap">
                Lên đầu
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
