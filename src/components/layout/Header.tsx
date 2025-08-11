"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // メニューを開いた時にスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const menuItems = [
    {
      href: "/about",
      label: "About Us",
      displayName: "WebChaleurについて",
      subItems: [
        { href: "/about", label: "WebChaleurについて" },
        { href: "/about#mission", label: "ミッション" },
        { href: "/about#team", label: "チーム" },
      ],
    },
    {
      href: "/services",
      label: "Service",
      displayName: "サービス",
      subItems: [
        { href: "/services#web", label: "Web制作" },
        { href: "/services#ec", label: "ECサイト構築" },
        { href: "/services#consulting", label: "コンサルティング" },
      ],
    },
    {
      href: "/works",
      label: "Works",
      displayName: "制作実績",
      subItems: [
        { href: "/works", label: "全ての実績" },
        { href: "/works?category=corporate", label: "コーポレートサイト" },
        { href: "/works?category=ec", label: "ECサイト" },
      ],
    },
    {
      href: "/about#company",
      label: "Company",
      displayName: "会社概要",
      subItems: [
        { href: "/about#company", label: "会社概要" },
        { href: "/about#access", label: "アクセス" },
      ],
    },
    {
      href: "/blog",
      label: "Blog",
      displayName: "ブログ",
    },
    {
      href: "/contact",
      label: "Contact",
      displayName: "お問い合わせ",
    },
  ];

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl md:text-3xl font-[var(--font-handwritten)] font-semibold text-primary-blue hover:opacity-80 transition-opacity"
            >
              Web<span className="text-[#2c2825]">Chaleur</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {menuItems
                .filter((item) => !["Company", "Blog"].includes(item.label))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[#5a524c] hover:text-primary-blue transition-colors text-sm font-medium"
                    >
                      {item.displayName}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/contact"
                  className="btn-primary btn-small"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#5a524c]" />
              ) : (
                <Menu className="w-6 h-6 text-[#5a524c]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[101] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-[var(--font-handwritten)] font-semibold text-primary-blue"
          >
            Web<span className="text-[#2c2825]">Chaleur</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="閉じる"
          >
            <X className="w-5 h-5 text-[#5a524c]" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="overflow-y-auto h-[calc(100vh-73px)]">
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item.href} className="border-b border-gray-100">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-base font-medium text-[#2c2825]">
                        {item.displayName}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          expandedItems.includes(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`bg-gray-50 overflow-hidden transition-all duration-200 ${
                        expandedItems.includes(item.label)
                          ? "max-h-64"
                          : "max-h-0"
                      }`}
                    >
                      <ul className="py-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-8 py-2 text-sm text-[#5a524c] hover:text-primary-blue hover:bg-white transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-medium text-[#2c2825]">
                      {item.displayName}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            
            {/* Mobile CTA Button */}
            <li className="p-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>

          {/* Footer Info */}
          <div className="border-t border-gray-100 p-4 mt-auto">
            <p className="text-xs text-gray-500 text-center">
              © 2024 WebChaleur
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}