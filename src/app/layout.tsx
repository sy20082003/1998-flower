import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop Hoa Tươi 1998 Flower - Giao Hoa Trong Ngày",
  description:
    "Shop hoa tươi 1998 Flower đặt hoa online giao nhanh tận nơi trong nội thành. Giao Miễn Phí tại khu vực Tân Phú. Hotline: 0976 848 744",
  keywords: "hoa tươi, shop hoa tphcm, hoa sinh nhật, hoa khai trương, hoa tang lễ, lan hồ điệp, giao hoa nhanh, hoa tân phú",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Shop Hoa Tươi 1998 Flower - Giao Hoa Trong Ngày",
    description: "Đặt hoa online giao nhanh tận nơi. Freeship khu vực Tân Phú. Hotline: 0976 848 744",
    url: "https://www.shophoa1998flower.com",
    siteName: "1998 Flower",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://www.shophoa1998flower.com/icon.png",
        width: 800,
        height: 600,
        alt: "1998 Flower - Shop Hoa Tươi",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "1998 Flower",
              "url": "https://www.shophoa1998flower.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.shophoa1998flower.com/icon.png",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "0976848744",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese",
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tân Phú",
                "addressRegion": "TP. Hồ Chí Minh",
                "addressCountry": "VN",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
