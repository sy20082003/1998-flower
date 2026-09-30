"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
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
          <div className="productGrid">
            {results.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
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
