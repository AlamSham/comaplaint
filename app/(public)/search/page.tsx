import { Suspense } from 'react';
import Link from 'next/link';

interface SearchResult {
  guides: Array<{
    _id: string;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
  }>;
  templates: Array<{
    _id: string;
    title: string;
    slug: string;
    language: string;
    excerpt: string;
  }>;
}

async function SearchResults({ query }: { query: string }) {
  if (!query || query.trim().length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">
          Please enter a search term to find guides and templates.
        </p>
      </div>
    );
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/search?q=${encodeURIComponent(query)}`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      throw new Error('Search failed');
    }

    const data: SearchResult = await res.json();
    const totalResults = data.guides.length + data.templates.length;

    if (totalResults === 0) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No results found for "{query}"
          </h2>
          <p className="text-gray-600 mb-8">
            Try different keywords or browse our categories
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/guides"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Browse Guides
            </Link>
            <Link
              href="/templates"
              className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Search Results for "{query}"
          </h2>
          <p className="text-gray-600">
            Found {totalResults} result{totalResults !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Guides Results */}
        {data.guides.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Guides ({data.guides.length})
            </h3>
            <div className="space-y-4">
              {data.guides.map((guide) => (
                <Link
                  key={guide._id}
                  href={`/guides/${guide.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition p-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {guide.title}
                    </h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm ml-4 flex-shrink-0">
                      {guide.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {guide.excerpt}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Templates Results */}
        {data.templates.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Templates ({data.templates.length})
            </h3>
            <div className="space-y-4">
              {data.templates.map((template) => (
                <Link
                  key={template._id}
                  href={`/templates/${template.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition p-6"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {template.title}
                    </h4>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm ml-4 flex-shrink-0">
                      {template.language}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {template.excerpt}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Search error:', error);
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-8">
          Please try again or browse our content
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
        >
          Go to Homepage
        </Link>
      </div>
    );
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || '';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Search</li>
          </ol>
        </nav>

        <Suspense fallback={
          <div className="text-center py-12">
            <div className="text-lg text-gray-600">Searching...</div>
          </div>
        }>
          <SearchResults query={query} />
        </Suspense>
      </div>
    </div>
  );
}
