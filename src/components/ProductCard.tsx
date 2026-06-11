"use client";
import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import OrderModal from "./OrderModal";

export default function ProductCard({ product }: { product: Product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="productCard">
        {product.disc && <div className="discountBadge">{product.disc} GIẢM</div>}
        <Link href={`/san-pham/${product.slug}`}>
          {/* Thay thế đoạn hiển thị emoji cũ bằng đoạn này */}
{product.image && (
  <img 
    src={product.image} 
    alt={product.name} 
    style={{ 
      width: '100%', 
      height: '220px', 
      objectFit: 'cover', 
      borderRadius: '8px' 
    }} 
  />
)}
        </Link>
        <div className="productInfo">
          <div className="productName">{product.name}</div>
          <div className="productPrice">
            <span className="priceCurrent">{product.price}</span>
            {product.old && <span className="priceOld">{product.old}</span>}
          </div>
          <button className="btnOrder" onClick={() => setShowModal(true)}>
            ĐẶT HÀNG
          </button>
        </div>
      </div>

      {showModal && (
        <OrderModal productName={product.name} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
