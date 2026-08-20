import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');

  // Verify secret token to prevent unauthorized revalidation requests
  const expectedSecret = process.env.REVALIDATE_SECRET || 'shikayatkaro_revalidate_2026';
  
  if (secret !== expectedSecret) {
    return NextResponse.json(
      { error: 'Invalid secret token' },
      { status: 401 }
    );
  }

  try {
    if (path === 'all' || !path) {
      // On-demand revalidate all main pages & sitemap
      revalidatePath('/');
      revalidatePath('/guides');
      revalidatePath('/templates');
      revalidatePath('/portals');
      revalidatePath('/sitemap.xml');
      return NextResponse.json({
        revalidated: true,
        message: 'On-demand revalidation triggered for all core routes',
        now: new Date().toISOString(),
      });
    }

    // Revalidate specific requested path
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      path,
      now: new Date().toISOString(),
    });
  } catch (error) {
    console.error('On-demand revalidation error:', error);
    return NextResponse.json(
      { error: 'Failed to revalidate path' },
      { status: 500 }
    );
  }
}
