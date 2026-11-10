import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { allProducts } from "@/data/products";
import { SITE, SITE_URL, abs, priceNumber } from "@/lib/site";

// Google Analytics 4 (gtag.js)
const GA_ID = "G-Z4YRFJKB9W";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shop Hoa Tươi 1998 Flower - Giao Hoa Trong Ngày",
  description:
    "Shop hoa tươi 1998 Flower đặt hoa online giao nhanh tận nơi trong nội thành. Giao Miễn Phí tại khu vực Tân Phú. Hotline: 0976 848 744",
  keywords: "hoa tươi, shop hoa tphcm, hoa sinh nhật, hoa khai trương, hoa tang lễ, lan hồ điệp, giao hoa nhanh, hoa tân phú",
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Shop Hoa Tươi 1998 Flower - Giao Hoa Trong Ngày",
    description: "Đặt hoa online giao nhanh tận nơi. Freeship khu vực Tân Phú. Hotline: 0976 848 744",
    url: SITE_URL,
    siteName: "1998 Flower",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "1998 Flower - Shop Hoa Tươi Tân Phú" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Hoa Tươi 1998 Flower - Giao Hoa Trong Ngày",
    description: "Đặt hoa online giao nhanh tận nơi. Freeship khu vực Tân Phú.",
    images: ["/og-default.jpg"],
  },
};

// Dữ liệu có cấu trúc (JSON-LD) loại Florist (một dạng LocalBusiness) giúp Google hiểu đây là tiệm hoa ở Tân Phú.
// Giờ mở cửa / tọa độ / bản đồ chỉ được đưa vào khi đã điền trong src/lib/site.ts.
const allPrices = Object.values(allProducts).map((p) => priceNumber(p.price)).filter(Boolean);
const florist: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Florist",
  "@id": `${SITE_URL}/#florist`,
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE_URL,
  image: [abs("/og-default.jpg")],
  logo: abs("/logoweb.png"),
  telephone: SITE.phoneIntl,
  email: SITE.email,
  priceRange: `${Math.min(...allPrices).toLocaleString("vi-VN")}₫ - ${Math.max(...allPrices).toLocaleString("vi-VN")}₫`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.street}, ${SITE.address.ward}`,
    addressLocality: SITE.address.district,
    addressRegion: SITE.address.city,
    addressCountry: "VN",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: SITE.address.district },
    { "@type": "City", name: SITE.address.city },
  ],
  sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.tiktok, SITE.social.zalo],
  ...(SITE.geo ? { geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng } } : {}),
  ...(SITE.mapUrl ? { hasMap: SITE.mapUrl } : {}),
  ...(SITE.openingHours
    ? {
        openingHoursSpecification: SITE.openingHours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(florist) }} />
      </head>
      <body>
        {children}

        {/* Google tag (gtag.js) - tải sau khi trang đã tương tác để không làm chậm trang */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
