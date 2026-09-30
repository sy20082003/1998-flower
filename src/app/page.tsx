import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import HomeProducts from "@/components/HomeProducts";
import { heroSlides } from "@/data/heroSlides";
import { products } from "@/data/products";


export default function HomePage() {
  return ( 
    <>
      <Header />

      {/* HERO: banner trượt nếu đã có ảnh trong src/data/heroSlides.ts, không thì dùng hero chữ */}
      {heroSlides.length > 0 ? (
        <>
          <h1 className="srOnly">Shop Hoa Tươi 1998 Flower — Giao Hoa Trong Ngày tại TP.HCM</h1>
          <HeroSlider slides={heroSlides} />
          <div className="heroPerks">
            <span className="badge">🚀 Giao nhanh nội thành</span>
            <span className="badge">🎀 Tặng kèm thiệp + banner + túi giấy</span>
            <span className="badge">📸 Gửi hình trước khi giao</span>
            <span className="badge">🚛 Miễn ship khu vực Tân Phú</span>
          </div>
        </>
      ) : (
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
      )}

      {/* PRODUCT SECTIONS (có bộ lọc màu + giá dùng chung) */}
      <HomeProducts
        sections={[
          { title: "🔥 Đang Giảm Giá", subtitle: "Ưu đãi có hạn — đặt ngay kẻo hết!", products: products.sale },
          { title: "⭐ Đặt Nhiều Nhất", subtitle: "Những mẫu hoa được yêu thích nhất", products: products.popular },
          { title: "✨ Sản Phẩm Mới", subtitle: "Cập nhật mẫu hoa mới nhất từ FlowerCorner", products: products.newProducts },
          { title: "🎂 Hoa Sinh Nhật", subtitle: "Mẫu hoa tặng sinh nhật đặc sắc", products: products.birthday },
          { title: "🏮 Hoa Khai Trương", subtitle: "Chúc mừng khai trương, phồn vinh thịnh vượng", products: products.opening },
          { title: "💐 Bó Hoa", subtitle: "Những bó hoa tươi được tuyển chọn kỹ lưỡng", products: products.bo },
        ]}
      />

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
