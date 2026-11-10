import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import ProductDetailClient from "@/components/ProductDetailClient";
import { allProducts, products } from "@/data/products";
import { SITE, abs, clip, priceNumber } from "@/lib/site";

interface Props {
  params: { slug: string };
}

// Pre-generate all product pages at build time
export async function generateStaticParams() {
  return Object.keys(allProducts).map((slug) => ({ slug }));
}

// SEO riêng cho từng sản phẩm: title <= 60 ký tự, description <= 155 ký tự, canonical và ảnh chia sẻ riêng
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = allProducts[params.slug];
  if (!product) return { title: "Không tìm thấy — 1998 Flower", robots: { index: false } };
  const title = clip(`${product.name} | 1998 Flower`, 60);
  const description = clip(
    `Đặt ${product.name} giá ${product.price} tại 1998 Flower. Hoa tươi giao nhanh trong ngày tại Tân Phú, TP.HCM. Hotline ${SITE.phoneDisplay}.`,
    155
  );
  const path = `/san-pham/${product.slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "vi_VN",
      siteName: SITE.name,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [product.image] },
  };
}

export default function ProductPage({ params }: Props) {
  const product = allProducts[params.slug];
  if (!product) notFound();

  // Pick 5 related products (different slug, same or any category)
  const related = Object.values(allProducts)
    .filter((p) => p.slug !== params.slug)
    .slice(0, 5);

  // Dữ liệu có cấu trúc: sản phẩm (có giá, ảnh) + đường dẫn breadcrumb
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `${product.name} - hoa tươi giao nhanh trong ngày tại Tân Phú, TP.HCM.`,
    image: [abs(product.image)],
    sku: product.slug,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      url: abs(`/san-pham/${product.slug}`),
      priceCurrency: "VND",
      price: priceNumber(product.price),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Florist", name: SITE.fullName },
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: abs("/") },
      { "@type": "ListItem", position: 2, name: product.name, item: abs(`/san-pham/${product.slug}`) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
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
