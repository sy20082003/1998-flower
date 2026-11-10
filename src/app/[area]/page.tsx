import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { products } from "@/data/products";
import { AREAS, OPEN_HOURS_TEXT, areaBySlug } from "@/data/areas";
import { SITE, abs } from "@/lib/site";

interface Props {
  params: { area: string };
}

// Chỉ các trang khu vực đã khai báo mới tồn tại; đường dẫn khác trả về 404 như bình thường
export const dynamicParams = false;

export async function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = areaBySlug[params.area];
  if (!area) return { title: "Không tìm thấy — 1998 Flower", robots: { index: false } };
  const path = `/${area.slug}`;
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: path,
      type: "website",
      locale: "vi_VN",
      siteName: SITE.name,
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: area.h1 }],
    },
    twitter: { card: "summary_large_image", title: area.metaTitle, description: area.metaDescription, images: ["/og-default.jpg"] },
  };
}

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SITE.fullAddress)}&output=embed`;

export default function AreaPage({ params }: Props) {
  const area = areaBySlug[params.area];
  if (!area) notFound();

  const list = products[area.productSource].slice(0, 12);
  const others = AREAS.filter((a) => a.slug !== area.slug);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: abs("/") },
      { "@type": "ListItem", position: 2, name: area.breadcrumb, item: abs(`/${area.slug}`) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Header />

      <div className="breadcrumbBar">
        <div className="breadcrumbInner">
          <Link href="/">Trang chủ</Link> <span>/</span> <span>{area.breadcrumb}</span>
        </div>
      </div>

      <main>
        {/* Giới thiệu khu vực */}
        <section className="areaHero">
          <div className="areaHeroInner">
            <h1>{area.h1}</h1>
            {area.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="areaFacts">
              <div className="areaFact">
                <b>📍 Địa chỉ</b>
                <span>{SITE.fullAddress}</span>
              </div>
              <div className="areaFact">
                <b>🕕 Giờ mở cửa</b>
                <span>{OPEN_HOURS_TEXT}</span>
              </div>
              <div className="areaFact">
                <b>🚚 Phí giao tới {area.name}</b>
                <span>{area.feeLabel}</span>
              </div>
              <div className="areaFact">
                <b>🎁 Tặng kèm</b>
                <span>Thiệp và banner chúc mừng miễn phí</span>
              </div>
            </div>

            <div className="areaCta">
              <a href={`tel:${SITE.phone}`} className="btnPrimary">☎ Gọi ngay {SITE.phoneDisplay}</a>
              <a href={SITE.social.zalo} className="btnPrimary areaZalo" target="_blank" rel="noopener noreferrer">💬 Nhắn Zalo đặt hoa</a>
            </div>
          </div>
        </section>

        {/* Phí ship các khu vực + tuyến đường */}
        <section className="section areaBlock">
          <h2 className="areaH2">Khu vực giao hoa và phí ship</h2>
          <div className="areaTableWrap">
            <table className="areaTable">
              <thead>
                <tr><th>Khu vực</th><th>Phí giao hoa</th><th></th></tr>
              </thead>
              <tbody>
                {AREAS.map((a) => (
                  <tr key={a.slug} className={a.slug === area.slug ? "current" : ""}>
                    <td>{a.name}</td>
                    <td><b>{a.feeLabel}</b></td>
                    <td>{a.slug === area.slug ? "Bạn đang xem" : <Link href={`/${a.slug}`}>Xem trang {a.name}</Link>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="areaNote">Phí giao tính theo nơi nhận hoa. Shop hiện giao hoa tại ba khu vực trên.</p>

          <h3 className="areaH3">Các tuyến đường giao hoa chính tại {area.name}</h3>
          <ul className="areaChips">
            {area.streets.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        {/* Lưới sản phẩm */}
        <ProductSection title={area.productTitle} subtitle={area.productSubtitle} products={list} initialCount={12} />

        {/* Bản đồ */}
        <section className="section areaBlock">
          <h2 className="areaH2">Bản đồ cửa hàng 1998 Flower</h2>
          <p className="areaNote">{SITE.fullAddress} · Mở cửa {OPEN_HOURS_TEXT}</p>
          <p className="areaNote">
            <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="areaDir">📍 Chỉ đường tới cửa hàng bằng Google Maps</a>
          </p>
          <iframe
            className="areaMap"
            src={mapEmbed}
            title="Bản đồ cửa hàng hoa tươi 1998 Flower tại Tân Phú"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>

        {/* Câu hỏi thường gặp */}
        <section className="section areaBlock">
          <h2 className="areaH2">Câu hỏi thường gặp khi đặt hoa {area.name}</h2>
          <div className="areaFaq">
            {area.faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Liên kết nội bộ */}
        <section className="section areaBlock">
          <h2 className="areaH2">Xem thêm</h2>
          <ul className="areaLinks">
            <li><Link href="/danh-muc/hoa-sinh-nhat">Hoa sinh nhật</Link></li>
            <li><Link href="/danh-muc/hoa-khai-truong">Hoa khai trương</Link></li>
            <li><Link href="/danh-muc/hoa-tang-le">Hoa tang lễ</Link></li>
            <li><Link href="/danh-muc/bo-hoa">Bó hoa</Link></li>
            {others.map((a) => (
              <li key={a.slug}><Link href={`/${a.slug}`}>Giao hoa tại {a.name}</Link></li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
