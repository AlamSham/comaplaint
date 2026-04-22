'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-2xl border-t-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">🍪 We use cookies</span> to improve your experience. 
              We use essential cookies for site functionality only. No tracking or advertising cookies are used.
              <br />
              <span className="text-xs text-gray-400">
                हम आपके अनुभव को बेहतर बनाने के लिए केवल आवश्यक कुकीज़ का उपयोग करते हैं।
              </span>
            </p>
            <Link href="/privacy" className="text-xs text-blue-400 hover:text-blue-300 underline mt-1 inline-block">
              Learn more in our Privacy Policy
            </Link>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-500 transition"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
