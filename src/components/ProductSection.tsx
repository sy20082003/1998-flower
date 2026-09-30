"use client";
import { useMemo, useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductFilterBar from "./ProductFilterBar";
import { applyFilter, colorCounts, ColorFilter, SortMode } from "@/lib/productFilter";

interface ProductSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  id?: string;
  initialCount?: number; // Số sản phẩm hiện ban đầu (mặc định 10)
  step?: number;         // Mỗi lần bấm "Xem thêm" hiện thêm bao nhiêu (mặc định 10)
  filterable?: boolean;  // Hiện thanh lọc màu + sắp xếp giá (dùng cho trang danh mục)
}

export default function ProductSection({
  title,
  subtitle,
  products,
  id,
  initialCount = 10,
  step = 10,
  filterable = false,
}: ProductSectionProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [sort, setSort] = useState<SortMode>("default");
  const [color, setColor] = useState<ColorFilter>("all");

  const colors = useMemo(() => (filterable ? colorCounts(products) : []), [filterable, products]);
  const list = useMemo(
    () => (filterable ? applyFilter(products, sort, color) : products),
    [filterable, products, sort, color]
  );

  const visibleProducts = list.slice(0, visibleCount);
  const hasMore = visibleCount < list.length;

  return (
    <div className="section" id={id}>
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionSub">{subtitle}</p>

      {filterable && (
        <ProductFilterBar
          sort={sort}
          color={color}
          onSortChange={(s) => {
            setSort(s);
            setVisibleCount(initialCount);
          }}
          onColorChange={(c) => {
            setColor(c);
            setVisibleCount(initialCount);
          }}
          colors={colors}
          total={products.length}
          shown={list.length}
        />
      )}

      {list.length > 0 ? (
        <div className="productGrid">
          {visibleProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="filterEmpty">Không có mẫu hoa nào ở tông màu này. Hãy thử chọn màu khác nhé!</p>
      )}
      {hasMore && (
        <div className="seeMoreWrap">
          <button
            type="button"
            className="seeMoreBtn"
            onClick={() => setVisibleCount((c) => c + step)}
          >
            Xem thêm ({list.length - visibleCount} sản phẩm)
          </button>
        </div>
      )}
    </div>
  );
}
