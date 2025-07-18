import React from 'react';
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';

const LocalAreas = () => {
  const areas = [
    {
      name: "Quận Ninh Kiều",
      description: "Rút tiền thẻ tín dụng Ninh Kiều - Trung tâm thành phố Cần Thơ",
      features: [
        "Phục vụ 24/7 tại Ninh Kiều",
        "Đến tận nơi trong 15 phút",
        "Phí thấp nhất chỉ 1.8%",
        "Hỗ trợ tất cả loại thẻ"
      ],
      landmarks: ["Chợ Cần Thơ", "Bến Ninh Kiều", "Đại học Cần Thơ", "UBND TP Cần Thơ"],
      phone: "0939.11.72.82"
    },
    {
      name: "Quận Cái Răng", 
      description: "Rút tiền thẻ tín dụng Cái Răng - Khu vực phát triển năng động",
      features: [
        "Dịch vụ nhanh chóng tại Cái Răng",
        "Hỗ trợ đáo hạn thẻ tín dụng",
        "Quẹt thẻ POS lấy tiền",
        "Tư vấn tài chính miễn phí"
      ],
      landmarks: ["Chợ Cái Răng", "Vincom Cần Thơ", "Lotte Mart", "Khu CN Trà Nóc"],
      phone: "0939.11.72.82"
    },
    {
      name: "Quận Bình Thủy",
      description: "Rút tiền thẻ tín dụng Bình Thủy - Phục vụ tận tâm, uy tín",
      features: [
        "Phục vụ tại nhà Bình Thủy",
        "Thủ tục đơn giản, nhanh gọn",
        "Bảo mật thông tin tuyệt đối",
        "Không phí ẩn, minh bạch"
      ],
      landmarks: ["Chùa Bình Thủy", "Khu CN Bình Thủy", "Chợ Bình Thủy", "Trường ĐH FPT"],
      phone: "0939.11.72.82"
    },
    {
      name: "Quận Ô Môn",
      description: "Rút tiền thẻ tín dụng Ô Môn - Hỗ trợ 24/7 mọi lúc mọi nơi",
      features: [
        "Phục vụ tận nơi Ô Môn",
        "Hỗ trợ khẩn cấp 24/7",
        "Phí cạnh tranh nhất",
        "Đội ngũ chuyên nghiệp"
      ],
      landmarks: ["UBND Quận Ô Môn", "Chợ Ô Môn", "Khu CN Ô Môn", "Bệnh viện Ô Môn"],
      phone: "0939.11.72.82"
    },
    {
      name: "Huyện Thốt Nốt",
      description: "Rút tiền thẻ tín dụng Thốt Nốt - Dịch vụ chất lượng cao",
      features: [
        "Phục vụ toàn Thốt Nốt",
        "Rút tiền thẻ Visa, Mastercard, JCB",
        "Đáo hạn thẻ tín dụng uy tín",
        "Tư vấn miễn phí"
      ],
      landmarks: ["UBND Thốt Nốt", "Chợ Thốt Nốt", "Khu du lịch Cồn Sơn", "Cầu Cần Thơ"],
      phone: "0939.11.72.82"
    },
    {
      name: "Huyện Cờ Đỏ",
      description: "Rút tiền thẻ tín dụng Cờ Đỏ - Phí thấp, dịch vụ tốt",
      features: [
        "Phục vụ tận nhà Cờ Đỏ",
        "Thời gian xử lý nhanh",
        "An toàn, bảo mật cao",
        "Hỗ trợ 24/7"
      ],
      landmarks: ["UBND Cờ Đỏ", "Chợ Cờ Đỏ", "Khu CN Cờ Đỏ", "Trường ĐH Tây Đô"],
      phone: "0939.11.72.82"
    }
  ];

  return (
    <section id="local-areas" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Phục Vụ Tất Cả Quận Huyện Cần Thơ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dịch vụ rút tiền và đáo hạn thẻ tín dụng uy tín, đến tận nơi theo yêu cầu tại mọi quận huyện trong thành phố Cần Thơ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <FiMapPin className="w-6 h-6 text-primary-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {area.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Dịch vụ nổi bật:</h4>
                <ul className="space-y-1">
                  {area.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Khu vực phục vụ:</h4>
                <div className="flex flex-wrap gap-1">
                  {area.landmarks.map((landmark, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <FiClock className="w-4 h-4 mr-1" />
                    <span>24/7</span>
                  </div>
                  <a
                    href={`tel:${area.phone.replace(/\./g, '')}`}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
                  >
                    <FiPhone className="w-4 h-4 mr-1" />
                    Gọi ngay
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Không tìm thấy khu vực của bạn?
            </h3>
            <p className="text-primary-100 mb-6 text-lg">
              Chúng tôi phục vụ toàn bộ thành phố Cần Thơ và các vùng lân cận
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0939117282"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                📞 Hotline: 0939.11.72.82
              </a>
              <a
                href="https://zalo.me/0939117282"
                className="bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors inline-flex items-center justify-center"
              >
                💬 Chat Zalo ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalAreas;
