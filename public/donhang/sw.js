// Service worker tối giản cho Sổ Đơn Hoa: chỉ để hiện thông báo nhắc giờ giao
// (Android/Chrome bắt buộc phải hiện thông báo qua service worker) và mở lại app khi bấm vào thông báo.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of all) {
      if (c.url.includes("/donhang/")) { await c.focus(); return; }
    }
    await self.clients.openWindow("/donhang/index.html");
  })());
});
