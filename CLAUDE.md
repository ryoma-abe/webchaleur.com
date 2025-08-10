# WebChaleur 要件定義書

## 〜 AI 感ゼロ、人間味あふれる十勝の Web 制作サイト 〜

---

## 🎯 プロジェクト概要

### 技術スタック

Next.js （App Router）
Tailwind CSS v4 + カスタムスタイル(v4 は must です、詳しくは下記ドキュメント参考)↓
https://nextjs.org/docs/app/getting-started/css#tailwind-css
MDX によるコンテンツ管理
Vercel デプロイ設定

### タスク一覧
☐ プロジェクト初期設定
☐ 基本的なディレクトリ構造の作成
☐ グローバルスタイル設定（色、フォント、不規則な値）
☐ 共通レイアウトコンポーネント（Header、Footer）
☐ Hero セクション（FV）の実装
☐ Information セクション（お知らせ）の実装
☐ Strengths セクション（強み）の実装
☐ Works セクション（制作実績）の実装
☐ Voice セクション（お客様の声・ココナラ誘導）の実装
☐ Blog セクション（技術ブログ）の実装
☐ FAQ セクション（よくある質問）の実装
☐ UI コンポーネント作成（HandDrawnButton、SketchyCard、WobblyHeading）
☐ MDX セットアップとコンテンツ管理
☐ 実績詳細ページの実装
☐ ブログ詳細ページの実装
☐ お問い合わせ API の実装
☐ アニメーション実装（Framer Motion）
☐ SEO 対策（メタデータ、構造化データ）
☐ レスポンシブ対応
☐ パフォーマンス最適化
☐ Vercel デプロイ設定

### その他
今日の作業が終了したらログを残し、次の日の作業にスムーズに取り書かれるようにする
上記のタスク表でタスク管理

### ミッション

十勝エリア（帯広・音更）の地域企業に寄り添い、最新技術と温かみのあるデザインで、親しみやすく信頼できる Web 制作サービスを提供する。

### コアコンセプト

**「シンプルで親しみやすいデザイン」**

- モダンで洗練されたデザイン
- 手作り感と温もり
- 地域に根ざした親近感

---

## 🎨 デザイン原則

### 1. モダンでクリーンなデザイン

```css
/* 基本的なスタイル */
border-radius: 20px;
padding: 20px;
/* 斜めの装飾は最小限に */
```

### 2. 整ったレイアウト

- **レイアウト**: 中央揃え、左揃えを適切に使用
- **グリッド**: 規則的なグリッドシステム
- **余白**: 統一された余白設定

### 3. フォント設定

- **フォント**:
  - 見出し：`Klee One`（手書き風）
  - 本文：`Zen Maru Gothic`（丸みのある優しいフォント）

### 4. 自然な色彩

```scss
// カラーパレット
$main-blue: #5b8fb9; // くすんだ青（鮮やかすぎない）
$light-blue: #8fb5d1; // 薄い青
$lighter-blue: #b8d4e8; // さらに薄い青
$bg-cream: #fefdfb; // オフホワイト（真っ白でない）
$text-dark: #2c2825; // グレーブラウン（真っ黒でない）
$text-gray: #5a524c; // 温かみのあるグレー
$accent-beige: #e5e3e1; // ベージュグレー
```

### 5. 言葉遣いのルール

- **適切な漢字使用**: 「私たち」「制作実績」「お問い合わせ」
- **丁寧な敬語**: 「〜します」「〜です」
- **親しみやすさ**: 「地元企業様」「お手伝い」
- **絵文字の適度な使用**: アクセント程度に

---

## 📐 技術スタック

### フロントエンド

```json
{
  "framework": "Next.js 14 (App Router)",
  "styling": "Tailwind CSS v3.4",
  "language": "TypeScript",
  "deployment": "Vercel",
  "content": "MDX (ブログ・実績・ニュース)",
  "animation": "Framer Motion (軽めに)",
  "fonts": "Google Fonts (Klee One, Zen Maru Gothic)"
}
```

### ディレクトリ構造

```
app/
├── page.tsx                 # トップページ
├── layout.tsx              # 共通レイアウト
├── globals.css             # グローバルスタイル
├── works/
│   ├── page.tsx           # 実績一覧
│   └── [slug]/
│       └── page.tsx       # 実績詳細（MDX）
├── blog/
│   ├── page.tsx           # ブログ一覧
│   └── [slug]/
│       └── page.tsx       # ブログ詳細（MDX）
├── api/
│   └── contact/
│       └── route.ts       # お問い合わせAPI
components/
├── sections/
│   ├── Hero.tsx           # FV
│   ├── Information.tsx    # お知らせ
│   ├── Strengths.tsx      # 強み
│   ├── Works.tsx          # 実績
│   ├── Voice.tsx          # お客様の声
│   ├── Blog.tsx           # ブログ
│   ├── FAQ.tsx            # よくある質問
│   └── Contact.tsx        # お問い合わせ
├── ui/
│   ├── HandDrawnButton.tsx
│   ├── SketchyCard.tsx
│   └── WobblyHeading.tsx
content/
├── works/                 # MDXファイル
├── blog/                  # MDXファイル
└── news/                  # MDXファイル
```

