import type { MetadataRoute } from "next";
import { allProducts, products } from "@/data/products";
import { allCategories, canonicalSlug } from "@/data/categories";
import { SITE_URL } from "@/lib/site";

// Sơ đồ trang web: trang chủ + các danh mục CÓ sản phẩm (và là trang chính, không trùng nội dung) + tất cả sản phẩm.
// Không đưa vào: trang tìm kiếm, trang /donhang, danh mục trống, danh mục trùng nội dung với trang khác.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const list = products as Record<string, unknown[]>;

  const categories = allCategories
    .filter((c) => c.dataKey && (list[c.dataKey]?.length ?? 0) > 0 && canonicalSlug(c.slug) === c.slug)
    .map((c) => ({
      url: `${SITE_URL}/danh-muc/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const items = Object.keys(allProducts).map((slug) => ({
    url: `${SITE_URL}/san-pham/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [{ url: SITE_URL, lastModified: now, changeFrequency: "daily", priority: 1 }, ...categories, ...items];
}
