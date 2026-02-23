import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-xs font-medium text-gray-400">
        <li>
          <Link href="/" className="hover:text-rose-500 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </li>
            <li>
              {item.path ? (
                <Link
                  href={item.path}
                  className="hover:text-rose-500 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600 font-semibold">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
