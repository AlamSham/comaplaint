import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Template from '@/lib/db/models/Template';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.length === 0) {
      return NextResponse.json({
        guides: [],
        templates: [],
        total: 0,
      });
    }

    await connectDB();

    const searchRegex = new RegExp(query, 'i');

    const [guides, templates] = await Promise.all([
      Guide.find({
        published: true,
        $or: [
          { title: searchRegex },
          { content: searchRegex },
          { tags: searchRegex },
        ],
      })
        .select('title slug category content')
        .limit(10)
        .lean(),
      Template.find({
        $or: [
          { title: searchRegex },
          { content: searchRegex },
        ],
      })
        .select('title slug content')
        .limit(10)
        .lean(),
    ]);

    // Generate excerpts
    const guidesWithExcerpts = guides.map(guide => ({
      title: guide.title,
      slug: guide.slug,
      category: guide.category,
      excerpt: guide.content.substring(0, 150) + '...',
    }));

    const templatesWithExcerpts = templates.map(template => ({
      title: template.title,
      slug: template.slug,
      excerpt: template.content.substring(0, 150) + '...',
    }));

    return NextResponse.json({
      guides: guidesWithExcerpts,
      templates: templatesWithExcerpts,
      total: guidesWithExcerpts.length + templatesWithExcerpts.length,
    });
  } catch (error) {
    console.error('GET /api/search error:', error);
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    );
  }
}
