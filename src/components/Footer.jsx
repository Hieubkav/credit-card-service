import React from 'react';
import { FiFacebook, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { siteData } from '../data/content';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Dịch Vụ Rút Tiền</h3>
            <p className="text-gray-300 mb-6">
              Dịch vụ rút tiền và đáo hạn thẻ tín dụng uy tín tại Cần Thơ. 
              Phục vụ 24/7 với mức phí chỉ từ 1.8%.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400" />
                <a href="tel:0939117282" className="text-gray-300 hover:text-white">
                  0939.11.72.82
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">info@ruttiencantho.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Cần Thơ, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rút tiền thẻ tín dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Đáo hạn thẻ tín dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Quẹt thẻ lấy tiền</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Thanh toán hóa đơn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tư vấn tài chính</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{siteData.footer.title}</h4>
            <p className="text-gray-300 mb-4">{siteData.footer.description}</p>
            <ul className="space-y-2">
              {siteData.footer.areas.map((area, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Về chúng tôi</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Điều khoản sử dụng</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {siteData.footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.name === 'Facebook' && <FiFacebook className="w-6 h-6" />}
                  {social.name === 'Instagram' && <FiInstagram className="w-6 h-6" />}
                  {social.name === 'Zalo' && <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">Z</div>}
                </a>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">Cần hỗ trợ ngay?</p>
              <a
                href="tel:0939117282"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <FiPhone className="w-4 h-4" />
                <span>Gọi ngay</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {siteData.footer.copyright}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Thiết kế bởi <span className="text-primary-400">WebDev Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
