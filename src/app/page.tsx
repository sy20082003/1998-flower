import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSection from "@/components/ProductSection";
import { products } from "@/data/products";

const partners = ["Samsung","Nestle","Generali","Schneider","GFK","Yeah 1","KOVA","Midea","Tekcom","Acis","Seniart","Matxi"];

export default function HomePage() {
  return ( 
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <h1>Shop Hoa Tươi <span>1998 Flower</span><br />Giao Hoa Trong Ngày 🌹</h1>
        <p>Hơn 100+ mẫu hoa tươi đẹp — Giao nhanh tận nơi tại TP HCM </p>
        <div className="heroBadges">
          <span className="badge">🚀 Giao nhanh nội thành</span>
          <span className="badge">🎀 Tặng kèm thiệp + banner + túi giấy</span>
          <span className="badge">📸 Gửi hình trước khi giao</span>
          <span className="badge">🚛 Miễn ship khu vực Tân Phú</span>
        </div>
        <a href="tel:0976848744" className="btnPrimary">☎ Đặt Hoa Ngay — 0976 848 744</a>
      </section>

      {/* PRODUCT SECTIONS */}
      <ProductSection
        title="🔥 Đang Giảm Giá"
        subtitle="Ưu đãi có hạn — đặt ngay kẻo hết!"
        products={products.sale}
      />
      <ProductSection
        title="⭐ Đặt Nhiều Nhất"
        subtitle="Những mẫu hoa được yêu thích nhất"
        products={products.popular}
      />
      <ProductSection
        title="✨ Sản Phẩm Mới"
        subtitle="Cập nhật mẫu hoa mới nhất từ FlowerCorner"
        products={products.newProducts}
      />
      <ProductSection
        title="🎂 Hoa Sinh Nhật"
        subtitle="Mẫu hoa tặng sinh nhật đặc sắc"
        products={products.birthday}
      />
      <ProductSection
        title="🏮 Hoa Khai Trương"
        subtitle="Chúc mừng khai trương, phồn vinh thịnh vượng"
        products={products.opening}
      />

      {/* PARTNERS */}
      <div className="partners">
        <div className="partnersInner">
          <h2>Khách Hàng Tiêu Biểu</h2>
          <div className="partnerLogos">
            {partners.map((name) => (
              <div key={name} className="partnerLogo">{name}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="about">
        <h2>Shop Hoa Tươi 1998 Flower</h2>
        <p>
          Bạn đang tìm kiếm một dịch vụ hoa tươi uy tín? 1998 Flower sẵn sàng hỗ trợ bạn với dịch vụ đặt hoa online và giao hàng tận nơi nhanh chóng.
          Chúng tôi tập trung tối ưu trải nghiệm và chuyên phục vụ duy nhất trong khu vực nội thành TP.HCM, đảm bảo hoa luôn giữ được độ tươi mới hoàn hảo khi đến tay người nhận.
        </p>
        <p>
          1998 Flower – Tiệm hoa tươi tại TP.HCM, nơi kết nối những cảm xúc trọn vẹn. Chỉ với vài thao tác đặt hoa online đơn giản, chúng tôi sẽ giao tận tay người thương của bạn những bó hoa tinh tế nhất.
          Dịch vụ áp dụng giao nhanh tại các quận nội thành TP.HCM.
        </p>
        <h2 style={{ marginTop: 24 }}>Cam Kết Từ 1998 Flower</h2>
        <ul>
          <li>Hoa tươi mới nhập về trong ngày</li>
          <li>Hoa đẹp và 90% giống như hình</li>
          <li>Giao hoa nhanh, đúng giờ đúng người đúng thời điểm</li>
          <li>Gửi hình hoa trước khi giao theo yêu cầu</li>
          <li>Đội ngũ florists chuyên nghiệp với nhiều năm kinh nghiệm</li>
        </ul>
        <p style={{ marginTop: 20 }}>
          📞 Gọi ngay <strong style={{ color: "var(--pink)" }}>0976 848 744</strong> để được tư vấn và đặt hoa!
        </p>
      </div>

      <Footer />
    </>
  );
}
