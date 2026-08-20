import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Link from 'next/link';
import { CATEGORIES, CATEGORY_LABELS, type Category, type Language } from '@/lib/constants';
import { Metadata } from 'next';
import { CategoryFilter } from '@/components/public/CategoryFilter';
import { LanguageFilter } from '@/components/public/LanguageFilter';
import { JsonLd } from '@/components/shared/JsonLd';
import { createItemListJsonLd, createPageMetadata } from '@/lib/seo';
import { CATEGORY_DETAILS, getContentExcerpt } from '@/lib/content/publicSections';

type GuideListItem = {
  _id: { toString(): string };
  title: string;
  slug: string;
  category: Category;
  language: Language;
  content: string;
  views: number;
  metadata?: {
    description?: string;
  };
};

export const revalidate = 43200; // 12 hours

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; language?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const hasFilters =
    (params.category && params.category !== 'all') || (params.language && params.language !== 'all');
  
  return createPageMetadata({
    title: 'Complaint Guides (2026) — शिकायत गाइड',
    description:
      'Step-by-step guides to file consumer complaints in India for RC transfer, e-commerce, banking, telecom, RERA, insurance, and government services.',
    path: '/guides',
    noIndex: Boolean(hasFilters),
    keywords: [
      'consumer complaint guides',
      'complaint kaise kare',
      'consumer forum guide Hindi',
      'online complaint filing India',
      'RC transfer complaint guide',
      'flipkart complaint process',
      'amazon refund guide',
      'bank ombudsman complaint guide',
      'upi transaction dispute guide',
      'rera complaint online guide',
      'insurance claim rejection guide',
      'consumer court edaakhil guide',
      'उपभोक्ता शिकायत गाइड',
    ],
  });
}

export default async function GuidesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; language?: string }>;
}) {
  await connectDB();
  
  const params = await searchParams;
  const category = params.category;
  const language = params.language;
  
  const query: { published: true; category?: string; language?: string } = { published: true };
  if (category && category !== 'all') {
    query.category = category;
  }
  if (language && language !== 'all') {
    query.language = language;
  }
  
  const guides = (await Guide.find(query)
    .select('title slug category language content views metadata.description')
    .sort({ views: -1 })
    .lean()) as unknown as GuideListItem[];

  const guidesByCategory = guides.reduce<Record<string, GuideListItem[]>>((acc, guide) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push(guide);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd
        data={createItemListJsonLd(
          'Consumer complaint guides',
          guides.map((guide) => ({
            name: guide.title,
            url: `/guides/${guide.slug}`,
            description: guide.metadata?.description || guide.content.substring(0, 150),
          }))
        )}
      />
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-3">
              Complaint guides
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              Complaint Guides
            </h1>
            <h2 className="text-2xl text-gray-800">
              शिकायत गाइड
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Step-by-step complaint paths for RC transfer delay, refunds, banking disputes, telecom issues, property complaints, insurance claims, and public services.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-10 rounded-lg border border-stone-200 bg-white p-5">
          <h2 className="text-lg font-bold text-gray-950 mb-4">Filter Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <CategoryFilter />
            <LanguageFilter />
          </div>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((item) => (
              <Link
                key={item}
                href={`/guides/category/${item}`}
                className="rounded-lg border border-stone-200 bg-white p-5 hover:border-emerald-500 transition"
              >
                <h2 className="font-bold text-gray-950">{CATEGORY_LABELS[item]}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {CATEGORY_DETAILS[item].shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {Object.keys(guidesByCategory).length === 0 ? (
          <div className="rounded-lg border border-stone-200 bg-white text-center py-12">
            <p className="text-gray-500">No guides available yet.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(guidesByCategory).map(([category, categoryGuides]) => {
              const typedCategory = category as Category;

              return (
              <section key={category} className="scroll-mt-24">
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-950">
                      {CATEGORY_LABELS[typedCategory]}
                    </h2>
                    <p className="mt-2 max-w-3xl text-gray-600 leading-7">
                      {CATEGORY_DETAILS[typedCategory].guideIntro}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORY_DETAILS[typedCategory].popularQueries.slice(0, 2).map((query) => (
                      <span key={query} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                        {query}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryGuides.map((guide) => (
                    <Link
                      key={guide._id.toString()}
                      href={`/guides/${guide.slug}`}
                      className="bg-white rounded-lg border border-stone-200 hover:border-emerald-500 transition p-6"
                    >
                      <div className="mb-3 flex items-center gap-3 text-xs">
                        <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-800">
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
