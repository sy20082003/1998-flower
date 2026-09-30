// src/lib/productFilter.ts
// Logic lọc theo tông màu + sắp xếp theo giá, dùng chung cho trang danh mục và trang tìm kiếm.

import type { Product } from "@/data/products";
import { ColorKey, COLOR_ORDER, colorsOf } from "@/data/productColors";
import { priceToNumber } from "@/lib/search";

export type SortMode = "default" | "asc" | "desc";
export type ColorFilter = ColorKey | "all";

export function applyFilter(products: Product[], sort: SortMode, color: ColorFilter): Product[] {
  let list = color === "all" ? products : products.filter((p) => colorsOf(p.slug).includes(color));

  if (sort !== "default") {
    // slice() để không làm thay đổi mảng gốc; sort ổn định nên các mẫu cùng giá giữ thứ tự cũ
    list = list.slice().sort((a, b) => {
      const diff = priceToNumber(a.price) - priceToNumber(b.price);
      return sort === "asc" ? diff : -diff;
    });
  }
  return list;
}

/** Đếm số sản phẩm theo từng màu (chỉ trả về các màu có ít nhất 1 sản phẩm). */
export function colorCounts(products: Product[]): { color: ColorKey; count: number }[] {
  return COLOR_ORDER.map((color) => ({
    color,
    count: products.filter((p) => colorsOf(p.slug).includes(color)).length,
  })).filter((c) => c.count > 0);
}
