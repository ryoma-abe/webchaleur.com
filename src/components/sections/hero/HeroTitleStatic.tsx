// 静的なヒーロータイトル（SSRで即座に描画される）
export default function HeroTitleStatic() {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-klee">
      <span className="block mb-2">十勝の企業様の</span>
      <span className="block mb-2">Webサイトのこと</span>
      <span className="block">お手伝いします。</span>
    </h1>
  );
}