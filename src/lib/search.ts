// src/lib/search.ts
// Tiện ích dùng chung cho chức năng tìm kiếm sản phẩm (ô search trên Header
// và trang kết quả /tim-kiem). Hỗ trợ tìm không phân biệt hoa/thường và
// không phân biệt dấu tiếng Việt (gõ "sinh nhat" vẫn ra "Sinh Nhật").

import { allProducts, Product } from "@/data/products";

export function normalizeText(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu
    .replace(/đ/gi, "d")
    .toLowerCase()
    .trim();
}

export function searchProducts(query: string, limit?: number): Product[] {
  const q = normalizeText(query);
  if (!q) return [];

  const all = Object.values(allProducts);

  const results = all.filter((p) => normalizeText(p.name).includes(q));

  // Ưu tiên các kết quả có tên bắt đầu bằng từ khoá lên đầu danh sách
  results.sort((a, b) => {
    const aStarts = normalizeText(a.name).startsWith(q) ? 0 : 1;
    const bStarts = normalizeText(b.name).startsWith(q) ? 0 : 1;
    return aStarts - bStarts;
  });

  return typeof limit === "number" ? results.slice(0, limit) : results;
}
