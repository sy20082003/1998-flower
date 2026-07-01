"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/data/products";

function normalize(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const q = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(q);

  const results = q
    ? Object.values(allProducts).filter((p) =>
        normalize(p.name).includes(normalize(q))
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const value = query.trim();
    if (!value) return;
    router.push(`/tim-kiem?q=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <div className="breadcrumbBar">
        <div className="breadcrumbInner">
          <Link href="/">Trang chủ</Link> <span>/</span> <span>Tìm kiếm</span>
        </div>
      </div>

      <div className="section">
        <h2 className="sectionTitle">Kết quả tìm kiếm</h2>
        <p className="sectionSub">
          {q ? (
            <>
              {results.length > 0
                ? `Tìm thấy ${results.length} mẫu hoa cho "${q}"`
                : `Không tìm thấy mẫu hoa nào cho "${q}"`}
            </>
          ) : (
            "Nhập tên mẫu hoa bạn muốn tìm bên dưới"
          )}
        </p>

        <form
          onSubmit={handleSearch}
          className="searchBar"
          style={{ maxWidth: 480, margin: "0 0 32px" }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm mẫu hoa..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" aria-label="Tìm kiếm">🔍</button>
        </form>

        {results.length > 0 ? (
          <div className="productGrid">
            {results.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : q ? (
          <div style={{ textAlign: "center", padding: "20px 0 60px" }}>
            <p style={{ color: "var(--mid)", marginBottom: 16 }}>
              Vui lòng thử từ khóa khác hoặc gọi hotline để được tư vấn trực tiếp mẫu hoa phù hợp!
            </p>
            <a href="tel:0976848744" className="btnPrimary">
              ☎ Gọi Ngay — 0976 848 744
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="section" />}>
        <SearchResults />
      </Suspense>
      <Footer />
    </>
  );
}
