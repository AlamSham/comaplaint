'use client';

import { useEffect, useState } from 'react';

interface Stats {
  totalGuides: number;
  totalTemplates: number;
  totalViews: number;
  totalDownloads: number;
  topGuides: Array<{ title: string; views: number; slug: string }>;
  topTemplates: Array<{ title: string; downloads: number; slug: string }>;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [guidesRes, templatesRes] = await Promise.all([
          fetch('/api/guides'),
          fetch('/api/templates'),
        ]);

        const guidesData = await guidesRes.json();
        const templatesData = await templatesRes.json();

        const totalViews = guidesData.guides.reduce(
          (sum: number, guide: any) => sum + guide.views,
          0
        );
        const totalDownloads = templatesData.templates.reduce(
          (sum: number, template: any) => sum + template.downloadCount,
          0
        );

        const topGuides = [...guidesData.guides]
          .sort((a: any, b: any) => b.views - a.views)
          .slice(0, 5)
          .map((g: any) => ({ title: g.title, views: g.views, slug: g.slug }));

        const topTemplates = [...templatesData.templates]
          .sort((a: any, b: any) => b.downloadCount - a.downloadCount)
          .slice(0, 5)
          .map((t: any) => ({
            title: t.title,
            downloads: t.downloadCount,
            slug: t.slug,
          }));

        setStats({
          totalGuides: guidesData.total,
          totalTemplates: templatesData.total,
          totalViews,
          totalDownloads,
          topGuides,
          topTemplates,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!stats) {
    return <div className="text-center py-8">Failed to load statistics</div>;
  }

  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Guides
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stats.totalGuides}
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Templates
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stats.totalTemplates}
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Views
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stats.totalViews}
                </dd>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-1">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Total Downloads
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stats.totalDownloads}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Content */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Top Guides */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Top Guides by Views
            </h3>
            <div className="space-y-3">
              {stats.topGuides.length > 0 ? (
                stats.topGuides.map((guide, index) => (
                  <div
                    key={guide.slug}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 mr-3">
                        {index + 1}.
                      </span>
                      <span className="text-sm text-gray-900">
                        {guide.title}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {guide.views} views
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No guides yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Top Templates */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Top Templates by Downloads
            </h3>
            <div className="space-y-3">
              {stats.topTemplates.length > 0 ? (
                stats.topTemplates.map((template, index) => (
                  <div
                    key={template.slug}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-500 mr-3">
                        {index + 1}.
                      </span>
                      <span className="text-sm text-gray-900">
                        {template.title}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {template.downloads} downloads
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No templates yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
