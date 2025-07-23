import React from 'react';
import { siteData } from '../data/content';

const CreditCards = () => {
  const cardLogos = {
    'Visa': (
      <div className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-2xl">
        VISA
      </div>
    ),
    'JCB': (
      <div className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-2xl">
        JCB
      </div>
    ),
    'Mastercard': (
      <div className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-2xl">
        Mastercard
      </div>
    )
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {siteData.creditCards.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi hỗ trợ tất cả các loại thẻ tín dụng phổ biến tại Việt Nam
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {siteData.creditCards.cards.map((card, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-200 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {cardLogos[card]}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tất cả loại thẻ
              </h3>
              <p className="text-gray-600">
                Hỗ trợ mọi loại thẻ tín dụng
              </p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Xử lý nhanh
              </h3>
              <p className="text-gray-600">
                Giao dịch được xử lý trong vòng 5-10 phút
              </p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bảo mật cao
              </h3>
              <p className="text-gray-600">
                Thông tin thẻ được bảo mật tuyệt đối
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCards;
