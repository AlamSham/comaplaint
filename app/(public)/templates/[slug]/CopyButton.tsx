'use client';

import { useState } from 'react';

interface CopyButtonProps {
  content: string;
  slug: string;
}

export default function CopyButton({ content, slug }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      
      // Increment download count
      await fetch(`/api/templates/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ incrementDownload: true }),
      });

      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 rounded-md font-medium transition ${
        copied
          ? 'bg-green-600 text-white'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      {copied ? '✓ Copied!' : 'Copy Template'}
    </button>
  );
}
