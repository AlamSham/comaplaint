'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { logger } from '@/lib/utils/logger';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    logger.error('Application error', error, {
      digest: error.digest,
      route: window.location.pathname,
    });
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          कुछ गलत हो गया!
        </h2>
        <p className="text-gray-600 mb-6">
          We're sorry, but something unexpected happened. Please try again or return to the homepage.
        </p>
        <p className="text-gray-600 mb-8">
          हमें खेद है, लेकिन कुछ अप्रत्याशित हुआ। कृपया पुनः प्रयास करें या होमपेज पर लौटें।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Try Again / पुनः प्रयास करें
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Go Home / होमपेज पर जाएं
          </Link>
        </div>
        {process.env.NODE_ENV !== 'production' && error.message && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
            <p className="text-sm font-mono text-gray-700 break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
