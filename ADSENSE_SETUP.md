# Google AdSense Integration Guide

## Overview

This guide explains how to integrate Google AdSense into the Consumer Complaint Portal to monetize traffic.

## Prerequisites

1. **Google AdSense Account**: Apply at https://www.google.com/adsense
2. **Domain Verification**: Your site must be live and accessible
3. **Content Requirements**: Minimum content and traffic requirements
4. **Policy Compliance**: Ensure content complies with AdSense policies

## Setup Steps

### 1. Apply for Google AdSense

1. Go to https://www.google.com/adsense
2. Sign in with your Google account
3. Enter your website URL
4. Complete the application form
5. Wait for approval (typically 1-2 weeks)

### 2. Get Your AdSense Publisher ID

Once approved:
1. Log in to AdSense dashboard
2. Go to "Account" → "Settings"
3. Find your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)
4. Copy this ID

### 3. Add AdSense Script to Your Site

Update `app/layout.tsx` to include the AdSense script:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 4. Configure Environment Variables

Add to `.env.local`:
```env
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

Add to `.env.example`:
```env
# Google AdSense
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

Add to Vercel environment variables:
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add `NEXT_PUBLIC_ADSENSE_ID` with your publisher ID

### 5. Create Ad Units in AdSense

1. Log in to AdSense dashboard
2. Go to "Ads" → "By ad unit"
3. Click "New ad unit"
4. Create the following ad units:

**Recommended Ad Units:**

1. **In-Article Ad** (for guide/template content):
   - Type: In-article
   - Name: "Consumer Portal - In Article"
   - Copy the ad slot ID

2. **Sidebar Ad** (for desktop):
   - Type: Display
   - Size: Responsive
   - Name: "Consumer Portal - Sidebar"
   - Copy the ad slot ID

3. **Banner Ad** (for top/bottom):
   - Type: Display
   - Size: Responsive
   - Name: "Consumer Portal - Banner"
   - Copy the ad slot ID

4. **Multiplex Ad** (for related content):
   - Type: Multiplex
   - Name: "Consumer Portal - Related"
   - Copy the ad slot ID

### 6. Update Ad Components

Update `components/ads/AdSense.tsx` with your ad slot IDs:

```typescript
export function InArticleAd() {
  return (
    <div className="my-8">
      <AdSense
        adSlot="1234567890" // Replace with your ad slot ID
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
        adSlot="0987654321" // Replace with your ad slot ID
        adFormat="vertical"
        style={{ display: 'block' }}
      />
    </div>
  );
}
```

### 7. Add Ads to Pages

#### Guide Detail Page

Update `app/(public)/guides/[slug]/page.tsx`:

```typescript
import { InArticleAd } from '@/components/ads/AdSense';

export default async function GuidePage({ params }) {
  // ... existing code ...

  return (
    <div>
      {/* Guide content */}
      <div className="prose">
        {/* First section */}
        <InArticleAd />
        {/* More content */}
      </div>
    </div>
  );
}
```

#### Template Detail Page

Update `app/(public)/templates/[slug]/page.tsx`:

```typescript
import { InArticleAd, SidebarAd } from '@/components/ads/AdSense';

export default async function TemplatePage({ params }) {
  // ... existing code ...

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {/* Template content */}
        <InArticleAd />
      </div>
      <aside className="hidden lg:block">
        <SidebarAd />
      </aside>
    </div>
  );
}
```

## Ad Placement Best Practices

### Recommended Placements:

1. **Guide Pages**:
   - One in-article ad after introduction
   - One in-article ad in the middle of content
   - One banner ad at the bottom

2. **Template Pages**:
   - One sidebar ad (desktop only)
   - One in-article ad after template content
   - One banner ad at the bottom

3. **Homepage**:
   - One banner ad below hero section
   - One multiplex ad in popular guides section

4. **Listing Pages**:
   - One banner ad at top
   - One in-feed ad every 6-8 items

### Avoid:

- ❌ Too many ads (max 3 per page)
- ❌ Ads above the fold on mobile
- ❌ Ads that interfere with navigation
- ❌ Ads in admin panel
- ❌ Ads on error pages

## Performance Optimization

### Lazy Loading

Ads are automatically lazy-loaded by AdSense script.

### Loading Strategy

Use `strategy="afterInteractive"` in Script component to load ads after page is interactive.

### Core Web Vitals

Monitor impact on Core Web Vitals:
- LCP should remain < 2.5s
- CLS should remain < 0.1
- FID should remain < 100ms

