import React, { useState, useEffect } from 'react';
import { FiZap, FiShield, FiAward, FiPhone, FiChevronLeft, FiChevronRight, FiCreditCard, FiRefreshCw, FiHome, FiLock } from 'react-icons/fi';
import { siteData } from '../data/content';

const About = () => {
  // Carousel data
  const carouselSlides = [
    {
      id: 1,
      icon: FiCreditCard,
      title: "Rút tiền thẻ tín dụng",
      description: "Dịch vụ rút tiền nhanh chóng từ thẻ Visa, Mastercard, JCB với mức phí chỉ từ 1.8%"
    },
    {
      id: 2,
      icon: FiRefreshCw,
      title: "Đáo hạn thẻ tín dụng",
      description: "Hỗ trợ thanh toán thẻ tín dụng đúng hạn, tránh phí phạt và bảo vệ tín dụng của bạn"
    },
    {
      id: 3,
      icon: FiPhone,
      title: "Hỗ trợ 24/7",
      description: "Phục vụ liên tục 24/7, sẵn sàng hỗ trợ bạn bất cứ lúc nào trong tuần"
    },
    {
      id: 4,
      icon: FiHome,
      title: "Phục vụ tại nhà",
      description: "Đến tận nơi theo yêu cầu, tiết kiệm thời gian và mang lại sự tiện lợi tối đa"
    },
    {
      id: 5,
      icon: FiLock,
      title: "An toàn bảo mật",
      description: "Cam kết bảo mật thông tin khách hàng 100%, sử dụng công nghệ mã hóa hiện đại"
    }
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, carouselSlides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  // Carousel component
  const ServiceCarousel = () => {
    const currentSlideData = carouselSlides[currentSlide];
    const IconComponent = currentSlideData.icon;

    return (
      <div
        className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-6 h-full"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        role="region"
        aria-label="Dịch vụ carousel"
      >
        {/* Main slide content */}
        <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
          {/* Slide content */}
          <div className="transition-all duration-500 ease-in-out">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconComponent className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {currentSlideData.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed px-4">
              {currentSlideData.description}
            </p>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-600 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="Slide trước"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary-600 p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="Slide tiếp theo"
          >
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 ${
                index === currentSlide
                  ? 'bg-primary-600 w-6'
                  : 'bg-primary-300 hover:bg-primary-400'
              }`}
              aria-label={`Đi đến slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause indicator */}
        <div className="absolute top-4 right-4">
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              isPlaying ? 'bg-green-400' : 'bg-yellow-400'
            }`}
            title={isPlaying ? 'Đang tự động chuyển slide' : 'Đã tạm dừng'}
          />
        </div>
      </div>
    );
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

          {/* Right Content - Service Carousel */}
          <div className="h-80 md:h-96">
            <ServiceCarousel />
          </div>
        </div>




      </div>
    </section>
  );
};

export default About;
