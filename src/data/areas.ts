// src/data/areas.ts
// Nội dung các trang khu vực giao hoa (/hoa-tuoi-tan-phu, /hoa-tuoi-tan-binh, /hoa-tuoi-binh-tan).
// Mỗi khu vực có nội dung RIÊNG (giới thiệu, tuyến đường, câu hỏi thường gặp) để Google không coi là trang trùng lặp.
// Muốn đổi phí ship / nội dung: sửa ở đây là cả trang, bảng phí và sitemap cập nhật theo.

export const OPEN_HOURS_TEXT = "6h – 22h, tất cả các ngày trong tuần";

export interface AreaFaq {
  q: string;
  a: string;
}

export interface Area {
  slug: string;            // đường dẫn trang: /<slug>
  name: string;            // tên khu vực
  fee: number;             // phí ship (đồng), 0 = miễn phí
  feeLabel: string;        // hiển thị: "Miễn phí (freeship)" | "20.000đ" ...
  h1: string;
  breadcrumb: string;
  metaTitle: string;       // <= 60 ký tự
  metaDescription: string; // <= 155 ký tự
  intro: string[];         // các đoạn giới thiệu (mỗi khu viết riêng)
  streets: string[];       // các tuyến đường chính trong khu vực
  productSource: "popular" | "sale" | "birthdayCheap";
  productTitle: string;
  productSubtitle: string;
  faqs: AreaFaq[];
}

