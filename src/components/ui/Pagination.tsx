"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // ページ番号の配列を生成
  const getPageNumbers = () => {
    const pages = [];
    const maxDisplay = 5; // 表示する最大ページ数
    const halfDisplay = Math.floor(maxDisplay / 2);

    let start = Math.max(1, currentPage - halfDisplay);
    let end = Math.min(totalPages, currentPage + halfDisplay);

    // 開始位置と終了位置を調整
    if (currentPage <= halfDisplay) {
      end = Math.min(totalPages, maxDisplay);
    }
    if (currentPage + halfDisplay >= totalPages) {
      start = Math.max(1, totalPages - maxDisplay + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  // URLを生成
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    const queryString = params.toString();
    return queryString ? `${basePath}?${queryString}` : basePath;
  };

  if (totalPages <= 1) return null;

  return (
    <nav
      className="flex justify-center mt-12"
      aria-label="ページネーション"
    >
      <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-6 py-3">
        {/* 前へボタン */}
        {currentPage > 1 && (
          <Link
            href={createPageUrl(currentPage - 1)}
            className="px-4 py-2 text-sm font-medium text-primary hover:text-primary-blue transition-colors rounded-full hover:bg-primary-light/20"
            aria-label="前のページへ"
          >
            ← 前へ
          </Link>
        )}

        {/* 最初のページ */}
        {getPageNumbers()[0] > 1 && (
          <>
            <Link
              href={createPageUrl(1)}
              className="w-10 h-10 flex items-center justify-center text-sm font-medium text-primary hover:text-white hover:bg-primary-blue transition-all rounded-full"
              aria-label="1ページ目へ"
            >
              1
            </Link>
            {getPageNumbers()[0] > 2 && (
              <span className="text-gray-400 px-2">...</span>
            )}
          </>
        )}

        {/* ページ番号 */}
        {getPageNumbers().map((page) => (
          <Link
            key={page}
            href={createPageUrl(page)}
            className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-all rounded-full ${
              currentPage === page
                ? "bg-primary text-white shadow-sm"
                : "text-primary hover:text-white hover:bg-primary-blue"
            }`}
            aria-label={`${page}ページ目へ`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </Link>
        ))}

        {/* 最後のページ */}
        {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
          <>
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
              <span className="text-gray-400 px-2">...</span>
            )}
            <Link
              href={createPageUrl(totalPages)}
              className="w-10 h-10 flex items-center justify-center text-sm font-medium text-primary hover:text-white hover:bg-primary-blue transition-all rounded-full"
              aria-label={`${totalPages}ページ目へ`}
            >
              {totalPages}
            </Link>
          </>
        )}

        {/* 次へボタン */}
        {currentPage < totalPages && (
          <Link
            href={createPageUrl(currentPage + 1)}
            className="px-4 py-2 text-sm font-medium text-primary hover:text-primary-blue transition-colors rounded-full hover:bg-primary-light/20"
            aria-label="次のページへ"
          >
            次へ →
          </Link>
        )}
      </div>
    </nav>
  );
}