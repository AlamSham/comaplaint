'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { CATEGORY_LABELS } from '@/lib/constants';

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const categories = [
    { value: 'all', label: 'All Categories' },
    ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({
      value,
      label,
    })),
  ];

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      router.push('/guides');
    } else {
      router.push(`/guides?category=${category}`);
    }
  };

  return (
    <div className="mb-8">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Category
      </label>
      <select
        id="category"
        value={currentCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="block w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
}
