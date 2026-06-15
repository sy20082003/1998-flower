"use client";
import { useEffect } from "react";

interface OrderModalProps {
  productName: string;
  onClose: () => void;
}

export default function OrderModal({ productName, onClose }: OrderModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modalOverlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <div className="modalIcon">🌸</div>
        <h3>{productName || "Đặt Hoa"}</h3>
        <p>
          Vui lòng liên hệ hotline để đặt hoa và được tư vấn miễn phí.
          Chúng tôi giao hoa nhanh trong <strong>90 phút</strong> tại TP HCM!
        </p>
        <a href="tel:0976848744" className="modalPhone">Hotline: 0976 848 744</a>
<a 
  href="https://zalo.me/0976848744" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ display: 'block', marginTop: '10px', textAlign: 'center' }}
>
  <img 
    src="/zaloqrcode.png" 
    alt="QR Code Zalo" 
    style={{ width: '150px', height: '150px', objectFit: 'contain', margin: '0 auto' }} 
  />
  <span style={{ display: 'block', fontSize: '14px', color: 'var(--green)', marginTop: '5px' }}>
    Nhấn hoặc quét mã QR để liên hệ đặt hoa!
  </span> 
</a>
        <button className="modalClose" onClick={onClose}>Đóng</button>
      </div>
    </div>
  );
}
