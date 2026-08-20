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
import { ViewTracker } from '@/components/shared/ViewTracker';
import { absoluteUrl, createPageMetadata, createAuthorJsonLd, AUTHOR_CONFIG } from '@/lib/seo';
import {
  CATEGORY_DETAILS,
  getReadingMinutes,
} from '@/lib/content/publicSections';
import { CATEGORY_FAQS, createFaqJsonLd, createHowToJsonLd } from '@/lib/content/faqData';

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

type RelatedGuide = {
  _id: { toString(): string };
  title: string;
  slug: string;
  category: Category;
  views: number;
  metadata?: {
    description?: string;
  };
};

const SAMPLE_COMPLAINT_DRAFTS: Record<Category, string> = {
  ecommerce:
    'Subject: Complaint regarding order {{order_id}} - {{issue_type}}\n\nI purchased {{product_name}} for Rs. {{amount}} on {{order_date}}. The issue is {{brief_issue}}. I contacted support on {{first_complaint_date}} and received complaint/ticket number {{ticket_number}}, but the matter is still unresolved. I am attaching invoice, payment proof, photos/screenshots, and support chat records. Please provide {{refund_or_replacement_or_resolution}} and confirm the action in writing.',
  banking:
    'Subject: Banking complaint regarding {{transaction_or_account_issue}}\n\nI am customer {{your_name}} holding account/card ending {{last_digits}}. On {{date}}, an issue occurred: {{issue_details}}. The amount involved is Rs. {{amount}} and the reference number is {{reference_number}}. I complained to the bank on {{bank_complaint_date}} with reference {{bank_ticket_number}}, but the issue is unresolved/response is unsatisfactory. Please investigate and provide written resolution.',
  telecom:
    'Subject: Telecom complaint for {{mobile_or_customer_id}} - {{issue_type}}\n\nI am using {{operator_name}} connection/customer ID {{customer_id}}. Since {{date}}, I am facing {{issue_details}} at {{location}}. I raised complaint number {{docket_number}} on {{complaint_date}}, but the issue is not resolved. I am attaching bill/recharge proof, screenshots, speed test records, and support messages. Please resolve the issue and reverse incorrect charges if applicable.',
  govt:
    'Subject: Complaint regarding delay in {{service_name}} - application {{application_number}}\n\nI submitted {{service_name}} application on {{date}} with reference number {{application_number}}. The current status is {{current_status}} and the pending issue is {{pending_reason}}. I have attached receipt, payment proof, ID/documents, and previous follow-up records. Please update the status, complete the pending action, or provide a written reason for delay.',
  rera:
    'Subject: RERA complaint regarding {{project_name}} - {{flat_or_unit_number}}\n\nI booked unit {{unit_number}} in {{project_name}} by promoter {{builder_name}}. As per agreement, possession/refund/action was due on {{due_date}}, but {{issue_details}}. I have paid Rs. {{amount_paid}} and attached agreement, receipts, builder communication, project details, and proof of delay/defect. I request {{specific_relief}} with applicable compensation/interest as per law and authority directions.',
  insurance:
    'Subject: Insurance complaint regarding policy {{policy_number}} and claim {{claim_number}}\n\nI hold policy number {{policy_number}} with {{insurer_name}}. I submitted claim number {{claim_number}} for {{claim_reason}} on {{claim_date}}. The claim was rejected/delayed/partly settled citing {{rejection_reason}}. I believe this is incorrect because {{brief_explanation}}. I am attaching policy copy, premium receipts, claim documents, and insurer communication. Please reconsider and settle the claim with written reasons.',
};

export const revalidate = 86400; // 24 hours — relies on On-Demand Revalidation via API/Admin

