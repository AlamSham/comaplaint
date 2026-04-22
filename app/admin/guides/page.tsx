'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Guide {
  _id: string;
  title: string;
  slug: string;
  category: string;
  language: string;
  published: boolean;
  views: number;
  updatedAt: string;
}

export default function GuidesListPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuides() {
      try {
        const res = await fetch('/api/guides');
        const data = await res.json();
        setGuides(data.guides);
      } catch (error) {
        console.error('Failed to fetch guides:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this guide?')) return;

    try {
      const res = await fetch(`/api/guides/${slug}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setGuides(guides.filter((g) => g.slug !== slug));
      } else {
        alert('Failed to delete guide');
      }
    } catch (error) {
      console.error('Failed to delete guide:', error);
      alert('Failed to delete guide');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="px-4 sm:px-0">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Guides</h1>
        <Link
          href="/admin/guides/new"
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Create Guide
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {guides.length === 0 ? (
            <li className="px-4 py-8 text-center text-gray-500">
              No guides yet. Create your first guide!
            </li>
          ) : (
            guides.map((guide) => (
              <li key={guide._id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        {guide.title}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="mr-4">
                          Category: {guide.category}
                        </span>
                        <span className="mr-4">
                          Language: {guide.language}
                        </span>
                        <span className="mr-4">Views: {guide.views}</span>
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            guide.published
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {guide.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/guides/${guide.slug}/edit`}
                        className="text-blue-600 hover:text-blue-900 text-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(guide.slug)}
                        className="text-red-600 hover:text-red-900 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
