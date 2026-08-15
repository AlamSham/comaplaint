import { describe, it, expect } from 'vitest';
import { createPageMetadata, absoluteUrl } from '../../../lib/seo';

describe('SEO utilities', () => {
  it('creates page metadata with canonical url', () => {
    const metadata = createPageMetadata({
      title: 'Test Guide',
      description: 'Test description for consumer portal',
      path: '/guides/test-guide',
    });

    expect(metadata.title).toBe('Test Guide');
    expect(metadata.description).toBe('Test description for consumer portal');
    expect(metadata.alternates?.canonical).toBe('/guides/test-guide');
  });

  it('formats absolute URLs correctly', () => {
    expect(absoluteUrl('/about')).toContain('/about');
  });
});