export const AREAS: Area[] = [
  {
    slug: "hoa-tuoi-tan-phu",
    name: "Tân Phú",
    fee: 0,
    feeLabel: "Miễn phí (freeship)",
    h1: "Shop Hoa Tươi Tân Phú – 1998 Flower",
    breadcrumb: "Hoa tươi Tân Phú",
    metaTitle: "Hoa Tươi Tân Phú – Giao Nhanh Trong Ngày | 1998 Flower",
    metaDescription:
      "Shop hoa tươi 1998 Flower tại 272 Nguyễn Sơn, Tân Phú, mở 6h–22h cả tuần. Giao hoa freeship khu vực Tân Phú, tặng thiệp. Gọi 0976 848 744.",
    intro: [
      "1998 Flower là tiệm hoa tươi nằm ngay tại 272 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, TP.HCM. Cửa hàng mở cửa từ 6h đến 22h tất cả các ngày trong tuần, nên bạn có thể ghé xem hoa, chọn mẫu, hoặc đặt giao tận nơi vào buổi sáng sớm lẫn buổi tối.",
      "Với khách ở Tân Phú, shop giao hoa miễn phí (freeship): bạn chỉ trả tiền hoa, từ một bó nhỏ giá 150.000đ cho tới giỏ hoa, kệ hoa lớn. Đơn đặt trực tiếp thường được giao trong khoảng 90 phút; bạn gửi địa chỉ, giờ muốn nhận và lời chúc, shop sẽ gửi hình hoa thực tế để bạn duyệt trước khi giao.",
      "Khu vực giao hoa miễn phí gồm các tuyến đường quen thuộc của Tân Phú như Lũy Bán Bích, Tân Kỳ Tân Quý, Thoại Ngọc Hầu, Nguyễn Sơn, Hòa Bình, Vườn Lài, Lê Trọng Tấn cùng các khu dân cư, chung cư, văn phòng và trường học lân cận.",
    ],
    streets: ["Lũy Bán Bích", "Tân Kỳ Tân Quý", "Thoại Ngọc Hầu", "Nguyễn Sơn", "Hòa Bình", "Vườn Lài", "Lê Trọng Tấn"],
    productSource: "popular",
    productTitle: "💐 Hoa Bán Chạy Tại Tân Phú",
    productSubtitle: "Những mẫu hoa được khách Tân Phú đặt nhiều nhất, giao miễn phí",
    faqs: [
      {
        q: "Cửa hàng 1998 Flower ở đâu và mở cửa lúc mấy giờ?",
        a: "Shop ở 272 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, TP.HCM và mở cửa từ 6h đến 22h mỗi ngày, cả tuần. Bạn có thể ghé xem hoa trực tiếp, hoặc gọi/nhắn Zalo 0976 848 744 để đặt hoa.",
      },
      {
        q: "Giao hoa trong Tân Phú có mất phí ship không?",
        a: "Không. Shop freeship toàn bộ khu vực Tân Phú, bạn chỉ thanh toán tiền hoa.",
      },
      {
        q: "Đặt hoa gấp thì bao lâu nhận được?",
        a: "Đơn đặt trực tiếp qua điện thoại hoặc Zalo thường được giao trong khoảng 90 phút. Nếu cần hoa đúng giờ (ví dụ đúng lúc tiệc sinh nhật), hãy báo giờ muốn nhận khi đặt; vào các dịp lễ, Tết nên đặt sớm hơn để shop sắp xếp kịp.",
      },
      {
        q: "Tặng hoa sinh nhật có kèm thiệp và banner chúc mừng không?",
        a: "Có. Shop tặng thiệp và banner chúc mừng miễn phí, bạn chỉ cần gửi lời chúc muốn in. Trước khi giao, shop gửi hình hoa thực tế để bạn yên tâm.",
      },
      {
        q: "Shop có làm kệ hoa khai trương và hoa chia buồn không?",
        a: "Có. Bạn xem các mẫu trong danh mục Hoa Khai Trương và Hoa Tang Lễ, chọn mẫu rồi gọi hoặc nhắn Zalo để chốt, kệ hoa giao tới Tân Phú cũng được freeship.",
      },
      {
        q: "Tôi có thể thanh toán chuyển khoản không?",
        a: "Được. Shop hỗ trợ thanh toán chuyển khoản, bạn nhắn Zalo để nhận thông tin tài khoản khi chốt đơn.",
      },
    ],
  },
  {
    slug: "hoa-tuoi-tan-binh",
    name: "Tân Bình",
    fee: 20000,
    feeLabel: "20.000đ",
    h1: "Giao Hoa Tươi Tận Nơi Tại Tân Bình – 1998 Flower",
    breadcrumb: "Giao hoa Tân Bình",
    metaTitle: "Giao Hoa Tận Nơi Tân Bình – Ship Chỉ 20K | 1998 Flower",
    metaDescription:
      "Đặt hoa tươi giao tận nơi Tân Bình từ 1998 Flower (272 Nguyễn Sơn, Tân Phú). Phí ship chỉ 20K, tặng thiệp, mở 6h–22h cả tuần. Gọi 0976 848 744.",
    intro: [
      "Ở Tân Bình mà cần một bó hoa đẹp cho kịp giờ? 1998 Flower đặt tại Tân Phú, ngay sát khu vực Tân Bình, nên có thể mang hoa tươi tới tận nơi với phí giao hoa chỉ 20.000đ cho toàn bộ khu vực Tân Bình.",
      "Dù bạn ở khu dân cư, cư xá hay văn phòng dọc các tuyến Cộng Hòa, Hoàng Văn Thụ, Trường Chinh, Lê Văn Sỹ, Phạm Văn Bạch…, chỉ cần gọi hoặc nhắn Zalo, shop sẽ tư vấn mẫu theo ngân sách, gửi hình hoa thực tế để bạn duyệt rồi mới giao.",
      "Hoa giao đến Tân Bình được gói cẩn thận, kèm thiệp và banner chúc mừng miễn phí. Cửa hàng nhận đặt hoa từ 6h đến 22h mỗi ngày, bạn đặt sớm và báo giờ nhận để shop sắp xếp giao đúng hẹn.",
    ],
    streets: ["Cộng Hòa", "Hoàng Văn Thụ", "Trường Chinh", "Lê Văn Sỹ", "Phạm Văn Bạch", "Nguyễn Hồng Đào", "Hoàng Hoa Thám"],
    productSource: "sale",
    productTitle: "🔥 Hoa Đang Giảm Giá – Giao Tới Tân Bình",
    productSubtitle: "Mẫu hoa ưu đãi, cộng thêm phí ship 20.000đ về Tân Bình",
    faqs: [
      {
        q: "Phí giao hoa đến Tân Bình là bao nhiêu?",
        a: "Phí giao hoa về khu vực Tân Bình là 20.000đ, đây là khoản duy nhất cần trả thêm ngoài tiền hoa.",
      },
      {
        q: "Mình ở Tân Bình, muốn tặng hoa cho người ở Tân Phú thì tính phí thế nào?",
        a: "Phí ship tính theo nơi nhận hoa. Nếu người nhận ở Tân Phú thì được miễn phí giao hoa; nếu nhận ở Tân Bình thì phí là 20.000đ.",
      },
      {
        q: "Giao hoa đến văn phòng hoặc công ty ở Tân Bình giờ hành chính được không?",
        a: "Được. Bạn gửi tên công ty hoặc tòa nhà, tầng, tên và số điện thoại người nhận cùng khung giờ mong muốn; shop sẽ gọi xác nhận trước khi giao khi cần.",
      },
      {
        q: "Làm sao biết hoa thật có giống mẫu trên website?",
        a: "Hoa của shop được nhập trong ngày và cắm theo mẫu bạn chọn. Trước khi giao, shop gửi hình hoa thực tế qua Zalo hoặc Facebook để bạn duyệt, chưa ưng chỗ nào có thể chỉnh lại.",
      },
      {
        q: "Tôi muốn đặt hoa vào buổi tối thì shop mở đến mấy giờ?",
        a: "Shop mở cửa từ 6h đến 22h mỗi ngày. Bạn đặt trong khung giờ này và báo giờ muốn nhận hoa để shop sắp xếp đúng hẹn.",
      },
    ],
  },
  {
    slug: "hoa-tuoi-binh-tan",
    name: "Bình Tân",
    fee: 30000,
    feeLabel: "30.000đ",
    h1: "Dịch Vụ Giao Hoa Tươi Tại Bình Tân – 1998 Flower",
    breadcrumb: "Giao hoa Bình Tân",
    metaTitle: "Giao Hoa Tận Nơi Bình Tân – Ship Chỉ 30K | 1998 Flower",
    metaDescription:
      "Giao hoa tươi tận nơi Bình Tân từ tiệm hoa 1998 Flower ở Tân Phú. Phí ship 30K, tặng thiệp và banner, mở 6h–22h cả tuần. Gọi 0976 848 744.",
    intro: [
      "Dù ở Bình Tân, bạn vẫn có thể gửi tặng hoa tươi mà không cần ra tận cửa hàng. 1998 Flower (272 Nguyễn Sơn, Tân Phú) nhận đặt hoa qua điện thoại, Zalo và Facebook, rồi giao đến khu vực Bình Tân với phí 30.000đ.",
      "Shop thường giao tới những khu dân cư dọc các tuyến Kinh Dương Vương, Tên Lửa, Mã Lò, An Dương Vương, Lê Văn Quới, Hương Lộ 2, Trần Văn Giàu và các khu lân cận. Bạn chọn mẫu trên website, nhắn địa chỉ và giờ nhận, phần còn lại để shop lo.",
      "Vì Bình Tân khá rộng, bạn nên đặt hoa sớm hơn một chút và gửi địa chỉ thật chi tiết (số nhà, hẻm, mốc dễ nhận) để shop giao đúng giờ. Mọi đơn đều được tặng thiệp và banner chúc mừng miễn phí.",
    ],
    streets: ["Kinh Dương Vương", "Tên Lửa", "Mã Lò", "An Dương Vương", "Lê Văn Quới", "Hương Lộ 2", "Trần Văn Giàu"],
    productSource: "birthdayCheap",
    productTitle: "🎂 Bó Hoa Giá Tốt – Giao Tới Bình Tân",
    productSubtitle: "Bó hoa sinh nhật từ 150.000đ, cộng thêm phí ship 30.000đ về Bình Tân",
    faqs: [
      {
        q: "Giao hoa đến Bình Tân phí bao nhiêu?",
        a: "Phí giao hoa về khu vực Bình Tân là 30.000đ, cộng thêm vào tiền hoa.",
      },
      {
        q: "Bình Tân rộng, đặt hoa gấp có kịp không?",
        a: "Thời gian giao phụ thuộc vào nơi nhận và giao thông lúc đó. Để kịp giờ, bạn nhắn rõ giờ cần nhận và đặt sớm hơn một chút; shop sẽ báo thời gian giao dự kiến khi xác nhận đơn.",
      },
      {
        q: "Tôi ở xa cửa hàng thì đặt hoa như thế nào?",
        a: "Bạn chọn mẫu trên website rồi gọi hoặc nhắn Zalo 0976 848 744 (hoặc Facebook 1998 Flower), gửi tên mẫu, địa chỉ, giờ nhận và lời chúc. Bạn thanh toán chuyển khoản, shop gửi hình hoa để duyệt rồi giao tận nơi.",
      },
      {
        q: "Bó hoa nhỏ giá thấp có giao tới Bình Tân được không?",
        a: "Được. Shop có bó hoa từ 150.000đ, bạn xem danh mục Hoa Sinh Nhật Giá Rẻ để chọn; phí giao về Bình Tân là 30.000đ.",
      },
      {
        q: "Giao hoa đến Bình Tân có được tặng thiệp và banner không?",
        a: "Có. Mọi đơn hoa đều được tặng thiệp và banner chúc mừng miễn phí, bạn chỉ cần gửi nội dung lời chúc muốn in.",
      },
    ],
  },
];

export const areaBySlug: Record<string, Area> = Object.fromEntries(AREAS.map((a) => [a.slug, a]));
