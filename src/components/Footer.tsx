import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="benefits">
        <div className="benefitsInner">
          <div className="benefitItem"><span className="benefitIcon">⚡</span> Giao hoa trong 90 phút</div>
          <div className="benefitItem"><span className="benefitIcon">🌸</span> Hoa tươi nhập về trong ngày</div>
          <div className="benefitItem"><span className="benefitIcon">🎨</span> Thiết kế theo yêu cầu</div>
          <div className="benefitItem"><span className="benefitIcon">💳</span> Hỗ trợ thanh toán chuyển khoản</div>
          <div className="benefitItem"><span className="benefitIcon">📍</span> ĐC: 272 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, TP.HCM</div>
        </div>
      </div>

      <footer className="siteFooter">
        <div className="footerGrid">
          <div className="footerCol">
            <div className="footerLogo">1998 Flower</div>
            <p>Giao hoa nhanh chóng tại TP HCM.</p>
            <p style={{ marginTop: 10 }}><strong>Hotline:</strong> <a href="tel:0976848744">0976 848 744</a></p>
            <p><strong>Email:</strong> hoatuoitanphu1998flower@gmail.com</p>
          </div>
          <div className="footerCol">
            <h4>Chăm Sóc Khách Hàng</h4>
            <a href="#">Giới Thiệu</a>
            <a href="#">Liên Hệ</a>
            <a href="#">Chính Sách Vận Chuyển</a>
            <a href="#">Câu Hỏi Thường Gặp</a>
            <a href="#">Bảo Mật Thông Tin</a>
            <a href="#">Chính Sách Hoàn Tiền</a>
            <a href="#">Xử Lý Khiếu Nại</a>
          </div>
          <div className="footerCol">
            <h4>Theo Dõi Chúng Tôi</h4>
            <div className="socialLinks">
              <a className="socialLink" href="https://www.facebook.com/hoatuoi1998flower" target="_blank" rel="noreferrer">Facebook</a>
              <a className="socialLink" href="https://www.instagram.com/_1998flower?fbclid=IwY2xjawSX6qdleHRuA2FlbQIxMABicmlkETE4Q3IxMlFyejdUeUNsWDEwc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHuR0RD8zBkF3306jzHgnlUoJ6DoIj0l1_I4Esop7Fw2LOXoG0FMXhVQKSgTh_aem_1to7aKoHP_RKOdRCxt-SBw" target="_blank" rel="noreferrer">Instagram</a>
              <a className="socialLink" href="https://www.tiktok.com/@1998flower_?fbclid=IwY2xjawSYHulleHRuA2FlbQIxMABicmlkETF1eFh3YWhXbFNaWW11S0prc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs1-V1nSM04a7nKGEqLV9weZC9EbOyDl0ed4qoBKViy9YyLjnYkcgyn4lq82_aem_MTdCgtaeap5vK-uoB89dvQ" target="_blank" rel="noreferrer">Youtube</a>
              <a className="socialLink" href="https://zalo.me/0976848744" target="_blank" rel="noreferrer">Zalo</a>
            </div>
          </div>
          <div className="footerCol">
            <h4>Cửa Hàng</h4>
            <p><strong>Địa Chỉ Cửa Hàng:</strong><br />272 Nguyễn Sơn, Phú Thọ Hòa, Tân Phú, TP.HCM</p>
          </div>
        </div>
        <div className="footerBottom">
          © 2024 shophoa1998flower.com — Hoa Tươi Tân Phú 1998 Flower.
        </div>
      </footer>

      {/* Sticky hotline buttons */}
      <div className="stickyHotline">
        <a href="https://zalo.me/0976848744" className="hotlineBtn zaloBtn" target="_blank" rel="noreferrer">Zalo</a>
        <a href="https://www.facebook.com/hoatuoi1998flower" className="hotlineBtn zaloBtn" target="_blank" rel="noreferrer">Facebook</a>
        <a href="tel:0976848744" className="hotlineBtn">Hotline 0976 848 744</a>
      </div>
    </>
  );
}
