'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // メニューを開いた時にスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const menuItems = [
    { 
      href: '/about', 
      label: 'About Us',
      subItems: [
        { href: '/about', label: '私たちについて' },
        { href: '/about#mission', label: 'ミッション' },
        { href: '/about#team', label: 'チーム' },
      ]
    },
    { 
      href: '/services', 
      label: 'Service',
      subItems: [
        { href: '/services#web', label: 'Web制作' },
        { href: '/services#ec', label: 'ECサイト構築' },
        { href: '/services#consulting', label: 'コンサルティング' },
      ]
    },
    { 
      href: '/works', 
      label: 'Works',
      subItems: [
        { href: '/works', label: '全ての実績' },
        { href: '/works?category=corporate', label: 'コーポレートサイト' },
        { href: '/works?category=ec', label: 'ECサイト' },
      ]
    },
    { 
      href: '/about#company', 
      label: 'Company',
      subItems: [
        { href: '/about#company', label: '会社概要' },
        { href: '/about#access', label: 'アクセス' },
      ]
    },
    { 
      href: '/blog', 
      label: 'Blog'
    },
    { 
      href: '/contact', 
      label: 'Contact'
    },
  ];

  return (
    <header 
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm"
      style={{ 
        boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between" style={{ padding: '20px 0' }}>
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-[var(--font-handwritten)] font-semibold text-[#5b8fb9] hover:opacity-80 transition-opacity"
            style={{ transform: 'rotate(0.3deg)' }}
          >
            Web<span className="text-[#2c2825]">Chaleur</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.filter(item => !['Company', 'Blog'].includes(item.label)).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[#5a524c] hover:text-[#5b8fb9] transition-colors text-sm font-medium"
                >
                  {item.label === 'Contact' ? 'お問い合わせ' : 
                   item.label === 'About Us' ? '私たちについて' :
                   item.label === 'Service' ? 'サービス' :
                   item.label === 'Works' ? '制作実績' : item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-[#5b8fb9] text-white px-6 py-3 font-medium hover:bg-[#4a7da6] transition-all rounded-2xl"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="メニュー"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1 h-1 bg-[#5a524c] rounded-full"
                  />
                ))}
              </div>
            </div>
          </button>
        </div>

      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50"
          style={{ zIndex: 9998 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-full max-w-sm bg-white transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-[var(--font-handwritten)] font-semibold text-[#5b8fb9]"
          >
            Web<span className="text-[#2c2825]">Chaleur</span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2"
            aria-label="閉じる"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="overflow-y-auto h-[calc(100vh-80px)]">
          <ul className="py-4">
            {menuItems.map((item) => (
              <li key={item.href} className="border-b border-gray-100">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleExpanded(item.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg font-medium text-[#2c2825]">{item.label}</span>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedItems.includes(item.label) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedItems.includes(item.label) && (
                      <ul className="bg-gray-50">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-12 py-3 text-[#5a524c] hover:text-[#5b8fb9] hover:bg-gray-100 transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-medium text-[#2c2825]">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}