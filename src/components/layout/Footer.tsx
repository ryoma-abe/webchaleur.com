import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaXTwitter } from '@/components/icons/FooterIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'WebChaleurについて' },
    { href: '/works', label: '制作実績' },
    { href: '/blog', label: 'ブログ' },
    { href: '/news', label: 'お知らせ' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'プライバシーポリシー' },
    { href: '/terms', label: '利用規約' },
    { href: '/legal', label: '特定商取引法に基づく表記' },
  ];

  const socialLinks = [
    { href: 'https://x.com/ryoo_black', label: 'X', icon: FaXTwitter },
    { href: 'https://www.instagram.com/ryo___book/', label: 'Instagram', icon: FaInstagram },
  ];

  return (
    <footer 
      className="bg-accent-beige border-t-2 border-dashed border-gray-300"
    >
      <div className="max-w-7xl mx-auto pt-12 pr-7 pb-[52px] pl-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <picture>
                <source srcSet="/logo.avif" type="image/avif" />
                <source srcSet="/logo.webp" type="image/webp" />
                <Image
                  src="/logo.webp"
                  alt=""
                  width={18}
                  height={21}
                  className="w-5 h-auto"
                  aria-hidden="true"
                />
              </picture>
              <h3 className="heading-card text-primary-blue">
                WebChaleur
              </h3>
            </div>
            <p className="text-body text-primary">
              十勝・帯広・音更を拠点に<br />
              全国のお客様へ<br />
              あたたかいウェブサイトを<br />
              お届けしています
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-card mb-4 text-primary">
              サイトマップ
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="heading-card mb-4 text-primary">
              法的事項
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="heading-card mb-4 text-primary">
              お問い合わせ
            </h4>
            <p className="text-body text-primary mb-4">
              <span className="flex items-center gap-2 mb-1">
                <FaEnvelope className="text-primary-blue" />
                webchaleur@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-blue" />
                北海道十勝エリア（全国対応）
              </span>
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-blue transition-colors text-lg"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="border-t border-dashed border-gray opacity-30 my-8"
        />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-caption text-primary">
            © {currentYear} WebChaleur. つくる人も、つかう人も、みんなしあわせに。
          </p>
        </div>
      </div>
    </footer>
  );
}