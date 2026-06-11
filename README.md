# 🌸 FlowerCorner — Next.js Website

Website clone của shop hoa tươi **FlowerCorner**, xây dựng bằng **Next.js 14 + TypeScript**.  
Đã lược bỏ hoàn toàn chức năng giỏ hàng và thanh toán — khách hàng đặt hoa qua hotline.

## ✨ Tính Năng

| Tính năng | Trạng thái |
|---|---|
| Trang chủ đầy đủ (hero, banner, 5 danh mục sản phẩm) | ✅ |
| Trang chi tiết sản phẩm (`/san-pham/[slug]`) | ✅ |
| SEO metadata động cho từng sản phẩm | ✅ |
| Static Site Generation (SSG) cho tất cả sản phẩm | ✅ |
| Navigation dropdown menu | ✅ |
| Popup "Đặt Hàng" hiển thị số hotline | ✅ |
| Nút hotline & Zalo cố định góc màn hình | ✅ |
| Responsive mobile / tablet / desktop | ✅ |
| TypeScript toàn bộ | ✅ |
| Giỏ hàng / Thanh toán | ❌ (đã bỏ) |

## 📁 Cấu Trúc Dự Án

```
flowercorner-nextjs/
├── next.config.js
├── tsconfig.json
├── package.json
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout + metadata
│   │   ├── page.tsx              # Trang chủ (Server Component)
│   │   ├── globals.css           # CSS toàn cục
│   │   ├── not-found.tsx         # Trang 404
│   │   └── san-pham/
│   │       └── [slug]/
│   │           └── page.tsx      # Trang chi tiết sản phẩm
│   ├── components/
│   │   ├── Header.tsx            # Header + Navigation
│   │   ├── Footer.tsx            # Footer + sticky hotline
│   │   ├── ProductCard.tsx       # Card sản phẩm (có modal)
│   │   ├── ProductSection.tsx    # Section lưới sản phẩm
│   │   ├── ProductDetailClient.tsx # Chi tiết sản phẩm (client)
│   │   └── OrderModal.tsx        # Modal đặt hàng qua hotline
│   └── data/
│       └── products.ts           # Toàn bộ dữ liệu sản phẩm
```

## 🚀 Cài Đặt & Chạy

### Yêu cầu
- Node.js >= 18.0.0
- npm hoặc yarn

### Bước 1 — Clone repo
```bash
git clone https://github.com/<your-username>/flowercorner-nextjs.git
cd flowercorner-nextjs
```

### Bước 2 — Cài dependencies
```bash
npm install
```

### Bước 3 — Chạy development server
```bash
npm run dev
# → http://localhost:3000
```

### Build production
```bash
npm run build
npm start
```

## 📤 Push lên GitHub

```bash
git init
git add .
git commit -m "Initial commit: FlowerCorner Next.js"
git remote add origin https://github.com/<your-username>/flowercorner-nextjs.git
git push -u origin main
```

## ☁️ Deploy miễn phí

### Vercel (khuyến nghị — tích hợp sẵn với Next.js)
1. Vào [vercel.com](https://vercel.com) → Import Git Repository
2. Chọn repo → Deploy
3. Done! Tự động có domain `*.vercel.app` 🎉

### Netlify
```bash
npm run build  # tạo thư mục .next
# Upload thư mục .next lên Netlify
```

### Railway / Render
- Build Command: `npm run build`
- Start Command: `npm start`

## 🎨 Tuỳ Chỉnh

### Thêm / sửa sản phẩm
Chỉnh sửa `src/data/products.ts`:
```ts
{ slug: "ten-hoa", name: "Tên Hoa", price: "500,000₫", emoji: "🌹", category: "sale" }
```

### Đổi số hotline
Tìm & thay `1900 633 045` trong:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/OrderModal.tsx`
- `src/components/ProductDetailClient.tsx`

### Đổi màu sắc chủ đạo
Chỉnh CSS variables trong `src/app/globals.css`:
```css
:root {
  --pink:  #d4607a;   /* Màu chính */
  --green: #3a6b4e;   /* Màu phụ  */
}
```

## 📄 License
MIT
