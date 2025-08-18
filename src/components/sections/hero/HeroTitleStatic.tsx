// 静的なヒーロータイトル（モバイル用）
export default function HeroTitleStatic() {
  return (
    <h1 className="text-4xl sm:text-5xl leading-tight mb-8">
      <span className="block mb-2">
        十勝の企業様の
      </span>
      <span className="text-primary-blue block relative text-[1.2em] mb-2">
        Webサイトのこと
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#2c5478] to-transparent opacity-40 rounded-sm" />
      </span>
      <span className="block">
        お手伝いします。
      </span>
    </h1>
  );
}