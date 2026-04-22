export const CATEGORIES = [
  'ecommerce',
  'banking',
  'telecom',
  'govt',
  'rera',
  'insurance',
] as const;

export const LANGUAGES = ['hindi', 'hinglish', 'english'] as const;

export const CATEGORY_LABELS: Record<typeof CATEGORIES[number], string> = {
  ecommerce: 'E-commerce',
  banking: 'Banking',
  telecom: 'Telecom',
  govt: 'Government',
  rera: 'RERA',
  insurance: 'Insurance',
};

export const LANGUAGE_LABELS: Record<typeof LANGUAGES[number], string> = {
  hindi: 'हिंदी',
  hinglish: 'Hinglish',
  english: 'English',
};

export type Category = typeof CATEGORIES[number];
export type Language = typeof LANGUAGES[number];
