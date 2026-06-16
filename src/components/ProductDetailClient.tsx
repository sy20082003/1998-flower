"use client";
import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import OrderModal from "./OrderModal";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="productDetail">
        {/* Image */}
        <div>
          {product.disc && (
            <div
              className="discountBadge"
              style={{ position: "relative", display: "inline-block", marginBottom: 12 }}
            >
              {product.disc} GIẢM
            </div>
          )}
{/* Thay thế đoạn emoji cũ bằng đoạn hiển thị ảnh sản phẩm này */}
{product.image && (
  <div className="product-detail-image" style={{ textAlign: 'center', marginBottom: '20px' }}>
    <img 
      src={product.image} 
      alt={product.name} 
      style={{ 
        width: '100%', 
        maxWidth: '450px', // Giới hạn chiều rộng tối đa để ảnh không bị quá to
        height: 'auto', 
        objectFit: 'cover', 
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)' // Thêm chút bóng mờ cho ảnh đẹp hơn
      }} 
    />
  </div>
)}
        </div>

        {/* Info */}
        <div className="productDetailInfo">
          <div className="breadcrumb">
            <Link href="/">Trang chủ</Link> › <span>{product.name}</span>
          </div>

          <h1>{product.name}</h1>

          <div className="productDetailPrice">
            <span className="detailPriceCurrent">{product.price}</span>
            {product.old && <span className="detailPriceOld">{product.old}</span>}
          </div>

          <div className="detailBadges">
            <span className="detailBadge">🚚 Giao trong 90 phút</span>
            <span className="detailBadge">🌸 Hoa tươi trong ngày</span>
            <span className="detailBadge">🎀 Tặng kèm thiệp + banner + túi giấy</span>
          </div>

          <p>
            Mẫu hoa <strong>{product.name}</strong> được thiết kế tinh tế từ những bông hoa tươi
            nhập về trong ngày. Phù hợp làm quà tặng trong các dịp đặc biệt như sinh nhật, kỷ
            niệm, khai trương và nhiều dịp khác.
          </p>
          <p>
            ⚡ 1998 Flower cam kết giao hoa <strong>đúng giờ trong 90 phút. Chụp ảnh hoa
            gửi khách trước khi giao theo yêu cầu.</strong>
          </p>

          <button className="productDetailCta" onClick={() => setShowModal(true)}>
            📞 Đặt Hoa Ngay — Gọi 0976 848 744
          </button>
          <p style={{ fontSize: 12, color: "#aaa", marginTop: 8 }}>
            📌 Lưu ý: Do hoa tươi theo mùa và tình trạng nhập mỗi ngày,
            sản phẩm thực tế có thể <strong>giống mẫu khoảng 90%</strong>. Shop cam kết phối hoa <strong>đúng tone màu, kiểu dáng và tổng thể thiết kế như hình</strong>, đảm bảo thành phẩm đẹp và hài hòa nhất khi giao đến khách hàng. 💐
          </p>
        </div>
      </div>

      {showModal && (
        <OrderModal productName={product.name} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
