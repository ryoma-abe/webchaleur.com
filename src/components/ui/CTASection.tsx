import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 bg-gradient-to-b from-transparent to-primary-blue/5 rounded-3xl">
      <div className="text-center">
        <p className="text-lg text-gray mb-8">
          Webのことでお困りごとはありませんか？
          <br />
          お気軽にご相談ください。
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center px-8 py-4 bg-main-blue text-white rounded-full hover:bg-main-blue/90 transition-colors"
        >
          お問い合わせはこちら →
        </Link>
      </div>
    </section>
  );
}