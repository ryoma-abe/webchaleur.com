import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'WebChaleur - 十勝・帯広のWeb制作パートナー'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #e8f3fa 0%, #ffffff 50%, #f8fbff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            background: '#5b8fb9',
            borderRadius: '50%',
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -150,
            width: 400,
            height: 400,
            background: '#8fb5d1',
            borderRadius: '50%',
            opacity: 0.1,
          }}
        />
        
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontSize: 80,
                fontWeight: 'bold',
                display: 'flex',
              }}
            >
              <span style={{ color: '#5b8fb9' }}>Web</span>
              <span style={{ color: '#2c2825' }}>Chaleur</span>
            </div>
          </div>

          
          <div
            style={{
              fontSize: 32,
              color: '#5a524c',
              textAlign: 'center',
              fontWeight: '500',
            }}
          >
            十勝・帯広のWeb制作パートナー
          </div>

          
          <div
            style={{
              fontSize: 24,
              color: '#5a524c',
              textAlign: 'center',
              marginTop: 20,
              padding: '0 40px',
              lineHeight: 1.5,
            }}
          >
            地元企業に寄り添い、温かみのあるWebサイトを
          </div>

          
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              display: 'flex',
              gap: 30,
              fontSize: 20,
              color: '#8fb5d1',
            }}
          >
            <span>Web制作</span>
            <span>•</span>
            <span>ECサイト</span>
            <span>•</span>
            <span>コンサルティング</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}