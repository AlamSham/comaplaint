'use client';

import { useEffect, useRef } from 'react';

interface ViewTrackerProps {
  slug: string;
  type: 'guide' | 'template';
}

export function ViewTracker({ slug, type }: ViewTrackerProps) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    // Fire and forget - don't block page rendering
    fetch('/api/track-view', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, type }),
    }).catch(() => {
      // Silently fail - view tracking is non-critical
    });
  }, [slug, type]);

  return null;
}
