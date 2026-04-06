import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Asif Shaikh - Personal Website'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right bottom, #ffffff, #f3f4f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '120px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#111827',
            letterSpacing: '-0.02em',
            marginBottom: 24,
          }}
        >
          Asif Shaikh
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: '#6b7280',
          }}
        >
          Personal website exploring code, thoughts, and travel.
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 120,
            left: 120,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: '#9ca3af',
              fontWeight: 500,
            }}
          >
            asifshaikh.xyz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
