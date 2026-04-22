'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Portal {
  _id: string;
  name: string;
  slug: string;
  category: string;
  url: string;
  isActive: boolean;
}

export default function PortalsListPage() {
  const [portals, setPortals] = useState<Portal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPortals() {
      try {
        const res = await fetch('/api/portals');
        const data = await res.json();
        setPortals(data.portals);
      } catch (error) {
        console.error('Failed to fetch portals:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPortals();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="px-4 sm:px-0">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Official Portals</h1>
        <Link
          href="/admin/portals/new"
          className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Portal
        </Link>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {portals.length === 0 ? (
            <li className="px-4 py-8 text-center text-gray-500">
              No portals yet. Add your first portal!
            </li>
          ) : (
            portals.map((portal) => (
              <li key={portal._id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        {portal.name}
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="mr-4">
                          Category: {portal.category}
                        </span>
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline mr-4"
                        >
                          {portal.url}
                        </a>
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            portal.isActive
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {portal.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
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
