// src/lib/search.ts
// Tiện ích dùng chung cho chức năng tìm kiếm sản phẩm (ô search trên Header
// và trang kết quả /tim-kiem).
//
// Hỗ trợ:
//  - Tìm theo TÊN, không phân biệt hoa/thường và dấu tiếng Việt
//    (gõ "sinh nhat" vẫn ra "Sinh Nhật").
//  - Tìm theo GIÁ, ví dụ:
//      500k  |  500000  |  500,000  |  1tr  |  1tr2  |  1.2 triệu   -> đúng giá đó
//      dưới 500k  |  < 500k                                        -> giá ≤ 500,000₫
//      trên 1tr  |  từ 1tr  |  > 1tr                               -> giá ≥ 1,000,000₫
//      400-600k  |  400k đến 600k  |  từ 400k đến 600k             -> trong khoảng
//      hoa sinh nhật dưới 500k                                      -> kết hợp tên + giá

import { allProducts, Product } from "@/data/products";

export function normalizeText(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu
    .replace(/đ/gi, "d")
    .toLowerCase()
    .trim();
}

/* ───────────────────────── GIÁ ───────────────────────── */

// Một "cụm tiền": 500 | 500k | 500,000 | 1.050.000 | 1tr | 1tr2 | 1,2tr | 1.5 trieu
// (lookahead cuối để "500 ke" không bị hiểu nhầm là "500k").
const MONEY = "\\d+(?:[.,]\\d+)*(?:\\s*(?:k|nghin|ngan)|\\s*(?:trieu|tr)\\d{0,3})?(?![a-z0-9])";

const RANGE_RE = new RegExp(`(?:(?:^|\\s)tu\\s+)?(${MONEY})\\s*(?:-|~|den|toi)\\s*(${MONEY})`);
const LESS_RE = new RegExp(
  `(?:(?:^|\\s)(?:duoi|nho hon|khong qua|toi da|it hon|max)|<=?|≤)\\s*(${MONEY})`
);
const MORE_RE = new RegExp(
  `(?:(?:^|\\s)(?:tren|lon hon|toi thieu|nhieu hon|min|tu)|>=?|≥)\\s*(${MONEY})`
);
const MONEY_G = new RegExp(MONEY, "g");

// Từ "đệm" bỏ đi khi đã có ý định tìm theo giá: "hoa sinh nhật GIÁ dưới 500k"
const FILLER_RE = /(?:^|\s)(?:gia tien|gia|khoang|tam gia|tam|muc gia|co gia|la)(?=\s|$)/g;

/** Đổi 1 cụm tiền sang số VNĐ. Trả về null nếu không hiểu. */
function parseMoney(text: string): number | null {
  const m = text
    .trim()
    .match(/^(\d+(?:[.,]\d+)*)(?:\s*(k|nghin|ngan)|\s*(trieu|tr)(\d{1,3})?)?$/);
  if (!m) return null;
  const [, num, kUnit, trUnit, tail] = m;

  if (kUnit) {
    const v = parseFloat(num.replace(",", "."));
    return Number.isFinite(v) && v > 0 ? Math.round(v * 1000) : null;
  }

  if (trUnit) {
    const v = parseFloat(num.replace(",", "."));
    if (!Number.isFinite(v) || v <= 0) return null;
    let total = v * 1_000_000;
    // "1tr2" = 1,200,000 | "1tr25" = 1,250,000 | "1tr250" = 1,250,000
    if (tail) total += Number(tail) * 10 ** (6 - tail.length);
    return Math.round(total);
  }

  // Không có đơn vị
  if (/^\d{1,3}(?:[.,]\d{3})+$/.test(num)) {
    return Number(num.replace(/[.,]/g, "")); // 500,000 | 1.050.000
  }
  if (/^\d+$/.test(num)) {
    const n = Number(num);
    if (n <= 0) return null;
    return n < 10000 ? n * 1000 : n; // "500" hiểu là 500k
  }
  return null;
}

/** "380,000₫" -> 380000 */
export function priceToNumber(price: string): number {
  return Number(price.replace(/\D/g, "")) || 0;
}

export function formatVnd(n: number): string {
  return `${n.toLocaleString("en-US")}₫`;
}

interface PriceIntent {
  kind: "exact" | "range";
  min?: number;
  max?: number;
  exact?: number;
  /** số trơn, không có đơn vị (vd "500") -> vẫn cho khớp cả tên sản phẩm */
  bare?: boolean;
  /** phần chữ còn lại sau khi tách phần giá ra, dùng để lọc theo tên */
  text: string;
}

