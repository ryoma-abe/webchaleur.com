
export default function HeroTitleStatic() {
  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 lg:mb-10 min-h-[200px] lg:min-h-[250px]">
      <span className="block mb-2 min-h-[1.2em]">
        十勝の企業様の
      </span>
      <span className="text-primary-blue block relative text-[1.2em] mb-2 min-h-[1.2em]">
        Webサイトのこと
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#2c5478] to-transparent opacity-40 rounded-sm" />
      </span>
      <span className="block min-h-[1.2em]">
        お手伝いします。
      </span>
    </h1>
  );
}