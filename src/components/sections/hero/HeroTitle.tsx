import dynamic from 'next/dynamic';
import HeroTitleStatic from './HeroTitleStatic';

// 動的インポートでクライアントコンポーネントを遅延読み込み
const HeroTitleDynamic = dynamic(() => import('./HeroTitleDynamic'), {
  ssr: false,
  loading: () => <HeroTitleStatic />
});

export default function HeroTitle() {
  return (
    <>
      {/* モバイル: 静的表示（SSR対応） */}
      <div className="block md:hidden">
        <HeroTitleStatic />
      </div>
      
      {/* デスクトップ: アニメーション表示 */}
      <div className="hidden md:block">
        <HeroTitleDynamic />
      </div>
    </>
  );
}