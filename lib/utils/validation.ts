import { CATEGORIES, LANGUAGES } from '@/lib/constants';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validateGuideData(data: any): ValidationResult {
  const errors: string[] = [];

  if (!data.title || data.title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (!data.category || !CATEGORIES.includes(data.category)) {
    errors.push('Valid category is required');
  }

  if (!data.language || !LANGUAGES.includes(data.language)) {
    errors.push('Valid language is required');
  }

  if (!data.content || data.content.trim().length === 0) {
    errors.push('Content is required');
  }

  if (!data.metadata?.title || !data.metadata?.description) {
    errors.push('Metadata title and description are required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateTemplateData(data: any): ValidationResult {
  const errors: string[] = [];

  if (!data.title || data.title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (!data.guideRef) {
    errors.push('Guide reference is required');
  }

  if (!data.language || !LANGUAGES.includes(data.language)) {
    errors.push('Valid language is required');
  }

  if (!data.content || data.content.trim().length === 0) {
    errors.push('Content is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validatePortalData(data: any): ValidationResult {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!data.category || !CATEGORIES.includes(data.category)) {
    errors.push('Valid category is required');
  }

  if (!data.url || !/^https?:\/\/.+/.test(data.url)) {
    errors.push('Valid URL is required');
  }

  if (!data.description || data.description.trim().length === 0) {
    errors.push('Description is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
