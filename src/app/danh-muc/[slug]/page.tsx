import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { products } from "@/data/products";
import { allCategories, categoryBySlug } from "@/data/categories";

interface Props {
  params: { slug: string };
}

// Build sẵn (tại build-time) toàn bộ trang cho mỗi danh mục trong menu
export async function generateStaticParams() {
  return allCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categoryBySlug[params.slug];
  if (!category) return { title: "Không tìm thấy danh mục — 1998 Flower" };
  return {
    title: `${category.title} — Shop Hoa Tươi 1998 Flower`,
    description: `Xem các mẫu ${category.title} đẹp nhất tại 1998 Flower. Giao hoa nhanh trong ngày tại TP.HCM.`,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categoryBySlug[params.slug];

  // Slug không tồn tại trong danh sách danh mục -> hiển thị thông báo gọn,
  // không dùng notFound() để tránh trang lỗi 404 cứng cho người dùng.
  if (!category) {
    return (
      <>
        <Header />
        <EmptyState title="Không tìm thấy danh mục" />
        <Footer />
      </>
    );
  }

  const categoryProducts =
    category.dataKey && category.dataKey in products
      ? products[category.dataKey as keyof typeof products]
      : [];

  return (
    <>
      <Header />

      <div className="breadcrumbBar">
        <div className="breadcrumbInner">
          <Link href="/">Trang chủ</Link> <span>/</span> <span>{category.title}</span>
        </div>
      </div>

      {categoryProducts.length > 0 ? (
        <ProductSection
          title={category.title}
          subtitle={category.subtitle ?? `Những mẫu hoa đẹp nhất thuộc danh mục ${category.title}`}
          products={categoryProducts}
        />
      ) : (
        <EmptyState title={category.title} />
      )}

      <Footer />
    </>
  );
}

function EmptyState({ title }: { title: string }) {
  return (
    <div className="section" style={{ textAlign: "center", padding: "60px 20px" }}>
      <h2 className="sectionTitle">{title}</h2>
      <p style={{ margin: "16px 0", color: "var(--mid)" }}>
        Danh mục này hiện chưa cập nhật sản phẩm. Vui lòng gọi hotline để được tư vấn
        mẫu hoa phù hợp nhất!
      </p>
      <a href="tel:0976848744" className="btnPrimary">
        ☎ Gọi Ngay — 0976 848 744
      </a>
    </div>
  );
}
