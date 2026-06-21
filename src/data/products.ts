// src/data/products.ts

export interface Product {
  slug: string;
  name: string;
  price: string;
  old?: string;
  disc?: string;
  image: string;
  category: string;
  description?: string;
}

const saleProducts: Product[] = [
  { slug: "lac-than-yeu-thuong",name: "Lạc Thần Yêu Thương",  price: "380,000₫", old: "418,000₫", disc: "10%", image: "/products/bo/lac-than-yeu-thuong-380k.jpg", category: "sale" },
  { slug: "moc-an",           name: "Mộc An",                 price: "375,000₫", old: "400,000₫", disc: "5%", image: "/products/bo/mocan-375k.jpg",       category: "sale" },
  { slug: "doa-hoa-dinh-menh",name: "Đóa Hoa Định Mệnh 🌺",   price: "400,000₫", old: "440,000₫", disc: "10%",  image: "/products/bo/doa-hong-dinh-menh-400k.jpg", category: "sale" },
  { slug: "khe-thuong",       name: "Khẽ Thương💗💗",        price: "400,000₫", old: "456,000₫", disc: "14%", image: "/products/bo/khe-thuong-400k.jpg", category: "sale" },
  { slug: "ngot-ngao-cho-em", name: "Ngọt Ngào Cho Em",       price: "550,000₫", old: "600,000₫", disc: "9%",  image: "/products/bo/ngot-ngao-cho-em-550k.jpg", category: "sale" },
  { slug: "hong-xinh-sizes",  name: "Hồng Xinh Size S",       price: "150,000₫", old: "200,000₫", disc: "30%",  image: "/products/bo/hong-xinh-sizes-150k.jpg", category: "sale" },
  { slug: "sweetie-pie",      name: "Sweetie Pie💕",          price: "320,000₫", old: "385,000₫", disc: "20%", image: "/products/bo/sweetie-pie-320k.jpg", category: "sale" },
  { slug: "nang-nhe-ben-em",  name: "Nặng Nhẹ Bên Em ☀️",     price: "400,000₫", old: "448,000₫", disc: "12%", image: "/products/bo/nang-nhe-ben-em-400k.jpg", category: "sale" },
  { slug: "nu-hoang-anh-do",  name: "Nữ Hoàng Ánh Đỏ",        price: "400,000₫", old: "440,000₫", disc: "10%", image: "/products/bo/nu-hoang-anh-do-400k.jpg", category: "sale" },
  { slug: "kem-vali",         name: "Kem Vali 💛",            price: "450,000₫", old: "486,000₫", disc: "8%",  image: "/products/bo/kem-vali-450k.jpg", category: "sale" },
];

