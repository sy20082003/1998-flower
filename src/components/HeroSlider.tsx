"use client";
// Banner trượt (carousel) ở đầu trang chủ: tự chuyển ảnh, mũi tên trái/phải,
// chấm tròn, vuốt trên điện thoại, dừng khi rê chuột / chạm vào.
// Mỗi banner có thể có ảnh riêng cho máy tính (image) và điện thoại (mobileImage).
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { HeroSlide } from "@/data/heroSlides";

const AUTOPLAY_MS = 5000;

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Máy tính: chỉ các banner có ảnh ngang. Điện thoại: tất cả banner có ảnh dùng được.
  const visible = useMemo(
    () => slides.filter((s) => (isMobile ? s.mobileImage ?? s.image : s.image)),
    [slides, isMobile]
  );
  const count = visible.length;
  const current = count > 0 ? Math.min(index, count - 1) : 0;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Nhận biết điện thoại (khớp với breakpoint trong CSS)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Người dùng bật "giảm chuyển động" -> không tự chạy
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Tự chuyển ảnh
  useEffect(() => {
    if (count < 2 || paused || reduceMotion) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count, paused, reduceMotion, next, current]);

  if (count === 0) return null;

  // Mọi banner đều có bản dùng được cho điện thoại -> khung 4:5 (ảnh đứng)
  const allHaveMobile = slides.every((s) => s.mobileImage || s.fit === "contain");

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    }
    touchStartX.current = null;
    setPaused(false);
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <div className="heroSliderWrap">
      <div
        className={`heroSlider ${allHaveMobile ? "heroSliderTallMobile" : ""}`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Banner khuyến mãi"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="heroTrack" style={{ transform: `translateX(-${current * 100}%)` }}>
          {visible.map((s, i) => {
            const main = s.image ?? s.mobileImage!;
            const picture = (
              <picture>
                {s.image && s.mobileImage && (
                  <source media="(max-width: 640px)" srcSet={s.mobileImage} />
                )}
                <img
                  src={main}
                  alt={s.alt}
                  draggable={false}
                  style={s.position ? { objectPosition: s.position } : undefined}
                  loading={i === 0 ? "eager" : "lazy"}
                  {...(i === 0 ? { fetchPriority: "high" as const } : {})}
                />
              </picture>
            );
            return (
              <div
                className={`heroSlide ${s.fit === "contain" ? "fitContain" : ""}`}
                style={
                  {
                    "--bg": `url(${main})`,
                    "--bgm": `url(${s.mobileImage ?? main})`,
                  } as React.CSSProperties
                }
                key={main}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${count}`}
                aria-hidden={i !== current}
              >
                {s.href ? (
                  <Link href={s.href} tabIndex={i === current ? 0 : -1}>
                    {picture}
                  </Link>
                ) : (
                  picture
                )}
              </div>
            );
          })}
        </div>

        {count > 1 && (
          <>
            <button type="button" className="heroArrow heroArrowPrev" aria-label="Ảnh trước" onClick={prev}>
              ‹
            </button>
            <button type="button" className="heroArrow heroArrowNext" aria-label="Ảnh tiếp theo" onClick={next}>
              ›
            </button>
            <div className="heroDots">
              {visible.map((s, i) => (
                <button
                  key={s.image ?? s.mobileImage}
                  type="button"
                  className={`heroDot ${i === current ? "active" : ""}`}
                  aria-label={`Chuyển tới ảnh ${i + 1}`}
                  aria-current={i === current}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
