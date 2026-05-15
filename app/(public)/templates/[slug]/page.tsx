import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import '@/lib/db/models/Guide';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LANGUAGE_LABELS, type Language } from '@/lib/constants';
import { Metadata } from 'next';
import CopyButton from './CopyButton';
import { SocialShare } from '@/components/shared/SocialShare';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { JsonLd } from '@/components/shared/JsonLd';
import { ViewTracker } from '@/components/shared/ViewTracker';
import { absoluteUrl, createPageMetadata } from '@/lib/seo';
import { getTemplatePlaceholders } from '@/lib/content/publicSections';

type RelatedGuide = {
  _id: { toString(): string };
  title: string;
  slug: string;
};

type TemplateDetail = {
  _id: { toString(): string };
  title: string;
  slug: string;
  guideRef?: RelatedGuide | null;
  language: Language;
  content: string;
  metadata?: {
    title: string;
    description: string;
  };
  downloadCount: number;
  createdAt: Date;
  updatedAt: Date;
};

export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  await connectDB();
  const templates = await Template.find().select('slug').lean();
  
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  await connectDB();
  
  const { slug } = await params;
  const template = (await Template.findOne({ slug }).lean()) as unknown as TemplateDetail | null;
  
  if (!template) {
    return {};
  }

  const languageLabel = template.language === 'hindi' ? 'Hindi' : template.language === 'english' ? 'English' : 'Hinglish';

  const defaultTitle = `${template.title} - Free ${languageLabel} Format | शिकायत पत्र`;
  const defaultDescription = `${template.title} - Free complaint letter sample in ${languageLabel}. Copy, customize with your details, and submit to the right authority. Ready-made format for Indian consumers. शिकायत पत्र फॉर्मेट।`;

  return createPageMetadata({
    title: template.metadata?.title || defaultTitle,
    description: template.metadata?.description || defaultDescription,
    path: `/templates/${slug}`,
    type: 'article',
    titleAbsolute: true,
    keywords: [
      template.title,
      `${template.title} format`,
      `${template.title} sample`,
      `complaint letter ${languageLabel}`,
      'शिकायत पत्र',
      'complaint letter format India',
    ],
    publishedTime: template.createdAt,
    modifiedTime: template.updatedAt,
  });
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  
  const { slug } = await params;
  const template = (await Template.findOne({ slug })
    .populate('guideRef')
    .lean()) as unknown as TemplateDetail | null;

  if (!template) {
    notFound();
  }

  // Get related templates for internal linking
  const relatedTemplates = (await Template.find({
    slug: { $ne: slug },
    language: template.language,
  })
    .select('title slug language downloadCount')
    .sort({ downloadCount: -1 })
    .limit(4)
    .lean()) as unknown as Array<{
    _id: { toString(): string };
    title: string;
    slug: string;
    language: Language;
    downloadCount: number;
  }>;

  const templateUrl = absoluteUrl(`/templates/${slug}`);
  const templateDescription = `Ready-made ${template.title} sample for Indian consumer complaints.`;
  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: template.title,
    description: templateDescription,
    url: templateUrl,
    inLanguage: template.language === 'hindi' ? 'hi' : template.language === 'english' ? 'en' : 'hi-Latn',
    isAccessibleForFree: true,
    dateCreated: template.createdAt,
    dateModified: template.updatedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Consumer Complaint Portal',
      url: absoluteUrl('/'),
    },
    ...(template.guideRef
      ? {
          isBasedOn: {
            '@type': 'Article',
            name: template.guideRef.title,
            url: absoluteUrl(`/guides/${template.guideRef.slug}`),
          },
        }
      : {}),
  };

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Templates', href: '/templates' },
    { name: template.title, href: `/templates/${template.slug}` },
  ];
  const placeholders = getTemplatePlaceholders(template.content);

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={creativeWorkJsonLd} />
      <ViewTracker slug={slug} type="template" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          <aside className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-lg border border-stone-200 bg-white p-5">
              <h2 className="font-bold text-gray-950">Use This Template For</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                <li>Writing a clear first complaint or escalation request</li>
                <li>Attaching facts, proof, order IDs, policy numbers, or complaint tickets</li>
                <li>Keeping a written record before using official portals</li>
              </ul>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <h2 className="font-bold text-amber-950">Sample Only</h2>
              <p className="mt-2 text-sm leading-6 text-amber-900">
                Customize every detail and verify the latest official process before submitting.
              </p>
            </div>

            {placeholders.length > 0 && (
              <div className="rounded-lg border border-stone-200 bg-white p-5">
                <h2 className="font-bold text-gray-950">Replace These Fields</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {placeholders.map((placeholder) => (
                    <span key={placeholder} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {placeholder}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <main>
            <section className="rounded-lg border border-stone-200 bg-white p-6 md:p-8 mb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-sm font-semibold">
                      {LANGUAGE_LABELS[template.language]}
                    </span>
                    <span className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm">
                      {template.downloadCount} downloads
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-950 mb-4 leading-tight">
                    {template.title}
                  </h1>
                  <p className="text-lg leading-8 text-gray-700">
                    Copy this sample, replace placeholders with your facts, and attach proof before sending it to the company, regulator, or official portal.
                  </p>
                </div>
                <CopyButton content={template.content} slug={slug} />
              </div>

              <div className="border-y border-stone-200 py-5">
                <SocialShare 
                  title={template.title} 
                  url={templateUrl} 
                />
              </div>
            </section>

            <section className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-yellow-950 mb-2">
                SAMPLE TEMPLATE ONLY / केवल नमूना टेम्पलेट
              </h2>
              <p className="text-yellow-900 text-sm leading-relaxed mb-2">
                <strong>Important:</strong> This is a <strong>sample template for reference only</strong>. 
                It is NOT legal advice. We are NOT lawyers. You must customize this template with your specific details 
                and consult a qualified lawyer before using it for any legal purpose.
              </p>
              <p className="text-yellow-900 text-sm leading-relaxed">
                <strong>महत्वपूर्ण:</strong> यह केवल संदर्भ के लिए एक नमूना टेम्पलेट है। यह कानूनी सलाह नहीं है। 
                हम वकील नहीं हैं। किसी भी कानूनी उद्देश्य के लिए उपयोग करने से पहले इसे अपने विवरण के साथ अनुकूलित करें 
                और योग्य वकील से परामर्श करें।
              </p>
            </section>

            <section className="rounded-lg border border-stone-200 bg-white p-6 md:p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-950 mb-4">How to Use This Template</h2>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  ['1', 'Replace placeholders', 'Add names, dates, IDs, amounts, and complaint references.'],
                  ['2', 'Attach proof', 'Add invoices, screenshots, statements, photos, or official responses.'],
                  ['3', 'Send and track', 'Submit through the right channel and save acknowledgement details.'],
                ].map(([step, title, description]) => (
                  <div key={step} className="rounded-lg border border-stone-200 bg-stone-50 p-4">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                      {step}
                    </div>
                    <h3 className="font-bold text-gray-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-stone-200 bg-white p-6 md:p-8 mb-6">
              <div className="mb-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-950">Template Content</h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Replace placeholder values before using this sample.
                  </p>
                </div>
                <CopyButton content={template.content} slug={slug} />
              </div>
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-5">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-7 text-gray-800">
                  {template.content}
                </pre>
              </div>
            </section>

            {template.guideRef && (
              <section className="bg-white rounded-lg border border-stone-200 p-6 md:p-8 mb-6">
                <h2 className="text-lg font-semibold text-gray-950 mb-3">
                  Related Guide
                </h2>
                <Link
                  href={`/guides/${template.guideRef.slug}`}
                  className="block p-4 border border-stone-200 rounded-lg hover:border-emerald-500 transition"
                >
                  <h3 className="font-semibold text-gray-950">
                    {template.guideRef.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    View step-by-step complaint process →
                  </p>
                </Link>
              </section>
            )}

            {/* Related Templates - Internal Linking */}
            {relatedTemplates.length > 0 && (
              <section className="bg-white rounded-lg border border-stone-200 p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-950 mb-2">
                  More Complaint Templates
                </h2>
                <p className="text-gray-600 mb-5">
                  Browse more ready-made complaint letter formats.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedTemplates.map((related) => (
                    <Link
                      key={related._id.toString()}
                      href={`/templates/${related.slug}`}
                      className="block p-4 border border-stone-200 rounded-lg hover:border-emerald-500 transition"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold">
                          {LANGUAGE_LABELS[related.language]}
                        </span>
                        <span className="text-xs text-gray-500">
                          {related.downloadCount} downloads
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-950">{related.title}</h3>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
