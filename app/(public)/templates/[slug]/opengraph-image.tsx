import { ImageResponse } from 'next/og';
import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import { LANGUAGE_LABELS, type Language } from '@/lib/constants';

export const alt = 'Consumer Complaint Template';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await connectDB();
  const template = await Template.findOne({ slug })
    .select('title language downloadCount')
    .lean() as { title: string; language: Language; downloadCount: number } | null;

  const title = template?.title || 'Complaint Letter Template';
  const language = template?.language ? LANGUAGE_LABELS[template.language] : 'Hindi';
  const downloads = template?.downloadCount || 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1c1917 0%, #292524 40%, #44403c 100%)',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: '#fbbf24',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 800,
                color: '#064e3b',
              }}
            >
              शि
            </div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#a8a29e',
              }}
            >
              shikayatkaro.com
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <div
              style={{
                background: 'rgba(245,158,11,0.2)',
                borderRadius: '999px',
                padding: '6px 18px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#fbbf24',
              }}
            >
              {language}
            </div>
            {downloads > 0 && (
              <div
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '999px',
                  padding: '6px 18px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#d6d3d1',
                }}
              >
                {downloads} downloads
              </div>
            )}
          </div>
        </div>

        {/* Label */}
        <div
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: '#fbbf24',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          COMPLAINT LETTER TEMPLATE
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: title.length > 50 ? '38px' : '46px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.25,
              maxWidth: '1000px',
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '20px',
          }}
        >
          {['Copy & Customize', 'Ready Format', 'Free Download'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '999px',
                padding: '8px 18px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#d6d3d1',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
