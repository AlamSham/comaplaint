import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Template from '@/lib/db/models/Template';
import Link from 'next/link';
import { JsonLd } from '@/components/shared/JsonLd';
import { createItemListJsonLd, createPageMetadata } from '@/lib/seo';
import { CATEGORIES, CATEGORY_LABELS, type Category, type Language } from '@/lib/constants';
import {
  CATEGORY_DETAILS,
  TOPIC_CLUSTERS,
  getContentExcerpt,
} from '@/lib/content/publicSections';

type HomeGuide = {
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

type HomeTemplate = {
  _id: { toString(): string };
  title: string;
  slug: string;
  language: Language;
  content: string;
  downloadCount: number;
};

type CategoryCount = {
  _id: Category;
  count: number;
};

export const revalidate = 3600; // 1 hour

export const metadata = createPageMetadata({
  title: 'Consumer Complaint Portal - शिकायत पोर्टल',
  description:
    'Free Hindi-first consumer complaint guides, letter templates, and official portal links for filing complaints in India.',
  path: '/',
  keywords: [
    'consumer complaint portal India',
    'consumer complaint guide Hindi',
    'complaint letter template Hindi',
    'online complaint kaise kare',
  ],
});

export default async function Home() {
  await connectDB();
  
  const topGuides = (await Guide.find({ published: true })
    .select('title slug category language content views metadata.description')
    .sort({ views: -1 })
    .limit(6)
    .lean()) as unknown as HomeGuide[];

  // Fetch ALL guides for the complete index section (critical for indexing)
  const allGuides = (await Guide.find({ published: true })
    .select('title slug category')
    .sort({ category: 1, views: -1 })
    .lean()) as unknown as Array<{ _id: { toString(): string }; title: string; slug: string; category: Category }>;

  const topTemplates = (await Template.find()
    .select('title slug language content downloadCount')
    .sort({ downloadCount: -1 })
    .limit(4)
    .lean()) as unknown as HomeTemplate[];

  // Fetch ALL templates for the complete index section
  const allTemplates = (await Template.find()
    .select('title slug language')
    .sort({ language: 1 })
    .lean()) as unknown as Array<{ _id: { toString(): string }; title: string; slug: string; language: Language }>;

  const categoryCounts = (await Guide.aggregate([
    { $match: { published: true } },
    { $group: { _id: '$category', count: { $sum: 1 } } },
  ])) as CategoryCount[];

  const guideCountByCategory = categoryCounts.reduce<Record<string, number>>((acc, category) => {
    acc[category._id] = category.count;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-stone-50">
      <JsonLd
        data={createItemListJsonLd(
          'Popular consumer complaint guides',
          topGuides.map((guide) => ({
            name: guide.title,
            url: `/guides/${guide.slug}`,
            description: guide.metadata?.description || getContentExcerpt(guide.content),
          }))
        )}
      />
      <JsonLd
        data={createItemListJsonLd(
          'Popular consumer complaint letter templates',
          topTemplates.map((template) => ({
            name: template.title,
            url: `/templates/${template.slug}`,
            description: getContentExcerpt(template.content),
          }))
        )}
      />

      <section className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-4">
                Free consumer help for India
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-4 leading-tight">
                Consumer Complaint Portal
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                उपभोक्ता शिकायत पोर्टल
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
                Find the correct complaint route, collect the right proof, and use ready complaint formats for refunds, banking disputes, telecom issues, RERA matters, insurance claims, and public services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/complaint-helper"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-white font-semibold hover:bg-emerald-800 transition"
                >
                  Smart Draft Helper
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-900 font-semibold hover:border-gray-500 transition"
                >
                  Browse Guides
                </Link>
                <Link
                  href="/templates"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-900 font-semibold hover:border-gray-500 transition"
                >
                  Get Templates
                </Link>
                <Link
                  href="/portals"
                  className="inline-flex items-center justify-center rounded-lg border border-amber-300 bg-amber-50 px-6 py-3 text-amber-950 font-semibold hover:bg-amber-100 transition"
                >
                  Official Portals
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-stone-50 p-5">
              <h3 className="text-lg font-bold text-gray-950 mb-4">Start With Your Problem</h3>
              <div className="space-y-3">
                {TOPIC_CLUSTERS.map((cluster) => (
                  <Link
                    key={cluster.title}
                    href={cluster.href}
                    className="block rounded-lg border border-stone-200 bg-white p-4 hover:border-emerald-500 transition"
                  >
                    <div className="font-semibold text-gray-950">{cluster.title}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {cluster.keywords.map((keyword) => (
                        <span key={keyword} className="rounded-full bg-stone-100 px-2.5 py-1 text-xs text-gray-700">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Complaint categories', value: CATEGORIES.length },
              { label: 'Ready templates', value: '32+' },
              { label: 'Draft helper', value: 'Live' },
              { label: 'Official routes', value: 'NCH, VAHAN, RBI' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-stone-200 bg-white p-5">
                <div className="text-2xl font-bold text-gray-950">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
                Quick draft
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-950">
                Start with a smart complaint draft
              </h2>
              <p className="mt-3 leading-7 text-gray-700">
                Select your issue, prepare a clear complaint, collect proof, and continue to the matching guide or template.
              </p>
              <Link
                href="/complaint-helper"
                className="mt-5 inline-flex rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Open Draft Helper
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'RC transfer delay',
                  description: 'RTO, dealer, VAHAN application, Form 29/30, and ownership transfer follow-up.',
                  href: '/guides/rc-transfer-delay-complaint-guide',
                },
                {
                  title: 'Refund not received',
                  description: 'Shopping refunds, failed payments, cancellation proof, and support ticket escalation.',
                  href: '/guides?category=ecommerce',
                },
                {
                  title: 'Bank transaction dispute',
                  description: 'UPI, ATM, unauthorized debit, complaint reference, and RBI escalation path.',
                  href: '/guides?category=banking',
                },
                {
                  title: 'Insurance claim rejection',
                  description: 'Policy documents, rejection reason, claim proof, and ombudsman route.',
                  href: '/guides?category=insurance',
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-lg border border-stone-200 bg-white p-5 transition hover:border-emerald-500 hover:shadow-sm"
                >
                  <h3 className="font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-950">Browse by Category</h2>
              <p className="mt-2 text-gray-600">Choose the issue type and follow the right escalation path.</p>
            </div>
            <Link href="/guides" className="font-semibold text-emerald-700 hover:text-emerald-900">
              View all guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/guides?category=${category}`}
                className="rounded-lg border border-stone-200 bg-white p-5 hover:border-emerald-500 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-gray-950">{CATEGORY_LABELS[category]}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-6">
                      {CATEGORY_DETAILS[category].shortDescription}
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                    {guideCountByCategory[category] || 0} guides
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {topGuides.length > 0 && (
        <section className="bg-stone-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-950">Popular Complaint Guides</h2>
                <p className="mt-2 text-gray-600">High-intent guides people use before filing a complaint.</p>
              </div>
              <Link href="/guides" className="font-semibold text-emerald-700 hover:text-emerald-900">
                More guides →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topGuides.map((guide) => (
                <Link
                  key={guide._id.toString()}
                  href={`/guides/${guide.slug}`}
                  className="rounded-lg border border-stone-200 bg-white p-6 hover:border-emerald-500 hover:shadow-sm transition"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-sm font-semibold">
                      {CATEGORY_LABELS[guide.category]}
                    </span>
                    <span className="text-sm text-gray-500">
                      {guide.views}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-950 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {guide.metadata?.description || getContentExcerpt(guide.content, 130)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {topTemplates.length > 0 && (
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-950">Ready Complaint Templates</h2>
                <p className="mt-2 text-gray-600">Copy, customize, and attach proof before submitting to the correct authority.</p>
              </div>
              <Link href="/templates" className="font-semibold text-emerald-700 hover:text-emerald-900">
                More templates →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topTemplates.map((template) => (
                <Link
                  key={template._id.toString()}
                  href={`/templates/${template.slug}`}
                  className="rounded-lg border border-stone-200 bg-stone-50 p-5 hover:border-emerald-500 transition"
                >
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-amber-800">
                    {template.language}
                  </div>
                  <h3 className="font-bold text-gray-950">{template.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                    {getContentExcerpt(template.content, 120)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-stone-950 py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold">Complaint Filing Path</h2>
              <p className="mt-3 text-stone-300 leading-7">
                Most consumer issues become stronger when you document the first complaint, wait for the stated resolution window, then escalate with proof.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                ['1', 'Raise first complaint', 'Use company, bank, insurer, builder, or service provider support first.'],
                ['2', 'Collect proof', 'Save acknowledgement numbers, emails, payment proof, screenshots, and timelines.'],
                ['3', 'Escalate officially', 'Use NCH, e-Daakhil, RBI, TRAI, RERA, IRDAI, or other relevant routes.'],
              ].map(([step, title, description]) => (
                <div key={step} className="rounded-lg border border-stone-700 bg-stone-900 p-5">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-stone-950">
                    {step}
                  </div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold text-gray-950 mb-4">
            Ready to File Your Complaint?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Choose a guide, prepare evidence, then use the matching template and official portal link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="px-8 py-3 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 transition"
            >
              Browse Guides
            </Link>
            <Link
              href="/templates"
              className="px-8 py-3 bg-white border border-amber-300 text-amber-950 rounded-lg font-semibold hover:bg-amber-100 transition"
            >
              Use Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Guides Index - Every guide linked from homepage for indexing */}
      {allGuides.length > 0 && (
        <section className="bg-white py-14 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-2">
              All Complaint Guides (सभी शिकायत गाइड)
            </h2>
            <p className="text-gray-600 mb-6">
              Complete list of step-by-step complaint guides for Indian consumers.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {allGuides.map((guide) => (
                <Link
                  key={guide._id.toString()}
                  href={`/guides/${guide.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:border-emerald-500 transition text-sm"
                >
                  <span className="flex-shrink-0 px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold">
                    {CATEGORY_LABELS[guide.category]}
                  </span>
                  <span className="text-gray-950 font-medium truncate">{guide.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Complete Templates Index - Every template linked from homepage for indexing */}
      {allTemplates.length > 0 && (
        <section className="bg-stone-50 py-14 border-t border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-2">
              All Complaint Templates (सभी शिकायत पत्र)
            </h2>
            <p className="text-gray-600 mb-6">
              Ready-made complaint letter formats in Hindi, English, and Hinglish.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {allTemplates.map((template) => (
                <Link
                  key={template._id.toString()}
                  href={`/templates/${template.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:border-emerald-500 transition text-sm"
                >
                  <span className="flex-shrink-0 px-2 py-0.5 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold">
                    {template.language}
                  </span>
                  <span className="text-gray-950 font-medium truncate">{template.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
