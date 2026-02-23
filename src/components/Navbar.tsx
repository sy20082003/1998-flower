"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Cửa hàng", path: "/flowers" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
          }`}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-fit h-10 bg-rose-100 rounded-full flex items-center justify-center px-3 py-2">
              <Image
                width={1920}
                height={800}
                src="/image/logo.png"
                alt="logo"
                className="w-full h-full object-cover text-white dark:invert-0"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-800">
              Bloom & Petals
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-rose-500 ${pathname === link.path ? "text-rose-600" : "text-gray-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 transition-all duration-300 origin-top overflow-hidden ${isMenuOpen
            ? "max-h-75 opacity-100 py-6 shadow-xl"
            : "max-h-0 opacity-0 py-0"
            }`}
        >
          <Container className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium px-4 py-2 rounded-xl transition-colors ${pathname === link.path
                  ? "bg-rose-50 text-rose-600"
                  : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </Container>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/5 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
