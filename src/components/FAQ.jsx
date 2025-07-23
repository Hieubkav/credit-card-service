import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Phí rút tiền thẻ tín dụng tại Cần Thơ là bao nhiều?",
      answer: "Phí rút tiền thẻ tín dụng tại Cần Thơ chỉ từ 1.8%, thấp nhất thị trường. Chúng tôi cam kết mức phí cạnh tranh và minh bạch, không phí ẩn."
    },
    {
      question: "Rút tiền thẻ tín dụng Cần Thơ có an toàn không?",
      answer: "Hoàn toàn an toàn. Chúng tôi sử dụng máy POS chính hãng, bảo mật thông tin khách hàng tuyệt đối. Đã phục vụ hàng nghìn khách hàng tại Cần Thơ với 0% sự cố."
    },
    {
      question: "Thời gian rút tiền thẻ tín dụng mất bao lâu?",
      answer: "Chỉ mất 5-10 phút để hoàn tất giao dịch. Chúng tôi hỗ trợ 24/7, có thể đến tận nơi theo yêu cầu tại tất cả quận huyện Cần Thơ."
    },
    {
      question: "Có hỗ trợ đáo hạn thẻ tín dụng không?",
      answer: "Có. Chúng tôi hỗ trợ đáo hạn thẻ tín dụng giúp bạn thanh toán đúng hạn, tránh phí phạt và ảnh hưởng tín dụng. Thủ tục nhanh gọn, chỉ từ 1.8%."
    },
    {
      question: "Khu vực nào tại Cần Thơ được phục vụ?",
      answer: "Chúng tôi phục vụ tất cả quận huyện tại Cần Thơ: Ninh Kiều, Cái Răng, Bình Thủy, Ô Môn, Thốt Nốt, Cờ Đỏ. Hỗ trợ đến tận nơi 24/7."
    },
    {
      question: "Liên hệ rút tiền thẻ tín dụng Cần Thơ như thế nào?",
      answer: "Gọi hotline 0939.11.72.82 hoặc nhắn tin Zalo để được tư vấn và hỗ trợ ngay. Chúng tôi sẵn sàng phục vụ 24/7 tại Cần Thơ."
    },
    {
      question: "Có hỗ trợ rút tiền thẻ tín dụng ngoài giờ hành chính không?",
      answer: "Có. Chúng tôi hoạt động 24/7 kể cả cuối tuần và ngày lễ. Bạn có thể liên hệ bất cứ lúc nào để được hỗ trợ rút tiền thẻ tín dụng tại Cần Thơ."
    },
    {
      question: "Rút tiền thẻ tín dụng có ảnh hưởng đến điểm tín dụng không?",
      answer: "Không ảnh hưởng đến điểm tín dụng nếu bạn thanh toán đúng hạn. Chúng tôi cũng hỗ trợ đáo hạn để đảm bảo bạn không bị trễ hạn thanh toán."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tìm hiểu thêm về dịch vụ rút tiền và đáo hạn thẻ tín dụng tại Cần Thơ
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-primary-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-primary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vẫn còn thắc mắc? Liên hệ ngay!
            </h3>
            <p className="text-primary-100 mb-6">
              Đội ngũ chuyên viên sẵn sàng tư vấn miễn phí 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0939117282"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                📞 Gọi ngay: 0939.11.72.82
              </a>
              <a
                href="https://zalo.me/0939117282"
                className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center"
              >
                💬 Chat Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
