// Hàm dùng chung cho: (1) bill tổng hợp đơn theo ngày, (2) nhắc trước giờ giao.
// Không đụng tới Firebase hay giao diện, nên dễ kiểm tra riêng.

export const SRC = { facebook: "Facebook", zalo: "Zalo", ngoai: "Khách ngoài" };
const pad = n => String(n).padStart(2, "0");
export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const moneyFull = n => (Number(n) || 0).toLocaleString("vi-VN") + "đ";

/** "2026-11-03T12:30" (giờ địa phương) -> mili-giây; NaN nếu sai định dạng */
export function parseLocal(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(s || "");
  return m ? new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]).getTime() : NaN;
}

/** "2026-11-03T12:30" -> "12h30" */
export const fmtHour = s => (s && s.length >= 16 ? `${s.slice(11, 13)}h${s.slice(14, 16)}` : "--h--");

/** Giá viết tắt kiểu cửa hàng: 500000 -> 500k, 1200000 -> 1tr2, 1250000 -> 1tr25 */
export function shortMoney(n) {
  n = Math.round(Number(n) || 0);
  if (n <= 0) return "0đ";
  if (n % 1000 !== 0) return moneyFull(n);
  if (n < 1000000) return n / 1000 + "k";
  const m = Math.floor(n / 1000000), rest = (n % 1000000) / 1000;
  if (rest === 0) return m + "tr";
  return m + "tr" + String(rest).padStart(3, "0").replace(/0+$/, "");
}

const dayKeyOf = s => (s ? s.slice(0, 10) : "");

/** Các đơn giao trong ngày (dateKey dạng YYYY-MM-DD), xếp theo giờ giao */
export function ordersOfDay(orders, dateKey) {
  return orders
    .filter(o => dayKeyOf(o.giao) === dateKey)
    .sort((a, b) => (a.giao || "").localeCompare(b.giao || ""));
}

/** "Facebook: Hoài Vy" / "Zalo: Đức Trọng" / "Khách ngoài: ..." */
export const who = o => `${SRC[o.nguon] || "Khác"}: ${o.nguoiDat || "—"}`;

/** "2026-11-02T20:05" -> "02/11/2026 · 20:05" */
const fmtPlaced = s => (s && s.length >= 16 ? `${s.slice(8, 10)}/${s.slice(5, 7)}/${s.slice(0, 4)} · ${s.slice(11, 16)}` : "");

/**
 * HTML các tờ bill của một ngày: MỖI ĐƠN MỘT TỜ khổ A6 (105 x 148mm), xếp theo giờ giao.
 * Từ trên xuống: ngày đặt (nhỏ) -> ngày giao + giờ giao (cùng cỡ chữ to, cùng hàng)
 * -> loại hoa + giá (cùng hàng, giá đậm) -> tên khách -> nội dung in -> địa chỉ giao.
 * Mục nào đơn không có thì bỏ qua.
 */
export function buildBill({ orders, dateKey }) {
  const list = ordersOfDay(orders, dateKey);
  if (!list.length) return `<div class="bill-empty">Không có đơn nào giao trong ngày này.</div>`;
  const [, m, d] = dateKey.split("-");
  return list.map(o => {
    const placed = fmtPlaced(o.gioDat);
    return `<div class="bill">${placed ? `
  <div class="bill-placed">Ngày đặt: ${placed}</div>` : ""}
  <div class="bill-when"><span>${d}/${m}</span><span>${fmtHour(o.giao)}</span></div>
  <div class="bill-fp"><div class="bill-flower">${esc(o.loaiHoa)}</div><b class="bill-price">${shortMoney(o.gia)}</b></div>
  <div class="bill-who">${esc(who(o))}</div>${o.inChu ? `
  <div class="bill-blk"><div class="bill-lbl">Nội dung in</div><div class="bill-text">${esc(o.inChu)}</div></div>` : ""}${o.diaChi ? `
  <div class="bill-blk"><div class="bill-lbl">Địa chỉ giao</div><div class="bill-text">${esc(o.diaChi)}</div></div>` : ""}
</div>`;
  }).join("");
}

