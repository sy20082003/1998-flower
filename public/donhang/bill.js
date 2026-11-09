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

/**
 * HTML các tờ bill của một ngày: MỖI ĐƠN MỘT TỜ khổ A6 (105 x 148mm), xếp theo giờ giao.
 * Mỗi tờ chỉ gồm: ngày, giờ giao (chữ to), loại hoa, giá, tên khách.
 */
export function buildBill({ orders, dateKey }) {
  const list = ordersOfDay(orders, dateKey);
  if (!list.length) return `<div class="bill-empty">Không có đơn nào giao trong ngày này.</div>`;
  const [y, m, d] = dateKey.split("-");
  return list.map(o => `<div class="bill">
  <div class="bill-date">${d}/${m}/${y}</div>
  <div class="bill-time">${fmtHour(o.giao)}</div>
  <div class="bill-flower">${esc(o.loaiHoa)}</div>
  <div class="bill-price">${shortMoney(o.gia)}</div>
  <div class="bill-who">${esc(who(o))}</div>
</div>`).join("");
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
