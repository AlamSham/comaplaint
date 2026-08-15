import { describe, it } from 'vitest';
import fc from 'fast-check';
import { slugify } from '../../lib/utils/slugify';

describe('slugify property tests', () => {
  it('always produces lowercase slug strings without spaces', () => {
    fc.assert(
      fc.property(fc.string(), (input) => {
        const slug = slugify(input);
        return typeof slug === 'string' && !/\s/.test(slug) && slug === slug.toLowerCase();
      })
    );
  });
});
