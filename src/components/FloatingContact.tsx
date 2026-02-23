"use client";

import Image from "next/image";
import Link from "next/link";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Zalo */}
            <Link
                href="https://zalo.me/0976848744"
                target="_blank"
                className="group relative w-14 h-14"
            >
                <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Image
                        src="/image/zalo-icon.png"
                        alt="Zalo"
                        width={120}
                        height={120}
                        className="w-full h-full object-cover"
                    />
                </div>

                <span className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                    Chat Zalo
                </span>
            </Link>

            {/* Facebook */}
            <Link
                href="https://www.facebook.com/hoatuoi1998flower"
                target="_blank"
                className="group relative w-14 h-14"
            >
                <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Image
                        src="/image/facebook-icon.png"
                        alt="Facebook"
                        width={120}
                        height={120}
                        className="w-full h-full object-cover"
                    />
                </div>

                <span className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                    Facebook
                </span>
            </Link>

            {/* Hotline */}
            <Link
                href="tel:0976848744"
                className="group relative w-14 h-14"
            >
                {/* Hiệu ứng sóng */}
                <span className="absolute inset-0 rounded-full bg-red-400 opacity-70 animate-ping"></span>

                <div className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Image
                        src="/image/phone-icon.png"
                        alt="Hotline"
                        width={120}
                        height={120}
                        className="w-full h-full object-cover"
                    />
                </div>

                <span className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                    0976 848 744
                </span>
            </Link>
        </div>
    );
}