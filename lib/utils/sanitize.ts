import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param content - The HTML content to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeHTML(content: string): string {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 
      'ul', 'ol', 'li', 'a', 'span', 'div'
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
  });
}

/**
 * Sanitize plain text by removing HTML tags
 * @param text - The text to sanitize
 * @returns Sanitized text string
 */
export function sanitizeText(text: string): string {
  return text.trim().replace(/[<>]/g, '');
}
