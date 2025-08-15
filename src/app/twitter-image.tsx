import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'WebChaleur - 十勝・帯広のWeb制作パートナー'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #5b8fb9 0%, #8fb5d1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* 背景の波形パターン */}
        <svg
          width="1200"
          height="600"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.1,
          }}
        >
          <path
            d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
            fill="white"
          />
        </svg>
        
        {/* メインコンテンツ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            color: 'white',
          }}
        >
          {/* ブランド名 */}
          <div
            style={{
              fontSize: 90,
              fontWeight: 'bold',
              display: 'flex',
              letterSpacing: '-2px',
            }}
          >
            WebChaleur
          </div>

          {/* 区切り線 */}
          <div
            style={{
              width: 100,
              height: 4,
              background: 'white',
              opacity: 0.5,
              borderRadius: 2,
            }}
          />

          {/* タグライン */}
          <div
            style={{
              fontSize: 28,
              textAlign: 'center',
              fontWeight: '400',
              opacity: 0.95,
            }}
          >
            十勝・帯広のWeb制作パートナー
          </div>

          {/* サブテキスト */}
          <div
            style={{
              fontSize: 22,
              textAlign: 'center',
              marginTop: 10,
              opacity: 0.8,
            }}
          >
            地元企業に寄り添い、温かみのあるWebサイトを
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            fontSize: 18,
            color: 'white',
            opacity: 0.7,
          }}
        >
          webchaleur.jp
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}