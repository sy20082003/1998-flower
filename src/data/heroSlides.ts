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
// - Trên điện thoại ảnh hiện đầy đủ (16:9). Nếu muốn ảnh riêng cho điện thoại, thêm "mobileImage"
//   (tỉ lệ 4:3, vd 1000 x 750 px); khi MỌI ảnh đều có mobileImage, điện thoại sẽ hiện theo tỉ lệ 4:3.
// - "href" (không bắt buộc): bấm vào banner sẽ chuyển tới trang đó.
//
// Mảng để trống => trang chủ hiển thị khu hero chữ như cũ.

export interface HeroSlide {
  image: string;
  mobileImage?: string;
  /** CSS object-position khi ảnh bị cắt trên máy tính, vd "50% 40%" */
  position?: string;
  alt: string;
  href?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    image: "/banner/tron-ven-yeu-thuong.webp",
    position: "50% 50%",
    alt: "Trọn vẹn yêu thương, đong đầy tình cảm - combo quà tặng thiệp, banner, túi giấy tiện dụng",
    href: "/danh-muc/hoa-sinh-nhat",
  },
  {
    image: "/banner/hoa-tot-nghiep.webp",
    position: "50% 37%",
    alt: "Hoa tốt nghiệp - đặt ngay, giao liền tay",
    href: "/danh-muc/hoa-tot-nghiep",
  },
  {
    image: "/banner/hoa-tuoi-rang-ro.webp",
    position: "50% 50%",
    alt: "Hoa tươi rạng rỡ cho ngày thêm xinh - miễn phí banner, freeship Tân Phú, tặng thiệp miễn phí",
    href: "/danh-muc/bo-hoa",
  },
  {
    image: "/banner/bo-hoa-nho.webp",
    position: "50% 30%",
    alt: "Một bó hoa nhỏ gửi trọn yêu thương - tặng miễn phí banner, giao hoa tận nơi",
    href: "/danh-muc/bo-hoa",
  },
];
