import React from 'react';
import { FiMapPin, FiUser } from 'react-icons/fi';
import { siteData } from '../data/content';

const Testimonials = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {siteData.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hàng nghìn khách hàng đã tin tưởng và sử dụng dịch vụ của chúng tôi
          </p>
        </div>

        {/* Main Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {siteData.testimonials.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary-600 font-semibold">
                  Đánh giá: {review.rating}/5
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{review.content}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <FiUser className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Reviews */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Đánh giá từ khách hàng tại Cần Thơ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.testimonials.localReviews.map((review, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors duration-200"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <FiMapPin className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-primary-600">
                    {review.location}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  "{review.content}"
                </p>
                <div className="flex items-center mt-3">
                  <div className="text-primary-600 font-semibold text-sm">
                    Đánh giá: 5/5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-primary-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">98%</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Hài lòng</h4>
            <p className="text-gray-600 text-sm">Khách hàng hài lòng với dịch vụ</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Đánh giá</h4>
            <p className="text-gray-600 text-sm">Điểm đánh giá trung bình</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">1K+</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Khách hàng</h4>
            <p className="text-gray-600 text-sm">Đã sử dụng dịch vụ</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">24/7</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Hỗ trợ</h4>
            <p className="text-gray-600 text-sm">Luôn sẵn sàng phục vụ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