function cleanText(t: string): string {
  return t.replace(FILLER_RE, " ").replace(/\s+/g, " ").trim();
}

function unitOf(token: string): string {
  const m = token.match(/(trieu|tr|k|nghin|ngan)/);
  return m ? m[1] : "";
}

function hasUnit(token: string): boolean {
  return /[a-z]/.test(token);
}

function parsePriceIntent(raw: string): PriceIntent | null {
  const q = normalizeText(raw.replace(/[–—]/g, "-").replace(/₫/g, ""))
    .replace(/(\d)\s*(?:vnd|dong|d)(?![a-z0-9])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  if (!q) return null;

  // 1) Khoảng giá: 400-600k | 400k đến 600k | từ 400k đến 600k
  const range = q.match(RANGE_RE);
  if (range) {
    let a = range[1];
    const b = range[2];
    if (!hasUnit(a) && hasUnit(b)) a = a + unitOf(b); // "400-600k" -> "400k-600k"
    const lo = parseMoney(a);
    const hi = parseMoney(b);
    if (lo !== null && hi !== null) {
      return {
        kind: "range",
        min: Math.min(lo, hi),
        max: Math.max(lo, hi),
        text: cleanText(q.replace(range[0], " ")),
      };
    }
  }

  // 2) Dưới / tối đa
  const less = q.match(LESS_RE);
  if (less) {
    const v = parseMoney(less[1]);
    if (v !== null) {
      return { kind: "range", max: v, text: cleanText(q.replace(less[0], " ")) };
    }
  }

  // 3) Trên / từ / tối thiểu
  const more = q.match(MORE_RE);
  if (more) {
    const v = parseMoney(more[1]);
    if (v !== null) {
      return { kind: "range", min: v, text: cleanText(q.replace(more[0], " ")) };
    }
  }

  // 4) Đúng 1 mức giá: cả câu chỉ là số tiền, hoặc có kèm đơn vị (k / tr)
  const tokens = q.match(MONEY_G);
  if (tokens && tokens.length > 0) {
    if (tokens.length === 1 && tokens[0].trim() === q) {
      const v = parseMoney(tokens[0]);
      if (v !== null) {
        return { kind: "exact", exact: v, bare: !hasUnit(tokens[0]), text: "" };
      }
    } else {
      const withUnit = tokens.find(hasUnit);
      if (withUnit) {
        const v = parseMoney(withUnit);
        if (v !== null) {
          return {
            kind: "exact",
            exact: v,
            text: cleanText(q.replace(withUnit, " ")),
          };
        }
      }
    }
  }

  return null;
}

/** Mô tả ngắn điều kiện giá, để hiện ở trang kết quả. Trả về null nếu không phải tìm theo giá. */
export function describePriceSearch(raw: string): string | null {
  const intent = parsePriceIntent(raw);
  if (!intent) return null;
  if (intent.kind === "exact") {
    // Số trơn như "01": nếu không sản phẩm nào có đúng giá đó thì đây là tìm theo tên
    if (
      intent.bare &&
      !Object.values(allProducts).some((p) => priceToNumber(p.price) === intent.exact)
    ) {
      return null;
    }
    return `có giá ${formatVnd(intent.exact!)}`;
  }
  if (intent.min !== undefined && intent.max !== undefined) {
    return `có giá từ ${formatVnd(intent.min)} đến ${formatVnd(intent.max)}`;
  }
  if (intent.max !== undefined) return `có giá tối đa ${formatVnd(intent.max)}`;
  return `có giá từ ${formatVnd(intent.min!)} trở lên`;
}

/* ───────────────────────── TÌM KIẾM ───────────────────────── */

// Phần chữ đi kèm điều kiện giá: mọi từ đều phải xuất hiện trong tên sản phẩm
function nameHasAllWords(name: string, text: string): boolean {
  if (!text) return true;
  const n = normalizeText(name);
  return text.split(" ").every((w) => n.includes(w));
}

function searchByName(all: Product[], q: string): Product[] {
  const results = all.filter((p) => normalizeText(p.name).includes(q));

  // Ưu tiên các kết quả có tên bắt đầu bằng từ khoá lên đầu danh sách
  results.sort((a, b) => {
    const aStarts = normalizeText(a.name).startsWith(q) ? 0 : 1;
    const bStarts = normalizeText(b.name).startsWith(q) ? 0 : 1;
    return aStarts - bStarts;
  });
  return results;
}

export function searchProducts(query: string, limit?: number): Product[] {
  const q = normalizeText(query);
  if (!q) return [];

  const all = Object.values(allProducts);
  const intent = parsePriceIntent(query);

  let results: Product[];

  if (!intent) {
    results = searchByName(all, q);
  } else if (intent.kind === "range") {
    // Dưới / trên / khoảng giá -> lọc theo giá (kèm tên nếu có), giá thấp đến cao
    results = all
      .filter((p) => {
        const price = priceToNumber(p.price);
        if (intent.min !== undefined && price < intent.min) return false;
        if (intent.max !== undefined && price > intent.max) return false;
        return nameHasAllWords(p.name, intent.text);
      })
      .sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
  } else {
    // Đúng 1 mức giá
    const byPrice = all.filter(
      (p) =>
        priceToNumber(p.price) === intent.exact &&
        nameHasAllWords(p.name, intent.text)
    );
    if (intent.bare) {
      // Số trơn (vd "01", "500") -> gộp cả sản phẩm khớp tên lẫn khớp giá
      const seen = new Set(byPrice.map((p) => p.slug));
      results = [...byPrice, ...searchByName(all, q).filter((p) => !seen.has(p.slug))];
    } else {
      results = byPrice;
    }
  }

  return typeof limit === "number" ? results.slice(0, limit) : results;
}

/* ───────────────────────── GỢI Ý GẦN NHẤT ───────────────────────── */

export interface SearchOutcome {
  /** Kết quả khớp đúng yêu cầu */
  results: Product[];
  /** Khi không có kết quả: các mẫu có giá gần nhất với mức giá đã tìm */
  nearby: Product[];
  /** Câu giải thích hiển thị phía trên phần gợi ý (null nếu không có gợi ý) */
  note: string | null;
}

const NEARBY_LIMIT = 12;
const MIN_BARE_PRICE = 50_000; // số trơn nhỏ hơn mức này (vd "01") coi là tìm theo tên

/**
 * Giống searchProducts, nhưng nếu tìm theo giá mà không có mẫu nào khớp
 * (vd gõ "480k") thì trả thêm các mẫu có giá gần nhất (mức giá thấp hơn
 * và cao hơn sát nhất).
 */
export function searchWithNearby(query: string, limit?: number): SearchOutcome {
  const results = searchProducts(query, limit);
  const none: SearchOutcome = { results, nearby: [], note: null };
  if (results.length > 0) return none;

  const intent = parsePriceIntent(query);
  if (!intent) return none;
  if (intent.kind === "exact" && intent.bare && (intent.exact ?? 0) < MIN_BARE_PRICE) {
    return none;
  }

  const pool = Object.values(allProducts).filter((p) => nameHasAllWords(p.name, intent.text));
  const lo = intent.min ?? intent.exact; // cận dưới của mức giá cần tìm
  const hi = intent.max ?? intent.exact; // cận trên

  let lower: number | undefined; // giá gần nhất nhưng thấp hơn cận dưới
  let upper: number | undefined; // giá gần nhất nhưng cao hơn cận trên
  for (const p of pool) {
    const price = priceToNumber(p.price);
    if (lo !== undefined && price < lo && (lower === undefined || price > lower)) lower = price;
    if (hi !== undefined && price > hi && (upper === undefined || price < upper)) upper = price;
  }

  const distance = (price: number) =>
    lo !== undefined && price < lo ? lo - price : price - (hi ?? price);

  // Lấy tối đa NEARBY_LIMIT/2 mẫu ở mỗi phía (thấp hơn / cao hơn) để gợi ý cân đối
  const side = NEARBY_LIMIT / 2;
  const below = pool.filter((p) => priceToNumber(p.price) === lower).slice(0, side);
  const above = pool.filter((p) => priceToNumber(p.price) === upper).slice(0, side);
  const nearby = [...below, ...above].sort(
    (a, b) => distance(priceToNumber(a.price)) - distance(priceToNumber(b.price))
  );

  if (nearby.length === 0) return none;

  let note: string;
  if (intent.text) {
    note = `Không có mẫu phù hợp với “${query.trim()}”. Gợi ý các mẫu có giá gần nhất:`;
  } else if (intent.kind === "exact") {
    note = `Không có mẫu hoa nào có giá ${formatVnd(intent.exact!)}. Gợi ý các mẫu có giá gần nhất:`;
  } else {
    const desc = describePriceSearch(query) ?? "có giá như bạn tìm";
    note = `Không có mẫu hoa nào ${desc}. Gợi ý các mẫu có giá gần nhất:`;
  }

  return { results, nearby, note };
}
