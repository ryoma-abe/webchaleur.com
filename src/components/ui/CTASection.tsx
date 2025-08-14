import HandDrawnButton from "@/components/ui/HandDrawnButton";

export default function CTASection() {
  return (
    <section className="py-12 bg-gradient-to-b from-transparent to-primary-blue/5 rounded-3xl">
      <div className="text-center">
        <p className="text-lg text-gray mb-8">
          Webのことでお困りごとはありませんか？
          <br />
          お気軽にご相談ください。
        </p>
        <HandDrawnButton href="/contact" variant="primary" size="large">
          お問い合わせはこちら →
        </HandDrawnButton>
      </div>
    </section>
  );
}