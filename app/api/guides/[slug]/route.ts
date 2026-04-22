import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import { validateGuideData } from '@/lib/utils/validation';
import { slugify, generateUniqueSlug } from '@/lib/utils/slugify';
import { revalidatePath } from 'next/cache';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    
    const { slug } = await params;
    
    const guide = await Guide.findOne({ slug })
      .populate('portals')
      .lean();

    if (!guide) {
      return NextResponse.json(
        { error: 'Guide not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ guide });
  } catch (error) {
    console.error('GET /api/guides/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch guide' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
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

    const { slug } = await params;
    
    const existingGuide = await Guide.findOne({ slug });
    
    if (!existingGuide) {
      return NextResponse.json(
        { error: 'Guide not found' },
        { status: 404 }
      );
    }

    let newSlug = slug;
    if (data.title !== existingGuide.title) {
      const baseSlug = slugify(data.title);
      newSlug = await generateUniqueSlug(baseSlug, Guide, existingGuide._id.toString());
    }

    const guide = await Guide.findOneAndUpdate(
      { slug },
      { ...data, slug: newSlug },
      { returnDocument: 'after', runValidators: true }
    );

    // Revalidate the guide page
    revalidatePath(`/guides/${newSlug}`);
    revalidatePath('/guides');

    return NextResponse.json({
      guide,
      message: 'Guide updated successfully',
    });
  } catch (error) {
    console.error('PUT /api/guides/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to update guide' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const { slug } = await params;

    const guide = await Guide.findOneAndDelete({ slug });

    if (!guide) {
      return NextResponse.json(
        { error: 'Guide not found' },
        { status: 404 }
      );
    }

    // Revalidate pages
    revalidatePath(`/guides/${slug}`);
    revalidatePath('/guides');

    return NextResponse.json({
      message: 'Guide deleted successfully',
    });
  } catch (error) {
    console.error('DELETE /api/guides/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to delete guide' },
      { status: 500 }
    );
  }
}