If ads impact performance:
1. Reduce number of ad units
2. Use lazy loading for below-fold ads
3. Optimize ad placement

## AdSense Policies

### Content Requirements:

✅ **Allowed**:
- Educational content
- How-to guides
- Templates and resources
- Consumer information

❌ **Not Allowed**:
- Copyrighted content
- Adult content
- Violent content
- Illegal content
- Misleading information

### Technical Requirements:

- ✅ Original content
- ✅ Easy navigation
- ✅ Mobile-friendly
- ✅ Fast loading
- ✅ HTTPS enabled

## Monitoring and Optimization

### AdSense Dashboard Metrics:

1. **Revenue**:
   - Page RPM (Revenue per 1000 impressions)
   - CPC (Cost per click)
   - CTR (Click-through rate)

2. **Performance**:
   - Impressions
   - Clicks
   - Coverage

3. **Optimization**:
   - Ad balance
   - Auto ads suggestions
   - Blocking controls

### Optimization Tips:

1. **Test Ad Placements**:
   - Try different positions
   - Monitor performance
   - Keep best performers

2. **Use Auto Ads** (Optional):
   - Let Google optimize placement
   - Monitor impact on UX
   - Adjust settings as needed

3. **Block Low-Performing Ads**:
   - Review ad categories
   - Block irrelevant ads
   - Improve user experience

4. **Monitor Page RPM**:
   - Track revenue per page
   - Optimize high-traffic pages
   - Improve low-performing pages

## Compliance Checklist

Before enabling ads:

- [ ] AdSense account approved
- [ ] Publisher ID added to environment variables
- [ ] AdSense script added to layout
- [ ] Ad units created in AdSense dashboard
- [ ] Ad components updated with slot IDs
- [ ] Ads placed on appropriate pages
- [ ] Tested on mobile and desktop
- [ ] Verified no policy violations
- [ ] Monitored Core Web Vitals
- [ ] Documented ad placements

## Testing

### Development Testing:

Ads won't show in development. You'll see placeholders instead.

### Production Testing:

1. Deploy to production
2. Wait 10-15 minutes for ads to appear
3. Test on different devices
4. Verify ads are showing correctly
5. Check AdSense dashboard for impressions

### Common Issues:

**Ads not showing:**
- Check environment variable is set
- Verify ad slot IDs are correct
- Wait 10-15 minutes after deployment
- Check AdSense account status

**Blank ad spaces:**
- Low ad inventory (normal)
- Ad blockers enabled
- Policy violations
- Low traffic

## Revenue Expectations

### Factors Affecting Revenue:

1. **Traffic Volume**: More visitors = more revenue
2. **Geographic Location**: India typically has lower CPM
3. **Content Quality**: Better content = higher engagement
4. **Ad Placement**: Strategic placement = better CTR
5. **Niche**: Consumer rights is moderate-value niche

### Realistic Expectations:

- **Low Traffic** (1,000 views/day): ₹500-1,500/month
- **Medium Traffic** (10,000 views/day): ₹5,000-15,000/month
- **High Traffic** (100,000 views/day): ₹50,000-150,000/month

*Note: These are estimates. Actual revenue varies.*

## Alternative Monetization

If AdSense doesn't work:

1. **Media.net**: Alternative ad network
2. **Affiliate Marketing**: Link to complaint services
3. **Sponsored Content**: Partner with legal services
4. **Premium Features**: Paid templates or consultations
5. **Donations**: Accept voluntary contributions

## Resources

- **AdSense Help**: https://support.google.com/adsense
- **AdSense Policies**: https://support.google.com/adsense/answer/48182
- **Ad Placement Guide**: https://support.google.com/adsense/answer/1354736
- **Performance Tips**: https://support.google.com/adsense/answer/9183549

## Current Implementation Status

✅ **Completed**:
- AdSense component created (`components/ads/AdSense.tsx`)
- Pre-configured ad components (InArticle, Sidebar, Banner, Responsive)
- Development placeholders
- Environment variable support

⏳ **To Do**:
- Apply for AdSense account
- Get publisher ID
- Create ad units
- Update ad slot IDs
- Add AdSense script to layout
- Place ads on pages
- Test in production
- Monitor performance

## Next Steps

1. Apply for Google AdSense account
2. Wait for approval
3. Get your publisher ID
4. Create ad units in AdSense dashboard
5. Update environment variables
6. Update ad slot IDs in components
7. Add AdSense script to layout
8. Deploy to production
9. Monitor performance
10. Optimize based on data
