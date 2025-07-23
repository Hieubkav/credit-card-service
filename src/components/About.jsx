import React, { useState, useEffect } from 'react';
import { FiZap, FiShield, FiAward, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { siteData } from '../data/content';
import carousel1 from '../assets/images/carousel1.webp';
import carousel2 from '../assets/images/carousel2.webp';

const About = () => {
  // Carousel data
  const carouselSlides = [
    {
      id: 1,
      image: carousel1,
      alt: "Dịch vụ rút tiền thẻ tín dụng Cần Thơ"
    },
    {
      id: 2,
      image: carousel2,
      alt: "Đáo hạn thẻ tín dụng uy tín tại Cần Thơ"
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

    return (
      <div
        className="relative rounded-2xl h-full overflow-hidden shadow-lg carousel-container"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        role="region"
        aria-label="Dịch vụ carousel"
      >
        {/* Main slide content */}
        <div className="relative h-full">
          {/* Image */}
          <img
            src={currentSlideData.image}
            alt={currentSlideData.alt}
            className="carousel-image transition-all duration-500 ease-in-out"
          />

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="Slide trước"
          >
            <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary-600 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="Slide tiếp theo"
          >
            <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white ${
                  index === currentSlide
                    ? 'bg-white w-6 sm:w-8'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Đi đến slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause indicator */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <div
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                isPlaying ? 'bg-green-400' : 'bg-yellow-400'
              }`}
              title={isPlaying ? 'Đang tự động chuyển slide' : 'Đã tạm dừng'}
            />
          </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
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
          <div className="w-full max-w-full overflow-hidden">
            <ServiceCarousel />
          </div>
        </div>




      </div>
    </section>
  );
};

export default About;
