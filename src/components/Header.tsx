"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navGroups } from "@/data/categories";
import { searchProducts } from "@/lib/search";

export default function Header() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => searchProducts(query, 6), [query]);

  // Khoá cuộn trang khi menu mobile đang mở
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Đóng gợi ý tìm kiếm khi bấm ra ngoài ô search
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (slug: string) => {
    setOpenGroup((prev) => (prev === slug ? null : slug));
  };

  const goToSearchPage = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setShowSuggestions(false);
    router.push(`/tim-kiem?q=${encodeURIComponent(trimmed)}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToSearchPage(query);
  };

  const handleSuggestionClick = () => {
    setShowSuggestions(false);
    setQuery("");
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

          <div className="searchBar" ref={searchWrapRef}>
            <form onSubmit={handleSearchSubmit} className="searchForm" role="search">
              <input
                type="text"
                placeholder="Tìm kiếm mẫu hoa..."
                id="search-input"
                autoComplete="off"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => {
                  if (query.trim()) setShowSuggestions(true);
                }}
              />
              <button type="submit" aria-label="Tìm kiếm">🔍</button>
            </form>

            {showSuggestions && query.trim() && (
              <div className="searchSuggestions">
                {suggestions.length > 0 ? (
                  <>
                    {suggestions.map((p) => (
                      <Link
                        href={`/san-pham/${p.slug}`}
                        key={p.slug}
                        className="suggestionItem"
                        onClick={handleSuggestionClick}
                      >
                        <img src={p.image} alt={p.name} className="suggestionImg" />
                        <div className="suggestionInfo">
                          <span className="suggestionName">{p.name}</span>
                          <span className="suggestionPrice">{p.price}</span>
                        </div>
                      </Link>
                    ))}
                    <button
                      type="button"
                      className="suggestionSeeAll"
                      onClick={() => goToSearchPage(query)}
                    >
                      Xem tất cả kết quả cho “{query.trim()}”
                    </button>
                  </>
                ) : (
                  <div className="suggestionEmpty">
                    Không tìm thấy mẫu hoa phù hợp.<br />
                    Gọi <a href="tel:0976848744">0976 848 744</a> để được tư vấn trực tiếp!
                  </div>
                )}
              </div>
            )}
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
