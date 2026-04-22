'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

export function AdSense({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' },
}: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Only show ads in production
  if (process.env.NODE_ENV !== 'production' || !process.env.NEXT_PUBLIC_ADSENSE_ID) {
    return (
      <div
        style={{
          ...style,
          background: '#f3f4f6',
          border: '2px dashed #d1d5db',
          padding: '2rem',
          textAlign: 'center',
          color: '#6b7280',
          borderRadius: '0.5rem',
        }}
      >
        <p>Ad Placeholder</p>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
          Ads will appear here in production
        </p>
      </div>
    );
  }

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
}

// Pre-configured ad components for common placements

export function InArticleAd() {
  return (
    <div className="my-8">
      <AdSense
        adSlot="YOUR_IN_ARTICLE_AD_SLOT"
        adFormat="fluid"
        style={{ display: 'block', textAlign: 'center' }}
      />
    </div>
  );
}

export function SidebarAd() {
  return (
    <div className="mb-6">
      <AdSense
        adSlot="YOUR_SIDEBAR_AD_SLOT"
        adFormat="vertical"
        style={{ display: 'block' }}
      />
    </div>
  );
}

export function BannerAd() {
  return (
    <div className="my-6">
      <AdSense
        adSlot="YOUR_BANNER_AD_SLOT"
        adFormat="horizontal"
        style={{ display: 'block' }}
      />
    </div>
  );
}

export function ResponsiveAd() {
  return (
    <div className="my-6">
      <AdSense
        adSlot="YOUR_RESPONSIVE_AD_SLOT"
        adFormat="auto"
        fullWidthResponsive={true}
        style={{ display: 'block' }}
      />
    </div>
  );
}
