'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { LANGUAGE_LABELS } from '@/lib/constants';

export function LanguageFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLanguage = searchParams.get('language') || 'all';

  const languages = [
    { value: 'all', label: 'All Languages' },
    ...Object.entries(LANGUAGE_LABELS).map(([value, label]) => ({
      value,
      label,
    })),
  ];

  const handleLanguageChange = (language: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (language === 'all') {
      params.delete('language');
    } else {
      params.set('language', language);
    }
    
    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : window.location.pathname);
  };

  return (
    <div className="mb-8">
      <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Language
      </label>
      <select
        id="language"
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="block w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
