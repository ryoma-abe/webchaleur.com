'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'わたしたちのこと' },
    { href: '#works', label: 'つくったもの' },
    { href: '#strengths', label: 'できること' },
    { href: '#contact', label: '相談してみる', isButton: true },
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
            {menuItems.map((item, index) => (
              <li key={item.href}>
                {item.isButton ? (
                  <Link
                    href={item.href}
                    className="bg-[#5b8fb9] text-white px-6 py-3 font-medium hover:bg-[#4a7da6] transition-all hover:transform hover:scale-105"
                    style={{ 
                      borderRadius: '22px 26px 24px 25px',
                      transform: 'rotate(-0.2deg)',
                      display: 'inline-block'
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#5a524c] hover:text-[#5b8fb9] transition-colors text-sm font-medium"
                    style={{ 
                      transform: `rotate(${index % 2 === 0 ? '-0.1' : '0.15'}deg)`,
                      display: 'inline-block'
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#5a524c] hover:text-[#5b8fb9] transition-colors"
            aria-label="メニュー"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span 
                className={`block h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                style={{ width: '24px' }}
              />
              <span 
                className={`block h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
                style={{ width: '24px' }}
              />
              <span 
                className={`block h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                style={{ width: '24px' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-3 border-t border-gray-100">
            {menuItems.map((item, index) => (
              <li key={item.href}>
                {item.isButton ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-[#5b8fb9] text-white text-center py-3 mx-4 font-medium"
                    style={{ 
                      borderRadius: '22px 26px 24px 25px'
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[#5a524c] hover:text-[#5b8fb9] transition-colors py-2 px-4"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}