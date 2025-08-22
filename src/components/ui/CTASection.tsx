import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="text-center">
        <p className="text-lg text-gray mb-8">
          Webのことでお困りごとはありませんか？
          <br />
          お気軽にご相談ください。
        </p>
        <Link href="/contact" className="btn btn-primary">
          お問い合わせはこちら →
        </Link>
      </div>
    </section>
  );
}
