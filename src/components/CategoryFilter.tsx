import React from "react";
import { Category } from "../lib/types";
import { categories } from "@/lib/data";

interface CategoryFilterProps {
  currentCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  currentCategory,
  onCategoryChange,
}) => {

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-8">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${currentCategory === cat.value
            ? "bg-rose-100 border-rose-200 text-rose-800 shadow-sm"
            : "bg-white border-gray-100 text-gray-500 hover:border-rose-100 hover:text-rose-400"
            }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
