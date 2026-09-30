"use client";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductFilterBar from "@/components/ProductFilterBar";
import type { Product } from "@/data/products";
import { applyFilter, colorCounts, ColorFilter, SortMode } from "@/lib/productFilter";
import { describePriceSearch, searchWithNearby } from "@/lib/search";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const { results, nearby, note } = searchWithNearby(q);
  const priceDesc = describePriceSearch(q);

  return (
    <>
      <div className="breadcrumbBar">
        <div className="breadcrumbInner">
          <Link href="/">Trang chủ</Link> <span>/</span>
          <span>Kết quả tìm kiếm{q ? ` cho "${q}"` : ""}</span>
        </div>
      </div>

      <div className="section">
        <h2 className="sectionTitle">Kết quả tìm kiếm</h2>
        <p className="sectionSub">
          {!q
            ? "Nhập tên mẫu hoa hoặc giá (500k, dưới 1tr, 400-600k) để tìm kiếm"
            : results.length > 0
            ? priceDesc
              ? `Tìm thấy ${results.length} mẫu hoa ${priceDesc}`
              : `Tìm thấy ${results.length} mẫu hoa phù hợp với "${q}"`
            : note ?? `Không tìm thấy mẫu hoa phù hợp với "${q}"`}
        </p>

        {results.length > 0 ? (
          <FilterableResults key={q} products={results} />
        ) : (
          <>
            {nearby.length > 0 && (
              <div className="productGrid">
                {nearby.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <p style={{ color: "var(--mid)", marginBottom: "16px" }}>
                {nearby.length > 0
                  ? "Chưa ưng ý mẫu nào? Gọi hotline để được tư vấn mẫu hoa đúng ngân sách của bạn!"
                  : "Không tìm thấy mẫu hoa nào phù hợp. Vui lòng thử từ khoá khác, một khoảng giá khác (dưới 500k, 400-600k) hoặc gọi hotline để được tư vấn trực tiếp!"}
              </p>
              <a href="tel:0976848744" className="btnPrimary">
                ☎ Gọi Ngay — 0976 848 744
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// Lưới kết quả có thanh lọc màu + sắp xếp giá (key={q} để tự reset khi đổi từ khoá)
function FilterableResults({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortMode>("default");
  const [color, setColor] = useState<ColorFilter>("all");
  const colors = useMemo(() => colorCounts(products), [products]);
  const list = useMemo(() => applyFilter(products, sort, color), [products, sort, color]);

  return (
    <>
      <ProductFilterBar
        sort={sort}
        color={color}
        onSortChange={setSort}
        onColorChange={setColor}
        colors={colors}
        total={products.length}
        shown={list.length}
      />
      {list.length > 0 ? (
        <div className="productGrid">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p className="filterEmpty">Không có mẫu hoa nào ở tông màu này. Hãy thử chọn màu khác nhé!</p>
      )}
    </>
  );
}
