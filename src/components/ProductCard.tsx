"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import OrderModal from "./OrderModal";

export default function ProductCard({ product }: { product: Product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="productCard">
        {product.disc && <div className="discountBadge">{product.disc} GIẢM</div>}
        <Link href={`/san-pham/${product.slug}`}>
          {/* Ảnh sản phẩm: next/image tự nén, đổi cỡ theo màn hình và chỉ tải khi cuộn tới (nhanh hơn trên điện thoại) */}
          {product.image && (
            <div style={{ position: "relative", width: "100%", height: 220, borderRadius: 8, overflow: "hidden" }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1100px) 25vw, 230px"
                style={{ objectFit: "cover" }}
              />
            </div>
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
