import type { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Consumer Complaint Portal',
  title: 'Consumer Complaint Portal - शिकायत पोर्टल',
  description:
    'Hindi-first consumer complaint guides, complaint letter templates, and official portal links for Indian consumers.',
  locale: 'hi_IN',
  twitterHandle: '@ConsumerPortalIN',
  legalName: 'Consumer Complaint Portal',
} as const;

export const DEFAULT_KEYWORDS = [
  'consumer complaint',
  'consumer complaint India',
  'consumer forum complaint',
  'complaint letter format',
  'consumer complaint letter',
  'online consumer complaint',
  'consumer helpline',
  'उपभोक्ता शिकायत',
  'शिकायत कैसे करें',
  'कंज्यूमर कोर्ट शिकायत',
  'शिकायत पत्र फॉर्मेट',
];

export type BreadcrumbItem = {
  name: string;
  href: string;
};

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: 'website' | 'article';
  titleAbsolute?: boolean;
  publishedTime?: string | Date;
  modifiedTime?: string | Date;
};

export function getBaseUrl() {
  return (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000').replace(/\/+$/, '');
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getBaseUrl()}${normalizedPath}`;
}

export function canonicalPath(path = '/') {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return path.startsWith('/') ? path : `/${path}`;
}

export function createPageMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  noIndex = false,
  type = 'website',
  titleAbsolute = false,
  publishedTime,
  modifiedTime,
}: MetadataOptions): Metadata {
  const canonical = canonicalPath(path);
  const mergedKeywords = [...DEFAULT_KEYWORDS, ...keywords];
  const robots = noIndex
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-snippet': -1,
          'max-image-preview': 'large' as const,
          'max-video-preview': -1,
        },
      };

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type,
      ...(type === 'article'
        ? {
            publishedTime: publishedTime ? new Date(publishedTime).toISOString() : undefined,
            modifiedTime: modifiedTime ? new Date(modifiedTime).toISOString() : undefined,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
    },
  };
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function createOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: absoluteUrl('/'),
    description: SITE_CONFIG.description,
    sameAs: [],
  };
}

export function createWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: absoluteUrl('/'),
    inLanguage: ['hi-IN', 'en-IN'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${absoluteUrl('/search')}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function createItemListJsonLd(
  name: string,
  items: Array<{ name: string; url: string; description?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: absoluteUrl(item.url),
      name: item.name,
      description: item.description,
    })),
  };
}
