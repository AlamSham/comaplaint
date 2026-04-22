import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          पेज नहीं मिला
        </h3>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-gray-600 mb-8">
          आप जिस पेज को खोज रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go Home / होमपेज पर जाएं
          </Link>
          <Link
            href="/guides"
            className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Browse Guides / गाइड देखें
          </Link>
        </div>
      </div>
    </div>
  );
}
