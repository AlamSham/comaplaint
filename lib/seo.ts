import type { Metadata } from 'next';

// TODO: Replace these with your real details
export const SITE_CONFIG = {
  name: 'ShikayatKaro',
  title: 'ShikayatKaro — Consumer Complaint Portal (2026)',
  description:
    'Free consumer complaint guides, complaint letter templates, and official portal links for Indian consumers. शिकायत दर्ज करने का सही तरीका।',
  locale: 'hi_IN',
  twitterHandle: '@ShikayatKaro', // TODO: Create and update
  legalName: 'ShikayatKaro',
  contactEmail: 'contact@shikayatkaro.com', // TODO: Update with real email
  foundingYear: '2026',
  // TODO: Add your real social media profile URLs
  socialLinks: [
    // 'https://twitter.com/ShikayatKaro',
    // 'https://www.linkedin.com/company/shikayatkaro',
    // 'https://www.youtube.com/@ShikayatKaro',
  ] as string[],
} as const;

// TODO: Replace with your real name and bio
export const AUTHOR_CONFIG = {
  name: 'ShikayatKaro Team', // TODO: Replace with real author name
  role: 'Consumer Rights Researcher',
  description:
    'Consumer rights researcher focused on simplifying complaint filing for Indian consumers. Covers e-commerce, banking, telecom, RERA, insurance, and government services.',
  // TODO: Add your profile URL
  url: 'https://shikayatkaro.com/about',
} as const;

// High-intent search keywords for maximum Google Impressions in India
export const HOMEPAGE_KEYWORDS = [
  'consumer complaint portal India',
  'consumer complaint guide Hindi',
  'complaint letter template Hindi',
  'online complaint kaise kare',
  'उपभोक्ता शिकायत दर्ज करें',
  'शिकायत कैसे करें',
  'कंज्यूमर कोर्ट ऑनलाइन शिकायत',
  'शिकायत पत्र फॉर्मेट हिंदी',
  'National Consumer Helpline 1915',
  'e Daakhil consumer court portal',
  'RBI Banking Ombudsman complaint',
  'बैंकिंग लोकपाल शिकायत फॉर्म',
  'Flipkart complaint email id',
  'Meesho refund complaint number',
  'Amazon refund complaint guide',
  'UPI failed transaction money debited refund',
  'CIBIL score correction online Hindi',
  'Cheque bounce legal notice format',
  'TRAI telecom complaint process',
  'RERA builder delay complaint',
  'RTO RC transfer delay complaint',
  'Insurance claim rejection complaint IRDAI',
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
  // Each page defines its OWN keywords — no more global merging (fixes keyword cannibalization)
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
    keywords: keywords.length > 0 ? keywords : undefined,
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
            authors: [AUTHOR_CONFIG.name],
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
    foundingDate: SITE_CONFIG.foundingYear,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contactEmail,
      contactType: 'customer support',
      availableLanguage: ['Hindi', 'English'],
    },
    sameAs: SITE_CONFIG.socialLinks,
  };
}

export function createWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: absoluteUrl('/'),
    inLanguage: ['hi-IN', 'en-IN'],
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: absoluteUrl('/'),
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${absoluteUrl('/search')}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function createAuthorJsonLd() {
  return {
    '@type': 'Person',
    name: AUTHOR_CONFIG.name,
    jobTitle: AUTHOR_CONFIG.role,
    description: AUTHOR_CONFIG.description,
    url: absoluteUrl(AUTHOR_CONFIG.url),
    worksFor: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: absoluteUrl('/'),
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
