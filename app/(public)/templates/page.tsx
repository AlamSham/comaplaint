import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import '@/lib/db/models/Guide';
import Link from 'next/link';
import { CATEGORY_LABELS, type Category, LANGUAGE_LABELS, type Language } from '@/lib/constants';
import { Metadata } from 'next';
import { LanguageFilter } from '@/components/public/LanguageFilter';
import { JsonLd } from '@/components/shared/JsonLd';
import { createItemListJsonLd, createPageMetadata } from '@/lib/seo';
import { getContentExcerpt } from '@/lib/content/publicSections';

type TemplateListItem = {
  _id: { toString(): string };
  title: string;
  slug: string;
  language: Language;
  content: string;
  downloadCount: number;
  guideRef?: {
    title: string;
    slug: string;
    category?: Category;
  } | null;
};

export const revalidate = 43200; // 12 hours

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ language?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const hasFilters = params.language && params.language !== 'all';
  
  return createPageMetadata({
    title: 'Complaint Templates (2026) — शिकायत टेम्पलेट',
    description:
      'Ready-made consumer complaint letter templates in Hindi, English, and Hinglish for RC transfer, refunds, banking, telecom, RERA, and insurance issues.',
    path: '/templates',
    noIndex: Boolean(hasFilters),
    keywords: [
      'complaint letter template',
      'consumer complaint format',
      'शिकायत पत्र फॉर्मेट हिंदी',
      'complaint letter Hindi format',
      'RC transfer complaint letter',
      'bank complaint letter format Hindi',
      'cheque bounce legal notice format',
      'flipkart refund complaint mail format',
      'builder delay complaint letter',
      'online refund request letter',
      'शिकायत आवेदन पत्र',
    ],
  });
}

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ language?: string }>;
}) {
  await connectDB();
  
  const params = await searchParams;
  const language = params.language;
  
  const query: { language?: string } = {};
  if (language && language !== 'all') {
    query.language = language;
  }
  
  const templates = (await Template.find(query)
    .populate('guideRef', 'title slug category')
    .sort({ downloadCount: -1 })
    .lean()) as unknown as TemplateListItem[];

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd
        data={createItemListJsonLd(
          'Consumer complaint letter templates',
          templates.map((template) => ({
            name: template.title,
            url: `/templates/${template.slug}`,
            description: template.content.substring(0, 150),
          }))
        )}
      />
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-3">
              Complaint templates
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              Complaint Templates
            </h1>
            <h2 className="text-2xl text-gray-800">
              शिकायत टेम्पलेट
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Copy-ready complaint formats for RC transfer delay, refunds, failed transactions, claim rejection, telecom billing, property delay, and public service issues.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-10 rounded-lg border border-stone-200 bg-white p-5">
          <h2 className="text-lg font-bold text-gray-950 mb-4">Filter Templates</h2>
          <LanguageFilter />
        </section>

        <section className="mb-12 grid md:grid-cols-3 gap-4">
          {[
            ['1', 'Pick a matching format', 'Choose the closest issue type and language.'],
            ['2', 'Replace every placeholder', 'Add complaint ID, dates, amount, product, policy, or account details.'],
            ['3', 'Attach proof', 'Send the template with invoices, screenshots, statements, or official responses.'],
          ].map(([step, title, description]) => (
            <div key={step} className="rounded-lg border border-stone-200 bg-white p-5">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                {step}
              </div>
              <h2 className="font-bold text-gray-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
            </div>
          ))}
        </section>

        {templates.length === 0 ? (
          <div className="rounded-lg border border-stone-200 bg-white text-center py-12">
            <p className="text-gray-500">No templates available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Link
                key={template._id.toString()}
                href={`/templates/${template.slug}`}
                className="bg-white rounded-lg border border-stone-200 hover:border-emerald-500 transition p-6"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                    {LANGUAGE_LABELS[template.language]}
                  </span>
                  {template.guideRef?.category && (
                    <span className="px-3 py-1 bg-amber-50 text-amber-900 rounded-full text-xs font-semibold">
                      {CATEGORY_LABELS[template.guideRef.category]}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-950 mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {getContentExcerpt(template.content)}
                </p>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold text-emerald-700">Open template →</span>
                </div>
                {template.guideRef && (
                  <div className="mt-4 border-t border-stone-200 pt-3 text-xs text-gray-500">
                    Related: {template.guideRef.title}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