---

## 🏗️ セクション別詳細仕様

### 1. FV（ファーストビュー）

**既存デザインを継承**

#### 追加要素

- 手書き風の矢印アニメーション（スクロールを促す）
- 背景に薄く十勝の風景写真（opacity: 0.03）

### 2. Information（お知らせ）

#### デザイン仕様

```tsx
// コンポーネント構造
<section className="information">
  <div className="section-header">
    <h2 className="handwritten-title">おしらせ</h2>
    <span className="english-sub">Information</span>
  </div>

  <div className="news-list">
    {news.map((item) => (
      <article className="news-item">
        <time className="news-date">{item.date}</time>
        <div className="news-category">{item.category}</div>
        <h3 className="news-title">{item.title}</h3>
      </article>
    ))}
  </div>
</section>
```

#### スタイリング

- 日付は手書き風フォント
- カテゴリーは角丸の不規則なバッジ
- ホバー時に微妙に傾く（transform: rotate(0.3deg)）
- 罫線は点線（border-style: dashed）

### 3. 強み（Strengths）

#### デザイン仕様

参考：https://capotast.co.jp/ のメッセージ性

```tsx
// 3つの強みカード（アシンメトリー配置）
<div className="strengths-grid">
  <div className="strength-card card-1">
    <div className="number-badge">01</div>
    <h3>地元だから、すぐ会える</h3>
    <p>
      帯広・音更なら30分以内に
      <br />
      お伺いします
    </p>
    <div className="hand-drawn-underline" />
  </div>

  <div className="strength-card card-2">
    <div className="number-badge">02</div>
    <h3>最新技術も、おまかせ</h3>
    <p>
      Next.jsやShopifyなど
      <br />
      新しい技術もしっかり対応
    </p>
    <div className="hand-drawn-underline" />
  </div>

  <div className="strength-card card-3">
    <div className="number-badge">03</div>
    <h3>作ったあとも、ずっと一緒</h3>
    <p>
      更新や修正のご相談も
      <br />
      いつでもお気軽に
    </p>
    <div className="hand-drawn-underline" />
  </div>
</div>
```

#### 特徴

- カードの高さを意図的にバラバラに
- 番号は手書き風の円で囲む
- 背景に薄い水彩風のグラデーション

### 4. Works（制作実績）

#### デザイン仕様

参考：https://www.neoindex.co.jp/yamagata/ の詳細ページ

```tsx
// 実績カード（グリッドレイアウト）
<div className="works-grid">
  {works.map((work, index) => (
    <article
      className="work-card"
      style={{ transform: `rotate(${index % 2 ? 0.3 : -0.2}deg)` }}
    >
      <div className="work-image">
        <img src={work.thumbnail} alt={work.title} />
        <div className="work-category">{work.category}</div>
      </div>
      <div className="work-content">
        <h3>{work.client}</h3>
        <p className="work-description">{work.description}</p>
        <div className="work-tags">
          {work.tags.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>
```

#### 詳細ページ

- プロジェクト概要（手書き風の見出し）
- スクリーンショット（ブラウザ風の枠に入れる）
- 使用技術（アイコン付きタグ）
- お客様の声（吹き出し風）
- 制作期間・予算レンジ（ぼかして表示）

### 5. Voice（お客様の声）→ ココナラ誘導

#### デザイン仕様

```tsx
<section className="voice-section">
  <div className="voice-header">
    <h2>お客様の声がたくさん！</h2>
    <p>ココナラでの評価は★4.9です</p>
  </div>

  <div className="coconala-banner">
    <div className="rating-stars">★★★★★</div>
    <div className="review-count">152件のレビュー</div>
    <a href="https://coconala.com/..." className="coconala-btn">
      <span>ココナラで詳しく見る</span>
      <span className="arrow">→</span>
    </a>
  </div>

  {/* プレビュー的に2-3個の声を表示 */}
  <div className="voice-preview">
    <div className="voice-card">
      <p>"とても親切で、要望以上の..."</p>
      <span className="voice-author">帯広市 A社様</span>
    </div>
  </div>
</section>
```

### 6. Blog（技術ブログ）

#### デザイン仕様

```tsx
// ブログカード
<article className="blog-card">
  <div className="blog-date">
    <span className="day">25</span>
    <span className="month">Jan</span>
  </div>
  <h3 className="blog-title">Next.js 14でISRを使った高速サイトの作り方</h3>
  <div className="blog-meta">
    <span className="category">技術</span>
    <span className="read-time">5分で読める</span>
  </div>
</article>
```

#### SEO 対策

