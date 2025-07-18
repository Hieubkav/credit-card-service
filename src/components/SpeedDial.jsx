import React, { useState, useEffect } from 'react';
import { FiPhone, FiMessageCircle, FiX, FiPlus } from 'react-icons/fi';
import { siteData } from '../data/content';

const SpeedDial = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const iconMap = {
    '💬': () => (
      <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold text-sm sm:text-base">
        M
      </div>
    ),
    '📱': () => (
      <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold text-sm sm:text-base">
        Z
      </div>
    ),
    '📞': FiPhone
  };

  const getButtonColors = (icon) => {
    switch (icon) {
      case '📞':
        return {
          bg: 'bg-green-500',
          hover: 'hover:bg-green-600',
          border: 'border-green-400',
          hoverBorder: 'hover:border-green-500',
          focus: 'focus:ring-green-200'
        };
      case '📱':
        return {
          bg: 'bg-blue-500',
          hover: 'hover:bg-blue-600',
          border: 'border-blue-400',
          hoverBorder: 'hover:border-blue-500',
          focus: 'focus:ring-blue-200'
        };
      default:
        return {
          bg: 'bg-purple-600',
          hover: 'hover:bg-purple-700',
          border: 'border-purple-500',
          hoverBorder: 'hover:border-purple-600',
          focus: 'focus:ring-purple-200'
        };
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Mobile: Expandable FAB */}
      {isMobile ? (
        <div className="relative">
          {/* Contact buttons - show when expanded */}
          <div className={`absolute bottom-16 right-0 flex flex-col-reverse space-y-reverse space-y-3 transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            {siteData.speedDial.map((item, index) => {
              const IconComponent = iconMap[item.icon] || FiPhone;
              const colors = getButtonColors(item.icon);

              return (
                <a
                  key={index}
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : '_self'}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`group relative w-12 h-12 ${colors.bg} ${colors.hover} text-white border ${colors.border} ${colors.hoverBorder} rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 ${colors.focus}`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    transform: isExpanded ? 'scale(1)' : 'scale(0.8)'
                  }}
                  aria-label={item.name}
                  onClick={() => setIsExpanded(false)}
                >
                  <IconComponent className="w-5 h-5" />

                  {/* Label */}
                  <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
                    {item.name}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-gray-900"></div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Main FAB button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary-200 ${
              isExpanded ? 'rotate-45' : 'rotate-0'
            }`}
            aria-label={isExpanded ? 'Đóng menu liên hệ' : 'Mở menu liên hệ'}
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <FiX className="w-6 h-6 transition-transform duration-200" />
            ) : (
              <FiPhone className="w-6 h-6 transition-transform duration-200" />
            )}
          </button>

          {/* Backdrop */}
          {isExpanded && (
            <div
              className="fixed inset-0 bg-black bg-opacity-20 -z-10"
              onClick={() => setIsExpanded(false)}
              aria-hidden="true"
            />
          )}
        </div>
      ) : (
        /* Desktop: Always visible vertical layout */
        <div className="flex flex-col space-y-3">
          {siteData.speedDial.map((item, index) => {
            const IconComponent = iconMap[item.icon] || FiPhone;
            const colors = getButtonColors(item.icon);

            return (
              <a
                key={index}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : '_self'}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`group relative w-12 h-12 lg:w-14 lg:h-14 ${colors.bg} ${colors.hover} text-white border ${colors.border} ${colors.hoverBorder} rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 ${colors.focus}`}
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={item.name}
              >
                <IconComponent className="w-5 h-5 lg:w-6 lg:h-6" />

                {/* Tooltip */}
                <div className="absolute right-16 lg:right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg">
                  {item.name}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-gray-900"></div>
                </div>

                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 group-hover:animate-ping"></div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SpeedDial;
