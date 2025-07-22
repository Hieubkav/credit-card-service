import React from 'react';
import { FiPhone, FiArrowUp } from 'react-icons/fi';
import { siteData } from '../data/content';
import zaloIcon from '../assets/images/zalo_icon.webp';
import messengerIcon from '../assets/images/mess_icon.webp';

const SpeedDial = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Icon mapping với PNG images
  const iconMap = {
    '💬': () => (
      <img
        src={messengerIcon}
        alt="Messenger"
        className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
      />
    ),
    '📱': () => (
      <img
        src={zaloIcon}
        alt="Zalo"
        className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
      />
    ),
    '📞': FiPhone,
    'back-to-top': FiArrowUp
  };

  // Color scheme cho từng button
  const getButtonConfig = (type, item = null) => {
    const configs = {
      'back-to-top': {
        colors: 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-200',
        name: 'Lên đầu trang',
        action: scrollToTop,
        icon: 'back-to-top'
      },
      '📞': {
        colors: 'bg-green-500 hover:bg-green-600 focus:ring-green-200',
        name: item?.name || 'Gọi điện',
        href: item?.url,
        icon: '📞'
      },
      '📱': {
        colors: 'bg-transparent hover:scale-110 focus:ring-blue-200',
        name: item?.name || 'Zalo',
        href: item?.url,
        icon: '📱'
      },
      '💬': {
        colors: 'bg-transparent hover:scale-110 focus:ring-purple-200',
        name: item?.name || 'Messenger',
        href: item?.url,
        icon: '💬'
      }
    };
    return configs[type] || configs['📞'];
  };

  // Tạo danh sách buttons theo thứ tự: Back to Top → Phone → Zalo → Messenger
  const createButtonsList = () => {
    const buttons = [];

    // Back to Top button (đầu tiên - ở dưới cùng)
    buttons.push({
      type: 'back-to-top',
      config: getButtonConfig('back-to-top')
    });

    // Tìm và sắp xếp các buttons liên hệ theo thứ tự mong muốn
    const contactOrder = ['📞', '📱', '💬'];

    contactOrder.forEach(iconType => {
      const item = siteData.speedDial.find(item => item.icon === iconType);
      if (item) {
        buttons.push({
          type: iconType,
          config: getButtonConfig(iconType, item),
          item: item
        });
      }
    });

    return buttons;
  };

  const buttons = createButtonsList();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Layout cố định cho tất cả thiết bị */}
      <div className="flex flex-col space-y-3">
        {buttons.map((button, index) => {
          const IconComponent = iconMap[button.config.icon] || FiPhone;
          const isBackToTop = button.type === 'back-to-top';

          return isBackToTop ? (
            // Back to Top Button
            <button
              key={index}
              onClick={button.config.action}
              className={`group relative w-12 h-12 lg:w-14 lg:h-14 ${button.config.colors} text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 animate-scaleIn`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
              aria-label={button.config.name}
            >
              <IconComponent className="w-5 h-5 lg:w-6 lg:h-6" />

              {/* Tooltip */}
              <div className="absolute right-16 lg:right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                {button.config.name}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-gray-900"></div>
              </div>
            </button>
          ) : (
            // Contact Buttons
            <a
              key={index}
              href={button.config.href}
              target={button.config.href?.startsWith('http') ? '_blank' : '_self'}
              rel={button.config.href?.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`group relative w-12 h-12 lg:w-14 lg:h-14 ${button.config.colors} text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 animate-scaleIn`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
              aria-label={button.config.name}
            >
              <IconComponent className="w-5 h-5 lg:w-6 lg:h-6" />

              {/* Tooltip */}
              <div className="absolute right-16 lg:right-20 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                {button.config.name}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[6px] border-transparent border-l-gray-900"></div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SpeedDial;
