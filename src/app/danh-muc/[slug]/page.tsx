import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { products } from "@/data/products";
import { allCategories, canonicalSlug, categoryBySlug } from "@/data/categories";
import { SITE, clip } from "@/lib/site";

interface Props {
  params: { slug: string };
}

// Build sẵn (tại build-time) toàn bộ trang cho mỗi danh mục trong menu
export async function generateStaticParams() {
  return allCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categoryBySlug[params.slug];
  if (!category) return { title: "Không tìm thấy danh mục — 1998 Flower", robots: { index: false } };

  const list = products as Record<string, unknown[]>;
  const hasProducts = !!category.dataKey && (list[category.dataKey]?.length ?? 0) > 0;
  const canonical = canonicalSlug(category.slug); // danh mục trùng nội dung thì trỏ về trang chính
  const title = clip(`${category.title} | Shop Hoa Tươi 1998 Flower`, 60);
  const description = clip(
    `Xem các mẫu ${category.title} đẹp, giá tốt tại 1998 Flower: hoa tươi giao nhanh trong ngày tại Tân Phú, TP.HCM. Hotline ${SITE.phoneDisplay}.`,
    155
  );
  return {
    title,
    description,
    alternates: { canonical: `/danh-muc/${canonical}` },
    // Danh mục chưa có sản phẩm: không cho Google lập chỉ mục (tránh trang rỗng bị đánh giá thấp)
    robots: hasProducts ? undefined : { index: false, follow: true },
    openGraph: { title, description, url: `/danh-muc/${canonical}`, type: "website", locale: "vi_VN", siteName: SITE.name },
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
          key={category.slug}
          title={category.title}
          subtitle={category.subtitle ?? `Những mẫu hoa đẹp nhất thuộc danh mục ${category.title}`}
          products={categoryProducts}
          filterable
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
