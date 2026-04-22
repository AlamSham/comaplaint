import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import Link from 'next/link';
import { LANGUAGE_LABELS } from '@/lib/constants';
import { Metadata } from 'next';
import { LanguageFilter } from '@/components/public/LanguageFilter';

export const revalidate = 43200; // 12 hours

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  return {
    title: 'Complaint Templates | Consumer Complaint Portal',
    description: 'Ready-made complaint letter templates in Hindi and English',
    alternates: {
      canonical: `${baseUrl}/templates`,
    },
  };
}

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ language?: string }>;
}) {
  await connectDB();
  
  const params = await searchParams;
  const language = params.language;
  
  const query: any = {};
  if (language && language !== 'all') {
    query.language = language;
  }
  
  const templates = await Template.find(query)
    .populate('guideRef')
    .sort({ downloadCount: -1 })
    .lean();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complaint Templates
          </h1>
          <h2 className="text-2xl text-gray-700">
            शिकायत टेम्पलेट
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready-made complaint letter templates
          </p>
        </div>

        <LanguageFilter />

        {templates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No templates available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template: any) => (
              <Link
                key={template._id.toString()}
                href={`/templates/${template.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {template.content.substring(0, 150)}...
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                    {LANGUAGE_LABELS[template.language as keyof typeof LANGUAGE_LABELS]}
                  </span>
                  <span className="text-gray-500">
                    {template.downloadCount} downloads
                  </span>
                </div>
                {template.guideRef && (
                  <div className="mt-3 text-xs text-gray-500">
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
