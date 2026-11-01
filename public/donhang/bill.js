// Hàm dùng chung cho: (1) bill tổng hợp đơn theo ngày, (2) nhắc trước giờ giao.
// Không đụng tới Firebase hay giao diện, nên dễ kiểm tra riêng.

export const SRC = { facebook: "Facebook", zalo: "Zalo", ngoai: "Khách ngoài" };
const WD = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
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

/** HTML của tờ bill tổng hợp (khổ A6, rộng 105mm, dài tuỳ số đơn) */
export function buildBill({ orders, dateKey, shop = {}, withAddr = false, now = new Date() }) {
  const list = ordersOfDay(orders, dateKey);
  const [y, m, d] = dateKey.split("-");
  const wd = WD[new Date(+y, +m - 1, +d).getDay()];
  const total = list.reduce((a, o) => a + (Number(o.gia) || 0), 0);

  const head = `<div class="bill-head">
    <b class="bill-shop">${esc(shop.ten || "1998 Flower")}</b>
    <div class="bill-title">BILL TỔNG HỢP ĐƠN</div>
    <div class="bill-date">${wd} · ${d}/${m}/${y}</div>
    <div class="bill-count">${list.length} đơn${list.length ? ` · ${shortMoney(total)}` : ""}</div>
  </div>`;

  const body = list.length
    ? list.map((o, i) => `<div class="bill-o${o.daGiao ? " done" : ""}">
    <div class="bill-r1"><span><b>Đơn ${pad(i + 1)}</b> · <b>${fmtHour(o.giao)}</b></span><i class="bill-box${o.daGiao ? " on" : ""}" title="${o.daGiao ? "Đã giao" : "Chưa giao"}"></i></div>
    <div class="bill-r2"><span class="bill-p">${esc(o.loaiHoa)}</span><b class="bill-m">${shortMoney(o.gia)}</b></div>
    <div class="bill-r3">${esc(who(o))}</div>${withAddr && o.diaChi ? `
    <div class="bill-r4">Giao: ${esc(o.diaChi)}</div>` : ""}
  </div>`).join("")
    : `<div class="bill-empty">Không có đơn nào giao trong ngày này.</div>`;

  const foot = list.length ? `<div class="bill-total"><span>Tổng ${list.length} đơn</span><b>${moneyFull(total)}</b></div>` : "";
  const printed = `In lúc ${pad(now.getHours())}:${pad(now.getMinutes())} ${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
  return `<div class="bill">${head}${body}${foot}<div class="bill-end">${printed}</div></div>`;
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
