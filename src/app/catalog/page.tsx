"use client";

import CategoryFilter from "@/components/CategoryFilter";
import Container from "@/components/Container";
import FlowerCard from "@/components/FlowerCard";
import { getFlowers } from "@/lib/api";
import { Category, Flower } from "@/lib/types";
import { useEffect, useState } from "react";

const CatalogPage = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [category, setCategory] = useState<Category>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlowers = async () => {
      setLoading(true);
      try {
        const data = await getFlowers(category);
        setFlowers(data);
      } finally {
        setLoading(false);
      }
    };
    fetchFlowers();
  }, [category]);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Cửa Hàng Của Chúng Tôi
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Duyệt qua danh mục các mẫu hoa thiết kế độc quyền. Tìm kiếm món quà
            hoàn hảo cho những người thân yêu.
          </p>
        </div>

        <CategoryFilter
          currentCategory={category}
          onCategoryChange={setCategory}
        />

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-white rounded-2xl h-112.5 border border-gray-100 shadow-sm"
              />
            ))}
          </div>
        ) : (
          <>
            {flowers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 animate-in fade-in zoom-in-95 duration-500">
                {flowers.map((flower) => (
                  <FlowerCard key={flower.id} flower={flower} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200 mt-8">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-600">
                  Không tìm thấy sản phẩm nào
                </h3>
                <p className="text-gray-400 mt-1">
                  Vui lòng thử chọn danh mục khác.
                </p>
              </div>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default CatalogPage;
