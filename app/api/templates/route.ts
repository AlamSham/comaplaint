import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import { validateTemplateData } from '@/lib/utils/validation';
import { slugify, generateUniqueSlug } from '@/lib/utils/slugify';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const templates = await Template.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      templates,
      total: templates.length,
    });
  } catch (error) {
    console.error('GET /api/templates error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
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
    
    const validation = validateTemplateData(data);
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    await connectDB();

    const baseSlug = slugify(data.title);
    const slug = await generateUniqueSlug(baseSlug, Template);

    const template = await Template.create({
      ...data,
      slug,
    });

    return NextResponse.json({
      template,
      message: 'Template created successfully',
    }, { status: 201 });
  } catch (error) {
    console.error('POST /api/templates error:', error);
    
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        { error: 'Validation failed', errors: [error.message] },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create template' },
      { status: 500 }
    );
  }
}
