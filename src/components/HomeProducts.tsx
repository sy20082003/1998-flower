"use client";
// Các mục sản phẩm trên trang chủ + MỘT thanh bộ lọc chung (màu + sắp xếp giá)
// áp dụng cho tất cả các mục. Mục nào không còn mẫu phù hợp sẽ tự ẩn.
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import ProductSection from "./ProductSection";
import ProductFilterBar from "./ProductFilterBar";
import { applyFilter, colorCounts, ColorFilter, SortMode } from "@/lib/productFilter";

interface SectionData {
  id?: string;
  title: string;
  subtitle: string;
  products: Product[];
}

export default function HomeProducts({ sections }: { sections: SectionData[] }) {
  const [sort, setSort] = useState<SortMode>("default");
  const [color, setColor] = useState<ColorFilter>("all");

  // Tập sản phẩm duy nhất trên toàn trang (1 mẫu có thể nằm ở nhiều mục)
  const unique = useMemo(() => {
    const map = new Map<string, Product>();
    sections.forEach((s) => s.products.forEach((p) => map.set(p.slug, p)));
    return Array.from(map.values());
  }, [sections]);

  const colors = useMemo(() => colorCounts(unique), [unique]);

  const filtered = useMemo(
    () => sections.map((s) => ({ ...s, products: applyFilter(s.products, sort, color) })),
    [sections, sort, color]
  );

  const shown = useMemo(() => {
    const set = new Set<string>();
    filtered.forEach((s) => s.products.forEach((p) => set.add(p.slug)));
    return set.size;
  }, [filtered]);

  const visible = filtered.filter((s) => s.products.length > 0);

  return (
    <>
      <div className="section homeFilter">
        <ProductFilterBar
          sort={sort}
          color={color}
          onSortChange={setSort}
          onColorChange={setColor}
          colors={colors}
          total={unique.length}
          shown={shown}
        />
      </div>

      {visible.map((s) => (
        // key gồm bộ lọc để mục tự quay về số lượng hiển thị ban đầu khi đổi bộ lọc
        <ProductSection
          key={`${s.title}-${sort}-${color}`}
          id={s.id}
          title={s.title}
          subtitle={s.subtitle}
          products={s.products}
        />
      ))}

      {visible.length === 0 && (
        <p className="filterEmpty">Không có mẫu hoa nào ở tông màu này. Hãy thử chọn màu khác nhé!</p>
      )}
    </>
  );
}
