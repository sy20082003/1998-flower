'use client'; // Thêm dòng này nếu bạn dùng useEffect hoặc các React hooks khác

import React, { useEffect } from 'react';
import Image from 'next/image';

// Mảng dữ liệu danh mục hoa (tương tự như trong hình của bạn)
const occasions = [
  {
    name: "Kệ Hoa",
    slug: "ke-hoa",
    img: "https://images.unsplash.com/photo-1563241527-2004ab36d852?q=80&w=600&auto=format&fit=crop", // Thay bằng link ảnh thật của bạn
  },
  {
    name: "Hoa Khai Trương",
    slug: "hoa-khai-truong",
    img: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Hoa Sinh Nhật",
    slug: "hoa-sinh-nhat",
    img: "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Hoa Chia Buồn",
    slug: "hoa-chia-buon",
    img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Bó Hoa Tươi",
    slug: "bo-hoa-tuoi",
    img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=600&auto=format&fit=crop",
  }
];

export default function HomePage() {
  
  useEffect(() => {
    // Chỗ này bạn có thể gọi API để lấy dữ liệu thực tế thay vì dùng mảng tĩnh ở trên
    console.log("Trang chủ đã được tải!");
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* PHẦN HEADER ĐƠN GIẢN */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Vườn Hoa Tươi</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li className="hover:text-green-600 cursor-pointer">Trang Chủ</li>
              <li className="hover:text-green-600 cursor-pointer">Sản Phẩm</li>
              <li className="hover:text-green-600 cursor-pointer">Liên Hệ</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* PHẦN BANNER CHÍNH */}
      <section className="bg-green-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Gửi trọn yêu thương qua từng đóa hoa</h2>
          <p className="text-gray-600 mb-8">Khám phá bộ sưu tập hoa tươi đẹp nhất cho mọi dịp đặc biệt của bạn.</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
            Khám phá ngay
          </button>
        </div>
      </section>

      {/* PHẦN DANH MỤC HOA (Sử dụng mảng occasions của bạn) */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Danh Mục Hoa Theo Chủ Đề</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {occasions.map((item) => (
            <a 
              href={`/danh-muc/${item.slug}`} // Link sẽ dẫn đến trang danh mục tương ứng
              key={item.slug} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden">
                {/* Sử dụng thẻ img thông thường để tránh lỗi hostname của Next/Image khi chưa config */}
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-700 group-hover:text-green-600 transition-colors">
                  {item.name}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* PHẦN FOOTER */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Vườn Hoa Tươi. Bản quyền thuộc về bạn.</p>
        </div>
      </footer>

    </main>
  );
}