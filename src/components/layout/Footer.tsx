import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt } from "@/components/icons/FooterIcons";
import { InstagramLink, XLink } from "../icons/SocialLinks";

export default function Footer() {
  // 固定年度またはビルド時の年度を使用
  const currentYear = 2025;

  const footerLinks = [
    { href: "/about", label: "WebChaleurについて" },
    { href: "/works", label: "制作実績" },
    { href: "/blog", label: "ブログ" },
    { href: "/news", label: "お知らせ" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "/terms", label: "利用規約" },
    { href: "/legal", label: "特定商取引法に基づく表記" },
  ];

  return (
    <footer className="bg-accent-beige border-t-2 border-dashed border-gray-300">
      <div className="max-w-7xl mx-auto pt-12 pr-7 pb-[52px] pl-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt=""
                width={18}
                height={21}
                className="w-5 h-auto"
                aria-hidden="true"
              />
              <h3 className="heading-card text-primary-blue">WebChaleur</h3>
            </div>
            <p className="text-sm">
              十勝・帯広・音更を拠点に
              <br />
              全国のお客様へ
              <br />
              あたたかいウェブサイトを
              <br />
              お届けしています
            </p>
          </div>

          <div>
            <h4 className="heading-card mb-4 text-primary">サイトマップ</h4>
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

          <div>
            <h4 className="heading-card mb-4 text-primary">法的事項</h4>
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

          <div>
            <h4 className="heading-card mb-4 text-primary">お問い合わせ</h4>
            <p className="text-body text-primary mb-4">
              <span className="flex items-center gap-2 mb-1">
                <span className="text-primary-blue">
                  <FaEnvelope />
                </span>
                webchaleur@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary-blue">
                  <FaMapMarkerAlt />
                </span>
                北海道十勝エリア（全国対応）
              </span>
            </p>
            <div className="flex items-center gap-4 ">
              <XLink />
              <InstagramLink />
            </div>
          </div>
        </div>

        <div className="border-t border-dashed border-gray opacity-30 my-8" />

        <div className="text-center">
          <small className="text-caption text-sm" suppressHydrationWarning>
            © {currentYear} WebChaleur.
            つくる人も、つかう人も、みんなしあわせに。
          </small>
        </div>
      </div>
    </footer>
  );
}
