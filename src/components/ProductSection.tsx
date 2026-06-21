"use client";
import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  id?: string;
  initialCount?: number; // Số sản phẩm hiện ban đầu (mặc định 10)
  step?: number;         // Mỗi lần bấm "Xem thêm" hiện thêm bao nhiêu (mặc định 10)
}

export default function ProductSection({
  title,
  subtitle,
  products,
  id,
  initialCount = 10,
  step = 10,
}: ProductSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <div className="section" id={id}>
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionSub">{subtitle}</p>
      <div className="productGrid">
        {visibleProducts.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
      {hasMore && (
        <div className="seeMoreWrap">
          <button
            type="button"
            className="seeMoreBtn"
            onClick={() => setVisibleCount((c) => c + step)}
          >
            Xem thêm ({products.length - visibleCount} sản phẩm)
          </button>
        </div>
      )}
    </div>
  );
}
