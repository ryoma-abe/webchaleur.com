"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuItems = [
    {
      href: "/",
      label: "Home",
      displayName: "ホーム",
    },
    {
      href: "/about",
      label: "About",
      displayName: "私たちについて",
    },
    {
      href: "/services",
      label: "Services",
      displayName: "サービス",
    },
    {
      href: "/works",
      label: "Works",
      displayName: "制作実績",
    },
    {
      href: "/blog",
      label: "Blog",
      displayName: "ブログ",
    },
    {
      href: "/news",
      label: "News",
      displayName: "お知らせ",
    },
    {
      href: "/contact",
      label: "Contact",
      displayName: "お問い合わせ",
    },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt=""
                width={22}
                height={25}
                className="w-5 h-auto md:w-6 md:h-auto"
                priority
                aria-hidden="true"
                sizes="22px"
                style={{
                  width: "22px",
                  height: "25px",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
              <span className="text-2xl md:text-3xl">
                <span className="text-primary-blue">Web</span>
                <span className="text-[#2c2825]">Chaleur</span>
              </span>
            </Link>

            <ul className="hidden lg:flex items-center gap-6 lg:gap-8">
              {menuItems
                .filter((item) => item.label !== "Contact")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray hover:text-primary-blue transition-colors text-sm"
                    >
                      {item.displayName}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/contact" className="btn btn-primary">
                  お問い合わせ
                </Link>
              </li>
            </ul>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <span className="text-2xl text-[#5a524c]">
                {isMenuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </nav>
      </header>
      {/* オーバーレイ */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* ハンバーガーメニュー */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-full bg-white z-[101] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt=""
              width={18}
              height={21}
              className="w-5 h-auto"
              aria-hidden="true"
              sizes="18px"
              style={{
                width: "18px",
                height: "21px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            <span className="text-xl">
              <span className="text-primary-blue">Web</span>
              <span className="text-[#2c2825]">Chaleur</span>
            </span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="閉じる"
          >
            <span className="text-xl text-[#5a524c]">×</span>
          </button>
        </div>

        <nav className="overflow-y-auto h-[calc(100vh-73px)]">
          <ul className="py-2">
            {menuItems
              .filter((item) => item.label !== "Contact")
              .map((item) => (
                <li key={item.href} className="border-b border-gray-100">
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base font-medium text-[#2c2825]">
                      {item.displayName}
                    </span>
                  </Link>
                </li>
              ))}

            <li className="p-4">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
