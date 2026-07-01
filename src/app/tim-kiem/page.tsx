import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchResults from "./SearchResults";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm — Shop Hoa Tươi 1998 Flower",
};

export default function SearchPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="section">Đang tìm kiếm...</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </>
  );
}
