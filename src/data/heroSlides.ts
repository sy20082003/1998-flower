// src/data/heroSlides.ts
// Danh sách ảnh banner trượt ở đầu trang chủ (hiện theo đúng thứ tự trong mảng).
//
// CÁCH THÊM ẢNH:
//  1. Bỏ file ảnh vào thư mục  public/banner/
//  2. Thêm 1 mục vào mảng bên dưới.
//
// Mỗi mục có:
//  - image       : ảnh cho MÁY TÍNH, ngang tỉ lệ 29:9 (vd 1856 x 576 px, hoặc 1600 x 497 px), .webp/.jpg, dưới ~300KB.
//  - mobileImage : ảnh cho ĐIỆN THOẠI, ảnh đứng tỉ lệ khoảng 2:3 đến 9:10, rộng ~900px.
//  - alt         : mô tả ảnh (hiển thị cho người khiếm thị và giúp SEO).
//  - href        : (không bắt buộc) bấm vào banner sẽ chuyển tới trang này.
//
// Mẹo:
//  - Chỉ có "image" (không có mobileImage): điện thoại cũng dùng ảnh ngang đó.
//  - Chỉ có "mobileImage" (không có image): banner CHỈ hiện trên điện thoại.
//  - Khi mọi banner đều có ảnh dùng được cho điện thoại, khung banner trên điện thoại là 4:5;
//    ảnh không đúng tỉ lệ vẫn hiện đầy đủ, phần thừa được lấp bằng chính ảnh đó làm mờ.
//  - "fit": "contain" = luôn hiện đủ ảnh, không cắt. "position" = vị trí giữ lại khi ảnh bị cắt, vd "50% 30%".
//
//  - "blur" / "mobileBlur": ảnh nền mờ siêu nhỏ (rộng ~48-64px, vài KB) cùng tên với ảnh nhưng thêm "-bg",
//    vd /banner/abc.webp -> /banner/abc-bg.webp. Khi thêm banner mới, gửi ảnh cho tôi, tôi tạo sẵn các bản này.
//
// Mảng để trống => trang chủ hiển thị khu hero chữ như cũ.

export interface HeroSlide {
  image?: string;
  mobileImage?: string;
  /** Ảnh nền mờ siêu nhỏ (vài KB) lấp phần thừa quanh banner; nếu bỏ trống sẽ dùng chính ảnh (nặng hơn) */
  blur?: string;
  mobileBlur?: string;
  /** CSS object-position khi ảnh bị cắt trên máy tính, vd "50% 40%" */
  position?: string;
  /** "contain": hiện đủ cả ảnh (lấp nền bằng ảnh mờ). Mặc định "cover": phủ kín khung, có thể cắt bớt */
  fit?: "cover" | "contain";
  alt: string;
  href?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    // Ảnh ngang tỉ lệ 2.5:1 hẹp hơn khung máy tính -> hiện đủ ảnh, hai bên lấp bằng ảnh mờ
    image: "/banner/hoa-20-11.webp",
    blur: "/banner/hoa-20-11-bg.webp",
    mobileImage: "/banner/hoa-20-11-m.webp",
    mobileBlur: "/banner/hoa-20-11-m-bg.webp",
    fit: "contain",
    alt: "20.11 Ngày Nhà Giáo Việt Nam - đặt hoa tri ân thầy cô ngay tại 1998 Flower, 272 Nguyễn Sơn, Tân Phú",
    href: "/danh-muc/bo-hoa",
  },
  {
    image: "/banner/hoa-20-10.webp",
    blur: "/banner/hoa-20-10-bg.webp",
    mobileImage: "/banner/hoa-20-10-m.webp",
    mobileBlur: "/banner/hoa-20-10-m-bg.webp",
    alt: "20.10 Ngày Phụ nữ Việt Nam - đặt hoa trước ngay tại 1998 Flower, 272 Nguyễn Sơn, Tân Phú",
    href: "/danh-muc/hoa-8-3-20-10",
  },
  {
    image: "/banner/tron-ven-yeu-thuong.webp",
    blur: "/banner/tron-ven-yeu-thuong-bg.webp",
    mobileImage: "/banner/tron-ven-yeu-thuong-m.webp",
    mobileBlur: "/banner/tron-ven-yeu-thuong-m-bg.webp",
    alt: "Trọn vẹn yêu thương, đong đầy tình cảm - combo quà tặng thiệp, banner, túi giấy tiện dụng",
    href: "/danh-muc/hoa-sinh-nhat",
  },
  {
    image: "/banner/dat-hoa-hom-nay.webp",
    blur: "/banner/dat-hoa-hom-nay-bg.webp",
    mobileImage: "/banner/dat-hoa-hom-nay-m.webp",
    mobileBlur: "/banner/dat-hoa-hom-nay-m-bg.webp",
    alt: "Đặt hoa hôm nay, nàng vui cả ngày - miễn phí banner, tặng kèm thiệp, giao hoa tận tay",
    href: "/danh-muc/bo-hoa",
  },
  {
    image: "/banner/bo-hoa-nho.webp",
    blur: "/banner/bo-hoa-nho-bg.webp",
    mobileImage: "/banner/bo-hoa-nho-m.webp",
    mobileBlur: "/banner/bo-hoa-nho-m-bg.webp",
    alt: "Một bó hoa nhỏ gửi trọn yêu thương - tặng miễn phí banner, giao hoa tận nơi",
    href: "/danh-muc/bo-hoa",
  },
  {
    image: "/banner/hoa-tot-nghiep.webp",
    blur: "/banner/hoa-tot-nghiep-bg.webp",
    mobileImage: "/banner/hoa-tot-nghiep-m.webp",
    mobileBlur: "/banner/hoa-tot-nghiep-m-bg.webp",
    alt: "Hoa tốt nghiệp - đặt ngay, giao liền tay",
    href: "/danh-muc/hoa-tot-nghiep",
  },
  {
    // Chỉ có bản điện thoại -> chỉ hiện trên điện thoại
    mobileImage: "/banner/hoa-tuoi-rang-ro-m.webp",
    mobileBlur: "/banner/hoa-tuoi-rang-ro-m-bg.webp",
    alt: "Hoa tươi rạng rỡ cho ngày thêm xinh - miễn phí banner, freeship Tân Phú, tặng thiệp miễn phí",
    href: "/danh-muc/bo-hoa",
  },
];
