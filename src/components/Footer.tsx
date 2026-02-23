import React from "react";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Bloom & Petals</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Mang cái đẹp từ thiên nhiên vào không gian sống của bạn. Chúng tôi
              cung cấp các dịch vụ hoa tươi chất lượng cao cho mọi dịp đặc biệt.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Danh mục</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Tiệc cưới
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Sinh nhật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Khai trương
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Theo mùa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Vận chuyển
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Bản tin</h4>
            <p className="text-sm text-gray-500 mb-4">
              Đăng ký để nhận ưu đãi mới nhất.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-100 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-rose-200"
              />
              <button className="px-4 py-2 bg-rose-100 text-rose-700 rounded-r-xl font-medium">
                Gửi
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-50 mt-12 pt-8 text-center text-xs text-gray-400">
          © 2024 Bloom & Petals. All rights reserved. Design with love for
          elegance.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
