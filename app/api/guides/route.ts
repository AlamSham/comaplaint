import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import { validateGuideData } from '@/lib/utils/validation';
import { slugify, generateUniqueSlug } from '@/lib/utils/slugify';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const status = searchParams.get('status');
    const language = searchParams.get('language');

    const query: any = {};
    
    if (category) query.category = category;
    if (status) query.published = status === 'published';
    if (language) query.language = language;

    const guides = await Guide.find(query)
      .populate('portals')
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      guides,
      total: guides.length,
    });
  } catch (error) {
    console.error('GET /api/guides error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch guides' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await request.json();
    
    const validation = validateGuideData(data);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    await connectDB();

    const baseSlug = slugify(data.title);
    const slug = await generateUniqueSlug(baseSlug, Guide);

    const guide = await Guide.create({
      ...data,
      slug,
    });

    return NextResponse.json({
      guide,
      message: 'Guide created successfully',
    }, { status: 201 });
  } catch (error) {
    console.error('POST /api/guides error:', error);
    
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation failed', errors: [error.message] },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create guide' },
      { status: 500 }
    );
  }
}
