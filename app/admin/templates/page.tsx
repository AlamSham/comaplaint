'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Template {
  _id: string;
  title: string;
  slug: string;
  language: string;
  downloadCount: number;
  guideRef: {
    title: string;
  };
}

export default function TemplatesListPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        const res = await fetch('/api/templates');
        const data = await res.json();
        setTemplates(data.templates);
      } catch (error) {
        console.error('Failed to fetch templates:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTemplates();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this template?')) return;

    try {
      const res = await fetch(`/api/templates/${slug}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setTemplates(templates.filter((t) => t.slug !== slug));
      } else {
        alert('Failed to delete template');
      }
    } catch (error) {
      console.error('Failed to delete template:', error);
      alert('Failed to delete template');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="px-4 sm:px-0">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Templates</h1>
        <Link
          href="/admin/templates/new"
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Create Template
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {templates.length === 0 ? (
            <li className="px-4 py-8 text-center text-gray-500">
              No templates yet. Create your first template!
            </li>
          ) : (
            templates.map((template) => (
              <li key={template._id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        {template.title}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="mr-4">
                          Language: {template.language}
                        </span>
                        <span className="mr-4">
                          Downloads: {template.downloadCount}
                        </span>
                        {template.guideRef && (
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            Guide: {template.guideRef.title}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Link
                        href={`/admin/templates/${template.slug}/edit`}
                        className="text-blue-600 hover:text-blue-900 text-sm"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(template.slug)}
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
