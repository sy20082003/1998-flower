import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop Hoa Tươi 1998 Flower - Giao Hoa Trong Ngày",
  description:
    "Shop hoa tươi 1998 Flower đặt hoa online giao nhanh tận nơi trong nội thành. Giao Miễn Phí tại khu vực Tân Phú",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
