import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Template from '@/lib/db/models/Template';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES, CATEGORY_LABELS, type Category, type Language } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { createPageMetadata, createItemListJsonLd, AUTHOR_CONFIG } from '@/lib/seo';
import { CATEGORY_DETAILS, getContentExcerpt } from '@/lib/content/publicSections';
import { CATEGORY_FAQS, createFaqJsonLd } from '@/lib/content/faqData';

type CategoryGuide = {
  _id: { toString(): string };
  title: string;
  slug: string;
  category: Category;
  language: Language;
  content: string;
  metadata?: {
    description?: string;
  };
};

type CategoryTemplate = {
  _id: { toString(): string };
  title: string;
  slug: string;
  language: Language;
  content: string;
};

export const revalidate = 86400; // 24 hours — relies on On-Demand Revalidation

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;

  if (!CATEGORIES.includes(category as Category)) {
    return {};
  }

  const typedCategory = category as Category;
  const label = CATEGORY_LABELS[typedCategory];
  const detail = CATEGORY_DETAILS[typedCategory];

  return createPageMetadata({
    title: `${label} Complaint Guide (2026) — ${label} शिकायत गाइड`,
    description: `Step-by-step guide to file ${label.toLowerCase()} complaints in India. ${detail.shortDescription}`,
    path: `/guides/category/${category}`,
    titleAbsolute: true,
    keywords: [
      `${label.toLowerCase()} complaint India`,
      `${label.toLowerCase()} complaint guide Hindi`,
      `${label.toLowerCase()} शिकायत कैसे करें`,
      ...detail.popularQueries,
    ],
  });
}

export default async function CategoryHubPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!CATEGORIES.includes(category as Category)) {
    notFound();
  }

  const typedCategory = category as Category;
  const label = CATEGORY_LABELS[typedCategory];
  const detail = CATEGORY_DETAILS[typedCategory];
  const categoryFaqs = CATEGORY_FAQS[typedCategory] || [];

  let guides: CategoryGuide[] = [];
  let categoryTemplates: (CategoryTemplate & { guideRef?: { category: Category } | null })[] = [];

  try {
    await connectDB();

    guides = (await Guide.find({ published: true, category: typedCategory })
      .select('title slug category language content metadata.description')
      .sort({ views: -1 })
      .lean()) as unknown as CategoryGuide[];

    const templates = (await Template.find()
      .populate({ path: 'guideRef', match: { category: typedCategory }, select: 'category' })
      .select('title slug language content')
      .lean()) as unknown as (CategoryTemplate & { guideRef?: { category: Category } | null })[];

    // Filter templates that belong to this category
    categoryTemplates = templates.filter((t) => t.guideRef?.category === typedCategory);
  } catch (error) {
    console.warn('CategoryHubPage DB error:', error);
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Guides', href: '/guides' },
    { name: `${label} Complaints`, href: `/guides/category/${category}` },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd
        data={createItemListJsonLd(
          `${label} complaint guides`,
          guides.map((guide) => ({
            name: guide.title,
            url: `/guides/${guide.slug}`,
            description: guide.metadata?.description || getContentExcerpt(guide.content),
          }))
        )}
      />
      {categoryFaqs.length > 0 && <JsonLd data={createFaqJsonLd(categoryFaqs)} />}

      {/* Hero */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-3">
              {label} complaints
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              {label} Complaint Guide (2026)
            </h1>
            <h2 className="text-2xl text-gray-800 mb-4">
              {label} शिकायत कैसे करें — Complete Process
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              {detail.guideIntro}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-white font-bold text-xs">
                {AUTHOR_CONFIG.name.charAt(0)}
              </div>
              <div className="text-sm text-gray-600">
                By <span className="font-semibold text-gray-950">{AUTHOR_CONFIG.name}</span> · Last updated August 2026
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Escalation Path */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-950 mb-5">Escalation Path</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {detail.escalationPath.map((step, index) => (
              <div key={step} className="rounded-lg border border-stone-200 bg-white p-5">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-950 mb-5">Documents You Need</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {detail.documents.map((doc) => (
              <div key={doc} className="rounded-lg border border-stone-200 bg-white p-4 text-sm text-gray-700">
                {doc}
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-950 mb-5">Common Mistakes to Avoid</h2>
          <div className="space-y-3">
            {detail.commonMistakes.map((mistake) => (
              <div key={mistake} className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-950">
                {mistake}
              </div>
            ))}
          </div>
        </section>

        {/* All guides in this category */}
        {guides.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-950 mb-5">
              All {label} Complaint Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Link
                  key={guide._id.toString()}
                  href={`/guides/${guide.slug}`}
                  className="bg-white rounded-lg border border-stone-200 hover:border-emerald-500 transition p-6"
                >
                  <div className="mb-3">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                      {guide.language}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-950 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {guide.metadata?.description || getContentExcerpt(guide.content)}
                  </p>
                  <div className="text-sm font-semibold text-emerald-700">
                    Read guide →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related templates */}
        {categoryTemplates.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-950 mb-5">
              {label} Complaint Templates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryTemplates.map((template) => (
                <Link
                  key={template._id.toString()}
                  href={`/templates/${template.slug}`}
                  className="rounded-lg border border-stone-200 bg-white p-5 hover:border-emerald-500 transition"
                >
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-800">
                    {template.language}
                  </div>
                  <h3 className="font-bold text-gray-950">{template.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {getContentExcerpt(template.content, 100)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Category FAQs — shown ONLY on hub page (not on individual guides anymore to avoid duplication) */}
        {categoryFaqs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-950 mb-2">
              {label} — अक्सर पूछे जाने वाले सवाल (FAQ)
            </h2>
            <p className="text-gray-600 mb-5">
              Common questions about filing {label.toLowerCase()} complaints in India.
            </p>
            <div className="space-y-4">
              {categoryFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-stone-200 bg-white"
                >
                  <summary className="cursor-pointer p-4 font-semibold text-gray-950 hover:text-emerald-700 transition">
                    {faq.question}
                  </summary>
                  <div className="px-4 pb-4 text-sm leading-7 text-gray-700">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Popular queries */}
        <section className="rounded-lg border border-stone-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-950 mb-3">Related Searches</h2>
          <div className="flex flex-wrap gap-2">
            {detail.popularQueries.map((query) => (
              <span
                key={query}
                className="rounded-full bg-stone-100 px-3 py-1.5 text-sm text-gray-700"
              >
                {query}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
