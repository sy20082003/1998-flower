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
  { slug: "say-dam",          name: "Say Đắm",           price: "560,000₫", old: "620,000₫", disc: "10%", image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "little-tana",      name: "Little Tana",        price: "350,000₫", old: "410,000₫", disc: "15%", image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "melodious",        name: "Melodious",          price: "710,000₫", old: "770,000₫", disc: "8%",  image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "anh-binh-minh",    name: "Ánh Bình Minh",      price: "420,000₫", old: "490,000₫", disc: "14%", image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "hop-hoa-dang-yeu", name: "Hộp Hoa Đáng Yêu",  price: "610,000₫", old: "670,000₫", disc: "9%",  image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "naive",            name: "Naive",              price: "510,000₫", old: "550,000₫", disc: "7%",  image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "chao-em",          name: "Chào em!",           price: "450,000₫", old: "500,000₫", disc: "10%", image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "caffeine",         name: "Caffeine",           price: "510,000₫", old: "580,000₫", disc: "12%", image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "rieng-minh-em",    name: "Riêng Mình Em",      price: "710,000₫", old: "790,000₫", disc: "10%", image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
  { slug: "ngat-huong",       name: "Ngát Hương",         price: "610,000₫", old: "660,000₫", disc: "8%",  image: "/products/bo/nang-tho-pastel.jpg", category: "sale" },
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
  { slug: "phep-mau",    name: "Phép Màu",   price: "630,000₫", old: "690,000₫", disc: "9%", image: "/products/bo/kem-vali.jpg", category: "new" },
  { slug: "magic",       name: "Magic",      price: "790,000₫",                              image: "/products/bo/kem-vali.jpg", category: "new" },
  { slug: "touching-you",name: "Touching You",price: "730,000₫",                             image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "men-thuong",  name: "Mến Thương", price: "730,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "trang-nha",   name: "Trang Nhã",  price: "890,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "tre-trung",   name: "Trẻ Trung",  price: "999,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "rang-ngoi",   name: "Rạng Ngời",  price: "1,000,000₫",                            image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "dac-biet",    name: "Đặc Biệt",   price: "1,660,000₫",                            image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
  { slug: "nhu-y",       name: "Như Ý",      price: "730,000₫",                              image: "/products/bo/hong-ngot-ngao.jpg", category: "new" },
];

const birthdayProducts: Product[] = [
  { slug: "gio-hoa-ruc-ro", name: "Giỏ Hoa Ngày Rực Rỡ", price: "1,320,000₫",                                  image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "quyen-ru",       name: "Quyến Rũ",             price: "890,000₫",                                    image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "red-rose",       name: "Red Rose",             price: "1,000,000₫", old: "1,250,000₫", disc: "20%",  image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "luon-ben-em",    name: "Luôn Bên Em",          price: "490,000₫",   old: "520,000₫",   disc: "6%",   image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "mau-tinh-yeu",   name: "Màu Tình Yêu",         price: "950,000₫",                                    image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "elegant",        name: "Elegant",              price: "2,930,000₫",                                  image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "huong-nang-mai", name: "Hương Nắng Mai",       price: "1,290,000₫",                                  image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "malibu-sunset",  name: "Malibu Sunset",        price: "1,090,000₫",                                  image: "/products/bo/kem-vali.jpg", category: "birthday" },
  { slug: "hy-vong",        name: "Hy Vọng",              price: "550,000₫",   old: "660,000₫",   disc: "17%",  image: "/products/bo/kem-vali.jpg", category: "birthday" },
];

const openingProducts: Product[] = [
  { slug: "vang-danh",       name: "Vang Danh",        price: "1,370,000₫",                                 image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "vung-ben",        name: "Vững Bền",         price: "1,510,000₫", old: "1,660,000₫", disc: "9%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "phon-vinh",       name: "Phồn Vinh",        price: "2,360,000₫",                                 image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "khai-hoan",       name: "Khải Hoàn",        price: "2,250,000₫",                                 image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "nhu-y-cat-tuong", name: "Như Ý Cát Tường",  price: "1,290,000₫", old: "1,670,000₫", disc: "23%", image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "vung-tin",        name: "Vững Tin",         price: "1,190,000₫", old: "1,370,000₫", disc: "13%", image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "good-luck",       name: "Good Luck",        price: "1,410,000₫", old: "1,520,000₫", disc: "7%",  image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "van-su-may-man",  name: "Vạn Sự May Mắn",  price: "2,160,000₫",                                 image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "nhat-ban-van-loi",name: "Nhất Bản Vạn Lợi", price: "2,010,000₫",                                 image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
  { slug: "doanh-du-dac-loi",name: "Doanh Dư Đắc Lợi", price: "2,050,000₫",                                 image: "/products/bo/hong-ngot-ngao.jpg", category: "opening" },
];

export const products = {
  sale: saleProducts,
  popular: popularProducts,
  newProducts,
  birthday: birthdayProducts,
  opening: openingProducts,
};

export const allProducts: Record<string, Product> = {};
Object.values(products).forEach(arr => arr.forEach(p => { allProducts[p.slug] = p; }));
