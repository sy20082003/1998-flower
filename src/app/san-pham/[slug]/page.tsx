import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import ProductDetailClient from "@/components/ProductDetailClient";
import { allProducts, products } from "@/data/products";

interface Props {
  params: { slug: string };
}

// Pre-generate all product pages at build time
export async function generateStaticParams() {
  return Object.keys(allProducts).map((slug) => ({ slug }));
}

// Dynamic SEO metadata per product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = allProducts[params.slug];
  if (!product) return { title: "Không tìm thấy — 1998 Flower" };
  return {
    title: `${product.name} — Shop Hoa Tươi 1998 Flower`,
    description: `Đặt hoa ${product.name} tại 1998 Flower. Giao hoa trong ngày tại TP HCM Giá chỉ từ ${product.price}.`,
  };
}

export default function ProductPage({ params }: Props) {
  const product = allProducts[params.slug];
  if (!product) notFound();

  // Pick 5 related products (different slug, same or any category)
  const related = Object.values(allProducts)
    .filter((p) => p.slug !== params.slug)
    .slice(0, 5);

  return (
    <>
      <Header />

      {/* Breadcrumb + detail — needs client interactivity for modal */}
      <ProductDetailClient product={product} />

      {/* Related products */}
      <ProductSection
        title="💐 Sản Phẩm Liên Quan"
        subtitle="Bạn có thể thích những mẫu này"
        products={related}
      />

      <Footer />
    </>
  );
}
