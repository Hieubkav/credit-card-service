import React from 'react';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import { siteData } from '../data/content';

const SpeedDial = () => {
  const iconMap = {
    '💬': () => (
      <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-bold text-sm md:text-base">
        M
      </div>
    ),
    '📱': () => (
      <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-bold text-sm md:text-base">
        Z
      </div>
    ),
    '📞': FiPhone
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 contact-widget">
      {/* Always visible contact options in vertical layout */}
      <div className="flex flex-col space-y-2 md:space-y-3">
        {siteData.speedDial.map((item, index) => {
          const IconComponent = iconMap[item.icon] || FiPhone;

          // Determine color based on item type
          let bgColor, hoverBgColor, textColor, hoverTextColor, borderColor, hoverBorderColor;

          if (item.icon === '📞') { // Phone
            bgColor = 'bg-green-500';
            hoverBgColor = 'hover:bg-green-600';
            textColor = 'text-white';
            hoverTextColor = 'hover:text-white';
            borderColor = 'border-green-400';
            hoverBorderColor = 'hover:border-green-500';
          } else if (item.icon === '📱') { // Zalo
            bgColor = 'bg-blue-500';
            hoverBgColor = 'hover:bg-blue-600';
            textColor = 'text-white';
            hoverTextColor = 'hover:text-white';
            borderColor = 'border-blue-400';
            hoverBorderColor = 'hover:border-blue-500';
          } else { // Messenger or default
            bgColor = 'bg-purple-600';
            hoverBgColor = 'hover:bg-purple-700';
            textColor = 'text-white';
            hoverTextColor = 'hover:text-white';
            borderColor = 'border-purple-500';
            hoverBorderColor = 'hover:border-purple-600';
          }

          return (
            <a
              key={index}
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : '_self'}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`group relative w-11 h-11 md:w-12 md:h-12 ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} border ${borderColor} ${hoverBorderColor} rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
              title={item.name}
            >
              <IconComponent className="w-4 h-4 md:w-5 md:h-5" />

              {/* Tooltip - Hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {item.name}
                {/* Arrow pointing to button */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-l-2 border-transparent border-l-gray-800"></div>
              </div>

              {/* Mobile label - Show below button on mobile */}
              <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-medium whitespace-nowrap">
                {item.name.split(' ')[0]} {/* Show first word only */}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SpeedDial;
