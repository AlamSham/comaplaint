import { ImageResponse } from 'next/og';
import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import { CATEGORY_LABELS, type Category } from '@/lib/constants';

export const alt = 'Consumer Complaint Guide';
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
  const guide = await Guide.findOne({ slug, published: true })
    .select('title category language')
    .lean() as { title: string; category: Category; language: string } | null;

  const title = guide?.title || 'Consumer Complaint Guide';
  const category = guide?.category ? CATEGORY_LABELS[guide.category] : 'Guide';
  const language = guide?.language === 'hindi' ? 'हिंदी' : guide?.language === 'english' ? 'English' : 'Hinglish';

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
                color: '#d1fae5',
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
                background: 'rgba(16,185,129,0.3)',
                borderRadius: '999px',
                padding: '6px 18px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#a7f3d0',
              }}
            >
              {category}
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '999px',
                padding: '6px 18px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              {language}
            </div>
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
          COMPLAINT GUIDE
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
              fontSize: title.length > 50 ? '40px' : '48px',
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
          {['Step-by-Step Guide', 'Free Templates', 'Official Portal Links'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: '999px',
                  padding: '8px 18px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#d1fae5',
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
