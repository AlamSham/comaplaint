import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import Link from 'next/link';

export const revalidate = 3600; // 1 hour

export default async function Home() {
  await connectDB();
  
  const topGuides = await Guide.find({ published: true })
    .sort({ views: -1 })
    .limit(6)
    .lean();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              🇮🇳 India's Trusted Consumer Portal
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Consumer Complaint Portal
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              उपभोक्ता शिकायत पोर्टल
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your complete guide to filing consumer complaints in India. 
              Step-by-step guides, 30+ ready-made templates, and direct links to official portals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/guides"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                📖 Browse Guides
              </Link>
              <Link
                href="/templates"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                📝 Get Templates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Help You
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to file effective consumer complaints
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/guides" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Step-by-Step Guides
            </h3>
            <p className="text-gray-600 mb-4">
              Detailed complaint filing guides for e-commerce, banking, telecom, RERA, insurance, and more
            </p>
            <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
              Explore Guides →
            </div>
          </Link>

          <Link href="/templates" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              30+ Ready Templates
            </h3>
            <p className="text-gray-600 mb-4">
              Copy and customize complaint letter templates in Hindi, English, and Hinglish
            </p>
            <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
              Get Templates →
            </div>
          </Link>

          <Link href="/portals" className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-1">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🔗</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Official Portals
            </h3>
            <p className="text-gray-600 mb-4">
              Direct links to NCH, e-Daakhil, TRAI, RBI Ombudsman, RERA, and other official portals
            </p>
            <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
              View Portals →
            </div>
          </Link>
        </div>
      </div>

      {/* Popular Guides Section */}
      {topGuides.length > 0 && (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Most Popular Guides
              </h2>
              <p className="text-gray-600">
                Trusted by thousands of consumers across India
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topGuides.map((guide: any) => (
                <Link
                  key={guide._id.toString()}
                  href={`/guides/${guide.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-6 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold">
                      {guide.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <span className="mr-1">👁️</span>
                      {guide.views}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {guide.content.substring(0, 100)}...
                  </p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/guides"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
              >
                View All Guides →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600">
              Find guides and templates for your specific issue
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'E-commerce', emoji: '🛒', color: 'from-blue-500 to-blue-600' },
              { name: 'Banking', emoji: '🏦', color: 'from-green-500 to-green-600' },
              { name: 'Telecom', emoji: '📱', color: 'from-purple-500 to-purple-600' },
              { name: 'Government', emoji: '🏛️', color: 'from-orange-500 to-orange-600' },
              { name: 'RERA', emoji: '🏗️', color: 'from-red-500 to-red-600' },
              { name: 'Insurance', emoji: '🛡️', color: 'from-indigo-500 to-indigo-600' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/guides?category=${category.name.toLowerCase()}`}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all text-center transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.emoji}</div>
                <div className={`font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to File Your Complaint?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Get started with our comprehensive guides and templates - completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Browse Guides
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
