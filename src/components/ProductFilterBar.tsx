"use client";
// Thanh bộ lọc gọn: sắp xếp theo giá (menu chọn) + lọc theo tông màu (chấm màu).
import { COLOR_LABELS, COLOR_SWATCH, ColorKey } from "@/data/productColors";
import type { ColorFilter, SortMode } from "@/lib/productFilter";

interface Props {
  sort: SortMode;
  color: ColorFilter;
  onSortChange: (s: SortMode) => void;
  onColorChange: (c: ColorFilter) => void;
  colors: { color: ColorKey; count: number }[];
  total: number;   // tổng số mẫu chưa lọc
  shown: number;   // số mẫu sau khi lọc
}

const SORTS: { value: SortMode; label: string }[] = [
  { value: "default", label: "Mặc định" },
  { value: "asc", label: "Giá tăng dần" },
  { value: "desc", label: "Giá giảm dần" },
];

export default function ProductFilterBar({
  sort,
  color,
  onSortChange,
  onColorChange,
  colors,
  total,
  shown,
}: Props) {
  const active = sort !== "default" || color !== "all";

  return (
    <div className="filterBar">
      <label className="filterSort">
        <span className="filterSortLabel">Sắp xếp</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortMode)}
          aria-label="Sắp xếp theo giá"
        >
          {SORTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </label>

      {colors.length > 0 && (
        <div className="filterColors" role="group" aria-label="Lọc theo tông màu">
          <button
            type="button"
            className={`swatchAll ${color === "all" ? "active" : ""}`}
            aria-pressed={color === "all"}
            onClick={() => onColorChange("all")}
          >
            Tất cả
          </button>
          {colors.map(({ color: c, count }) => {
            const isActive = color === c;
            return (
              <button
                key={c}
                type="button"
                className={`swatch ${isActive ? "active" : ""}`}
                title={`${COLOR_LABELS[c]} (${count})`}
                aria-label={`${COLOR_LABELS[c]}, ${count} mẫu`}
                aria-pressed={isActive}
                onClick={() => onColorChange(isActive ? "all" : c)}
              >
                <span
                  className={`swatchDot ${c === "white" ? "swatchDotLight" : ""}`}
                  style={{ background: COLOR_SWATCH[c] }}
                  aria-hidden="true"
                />
                {isActive && (
                  <span className="swatchText">
                    {COLOR_LABELS[c]} · {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="filterInfo">
        <span>{active ? `${shown}/${total} mẫu` : `${total} mẫu`}</span>
        {active && (
          <button
            type="button"
            className="filterClear"
            onClick={() => {
              onSortChange("default");
              onColorChange("all");
            }}
          >
            ✕ Xóa lọc
          </button>
        )}
      </div>
    </div>
  );
}
