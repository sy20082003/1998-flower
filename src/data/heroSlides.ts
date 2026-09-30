// src/data/heroSlides.ts
// Danh sách ảnh banner trượt ở đầu trang chủ.
//
// CÁCH THÊM ẢNH:
//  1. Bỏ file ảnh vào thư mục  public/banner/   (vd: public/banner/tot-nghiep.jpg)
//  2. Thêm 1 dòng vào mảng bên dưới.
//
// Ảnh banner tỉ lệ 16:9 (vd 1376 x 768 px), dạng .webp/.jpg, nhẹ dưới ~300KB.
// - Trên máy tính banner hiện tỉ lệ 2:1 nên ảnh bị cắt bớt một chút ở trên/dưới;
//   "position" (không bắt buộc) chọn phần giữ lại: "50% 0%" = giữ phía trên, "50% 100%" = giữ phía dưới.
// - Ảnh riêng cho điện thoại: thêm "mobileImage" (ảnh đứng, tỉ lệ khoảng 2:3 đến 9:10, rộng ~900px).
//   Khi MỌI ảnh đều có ảnh cho điện thoại, khung banner trên điện thoại là 4:5; ảnh không đúng tỉ lệ
//   sẽ được hiện đầy đủ, phần thừa hai bên/trên dưới được lấp bằng chính ảnh đó làm mờ.
// - "fit": "contain" = luôn hiện đầy đủ ảnh, không cắt (dùng cho ảnh đứng chưa có bản ngang).
// - "href" (không bắt buộc): bấm vào banner sẽ chuyển tới trang đó.
//
// Mảng để trống => trang chủ hiển thị khu hero chữ như cũ.

export interface HeroSlide {
  image: string;
  mobileImage?: string;
  /** CSS object-position khi ảnh bị cắt trên máy tính, vd "50% 40%" */
  position?: string;
  /** "contain": hiện đủ cả ảnh (lấp nền bằng ảnh mờ). Mặc định "cover": phủ kín khung, có thể cắt bớt */
  fit?: "cover" | "contain";
  alt: string;
  href?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: "/banner/tron-ven-yeu-thuong.webp",
    mobileImage: "/banner/tron-ven-yeu-thuong-m.webp",
    position: "50% 50%",
    alt: "Trọn vẹn yêu thương, đong đầy tình cảm - combo quà tặng thiệp, banner, túi giấy tiện dụng",
    href: "/danh-muc/hoa-sinh-nhat",
  },
  {
    image: "/banner/hoa-tot-nghiep.webp",
    mobileImage: "/banner/hoa-tot-nghiep-m.webp",
    position: "50% 37%",
    alt: "Hoa tốt nghiệp - đặt ngay, giao liền tay",
    href: "/danh-muc/hoa-tot-nghiep",
  },
  {
    image: "/banner/hoa-tuoi-rang-ro.webp",
    mobileImage: "/banner/hoa-tuoi-rang-ro-m.webp",
    position: "50% 50%",
    alt: "Hoa tươi rạng rỡ cho ngày thêm xinh - miễn phí banner, freeship Tân Phú, tặng thiệp miễn phí",
    href: "/danh-muc/bo-hoa",
  },
  {
    image: "/banner/bo-hoa-nho.webp",
    mobileImage: "/banner/bo-hoa-nho-m.webp",
    position: "50% 30%",
    alt: "Một bó hoa nhỏ gửi trọn yêu thương - tặng miễn phí banner, giao hoa tận nơi",
    href: "/danh-muc/bo-hoa",
  },
  {
    // Chưa có bản ngang cho máy tính -> hiện đủ ảnh đứng, nền lấp bằng ảnh mờ
    image: "/banner/dat-hoa-hom-nay.webp",
    fit: "contain",
    alt: "Đặt hoa hôm nay, nàng vui cả ngày - miễn phí banner, tặng kèm thiệp, giao hoa tận tay",
    href: "/danh-muc/bo-hoa",
  },
];
