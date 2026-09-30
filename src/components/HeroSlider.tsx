"use client";
// Banner trượt (carousel) ở đầu trang chủ: tự chuyển ảnh, mũi tên trái/phải,
// chấm tròn, vuốt trên điện thoại, dừng khi rê chuột / chạm vào.
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { HeroSlide } from "@/data/heroSlides";

const AUTOPLAY_MS = 5000;

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

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
  }, [count, paused, reduceMotion, next, index]);

  if (count === 0) return null;

  // Mọi ảnh đều có bản dùng được cho điện thoại -> khung 4:5 (ảnh đứng)
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
        <div className="heroTrack" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => {
            const picture = (
              <picture>
                {s.mobileImage && <source media="(max-width: 640px)" srcSet={s.mobileImage} />}
                <img
                  src={s.image}
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
                    "--bg": `url(${s.image})`,
                    "--bgm": `url(${s.mobileImage ?? s.image})`,
                  } as React.CSSProperties
                }
                key={s.image}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${count}`}
                aria-hidden={i !== index}
              >
                {s.href ? (
                  <Link href={s.href} tabIndex={i === index ? 0 : -1}>
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
              {slides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  className={`heroDot ${i === index ? "active" : ""}`}
                  aria-label={`Chuyển tới ảnh ${i + 1}`}
                  aria-current={i === index}
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
