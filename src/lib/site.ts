// src/lib/site.ts
// Thông tin chung của cửa hàng, dùng cho SEO (metadata, sitemap, dữ liệu có cấu trúc JSON-LD).
// Chỉ cần sửa ở đây là toàn bộ website cập nhật theo.

// Tên miền chính (Vercel đang chuyển shophoa1998flower.com -> www.shophoa1998flower.com)
export const SITE_URL = "https://www.shophoa1998flower.com";

export const SITE = {
  name: "1998 Flower",
  fullName: "Shop Hoa Tươi 1998 Flower",
  phone: "0976848744",
  phoneIntl: "+84976848744",
  phoneDisplay: "0976 848 744",
  email: "hoatuoitanphu1998flower@gmail.com",
  address: {
    street: "272 Nguyễn Sơn",
    ward: "Phú Thọ Hòa",
    district: "Tân Phú",
    city: "TP. Hồ Chí Minh",
  },
  social: {
    facebook: "https://www.facebook.com/hoatuoi1998flower",
    instagram: "https://www.instagram.com/_1998flower",
    tiktok: "https://www.tiktok.com/@1998flower_",
    zalo: "https://zalo.me/0976848744",
  },
  // ----- Điền thêm khi có thông tin (chưa điền thì tự bỏ qua, không đưa dữ liệu đoán vào Google) -----
  // Giờ mở cửa, ví dụ: [{ days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "07:00", closes: "21:00" }]
  openingHours: [{ days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "06:00", closes: "22:00" }] as undefined | { days: string[]; opens: string; closes: string }[],
  // Tọa độ cửa hàng, ví dụ: { lat: 10.78, lng: 106.62 }
  geo: undefined as undefined | { lat: number; lng: number },
  // Liên kết Google Maps của cửa hàng
  mapUrl: "https://www.google.com/maps/search/?api=1&query=272+Nguy%E1%BB%85n+S%C6%A1n%2C+Ph%C3%BA+Th%E1%BB%8D+H%C3%B2a%2C+T%C3%A2n+Ph%C3%BA%2C+TP.HCM" as undefined | string,
  // Khu vực giao hoa (cửa hàng xác nhận: chỉ giao 3 khu vực này)
  serviceAreas: ["Tân Phú", "Tân Bình", "Bình Tân"],
  // Địa chỉ đầy đủ dạng chữ, dùng cho bản đồ nhúng
  fullAddress: "272 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, TP.HCM",
};

/** Ghép đường dẫn tuyệt đối: abs("/a.jpg") -> https://www.shophoa1998flower.com/a.jpg */
export const abs = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : "/" + path}`;

/** "1,200,000₫" -> 1200000 */
export const priceNumber = (price: string) => Number(price.replace(/\D/g, "")) || 0;

/** Cắt chuỗi để không vượt giới hạn Google hiển thị (title ~60, description ~155 ký tự) */
export const clip = (s: string, max: number) => (s.length <= max ? s : s.slice(0, max - 1).trimEnd() + "…");
