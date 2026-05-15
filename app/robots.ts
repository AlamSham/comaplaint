import { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();
  const baseHost = new URL(baseUrl).host;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/search',
          '/search?*',
          // Block filter URLs to prevent crawl budget waste
          '/guides?*',
          '/templates?*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseHost,
  };
}
