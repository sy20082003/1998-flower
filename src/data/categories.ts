// src/data/categories.ts
// Danh sách toàn bộ danh mục / danh mục con hiển thị trên menu điều hướng.
// Mỗi mục có 1 "slug" duy nhất -> dùng để build link "/danh-muc/[slug]"
// "dataKey" (nếu có) trỏ tới key tương ứng trong object `products` ở products.ts
// Nếu "dataKey" không có (undefined) => danh mục này CHƯA có sản phẩm,
// trang sẽ tự hiển thị thông báo "Chưa có sản phẩm" thay vì lỗi.

export interface CategoryMeta {
  slug: string;
  label: string;          // Tên hiển thị trên menu
  title: string;          // Tiêu đề lớn hiển thị trên trang danh mục
  subtitle?: string;      // Mô tả ngắn dưới tiêu đề
  dataKey?: string;       // Key tương ứng trong `products` (products.ts). Bỏ trống nếu chưa có sản phẩm.
}

export interface NavGroup {
  slug: string;            // Slug của mục cha (bấm vào tên cha cũng ra trang danh mục riêng)
  label: string;
  dataKey?: string;
  children?: CategoryMeta[];
}

export const navGroups: NavGroup[] = [
  {
    slug: "hoa-sinh-nhat",
    label: "Hoa Sinh Nhật",
    dataKey: "birthday",
    children: [
      { slug: "hoa-sinh-nhat-sang-trong", label: "Hoa Sinh Nhật Sang Trọng", title: "Hoa Sinh Nhật Sang Trọng" },
      { slug: "hoa-sinh-nhat-gia-re", label: "Hoa Sinh Nhật Giá Rẻ", title: "Hoa Sinh Nhật Giá Rẻ" },
      { slug: "hoa-tang-sinh-nhat-nguoi-yeu", label: "Hoa Tặng Sinh Nhật Người Yêu", title: "Hoa Tặng Sinh Nhật Người Yêu" },
      { slug: "hoa-tang-sinh-nhat-me", label: "Hoa Tặng Sinh Nhật Mẹ", title: "Hoa Tặng Sinh Nhật Mẹ" },
      { slug: "lang-hoa-tang-sinh-nhat", label: "Lẵng Hoa Tặng Sinh Nhật", title: "Lẵng Hoa Tặng Sinh Nhật" },
      { slug: "gio-hoa-sinh-nhat", label: "Giỏ Hoa Sinh Nhật", title: "Giỏ Hoa Sinh Nhật" },
    ],
  },
  {
    slug: "hoa-khai-truong",
    label: "Hoa Khai Trương",
    dataKey: "opening",
    children: [
      { slug: "hoa-khai-truong-de-ban", label: "Hoa Khai Trương Để Bàn", title: "Hoa Khai Trương Để Bàn" },
      { slug: "ke-hoa-khai-truong", label: "Kệ Hoa Khai Trương", title: "Kệ Hoa Khai Trương" },
      { slug: "hoa-khai-truong-gia-re", label: "Hoa Khai Trương Giá Rẻ", title: "Hoa Khai Trương Giá Rẻ" },
    ],
  },
  {
    slug: "lan-ho-diep",
    label: "Lan Hồ Điệp",
    children: [
      { slug: "lan-ho-diep-mini", label: "Lan Hồ Điệp Mini", title: "Lan Hồ Điệp Mini" },
      { slug: "lan-ho-diep-vang", label: "Lan Hồ Điệp Vàng", title: "Lan Hồ Điệp Vàng" },
      { slug: "lan-ho-diep-trang", label: "Lan Hồ Điệp Trắng", title: "Lan Hồ Điệp Trắng" },
      { slug: "chau-lan-3-canh", label: "Chậu Lan 3 Cành", title: "Chậu Lan 3 Cành" },
      { slug: "chau-lan-5-canh", label: "Chậu Lan 5 Cành", title: "Chậu Lan 5 Cành" },
    ],
  },
  {
    slug: "hoa-tang-le",
    label: "Hoa Tang Lễ",
    dataKey: "funeral",
    
  },
  {
    slug: "chu-de",
    label: "Chủ Đề",
    children: [
      { slug: "hoa-chuc-mung", label: "Hoa Chúc Mừng", title: "Hoa Chúc Mừng" },
      { slug: "hoa-cuoi-cam-tay", label: "Hoa Cưới Cầm Tay", title: "Hoa Cưới Cầm Tay" },
      { slug: "hoa-tinh-yeu", label: "Hoa Tình Yêu", title: "Hoa Tình Yêu" },
      { slug: "hoa-valentine", label: "Hoa Valentine", title: "Hoa Valentine" },
      { slug: "ngay-cua-me", label: "Ngày Của Mẹ", title: "Ngày Của Mẹ" },
      { slug: "hoa-8-3-20-10", label: "Hoa 8-3 / 20-10", title: "Hoa 8-3 / 20-10" },
      { slug: "hoa-tot-nghiep", label: "Hoa Tốt Nghiệp", title: "Hoa Tốt Nghiệp", dataKey: "graduation" },
      { slug: "tet-am-lich", label: "Tết Âm Lịch", title: "Tết Âm Lịch" },
    ],
  },
  {
    slug: "thiet-ke",
    label: "Thiết Kế",
    children: [
      { slug: "bo-hoa", label: "Bó Hoa", title: "Bó Hoa" },
      { slug: "lang-hoa", label: "Lẵng Hoa", title: "Lẵng Hoa" },
      { slug: "gio-hoa", label: "Giỏ Hoa", title: "Giỏ Hoa" },
      { slug: "ke-hoa", label: "Kệ Hoa", title: "Kệ Hoa" },
      { slug: "binh-hoa", label: "Bình Hoa", title: "Bình Hoa" },
      { slug: "hop-hoa", label: "Hộp Hoa", title: "Hộp Hoa" },
    ],
  },
  {
    slug: "hoa-tuoi",
    label: "Hoa Tươi",
    children: [
      { slug: "hoa-hong", label: "Hoa Hồng", title: "Hoa Hồng" },
      { slug: "hoa-huong-duong", label: "Hoa Hướng Dương", title: "Hoa Hướng Dương" },
      { slug: "hoa-tulip", label: "Hoa Tulip", title: "Hoa Tulip" },
      { slug: "hoa-cuc-tana", label: "Hoa Cúc Tana", title: "Hoa Cúc Tana" },
      { slug: "hoa-thach-thao", label: "Hoa Thạch Thảo", title: "Hoa Thạch Thảo" },
      { slug: "hoa-ly", label: "Hoa Ly", title: "Hoa Ly" },
    ],
  },
];

// Gộp tất cả (cha + con) thành 1 danh sách phẳng, dùng để:
// - generateStaticParams (build sẵn toàn bộ trang danh mục)
// - tra cứu nhanh theo slug trong trang [slug]/page.tsx
export const allCategories: CategoryMeta[] = [];

navGroups.forEach((group) => {
  allCategories.push({
    slug: group.slug,
    label: group.label,
    title: group.label,
    dataKey: group.dataKey,
  });
  group.children?.forEach((child) => {
    allCategories.push({
      ...child,
      // Nếu danh mục con không tự khai báo dataKey riêng,
      // dùng tạm dataKey của danh mục cha (nếu cha có sản phẩm).
      dataKey: child.dataKey ?? group.dataKey,
    });
  });
});

export const categoryBySlug: Record<string, CategoryMeta> = {};
allCategories.forEach((c) => {
  categoryBySlug[c.slug] = c;
});
