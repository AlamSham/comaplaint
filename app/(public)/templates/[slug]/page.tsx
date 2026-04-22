import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LANGUAGE_LABELS } from '@/lib/constants';
import { Metadata } from 'next';
import CopyButton from './CopyButton';
import { SocialShare } from '@/components/shared/SocialShare';

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
  const template = await Template.findOne({ slug }).lean();
  
  if (!template) {
    return {};
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const canonicalUrl = `${baseUrl}/templates/${slug}`;

  return {
    title: `${template.title} | Consumer Complaint Portal`,
    description: `Download ${template.title} - Ready-made complaint template`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: template.title,
      description: `Download ${template.title}`,
      type: 'article',
      url: canonicalUrl,
    },
  };
}

export default async function TemplatePage({ params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  
  const { slug } = await params;
  const template = await Template.findOne({ slug }).populate('guideRef').lean();

  if (!template) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legal Disclaimer Banner */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="text-3xl mr-4">⚠️</div>
            <div>
              <h2 className="text-xl font-bold text-yellow-900 mb-2">
                SAMPLE TEMPLATE ONLY / केवल नमूना टेम्पलेट
              </h2>
              <p className="text-yellow-800 text-sm leading-relaxed mb-2">
                <strong>Important:</strong> This is a <strong>sample template for reference only</strong>. 
                It is NOT legal advice. We are NOT lawyers. You must customize this template with your specific details 
                and consult a qualified lawyer before using it for any legal purpose.
              </p>
              <p className="text-yellow-800 text-sm leading-relaxed">
                <strong>महत्वपूर्ण:</strong> यह केवल संदर्भ के लिए एक नमूना टेम्पलेट है। यह कानूनी सलाह नहीं है। 
                हम वकील नहीं हैं। किसी भी कानूनी उद्देश्य के लिए उपयोग करने से पहले इसे अपने विवरण के साथ अनुकूलित करें 
                और योग्य वकील से परामर्श करें।
              </p>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/templates" className="hover:text-gray-700">Templates</Link></li>
            <li>/</li>
            <li className="text-gray-900">{template.title}</li>
          </ol>
        </nav>

        {/* Template Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {LANGUAGE_LABELS[template.language as keyof typeof LANGUAGE_LABELS]}
              </span>
              <span className="text-sm text-gray-500">
                {template.downloadCount} downloads
              </span>
            </div>
            <CopyButton content={template.content} slug={slug} />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {template.title}
          </h1>

          {/* Social Share */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <SocialShare 
              title={template.title} 
              url={`${baseUrl}/templates/${slug}`} 
            />
          </div>

          {/* Template Content */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-sm text-gray-600 mb-4">
              <strong>Note:</strong> Replace placeholders like {'{{name}}'}, {'{{order_id}}'}, etc. with your actual information.
            </div>
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
              {template.content}
            </pre>
          </div>

          {/* Related Guide */}
          {template.guideRef && (
            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Related Guide
              </h2>
              <Link
                href={`/guides/${(template.guideRef as any).slug}`}
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900">
                  {(template.guideRef as any).title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  View step-by-step guide →
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
