"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";

const ContactPage = () => {
  return (
    <div className="pt-28 pb-20">
      <Container>
        <div className="text-center mb-16">
          <span className="text-rose-500 font-bold tracking-widest uppercase text-xs mb-3">
            Liên hệ
          </span>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Kết Nối Với Bloom & Petals
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn những mẫu hoa đẹp nhất
            dành riêng cho bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Địa chỉ cửa hàng
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    123 Đường Hoa Hồng, Phường 4, Quận 3, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Số điện thoại
                  </h3>
                  <p className="text-gray-500 text-sm">+84 (28) 3888 9999</p>
                  <p className="text-gray-500 text-sm">Hotline: 090 123 4567</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-500 text-sm">
                    hello@bloomandpetals.vn
                  </p>
                  <p className="text-gray-500 text-sm">
                    support@bloomandpetals.vn
                  </p>
                </div>
              </div>
            </div>

            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3656254593575!2d106.62294747480503!3d10.783283489365889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d972fee7de9%3A0x82e9997574a64c51!2zSG9hIHTGsMahaSBOZ3V54buFbiBTxqFuIDE5OTggRmxvd2Vy!5e0!3m2!1svi!2s!4v1771854371816!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-gray-50">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Chủ đề
                  </label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:bg-white transition-all appearance-none">
                    <option>Tư vấn đặt hoa cưới</option>
                    <option>Đặt hoa sinh nhật</option>
                    <option>Hợp tác kinh doanh</option>
                    <option>Góp ý dịch vụ</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Nội dung
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Bạn muốn nhắn gì với chúng tôi?"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-100 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  fullWidth
                  size="lg"
                  className="shadow-lg shadow-rose-100 py-5"
                >
                  Gửi yêu cầu ngay
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
