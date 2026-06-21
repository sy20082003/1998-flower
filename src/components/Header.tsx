"use client";
import Link from "next/link";
import { navGroups } from "@/data/categories";

export default function Header() {
  return (
    <>
      <div className="topbar">
        🌸 1998 Flower — Giao hoa trong <strong>90 phút</strong> tại TP HCM &nbsp;|&nbsp;
        Hotline: <a href="tel:0976848744">0976 848 744</a>
      </div>

      <header className="siteHeader">
        <div className="headerInner">
          <Link href="/" className="logo">
<img 
  src="/logoweb.png" 
  style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
/>
          </Link>
          <div className="searchBar">
            <input type="text" placeholder="Tìm kiếm mẫu hoa..." id="search-input" />
            <button onClick={() => alert("Vui lòng gọi 0976 848 744 để được tư vấn trực tiếp!")}>🔍</button>
          </div>
          <div className="headerContact">
            <strong>Hotline: 0976 848 744</strong>
          </div>
        </div>
      </header>

      <nav className="siteNav">
        <div className="navInner">
          {navGroups.map((group) => (
            <div className="navItem" key={group.slug}>
              <Link href={`/danh-muc/${group.slug}`}>
                {group.label}
                {group.children && group.children.length > 0 ? " ▾" : ""}
              </Link>
              {group.children && group.children.length > 0 && (
                <div className="dropdown">
                  {group.children.map((child) => (
                    <Link href={`/danh-muc/${child.slug}`} key={child.slug}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="navItem navSale">
            <a href="tel:0976848744">🔥 Freeship Tân Phú!</a>
          </div>
        </div>
      </nav>
    </>
  );
}
