// src/data/heroSlides.ts
// Danh sách ảnh banner trượt ở đầu trang chủ.
//
// CÁCH THÊM ẢNH:
//  1. Bỏ file ảnh vào thư mục  public/banner/   (vd: public/banner/tot-nghiep.jpg)
//  2. Thêm 1 dòng vào mảng bên dưới.
//
// Kích thước khuyên dùng: ngang 1600 x 500 px (tỉ lệ 16:5), dạng .jpg/.webp, nhẹ dưới ~300KB.
// Ảnh riêng cho điện thoại (không bắt buộc): "mobileImage", tỉ lệ 4:3, vd 1000 x 750 px.
// Nếu MỌI ảnh đều có mobileImage thì trên điện thoại banner sẽ hiện theo tỉ lệ 4:3.
// "href" (không bắt buộc): bấm vào banner sẽ chuyển tới trang đó.
//
// Mảng để trống => trang chủ hiển thị khu hero chữ như cũ.

export interface HeroSlide {
  image: string;
  mobileImage?: string;
  alt: string;
  href?: string;
}

export const heroSlides: HeroSlide[] = [
  // { image: "/banner/tot-nghiep.jpg", mobileImage: "/banner/tot-nghiep-mobile.jpg", alt: "Hoa tốt nghiệp - giá chỉ từ 150K", href: "/danh-muc/hoa-tot-nghiep" },
];
