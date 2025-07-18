import React from 'react';
import { FiZap, FiShield, FiDollarSign, FiAward, FiPhone, FiMapPin } from 'react-icons/fi';
import { siteData } from '../data/content';

const About = () => {
  const iconMap = {
    '⚡': FiZap,
    '🔒': FiShield,
    '💵': FiDollarSign,
    '🏆': FiAward,
    '📞': FiPhone,
    '📍': FiMapPin
  };

  return (
    <section id="about" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {siteData.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteData.about.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tại sao chọn dịch vụ của chúng tôi?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiZap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Quy trình đơn giản
                  </h4>
                  <p className="text-gray-600">
                    Chỉ cần mang thẻ tín dụng, chúng tôi sẽ hỗ trợ bạn hoàn tất mọi thủ tục trong thời gian ngắn nhất.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiShield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Đảm bảo an toàn
                  </h4>
                  <p className="text-gray-600">
                    Cam kết bảo mật thông tin khách hàng 100%, không lưu trữ thông tin thẻ sau giao dịch.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <FiAward className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Kinh nghiệm lâu năm
                  </h4>
                  <p className="text-gray-600">
                    Với hơn 5 năm kinh nghiệm trong lĩnh vực tài chính, chúng tôi hiểu rõ nhu cầu của khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-6xl mb-4">💳</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Dịch vụ chuyên nghiệp
              </h4>
              <p className="text-gray-600">
                Phục vụ khách hàng tại Cần Thơ và các tỉnh lân cận
              </p>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.about.advantages.map((advantage, index) => {
            const IconComponent = iconMap[advantage.icon] || FiZap;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <IconComponent className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-primary-600 rounded-2xl p-6 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Cần hỗ trợ ngay?
          </h3>
          <p className="text-primary-100 mb-6">
            Liên hệ với chúng tôi để được tư vấn miễn phí và nhận ưu đãi tốt nhất
          </p>
          <a
            href="tel:0939117282"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <FiPhone className="w-5 h-5" />
            <span>Gọi ngay: 0939.11.72.82</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
