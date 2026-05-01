import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Template from '@/lib/db/models/Template';
import '@/lib/db/models/Portal';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { Types } from 'mongoose';
import { CATEGORY_LABELS, LANGUAGE_LABELS, type Category, type Language } from '@/lib/constants';
import { SocialShare } from '@/components/shared/SocialShare';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { JsonLd } from '@/components/shared/JsonLd';
import { absoluteUrl, createPageMetadata } from '@/lib/seo';
import {
  CATEGORY_DETAILS,
  getReadingMinutes,
} from '@/lib/content/publicSections';

type PopulatedPortal = {
  _id: { toString(): string };
  name: string;
  url: string;
  description: string;
  phone?: string;
};

type GuideDetail = {
  _id: Types.ObjectId;
  title: string;
  slug: string;
  category: Category;
  language: Language;
  content: string;
  steps?: string[];
  portals?: PopulatedPortal[];
  tags?: string[];
  metadata: {
    title: string;
    description: string;
    ogImage?: string;
  };
  published: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
};

type RelatedTemplate = {
  _id: { toString(): string };
  title: string;
  slug: string;
  downloadCount: number;
};

export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  await connectDB();
  const guides = await Guide.find({ published: true }).select('slug').lean();
  
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  await connectDB();
  
  const { slug } = await params;
  const guide = (await Guide.findOne({ slug, published: true }).lean()) as unknown as GuideDetail | null;
  
  if (!guide) {
    return {};
  }

  return createPageMetadata({
    title: guide.metadata.title,
    description: guide.metadata.description,
    path: `/guides/${slug}`,
    type: 'article',
    titleAbsolute: true,
    keywords: guide.tags || [],
    publishedTime: guide.createdAt,
    modifiedTime: guide.updatedAt,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  
  const { slug } = await params;
  
  // Increment view count
  const guide = (await Guide.findOneAndUpdate(
    { slug, published: true },
    { $inc: { views: 1 } },
    { returnDocument: 'after' }
  ).populate('portals').lean()) as unknown as GuideDetail | null;

  if (!guide) {
    notFound();
  }

  // Get related templates
  const templates = (await Template.find({ guideRef: guide._id })
    .select('title slug downloadCount')
    .lean()) as unknown as RelatedTemplate[];

  // Structured data for SEO
  const guideUrl = absoluteUrl(`/guides/${guide.slug}`);
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metadata.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': guideUrl,
    },
    author: {
      '@type': 'Organization',
      name: 'Consumer Complaint Portal',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Consumer Complaint Portal',
      url: absoluteUrl('/'),
    },
    datePublished: guide.createdAt,
    dateModified: guide.updatedAt,
    url: guideUrl,
    inLanguage: guide.language === 'hindi' ? 'hi' : 'en',
    articleSection: CATEGORY_LABELS[guide.category],
    keywords: guide.tags || [],
    isAccessibleForFree: true,
  };

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Guides', href: '/guides' },
    { name: guide.title, href: `/guides/${guide.slug}` },
  ];
  const categoryDetail = CATEGORY_DETAILS[guide.category];
  const readingMinutes = getReadingMinutes(guide.content);
  const lastUpdated = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(guide.updatedAt));

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={articleJsonLd} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
          <aside className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-lg border border-stone-200 bg-white p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-3">
                On This Page
              </h2>
              <nav className="space-y-2 text-sm">
                {[
                  ['summary', 'Summary'],
                  ['process', 'Steps'],
                  ['documents', 'Documents'],
                  ['mistakes', 'Common mistakes'],
                  templates.length > 0 ? ['templates', 'Templates'] : null,
                  guide.portals && guide.portals.length > 0 ? ['portals', 'Official portals'] : null,
                ]
                  .filter(Boolean)
                  .map((item) => {
                    const [href, label] = item as string[];
                    return (
                      <a key={href} href={`#${href}`} className="block text-gray-600 hover:text-emerald-700">
                        {label}
                      </a>
                    );
                  })}
              </nav>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h2 className="font-bold text-amber-950">Before You File</h2>
              <p className="mt-2 text-sm leading-6 text-amber-900">
                Use official portals for submission and keep every acknowledgement number safe.
              </p>
            </div>
          </aside>

          <div>
            <article className="bg-white rounded-lg border border-stone-200 p-6 md:p-8 mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-sm font-semibold">
                  {CATEGORY_LABELS[guide.category]}
                </span>
                <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-sm">
                  {LANGUAGE_LABELS[guide.language]}
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-900 rounded-full text-sm">
                  {readingMinutes} min read
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-950 mb-5 leading-tight">
                {guide.title}
              </h1>

              <p className="text-lg leading-8 text-gray-700 mb-6">
                {guide.metadata.description || categoryDetail.guideIntro}
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {[
                  ['Category', CATEGORY_LABELS[guide.category]],
                  ['Updated', lastUpdated],
                  ['Views', String(guide.views)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</div>
                    <div className="mt-1 font-semibold text-gray-950">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mb-7 border-y border-stone-200 py-5">
                <SocialShare 
                  title={guide.title} 
                  url={guideUrl} 
                />
              </div>

              <section id="summary" className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
                <h2 className="text-xl font-bold text-emerald-950 mb-3">Quick Summary</h2>
                <p className="text-emerald-950 leading-7">{categoryDetail.guideIntro}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-4">Complete Guide</h2>
                <div className="prose max-w-none">
                  <div className="text-gray-700 whitespace-pre-wrap leading-8">
                    {guide.content}
                  </div>
                </div>
              </section>

              {guide.steps && guide.steps.length > 0 && (
                <section id="process" className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-950 mb-5">Step-by-Step Process</h2>
                  <ol className="space-y-4">
                    {guide.steps.map((step: string, index: number) => (
                      <li key={step} className="flex gap-4 rounded-lg border border-stone-200 bg-white p-4">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 pt-1 leading-7">{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              <section id="documents" className="mt-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-4">Documents and Proof to Keep Ready</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {categoryDetail.documents.map((document) => (
                    <div key={document} className="rounded-lg border border-stone-200 bg-stone-50 p-4 text-gray-700">
                      {document}
                    </div>
                  ))}
                </div>
              </section>

              <section id="mistakes" className="mt-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-4">Common Mistakes to Avoid</h2>
                <div className="space-y-3">
                  {categoryDetail.commonMistakes.map((mistake) => (
                    <div key={mistake} className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-rose-950">
                      {mistake}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-4">Escalation Path</h2>
                <ol className="grid md:grid-cols-3 gap-3">
                  {categoryDetail.escalationPath.map((step, index) => (
                    <li key={step} className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                        Stage {index + 1}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-gray-700">{step}</div>
                    </li>
                  ))}
                </ol>
              </section>

              {guide.tags && guide.tags.length > 0 && (
                <section className="mt-8">
                  <h2 className="text-lg font-semibold text-gray-950 mb-3">Related Keywords</h2>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {templates.length > 0 && (
              <section id="templates" className="bg-white rounded-lg border border-stone-200 p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-2">
                  Related Complaint Templates
                </h2>
                <p className="text-gray-600 mb-5">
                  Use these samples as a starting point and customize every fact before submission.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {templates.map((template) => (
                    <Link
                      key={template._id.toString()}
                      href={`/templates/${template.slug}`}
                      className="block p-4 border border-stone-200 rounded-lg hover:border-emerald-500 transition"
                    >
                      <h3 className="font-semibold text-gray-950">{template.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {template.downloadCount} downloads
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {guide.portals && guide.portals.length > 0 && (
              <section id="portals" className="bg-white rounded-lg border border-stone-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-2">
                  Official Complaint Portals
                </h2>
                <p className="text-gray-600 mb-5">
                  Open the official route in a new tab and keep the acknowledgement number after submission.
                </p>
                <div className="space-y-4">
                  {guide.portals.map((portal) => (
                    <div
                      key={portal._id.toString()}
                      className="p-4 border border-stone-200 rounded-lg"
                    >
                      <h3 className="font-semibold text-gray-950">{portal.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{portal.description}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800 transition"
                        >
                          Visit Portal
                        </a>
                        {portal.phone && (
                          <span className="text-sm text-gray-600">
                            Phone: {portal.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
