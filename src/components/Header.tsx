"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navGroups } from "@/data/categories";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  // Khoá cuộn trang khi menu mobile đang mở
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (slug: string) => {
    setOpenGroup((prev) => (prev === slug ? null : slug));
  };

  return (
    <>
      <div className="topbar">
        🌸 1998 Flower — Giao hoa trong <strong>90 phút</strong> tại TP HCM &nbsp;|&nbsp;
        Hotline: <a href="tel:0976848744">0976 848 744</a>
      </div>

      <header className="siteHeader">
        <div className="headerInner">
          <button
            className="hamburgerBtn"
            aria-label="Mở menu danh mục"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link href="/" className="logo" onClick={closeMenu}>
            <img
              src="/logoweb.png"
              alt="1998 Flower"
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
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

      {/* ── NAV DESKTOP (ẩn trên mobile qua CSS) ── */}
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

      {/* ── OVERLAY + DRAWER MENU (MOBILE) ── */}
      <div
        className={`mobileOverlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`mobileDrawer ${menuOpen ? "open" : ""}`}>
        <div className="mobileDrawerHeader">
          <span className="mobileDrawerTitle">Danh mục sản phẩm</span>
          <button className="mobileCloseBtn" aria-label="Đóng menu" onClick={closeMenu}>
            ✕
          </button>
        </div>

        <div className="mobileDrawerBody">
          {navGroups.map((group) => {
            const hasChildren = !!group.children && group.children.length > 0;
            const isOpen = openGroup === group.slug;
            return (
              <div className="mobileGroup" key={group.slug}>
                <div className="mobileGroupRow">
                  <Link
                    href={`/danh-muc/${group.slug}`}
                    className="mobileGroupLink"
                    onClick={closeMenu}
                  >
                    {group.label}
                  </Link>
                  {hasChildren && (
                    <button
                      className={`mobileGroupToggle ${isOpen ? "rotated" : ""}`}
                      aria-label={`Xem danh mục con của ${group.label}`}
                      aria-expanded={isOpen}
                      onClick={() => toggleGroup(group.slug)}
                    >
                      ▾
                    </button>
                  )}
                </div>

                {hasChildren && (
                  <div className={`mobileSubList ${isOpen ? "open" : ""}`}>
                    {group.children!.map((child) => (
                      <Link
                        href={`/danh-muc/${child.slug}`}
                        key={child.slug}
                        className="mobileSubLink"
                        onClick={closeMenu}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <a href="tel:0976848744" className="mobileHotlineBanner" onClick={closeMenu}>
            🔥 Freeship Tân Phú! — Gọi ngay 0976 848 744
          </a>
        </div>
      </aside>
    </>
  );
}