/**
 * Kiểu NHIỀU ĐƠN TRÊN MỘT TỜ A6: mỗi đơn là một khối nhỏ (cùng bố cục với tờ lớn nhưng cỡ chữ nhỏ hơn).
 * Trả về mảng HTML, mỗi phần tử một đơn, đã xếp theo giờ giao.
 */
export function buildBlocks({ orders, dateKey }) {
  const [, m, d] = dateKey.split("-");
  return ordersOfDay(orders, dateKey).map(o => {
    const placed = fmtPlaced(o.gioDat);
    return `<div class="cb">${placed ? `<div class="cb-placed">Ngày đặt: ${placed}</div>` : ""}<div class="cb-when"><span>${d}/${m}</span><span>${fmtHour(o.giao)}</span></div><div class="cb-fp"><div class="cb-flower">${esc(o.loaiHoa)}</div><b class="cb-price">${shortMoney(o.gia)}</b></div><div class="cb-who">${esc(who(o))}</div>${o.inChu ? `<div class="cb-line"><span class="cb-lbl">Nội dung in:</span> ${esc(o.inChu)}</div>` : ""}${o.diaChi ? `<div class="cb-line"><span class="cb-lbl">Địa chỉ giao:</span> ${esc(o.diaChi)}</div>` : ""}</div>`;
  });
}

/**
 * Chia các khối vào từng tờ theo thứ tự: đầy tờ này (capacity = chiều cao dùng được, mm) thì sang tờ mới.
 * heights: chiều cao từng khối (mm). Trả về mảng các tờ, mỗi tờ là mảng chỉ số khối.
 * Khối cao hơn cả tờ vẫn được đặt riêng một tờ.
 */
export function paginate(heights, capacity) {
  const pages = [];
  let cur = [], used = 0;
  heights.forEach((h, i) => {
    if (cur.length && used + h > capacity) { pages.push(cur); cur = []; used = 0; }
    cur.push(i); used += h;
  });
  if (cur.length) pages.push(cur);
  return pages;
}

/** Ghép các khối thành các tờ A6 (mỗi tờ cao 148mm, trừ lề trên/dưới 5mm = 138mm, chừa 1mm cho chắc) */
export function composeSheets(blocks, heights, capacity = 137) {
  return paginate(heights, capacity)
    .map(idxs => `<div class="sheet6">${idxs.map(i => blocks[i]).join("")}</div>`)
    .join("");
}

/* ---------- Nhắc trước giờ giao ---------- */

/** Đơn chưa giao mà còn tối đa leadMin phút nữa là tới giờ giao (chưa quá giờ hơn 1 phút) */
export function dueReminders(orders, nowMs, leadMin = 30) {
  return orders
    .filter(o => {
      if (o.daGiao || !o.giao) return false;
      const t = parseLocal(o.giao);
      if (!Number.isFinite(t)) return false;
      const diff = t - nowMs;
      return diff <= leadMin * 60000 && diff > -60000;
    })
    .sort((a, b) => a.giao.localeCompare(b.giao));
}

/** Khoá để mỗi đơn chỉ báo 1 lần; đổi giờ giao thì được báo lại */
export const reminderKey = o => `${o.id}|${o.giao}`;

export function reminderText(o, nowMs) {
  const mins = Math.max(0, Math.ceil((parseLocal(o.giao) - nowMs) / 60000));
  const when = mins <= 0 ? "đến giờ giao" : `còn ${mins} phút`;
  return {
    title: `⏰ Giao lúc ${fmtHour(o.giao)} (${when})`,
    body: `${o.loaiHoa} · ${shortMoney(o.gia)} · ${who(o)}`,
  };
}
