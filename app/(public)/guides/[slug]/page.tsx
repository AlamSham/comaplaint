import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Template from '@/lib/db/models/Template';
import Portal from '@/lib/db/models/Portal';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORY_LABELS, LANGUAGE_LABELS } from '@/lib/constants';
import { SocialShare } from '@/components/shared/SocialShare';

export const revalidate = 86400; // 24 hours

export async function generateStaticParams() {
  await connectDB();
  const guides = await Guide.find({ published: true }).select('slug').lean();
  
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  
  const { slug } = await params;
  const guide = await Guide.findOne({ slug, published: true }).lean();
  
  if (!guide) {
    return {};
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const canonicalUrl = `${baseUrl}/guides/${slug}`;

  return {
    title: guide.metadata.title,
    description: guide.metadata.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: guide.metadata.title,
      description: guide.metadata.description,
      type: 'article',
      locale: guide.language === 'hindi' ? 'hi_IN' : 'en_US',
      url: canonicalUrl,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  
  // Ensure Portal model is registered
  Portal;
  
  const { slug } = await params;
  
  // Increment view count
  const guide = await Guide.findOneAndUpdate(
    { slug, published: true },
    { $inc: { views: 1 } },
    { returnDocument: 'after' }
  ).populate('portals').lean();

  if (!guide) {
    notFound();
  }

  // Get related templates
  const templates = await Template.find({ guideRef: guide._id }).lean();

  // Structured data for SEO
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metadata.description,
    author: {
      '@type': 'Organization',
      name: 'Consumer Complaint Portal',
    },
    datePublished: guide.createdAt,
    dateModified: guide.updatedAt,
    url: `${baseUrl}/guides/${guide.slug}`,
    inLanguage: guide.language === 'hindi' ? 'hi' : 'en',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides" className="hover:text-gray-700">Guides</Link></li>
            <li>/</li>
            <li className="text-gray-900">{guide.title}</li>
          </ol>
        </nav>

        {/* Guide Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {CATEGORY_LABELS[guide.category as keyof typeof CATEGORY_LABELS]}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              {LANGUAGE_LABELS[guide.language as keyof typeof LANGUAGE_LABELS]}
            </span>
            <span className="text-sm text-gray-500">{guide.views} views</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {guide.title}
          </h1>

          {/* Social Share */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <SocialShare 
              title={guide.title} 
              url={`${baseUrl}/guides/${guide.slug}`} 
            />
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <div className="text-gray-700 whitespace-pre-wrap">
              {guide.content}
            </div>
          </div>

          {/* Steps */}
          {guide.steps && guide.steps.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Steps</h2>
              <ol className="space-y-4">
                {guide.steps.map((step: string, index: number) => (
                  <li key={index} className="flex">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tags */}
          {guide.tags && guide.tags.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {guide.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Templates */}
        {templates.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Related Templates
            </h2>
            <div className="space-y-4">
              {templates.map((template: any) => (
                <Link
                  key={template._id.toString()}
                  href={`/templates/${template.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-gray-900">{template.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {template.downloadCount} downloads
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Official Portals */}
        {guide.portals && guide.portals.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Official Complaint Portals
            </h2>
            <div className="space-y-4">
              {guide.portals.map((portal: any) => (
                <div
                  key={portal._id.toString()}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <h3 className="font-semibold text-gray-900">{portal.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{portal.description}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Visit Portal →
                    </a>
                    {portal.phone && (
                      <span className="text-sm text-gray-600">
                        📞 {portal.phone}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
