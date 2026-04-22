'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LANGUAGES, LANGUAGE_LABELS } from '@/lib/constants';

interface TemplateFormData {
  title: string;
  guideRef: string;
  language: string;
  content: string;
}

interface TemplateFormProps {
  template?: any;
}

export default function TemplateForm({ template }: TemplateFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [guides, setGuides] = useState<any[]>([]);

  const [formData, setFormData] = useState<TemplateFormData>({
    title: template?.title || '',
    guideRef: template?.guideRef?._id || template?.guideRef || '',
    language: template?.language || 'hindi',
    content: template?.content || '',
  });

  useEffect(() => {
    async function fetchGuides() {
      try {
        const res = await fetch('/api/guides?status=published');
        const data = await res.json();
        setGuides(data.guides);
      } catch (error) {
        console.error('Failed to fetch guides:', error);
      }
    }

    fetchGuides();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const url = template ? `/api/templates/${template.slug}` : '/api/templates';
      const method = template ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save template');
      }

      router.push('/admin/templates');
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Title *
        </label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Related Guide *
        </label>
        <select
          required
          value={formData.guideRef}
          onChange={(e) =>
            setFormData({ ...formData, guideRef: e.target.value })
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a guide</option>
          {guides.map((guide) => (
            <option key={guide._id} value={guide._id}>
              {guide.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Language *
        </label>
        <select
          required
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, language: e.target.value })
          }
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {LANGUAGE_LABELS[lang]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Template Content *
        </label>
        <p className="text-xs text-gray-500 mb-2">
          Use placeholders like {'{{name}}'}, {'{{order_id}}'}, {'{{date}}'} for customizable fields
        </p>
        <textarea
          required
          rows={15}
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          placeholder="Enter template content with placeholders..."
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Saving...' : template ? 'Update Template' : 'Create Template'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
