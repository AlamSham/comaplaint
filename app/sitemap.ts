import { MetadataRoute } from 'next';
import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Template from '@/lib/db/models/Template';
import { getBaseUrl } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  await connectDB();

  // Fetch all published guides
  const guides = await Guide.find({ published: true })
    .select('slug updatedAt category')
    .lean();

  // Fetch all templates
  const templates = await Template.find()
    .select('slug updatedAt')
    .lean();

  const staticPages: MetadataRoute.Sitemap = [
    { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
    { path: '/complaint-helper', changeFrequency: 'weekly' as const, priority: 0.95 },
    { path: '/guides', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/templates', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/portals', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.5 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.4 },
    { path: '/legal-disclaimer', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
  ].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // Guide pages - higher priority since these are content pages
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: guide.updatedAt || now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Template pages - these are high-value content pages
  const templatePages: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: template.updatedAt || now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...guidePages, ...templatePages];
}
