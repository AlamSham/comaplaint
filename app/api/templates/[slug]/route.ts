import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import { validateTemplateData } from '@/lib/utils/validation';
import { slugify, generateUniqueSlug } from '@/lib/utils/slugify';
import { revalidatePath } from 'next/cache';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    
    const { slug } = await params;
    
    const template = await Template.findOne({ slug })
      .populate('guideRef')
      .lean();

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ template });
  } catch (error) {
    console.error('GET /api/templates/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch template' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const data = await request.json();
    
    // Handle download count increment (no auth required)
    if (data.incrementDownload) {
      await connectDB();
      const { slug } = await params;
      
      const template = await Template.findOneAndUpdate(
        { slug },
        { $inc: { downloadCount: 1 } },
        { returnDocument: 'after' }
      );

      if (!template) {
        return NextResponse.json(
          { error: 'Template not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        template,
        message: 'Download count incremented',
      });
    }

    // Regular update requires authentication
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const validation = validateTemplateData(data);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    await connectDB();

    const { slug } = await params;
    
    const existingTemplate = await Template.findOne({ slug });
    
    if (!existingTemplate) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    let newSlug = slug;
    if (data.title !== existingTemplate.title) {
      const baseSlug = slugify(data.title);
      newSlug = await generateUniqueSlug(baseSlug, Template, existingTemplate._id.toString());
    }

    // Preserve downloadCount
    const updateData = {
      ...data,
      slug: newSlug,
      downloadCount: existingTemplate.downloadCount,
    };

    const template = await Template.findOneAndUpdate(
      { slug },
      updateData,
      { returnDocument: 'after', runValidators: true }
    );

    // Revalidate the template page
    revalidatePath(`/templates/${newSlug}`);
    revalidatePath('/templates');

    return NextResponse.json({
      template,
      message: 'Template updated successfully',
    });
  } catch (error) {
    console.error('PUT /api/templates/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to update template' },
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

    const template = await Template.findOneAndDelete({ slug });

    if (!template) {
      return NextResponse.json(
        { error: 'Template not found' },
        { status: 404 }
      );
    }

    // Revalidate pages
    revalidatePath(`/templates/${slug}`);
    revalidatePath('/templates');

    return NextResponse.json({
      message: 'Template deleted successfully',
    });
  } catch (error) {
    console.error('DELETE /api/templates/[slug] error:', error);
    return NextResponse.json(
      { error: 'Failed to delete template' },
      { status: 500 }
    );
  }
}
