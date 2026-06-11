import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="notFound">
        <div className="emoji">🌷</div>
        <h2>Không tìm thấy trang</h2>
        <p>Trang này không tồn tại hoặc sản phẩm đã hết hàng.</p>
        <Link href="/" className="btnPrimary">← Về Trang Chủ</Link>
      </div>
      <Footer />
    </>
  );
}