- 技術キーワードを意識したタイトル
- 構造化データの実装
- OGP 画像の自動生成

### 7. FAQ（よくある質問）

#### デザイン仕様

```tsx
<div className="faq-list">
  <details className="faq-item">
    <summary className="faq-question">
      <span className="q-mark">Q</span>
      <span>料金はどのくらいですか？</span>
      <span className="toggle-icon">+</span>
    </summary>
    <div className="faq-answer">
      <span className="a-mark">A</span>
      <p>
        サイトの規模によりますが、30万円〜承っております。
        まずはお気軽にご相談ください。
      </p>
    </div>
  </details>
</div>
```

#### 特徴

- アコーディオンは手動実装（スムーズなアニメーション）
- Q/A マークは手書き風の円
- 開閉アイコンは回転アニメーション

### 8. Contact（お問い合わせ）

#### デザイン仕様

```tsx
<form className="contact-form">
  <div className="form-group">
    <label className="form-label">
      お名前
      <span className="required">必須</span>
    </label>
    <input
      type="text"
      className="form-input"
      style={{ borderRadius: "8px 10px 9px 11px" }}
    />
  </div>

  {/* フォームフィールド */}

  <button type="submit" className="submit-btn">
    <span>送信する</span>
    <span className="loading-dots">...</span>
  </button>
</form>
```

#### 特徴

- フォーカス時に枠線の色が変わる（青のグラデーション）
- 必須マークは赤ではなく優しいオレンジ
- 送信ボタンは押した感のあるアニメーション

---

## 🎭 アニメーション仕様

### 基本原則

- **過度なアニメーションは避ける**（AI 感が出る）
- **タイミングをずらす**（一斉に動かない）
- **イージングは自然に**（ease-in-out 多用）

### 実装例

```css
/* スクロールフェードイン */
.fade-in {
  opacity: 0;
  transform: translateY(20px) rotate(-0.2deg);
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: calc(var(--index) * 0.1s);
}

/* ホバーエフェクト */
.card:hover {
  transform: translateY(-3px) rotate(0.3deg);
  transition: all 0.3s ease-out;
}

/* フローティング */
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(-0.5deg);
  }
  50% {
    transform: translateY(-10px) rotate(0.5deg);
  }
}
```

---

## 📱 レスポンシブ対応

### ブレークポイント

```scss
$mobile: 640px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1280px;
```

### モバイル時の考慮

- 手書き風要素は控えめに（パフォーマンス）
- タッチターゲットは 44px 以上
- 横スクロールは絶対に避ける

---

## 🔍 SEO 対策

### 基本設定

```tsx
// メタデータ
export const metadata = {
  title: "WebChaleur ｜ 十勝のウェブ制作パートナー",
  description:
    "帯広・音更・十勝エリアのホームページ制作。地元企業様に寄り添い、最新技術で温かみのあるサイトを作ります。",
  keywords:
    "帯広 ホームページ制作, 音更 Web制作, 十勝 ECサイト, Shopify 北海道",
};
```

### 構造化データ

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WebChaleur",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "北海道",
    "addressLocality": "音更町"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.9929",
    "longitude": "143.2001"
  }
}
```

---

## 📊 パフォーマンス目標

### Core Web Vitals

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### 最適化手法

- 画像: WebP 形式、lazy loading
- フォント: font-display: swap
- CSS: Tailwind CSS の purge 設定
- JS: 動的インポート活用

---

## 🚀 デプロイ・運用

### Vercel 設定

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "devCommand": "next dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 環境変数

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://webchaleur.jp
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
CONTACT_EMAIL=info@webchaleur.jp
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

---

## ✅ チェックリスト

### デザイン面

- [ ] 完璧な対称性がないか確認
- [ ] 角丸が全て不規則か確認
- [ ] 余白が微妙に異なるか確認
- [ ] 要素に微妙な傾きがあるか確認
- [ ] 手書き風フォントを適切に使用
- [ ] 色が鮮やかすぎないか確認

### 言葉遣い

- [ ] 適切な漢字・ひらがなのバランス
- [ ] 丁寧な敬語を使用
- [ ] 親しみやすい表現を使用
- [ ] 地域性を感じる言葉を入れる

### 技術面

- [ ] MDX でコンテンツ管理可能
- [ ] TypeScript の型定義完備
- [ ] Tailwind CSS のカスタムクラス整理
- [ ] Vercel へのデプロイ設定

---

## 📝 補足事項

### 継続的な改善

- A/B テストの実施（特に CTA 周り）
- ユーザーフィードバックの収集
- 定期的なコンテンツ更新（ブログ週 1 回目標）

### 将来的な拡張

- 多言語対応（英語・中国語）
- チャットボット導入（ただし人間味を保つ）
- 料金シミュレーター機能

---

**この要件定義書に基づいて、AI 感ゼロの温かみのある Web サイトを構築します。**
