import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Link from 'next/link';
import { CATEGORY_LABELS } from '@/lib/constants';
import { Metadata } from 'next';
import { CategoryFilter } from '@/components/public/CategoryFilter';
import { LanguageFilter } from '@/components/public/LanguageFilter';

export const revalidate = 43200; // 12 hours

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  return {
    title: 'Complaint Guides | Consumer Complaint Portal',
    description: 'Step-by-step guides to file consumer complaints in India',
    alternates: {
      canonical: `${baseUrl}/guides`,
    },
  };
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
  
  const query: any = { published: true };
  if (category && category !== 'all') {
    query.category = category;
  }
  if (language && language !== 'all') {
    query.language = language;
  }
  
  const guides = await Guide.find(query)
    .sort({ views: -1 })
    .lean();

  const guidesByCategory = guides.reduce((acc: any, guide: any) => {
    if (!acc[guide.category]) {
      acc[guide.category] = [];
    }
    acc[guide.category].push(guide);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complaint Guides
          </h1>
          <h2 className="text-2xl text-gray-700">
            शिकायत गाइड
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Step-by-step guides to file complaints
          </p>
        </div>

        <CategoryFilter />
        <LanguageFilter />

        {Object.keys(guidesByCategory).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No guides available yet.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(guidesByCategory).map(([category, categoryGuides]: [string, any]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryGuides.map((guide: any) => (
                    <Link
                      key={guide._id.toString()}
                      href={`/guides/${guide.slug}`}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {guide.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {guide.content.substring(0, 150)}...
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                          {guide.language}
                        </span>
                        <span>{guide.views} views</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
