"use client";

import React from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const buildUrl = (page: number) => {
    if (page === 1) return baseUrl;
    return `${baseUrl}?page=${page}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Show up to 5 page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    // Adjust if we're near the end
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={buildUrl(i)}
          className={`px-4 py-2 rounded-lg transition ${
            i === currentPage
              ? "bg-white/20 text-white font-semibold"
              : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90"
          }`}
        >
          {i}
        </Link>
      );
    }

    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-12"
      aria-label="Pagination"
    >
      {/* Previous button */}
      {currentPage > 1 ? (
        <Link
          href={buildUrl(currentPage - 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 transition"
          aria-label="Previous page"
        >
          <FaChevronLeft className="text-sm" />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/30 cursor-not-allowed">
          <FaChevronLeft className="text-sm" />
          <span className="hidden sm:inline">Previous</span>
        </div>
      )}

      {/* Page numbers */}
      <div className="hidden sm:flex gap-2">{renderPageNumbers()}</div>

      {/* Mobile current page indicator */}
      <div className="sm:hidden px-4 py-2 rounded-lg bg-white/20 text-white font-semibold">
        {currentPage} / {totalPages}
      </div>

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link
          href={buildUrl(currentPage + 1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 transition"
          aria-label="Next page"
        >
          <span className="hidden sm:inline">Next</span>
          <FaChevronRight className="text-sm" />
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/30 cursor-not-allowed">
          <span className="hidden sm:inline">Next</span>
          <FaChevronRight className="text-sm" />
        </div>
      )}
    </nav>
  );
}

