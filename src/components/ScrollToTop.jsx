import React, { useState, useEffect, useCallback } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Throttle scroll events for better performance
  const throttle = (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  const handleScroll = useCallback(
    throttle(() => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    }, 16), // ~60fps
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 lg:bottom-6 lg:right-6 z-30 transition-all duration-300 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
      role="button"
      tabIndex={isVisible ? 0 : -1}
    >
      <button
        onClick={scrollToTop}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
          }
        }}
        className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary-200"
        aria-label="Cuộn lên đầu trang"
        title="Cuộn lên đầu trang"
      >
        {/* Progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 opacity-30"
          viewBox="0 0 48 48"
        >
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={`${scrollProgress * 1.256} 125.6`}
            className="transition-all duration-300"
          />
        </svg>

        {/* Arrow icon with animation */}
        <FiArrowUp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-active:translate-y-0" />

        {/* Tooltip for desktop */}
        <div className="hidden lg:block absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg">
          Lên đầu trang
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-gray-900"></div>
        </div>

        {/* Pulse effect on hover */}
        <div className="absolute inset-0 rounded-full bg-primary-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
      </button>
    </div>
  );
};

export default ScrollToTop;
