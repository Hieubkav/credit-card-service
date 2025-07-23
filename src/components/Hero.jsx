import React from 'react';
import { FiCreditCard, FiRefreshCw, FiDollarSign, FiShoppingBag, FiUsers } from 'react-icons/fi';
import { siteData } from '../data/content';

const Hero = () => {
  const iconMap = {
    '💳': FiCreditCard,
    '🔄': FiRefreshCw,
    '💰': FiDollarSign,
    '🏪': FiShoppingBag,
    '🤝': FiUsers
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-primary-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {siteData.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-8">
            {siteData.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0939117282"
              className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-colors duration-200 shadow-lg"
            >
              Liên hệ ngay
            </a>
            <a
              href="#about"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg border-2 border-primary-600"
            >
              Tìm hiểu thêm
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {siteData.hero.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FiCreditCard;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <IconComponent className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
            <div className="text-gray-600">Khách hàng tin tưởng</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-gray-600">Hỗ trợ liên tục</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">5 phút</div>
            <div className="text-gray-600">Xử lý nhanh chóng</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Bảo mật an toàn</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
