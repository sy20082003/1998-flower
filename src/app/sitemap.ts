import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.shophoa1998flower.com", lastModified: new Date() },
    { url: "https://www.shophoa1998flower.com/san-pham", lastModified: new Date() },
    { url: "https://www.shophoa1998flower.com/danh-muc/hoa-sinh-nhat", lastModified: new Date() },
    { url: "https://www.shophoa1998flower.com/danh-muc/hoa-khai-truong", lastModified: new Date() },
    { url: "https://www.shophoa1998flower.com/danh-muc/hoa-tang-le", lastModified: new Date() },
  ];
}