export async function generateStaticParams() {
  try {
    await connectDB();
    const guides = await Guide.find({ published: true }).select('slug').lean();
    return guides.map((guide) => ({
      slug: guide.slug,
    }));
  } catch (error) {
    console.warn('generateStaticParams guides fallback:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
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
  } catch (error) {
    console.warn('generateMetadata guides fallback:', error);
    return {};
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  let guide: GuideDetail | null = null;
  let templates: RelatedTemplate[] = [];
  let relatedGuides: RelatedGuide[] = [];
  const { slug } = await params;

  try {
    await connectDB();
    guide = (await Guide.findOne({ slug, published: true })
      .populate('portals')
      .lean()) as unknown as GuideDetail | null;

    if (guide) {
      templates = (await Template.find({ guideRef: guide._id })
        .select('title slug downloadCount')
        .lean()) as unknown as RelatedTemplate[];

      relatedGuides = (await Guide.find({
        published: true,
        category: guide.category,
        slug: { $ne: slug },
      })
        .select('title slug category views metadata.description')
        .sort({ views: -1 })
        .limit(3)
        .lean()) as unknown as RelatedGuide[];
    }
  } catch (error) {
    console.warn('GuidePage DB error:', error);
  }

  if (!guide) {
    notFound();
  }

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
    author: createAuthorJsonLd(),
    publisher: {
      '@type': 'Organization',
      name: 'ShikayatKaro',
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

  // HowTo schema for guide steps
  const howToJsonLd = guide.steps && guide.steps.length > 0
    ? createHowToJsonLd(
        guide.title,
        guide.metadata.description,
        guide.steps,
        guideUrl
      )
    : null;

  // FAQ schema for rich snippets
  const categoryFaqs = CATEGORY_FAQS[guide.category] || [];
  const faqJsonLd = categoryFaqs.length > 0 ? createFaqJsonLd(categoryFaqs) : null;

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
      {howToJsonLd && <JsonLd data={howToJsonLd} />}
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <ViewTracker slug={slug} type="guide" />
      
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
                  ['sample-complaint', 'Sample draft'],
                  templates.length > 0 ? ['templates', 'Templates'] : null,
                  guide.portals && guide.portals.length > 0 ? ['portals', 'Official portals'] : null,
                  categoryFaqs.length > 0 ? ['faq', 'FAQ'] : null,
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
                  ['Last verified', `August 2026`],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</div>
                    <div className="mt-1 font-semibold text-gray-950">{value}</div>
                  </div>
                ))}
              </div>

              {/* Author byline & Human E-E-A-T Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 p-4 rounded-lg border border-stone-200 bg-stone-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white font-bold text-sm">
                    {AUTHOR_CONFIG.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-950 text-sm">{AUTHOR_CONFIG.name}</div>
                    <div className="text-xs text-gray-600">{AUTHOR_CONFIG.role} · Verified {lastUpdated}</div>
                  </div>
                </div>
                <div className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-3 py-1.5 rounded-md self-start sm:self-auto">
                  ✓ Verified Helpline Numbers & Gov Links included
                </div>
              </div>

              {/* Genuine Non-Lawyer Practical Disclaimer Box */}
              <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50/80 p-4 text-xs leading-relaxed text-blue-950">
                <p className="font-bold text-blue-900 mb-1">
                  💡 Practical Consumer Guidance / उपभोक्ता व्यावहारिक मार्गदर्शन
                </p>
                <p className="text-blue-900 mb-1">
                  हम वकील नहीं हैं। यह गाइड भारतीय उपभोक्ताओं की वास्तविक समस्याओं (रिफंड, बैंक विवाद, डिलीवरी इश्यू) को हल करने के लिए तैयार की गई है। शिकायत हमेशा केवल आधिकारिक सरकारी पोर्टल (NCH 1915, RBI, e-Daakhil) पर ही दर्ज करें।
                </p>
                <p className="text-blue-800">
                  <em>Note: This is an independent consumer research guide. We do NOT provide legal services or charge any fees.</em>
                </p>
              </div>

              <section id="summary" className="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
                <h2 className="text-xl font-bold text-emerald-950 mb-3">Quick Summary (संक्षेप में)</h2>
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

              <section id="sample-complaint" className="mt-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-4">Sample Complaint Draft</h2>
                <div className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-gray-700">
                    {SAMPLE_COMPLAINT_DRAFTS[guide.category]}
                  </pre>
                </div>
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
              <section id="portals" className="bg-white rounded-lg border border-stone-200 p-6 md:p-8 mb-8">
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

            {/* FAQ Section for Rich Snippets */}
            {categoryFaqs.length > 0 && (
              <section id="faq" className="bg-white rounded-lg border border-stone-200 p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-2">
                  अक्सर पूछे जाने वाले सवाल (FAQ)
                </h2>
                <p className="text-gray-600 mb-5">
                  Common questions about filing {CATEGORY_LABELS[guide.category]} complaints in India.
                </p>
                <div className="space-y-4">
                  {categoryFaqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group rounded-lg border border-stone-200 bg-stone-50"
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

            {/* Related Guides - Internal Linking */}
            {relatedGuides.length > 0 && (
              <section className="bg-white rounded-lg border border-stone-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-950 mb-2">
                  Related Guides
                </h2>
                <p className="text-gray-600 mb-5">
                  More {CATEGORY_LABELS[guide.category]} complaint guides you may find helpful.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {relatedGuides.map((related) => (
                    <Link
                      key={related._id.toString()}
                      href={`/guides/${related.slug}`}
                      className="block p-4 border border-stone-200 rounded-lg hover:border-emerald-500 transition"
                    >
                      <h3 className="font-semibold text-gray-950 mb-2">{related.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {related.metadata?.description || `Step-by-step ${CATEGORY_LABELS[related.category]} complaint guide`}
                      </p>
                      <div className="mt-3 text-sm font-semibold text-emerald-700">
                        Read guide →
                      </div>
                    </Link>
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
