import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: '私たちについて' },
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
    { href: 'https://twitter.com/webchaleur', label: 'X (Twitter)', icon: '𝕏' },
    { href: 'https://www.instagram.com/webchaleur', label: 'Instagram', icon: '📷' },
  ];

  return (
    <footer 
      className="bg-[var(--accent-beige)] border-t-2 border-dashed border-[var(--light-blue)]"
      style={{ transform: 'rotate(-0.01deg)' }}
    >
      <div className="max-w-7xl mx-auto" style={{ padding: '48px 28px 52px 32px' }}>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="heading-card text-[var(--main-blue)] mb-4">
              WebChaleur
            </h3>
            <p className="text-body">
              十勝・帯広・音更エリアで<br />
              あたたかいウェブサイトを<br />
              つくっています
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-card mb-4">
              サイトマップ
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-gray)] hover:text-[var(--main-blue)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="heading-card mb-4">
              法的事項
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-gray)] hover:text-[var(--main-blue)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="heading-card mb-4">
              お問い合わせ
            </h4>
            <p className="text-body mb-4">
              📧 info@webchaleur.jp<br />
              📍 北海道十勝エリア
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-gray)] hover:text-[var(--main-blue)] transition-colors text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="border-t border-dashed border-[var(--text-gray)] opacity-30 my-8"
          style={{ transform: 'rotate(-0.1deg)' }}
        />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-caption"
            style={{ transform: 'rotate(0.05deg)' }}
          >
            © {currentYear} WebChaleur. つくる人も、つかう人も、みんなしあわせに。
          </p>
        </div>
      </div>
    </footer>
  );
}