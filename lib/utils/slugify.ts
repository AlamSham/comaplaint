import { Model } from 'mongoose';

/**
 * Convert a string to a URL-friendly slug
 * @param text - The text to slugify
 * @returns A lowercase slug with hyphens
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove non-word chars (except hyphens)
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

/**
 * Generate a unique slug for a model
 * @param baseSlug - The base slug to start with
 * @param Model - The Mongoose model to check against
 * @param excludeId - Optional ID to exclude from uniqueness check (for updates)
 * @returns A unique slug
 */
export async function generateUniqueSlug(
  baseSlug: string,
  Model: Model<any>,
  excludeId?: string
): Promise<string> {
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const query = excludeId 
      ? { slug, _id: { $ne: excludeId } }
      : { slug };
    
    const existing = await Model.findOne(query);
    
    if (!existing) {
      return slug;
    }
    
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}
