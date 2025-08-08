import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/privacy', label: 'プライバシーポリシー' },
    { href: '/terms', label: 'ご利用規約' },
    { href: '/company', label: '会社概要' },
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
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div style={{ transform: 'rotate(-0.2deg)' }}>
            <h3 className="text-xl font-[var(--font-handwritten)] font-semibold text-[var(--main-blue)] mb-4">
              WebChaleur
            </h3>
            <p className="text-[var(--text-gray)] text-sm leading-relaxed">
              十勝・帯広・音更エリアで<br />
              あたたかいウェブサイトを<br />
              つくっています
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ transform: 'rotate(0.1deg)' }}>
            <h4 className="text-lg font-[var(--font-handwritten)] font-semibold text-[var(--text-dark)] mb-4">
              リンク
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-gray)] hover:text-[var(--main-blue)] transition-colors text-sm"
                    style={{ 
                      display: 'inline-block',
                      transform: `rotate(${index % 2 === 0 ? '-0.1' : '0.2'}deg)` 
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div style={{ transform: 'rotate(-0.15deg)' }}>
            <h4 className="text-lg font-[var(--font-handwritten)] font-semibold text-[var(--text-dark)] mb-4">
              おといあわせ
            </h4>
            <p className="text-[var(--text-gray)] text-sm mb-4">
              📧 info@webchaleur.jp<br />
              📍 北海道十勝エリア
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-gray)] hover:text-[var(--main-blue)] transition-colors text-lg"
                  aria-label={social.label}
                  style={{ 
                    transform: `rotate(${index % 2 === 0 ? '-0.3' : '0.4'}deg)`,
                    display: 'inline-block'
                  }}
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
          <p 
            className="text-[var(--text-gray)] text-sm"
            style={{ transform: 'rotate(0.05deg)' }}
          >
            © {currentYear} WebChaleur. つくる人も、つかう人も、みんなしあわせに。
          </p>
        </div>
      </div>
    </footer>
  );
}