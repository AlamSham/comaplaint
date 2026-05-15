import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Template from '@/lib/db/models/Template';

export async function POST(request: Request) {
  try {
    const { slug, type } = await request.json();

    if (!slug || !type || !['guide', 'template'].includes(type)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    await connectDB();

    if (type === 'guide') {
      await Guide.updateOne(
        { slug, published: true },
        { $inc: { views: 1 } }
      );
    } else {
      await Template.updateOne(
        { slug },
        { $inc: { downloadCount: 1 } }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
