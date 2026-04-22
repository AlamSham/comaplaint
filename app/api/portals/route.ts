import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
import { connectDB } from '@/lib/db/mongoose';
import Portal from '@/lib/db/models/Portal';
import { validatePortalData } from '@/lib/utils/validation';
import { slugify, generateUniqueSlug } from '@/lib/utils/slugify';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const query: any = { isActive: true };
    
    if (category) query.category = category;

    const portals = await Portal.find(query)
      .sort({ name: 1 })
      .lean();

    return NextResponse.json({
      portals,
      total: portals.length,
    });
  } catch (error) {
    console.error('GET /api/portals error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portals' },
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
    
    const validation = validatePortalData(data);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    await connectDB();

    const baseSlug = slugify(data.name);
    const slug = await generateUniqueSlug(baseSlug, Portal);

    const portal = await Portal.create({
      ...data,
      slug,
    });

    return NextResponse.json({
      portal,
      message: 'Portal created successfully',
    }, { status: 201 });
  } catch (error) {
    console.error('POST /api/portals error:', error);
    
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation failed', errors: [error.message] },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create portal' },
      { status: 500 }
    );
  }
}