const popularProducts: Product[] = [
  { slug: "your-day",      name: "Your Day",       price: "490,000₫", old: "520,000₫", disc: "6%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "pink-moon",     name: "Pink Moon",      price: "1,150,000₫",                             image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "khuc-tinh-ca",  name: "Khúc Tình Ca",   price: "760,000₫",                               image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "dam-me",        name: "Đam Mê",         price: "490,000₫", old: "520,000₫", disc: "6%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "thien-than",    name: "Thiên Thần",     price: "410,000₫",                               image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "vintage-love",  name: "Vintage Love",   price: "460,000₫", old: "520,000₫", disc: "12%", image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "ngat-ngay",     name: "Ngất Ngây",      price: "550,000₫", old: "590,000₫", disc: "7%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "ngay-tuoi-dep", name: "Ngày Tươi Đẹp",  price: "560,000₫", old: "630,000₫", disc: "11%", image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "bach-hop",      name: "Bách Hợp",       price: "550,000₫", old: "630,000₫", disc: "13%", image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
  { slug: "ms-spring",     name: "Ms Spring",      price: "390,000₫", old: "420,000₫", disc: "7%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "popular" },
];

const newProducts: Product[] = [
  { slug: "mau-nang-nho",    name: "Màu nắng nhỏ",   price: "270,000₫",                              image: "/products/bo/mau-nang-nho-270k.jpg", category: "new" },
  { slug: "hoa-cho-nguoi-thuong",       name: "Hoa Cho Người Thương",      price: "280,000₫",     image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "touching-you",     name: "Touching You",price: "730,000₫",                             image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "men-thuong",       name: "Mến Thương", price: "730,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "trang-nha",        name: "Trang Nhã",  price: "890,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "tre-trung",        name: "Trẻ Trung",  price: "999,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "rang-ngoi",        name: "Rạng Ngời",  price: "1,000,000₫",                            image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "dac-biet",         name: "Đặc Biệt",   price: "1,660,000₫",                            image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "nhu-y",            name: "Như Ý",      price: "730,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
];

const birthdayProducts: Product[] = [
  { slug: "gio-hoa-ruc-ro", name: "Giỏ Hoa Ngày Rực Rỡ", price: "1,320,000₫",                                  image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "quyen-ru",       name: "Quyến Rũ",             price: "890,000₫",                                    image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "red-rose",       name: "Red Rose",             price: "1,000,000₫", old: "1,250,000₫", disc: "20%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "luon-ben-em",    name: "Luôn Bên Em",          price: "490,000₫",   old: "520,000₫",   disc: "6%",   image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "mau-tinh-yeu",   name: "Màu Tình Yêu",         price: "950,000₫",                                    image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "elegant",        name: "Elegant",              price: "2,930,000₫",                                  image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "huong-nang-mai", name: "Hương Nắng Mai",       price: "1,290,000₫",                                  image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "malibu-sunset",  name: "Malibu Sunset",        price: "1,090,000₫",                                  image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
  { slug: "hy-vong",        name: "Hy Vọng",              price: "550,000₫",   old: "660,000₫",   disc: "17%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "birthday" },
];

const openingProducts: Product[] = [
  { slug: "vang-danh",       name: "Vang Danh",        price: "520,000₫",                                    image: "/products/gio/td-1.jpg", category: "opening" },
  { slug: "vung-ben",        name: "Vững Bền",         price: "650,000₫",                                   image: "/products/gio/td-2.jpg", category: "opening" },
  { slug: "phon-vinh",       name: "Phồn Vinh",        price: "700,000₫",                                   image: "/products/gio/td-3.jpg", category: "opening" },
  { slug: "khai-hoan",       name: "Khải Hoàn",        price: "630,000₫",                                   image: "/products/gio/th-1.jpg", category: "opening" },
  { slug: "nhu-y-cat-tuong", name: "Như Ý Cát Tường",  price: "1,880,000₫", old: "2,100,000₫", disc: "12%", image: "/products/gio/th-2.jpg", category: "opening" },
  { slug: "vung-tin",        name: "Vững Tin",         price: "550,000₫",                                   image: "/products/gio/th-3.jpg", category: "opening" },
  { slug: "good-luck",       name: "Good Luck",        price: "650,000₫",                                   image: "/products/gio/tv-1.jpg", category: "opening" },
  { slug: "van-su-may-man",  name: "Vạn Sự May Mắn",  price: "650,000₫",                                  image: "/products/gio/tv-2.jpg", category: "opening" },
  { slug: "nhat-ban-van-loi",name: "Nhất Bản Vạn Lợi", price: "500,000₫",                                 image: "/products/gio/tv-3.jpg", category: "opening" },
  { slug: "doanh-du-dac-loi",name: "Doanh Dư Đắc Lợi", price: "1,050,000₫",                                 image: "/products/gio/tx-1.jpg", category: "opening" },
];

const funeralProducts: Product[] = [
  // TODO: Thay ảnh/giá thật khi có. Đây là dữ liệu tạm để trang "Hoa Tang Lễ" hoạt động.
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 01", price: "2,800,000₫", image: "/products/ke/tang/hoatang01-2tr8.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 02", price: "1,800,000₫", image: "/products/ke/tang/hoatang02-1tr8.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 03", price: "1,600,000₫", image: "/products/ke/tang/hoatang03-1tr6.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 04", price: "1,600,000₫", image: "/products/ke/tang/hoatang04-1tr6.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 05", price: "1,800,000₫", image: "/products/ke/tang/hoatang05-1tr8.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 06", price: "1,000,000₫", image: "/products/ke/tang/hoatang06-1tr.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 07", price: "2,000,000₫", image: "/products/ke/tang/hoatang07-2tr.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 08", price: "1,800,000₫", image: "/products/ke/tang/hoatang08-1tr8.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 09", price: "1,100,000₫", image: "/products/ke/tang/hoatang09-1tr1.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 10", price: "1,100,000₫", image: "/products/ke/tang/hoatang10-1tr1.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 11", price: "1,200,000₫", image: "/products/ke/tang/hoatang11-1tr2.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 12", price: "1,200,000₫", image: "/products/ke/tang/hoatang12-1tr2.jpg", category: "funeral" },
  { slug: "tang-le-tuong-niem", name: "Kệ Hoa Tưởng Niệm 13", price: "1,200,000₫", image: "/products/ke/tang/hoatang13-1tr2.jpg", category: "funeral" },
];
const graduationProducts: Product[] = [
  { slug: "tot-nghiep-bo-hoa", name: "Bó Hoa Tốt Nghiệp", price: "550,000đ", image: "/products/ke/tang/...", category: "graduation" },
  { slug: "tot-nghiep-gio-hoa", name: "Giỏ Hoa Tốt Nghiệp", price: "650,000đ", image: "/products/ke/tang/...", category: "graduation" },
];

export const products = {
  sale: saleProducts,
  popular: popularProducts,
  newProducts,
  birthday: birthdayProducts,
  opening: openingProducts,
  funeral: funeralProducts,
  graduation: graduationProducts,
};

export const allProducts: Record<string, Product> = {};
Object.values(products).forEach(arr => arr.forEach(p => { allProducts[p.slug] = p; }));
