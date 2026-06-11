"use client";
import { useState } from "react"; // 1. Khai báo công cụ quản lý đóng/mở của React
import Link from "next/link";

export default function Header() {
  // 2. Tạo một biến trạng thái: Mặc định menu sẽ ĐÓNG (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* THANH THÔNG BÁO TRÊN CÙNG */}
      <div className="topbar">
        🌸 1998 Flower — Giao hoa trong <strong>90 phút</strong> tại TP HCM &nbsp;|&nbsp;
        Hotline: <a href="tel:0976848744">0976 848 744</a>
      </div>

      {/* KHU VỰC LOGO & TÌM KIẾM */}
      <header className="siteHeader">
        <div className="headerInner">
          <Link href="/" className="logo">
            <img 
              src="/logoweb.png" 
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>
          
          <div className="searchBar">
            <input type="text" placeholder="Tìm kiếm mẫu hoa..." id="search-input" />
            <button onClick={() => alert("Vui lòng gọi 0976 848 744 để được tư vấn trực tiếp!")}>🔍</button>
          </div>

          {/* 3. NÚT BẤM THẦN KỲ: Khi bấm sẽ đảo trạng thái giữa ĐÓNG và MỞ */}
          <button className="mobileMenuBtn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕ Đóng Menu" : "☰ Danh Mục Hoa"}
          </button>

          <div className="headerContact">
            <strong>Hotline: 0976 848 744</strong>
          </div>
        </div>
      </header>

      {/* KHU VỰC THANH MENU */}
      {/* 4. Đoạn code dưới này có nghĩa: Nếu isMenuOpen là đúng, nav sẽ có tên class là "siteNav mobileOpen" */}
      <nav className={`siteNav ${isMenuOpen ? "mobileOpen" : ""}`}>
        <div className="navInner">
          <div className="navItem"><Link href="/">Trang Chủ</Link></div>
          
          {/* MỤC 1: HOA SINH NHẬT */}
          <div className="navItem">
            <a href="#">Hoa Sinh Nhật ▾</a>
            <div className="dropdown">
              <a href="#">Hoa Sinh Nhật Sang Trọng</a>
              <a href="#">Hoa Sinh Nhật Giá Rẻ</a>
              <a href="#">Hoa Tặng Sinh Nhật Người Yêu</a>
              <a href="#">Hoa Tặng Sinh Nhật Mẹ</a>
              <a href="#">Lẵng Hoa Tặng Sinh Nhật</a>
              <a href="#">Giỏ Hoa Sinh Nhật</a>
            </div>
          </div>

          {/* MỤC 2: HOA KHAI TRƯƠNG */}
          <div className="navItem">
            <a href="#">Hoa Khai Trương ▾</a>
            <div className="dropdown">
              <a href="#">Hoa Khai Trương Để Bàn</a>
              <a href="#">Kệ Hoa Khai Trương</a>
              <a href="#">Hoa Khai Trương Giá Rẻ</a>
            </div>
          </div>

          {/* MỤC 3: LAN HỒ ĐIỆP */}
          <div className="navItem">
            <a href="#">Lan Hồ Điệp ▾</a>
            <div className="dropdown">
              <a href="#">Lan Hồ Điệp Mini</a>
              <a href="#">Lan Hồ Điệp Vàng</a>
              <a href="#">Lan Hồ Điệp Trắng</a>
              <a href="#">Chậu Lan 3 Cành</a>
              <a href="#">Chậu Lan 5 Cành</a>
            </div>
          </div>

          <div className="navItem"><a href="#">Hoa Tang Lễ</a></div>

          {/* MỤC 4: CHỦ ĐỀ */}
          <div className="navItem">
            <a href="#">Chủ Đề ▾</a>
            <div className="dropdown">
              <a href="#">Hoa Chúc Mừng</a>
              <a href="#">Hoa Cưới Cầm Tay</a>
              <a href="#">Hoa Tình Yêu</a>
              <a href="#">Hoa Valentine</a>
              <a href="#">Ngày Của Mẹ</a>
              <a href="#">Hoa 8-3 / 20-10</a>
              <a href="#">Hoa Tốt Nghiệp</a>
              <a href="#">Tết Âm Lịch</a>
            </div>
          </div>

          {/* MỤC 5: THIẾT KẾ */}
          <div className="navItem">
            <a href="#">Thiết Kế ▾</a>
            <div className="dropdown">
              <a href="#">Bó Hoa</a>
              <a href="#">Lẵng Hoa</a>
              <a href="#">Giỏ Hoa</a>
              <a href="#">Kệ Hoa</a>
              <a href="#">Bình Hoa</a>
              <a href="#">Hộp Hoa</a>
            </div>
          </div>

          {/* MỤC 6: HOA TƯƠI */}
          <div className="navItem">
            <a href="#">Hoa Tươi ▾</a>
            <div className="dropdown">
              <a href="#">Hoa Hồng</a>
              <a href="#">Hoa Hướng Dương</a>
              <a href="#">Hoa Tulip</a>
              <a href="#">Hoa Cúc Tana</a>
              <a href="#">Hoa Thạch Thảo</a>
              <a href="#">Hoa Ly</a>
            </div>
          </div>

          <div className="navItem navSale"><a href="#">🔥 Freeship Tân Phú!</a></div>
        </div>
      </nav>
    </>
  );
} 