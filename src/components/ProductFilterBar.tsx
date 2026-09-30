"use client";
// Thanh bộ lọc: sắp xếp theo giá + lọc theo tông màu.
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
      <div className="filterRow">
        <span className="filterLabel">Sắp xếp</span>
        <div className="filterChips" role="group" aria-label="Sắp xếp theo giá">
          {SORTS.map((s) => (
            <button
              key={s.value}
              type="button"
              className={`filterChip ${sort === s.value ? "active" : ""}`}
              aria-pressed={sort === s.value}
              onClick={() => onSortChange(s.value)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {colors.length > 0 && (
        <div className="filterRow">
          <span className="filterLabel">Tông màu</span>
          <div className="filterChips" role="group" aria-label="Lọc theo tông màu">
            <button
              type="button"
              className={`filterChip ${color === "all" ? "active" : ""}`}
              aria-pressed={color === "all"}
              onClick={() => onColorChange("all")}
            >
              Tất cả
            </button>
            {colors.map(({ color: c, count }) => (
              <button
                key={c}
                type="button"
                className={`filterChip ${color === c ? "active" : ""}`}
                aria-pressed={color === c}
                onClick={() => onColorChange(c)}
              >
                <span
                  className={`colorDot ${c === "white" ? "colorDotLight" : ""}`}
                  style={{ background: COLOR_SWATCH[c] }}
                  aria-hidden="true"
                />
                {COLOR_LABELS[c]}
                <span className="filterCount">{count}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="filterMeta">
        <span>
          {active ? `Hiển thị ${shown}/${total} mẫu` : `${total} mẫu`}
        </span>
        {active && (
          <button
            type="button"
            className="filterClear"
            onClick={() => {
              onSortChange("default");
              onColorChange("all");
            }}
          >
            ✕ Xóa bộ lọc
          </button>
        )}
      </div>
    </div>
  );
}
