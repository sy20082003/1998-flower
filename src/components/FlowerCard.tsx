import React from "react";
import { Flower } from "../lib/types";
import Link from "next/link";
import Image from "next/image";

interface FlowerCardProps {
  flower: Flower;
}

const FlowerCard: React.FC<FlowerCardProps> = ({ flower }) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(flower.price);

  return (
    <Link
      href={`/flowers/${flower.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-50"
    >
      <div className="relative aspect-4/5 overflow-hidden">
        <Image
          src={flower.image}
          alt={flower.name}
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-gray-500 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Xem chi tiết
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-rose-50/90 backdrop-blur-sm text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            {flower.category.replace("-", " ")}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-rose-600 transition-colors">
          {flower.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {flower.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-rose-500 font-semibold tracking-tight">
            {formattedPrice}
          </span>
          <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FlowerCard;
