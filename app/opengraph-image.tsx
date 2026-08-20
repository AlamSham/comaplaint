import { ImageResponse } from 'next/og';

export const alt = 'ShikayatKaro | Free consumer complaint guides and templates for India (2026)';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: '#fbbf24',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 800,
              color: '#064e3b',
            }}
          >
            SK
          </div>
          <div
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#d1fae5',
              letterSpacing: '0.5px',
            }}
          >
            shikayatkaro.com
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            ShikayatKaro (2026)
          </div>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#a7f3d0',
              lineHeight: 1.3,
              marginBottom: '24px',
            }}
          >
            Consumer Complaint Portal — शिकायत पोर्टल
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#d1fae5',
              lineHeight: 1.6,
              maxWidth: '850px',
            }}
          >
            Free complaint guides, letter templates, and official portal links for Indian consumers
          </div>
        </div>

        {/* Bottom badges */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '20px',
          }}
        >
          {['Complaint Guides', 'Letter Templates', 'Official Portals', 'Hindi & Hinglish'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: '999px',
                  padding: '8px 20px',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#ffffff',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
