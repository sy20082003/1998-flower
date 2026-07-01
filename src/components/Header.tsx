"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { navGroups } from "@/data/categories";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  // Đóng menu mobile mỗi khi người dùng chuyển kích thước màn hình lên desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Khoá cuộn trang khi menu mobile đang mở
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setMenuOpen(false);
    router.push(`/tim-kiem?q=${encodeURIComponent(q)}`);
  };

  const toggleGroup = (slug: string) => {
    setOpenGroup((cur) => (cur === slug ? null : slug));
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
            type="button"
            className="menuToggle"
            aria-label={menuOpen ? "Đóng danh mục" : "Mở danh mục"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
            <img
              src="/logoweb.png"
              alt="1998 Flower"
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          <form className="searchBar" onSubmit={handleSearch} role="search">
            <input
              type="text"
              placeholder="Tìm kiếm mẫu hoa..."
              id="search-input"
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" aria-label="Tìm kiếm">🔍</button>
          </form>

          <div className="headerContact">
            <strong>Hotline: 0976 848 744</strong>
          </div>
        </div>
      </header>

      <nav className={`siteNav ${menuOpen ? "siteNavOpen" : ""}`}>
        <div className="navInner">
          {navGroups.map((group) => (
            <div
              className={`navItem ${openGroup === group.slug ? "navItemOpenMobile" : ""}`}
              key={group.slug}
            >
              <span className="navItemRow">
                <Link
                  href={`/danh-muc/${group.slug}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {group.label}
                </Link>
                {group.children && group.children.length > 0 && (
                  <button
                    type="button"
                    className="navCaret"
                    aria-label={`Xem thêm ${group.label}`}
                    aria-expanded={openGroup === group.slug}
                    onClick={() => toggleGroup(group.slug)}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}
              </span>
              {group.children && group.children.length > 0 && (
                <div className="dropdown">
                  {group.children.map((child) => (
                    <Link
                      href={`/danh-muc/${child.slug}`}
                      key={child.slug}
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="navItem navSale">
            <a href="tel:0976848744" onClick={() => setMenuOpen(false)}>
              🔥 Freeship Tân Phú!
            </a>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="navOverlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
