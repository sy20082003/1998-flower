"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { searchProducts } from "@/lib/search";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const results = searchProducts(q);

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
          {q
            ? `Tìm thấy ${results.length} mẫu hoa phù hợp với "${q}"`
            : "Nhập từ khoá để tìm mẫu hoa bạn muốn"}
        </p>

        {results.length > 0 ? (
          <div className="productGrid">
            {results.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <p style={{ color: "var(--mid)", marginBottom: "16px" }}>
              Không tìm thấy mẫu hoa nào phù hợp. Vui lòng thử từ khoá khác hoặc
              gọi hotline để được tư vấn trực tiếp!
            </p>
            <a href="tel:0976848744" className="btnPrimary">
              ☎ Gọi Ngay — 0976 848 744
            </a>
          </div>
        )}
      </div>
    </>
  );
}
