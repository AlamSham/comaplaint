import Link from 'next/link';
import { createPageMetadata, AUTHOR_CONFIG } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About ShikayatKaro (2026) — हमारे बारे में',
  description:
    'ShikayatKaro के बारे में जानें। India free consumer rights information portal — guides, letter formats, and official government portal resources.',
  path: '/about',
  titleAbsolute: true,
  keywords: [
    'ShikayatKaro',
    'consumer complaint portal about',
    'consumer rights India',
    'उपभोक्ता अधिकार भारत',
    'consumer protection act 2019 hindi',
  ],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            हमारे बारे में
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Legal Disclaimer Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="text-3xl mr-4">⚠️</div>
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">
                We Are NOT a Law Firm / हम कानूनी फर्म नहीं हैं
              </h3>
              <p className="text-red-800 leading-relaxed mb-2">
                <strong>Important:</strong> ShikayatKaro is an <strong>information website only</strong>. 
                We do NOT provide legal advice, legal representation, or legal services of any kind. 
                We are NOT lawyers and do NOT practice law.
              </p>
              <p className="text-red-800 leading-relaxed">
                <strong>महत्वपूर्ण:</strong> यह केवल एक सूचना वेबसाइट है। हम कानूनी सलाह, प्रतिनिधित्व या सेवाएं प्रदान नहीं करते हैं। 
                हम वकील नहीं हैं और कानून का अभ्यास नहीं करते हैं।
              </p>
              <p className="text-red-700 text-sm mt-3">
                For legal matters, please consult a qualified lawyer. / कानूनी मामलों के लिए, कृपया योग्य वकील से परामर्श करें।
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="text-4xl mr-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            ShikayatKaro is dedicated to empowering Indian consumers by simplifying the complaint filing process. 
            We believe every consumer deserves quick and effective resolution to their grievances.
          </p>
          <p className="text-gray-700 leading-relaxed">
            हमारा उद्देश्य भारतीय उपभोक्ताओं को शिकायत दर्ज करने की प्रक्रिया को सरल बनाकर सशक्त बनाना है। 
            हम मानते हैं कि हर उपभोक्ता को अपनी शिकायतों का त्वरित और प्रभावी समाधान पाने का अधिकार है।
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">💡</div>
            <h3 className="text-2xl font-bold text-gray-900">What We Do</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-2xl mr-3">📖</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Step-by-Step Guides</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive guides for filing complaints across e-commerce, banking, telecom, RERA, insurance, and more.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">📝</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ready-Made Templates</h4>
                <p className="text-gray-600 text-sm">
                  30+ complaint letter templates in Hindi, English, and Hinglish that you can copy and customize.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">🔗</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Official Portal Links</h4>
                <p className="text-gray-600 text-sm">
                  Direct links to NCH, e-Daakhil, TRAI, RBI Ombudsman, RERA, and other official complaint portals.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">🌐</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Multilingual Support</h4>
                <p className="text-gray-600 text-sm">
                  Content available in Hindi, English, and Hinglish to help all Indian consumers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Trust Us */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">✨</div>
            <h3 className="text-2xl font-bold">Why Trust Us</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-sm opacity-90">Complaint Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-sm opacity-90">Detailed Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Free to Use</div>
            </div>
          </div>

        {/* Team / Author Info — E-E-A-T Signal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">👤</div>
            <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white font-bold text-xl flex-shrink-0">
              {AUTHOR_CONFIG.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">{AUTHOR_CONFIG.name}</h4>
              <p className="text-sm text-emerald-700 font-semibold mb-2">{AUTHOR_CONFIG.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {AUTHOR_CONFIG.description}
              </p>
            </div>
          </div>
        </div>

        {/* Sources — Trust Signal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🔗</div>
            <h3 className="text-2xl font-bold text-gray-900">Our Sources</h3>
          </div>
          <p className="text-gray-700 mb-4">
            All our guides reference official government portals and verified consumer rights resources:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              ['National Consumer Helpline', 'consumerhelpline.gov.in', 'https://consumerhelpline.gov.in'],
              ['e-Daakhil Consumer Court', 'edaakhil.nic.in', 'https://edaakhil.nic.in'],
              ['RBI Ombudsman', 'cms.rbi.org.in', 'https://cms.rbi.org.in'],
              ['TRAI', 'trai.gov.in', 'https://trai.gov.in'],
              ['RERA (MahaRERA)', 'maharera.maharashtra.gov.in', 'https://maharera.maharashtra.gov.in'],
              ['IRDAI', 'irdai.gov.in', 'https://irdai.gov.in'],
              ['CPGRAMS', 'pgportal.gov.in', 'https://pgportal.gov.in'],
              ['VAHAN / Parivahan', 'vahan.parivahan.gov.in', 'https://vahan.parivahan.gov.in'],
            ].map(([name, domain, url]) => (
              <a
                key={domain}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
              >
                <div>
                  <div className="font-semibold text-blue-900 text-sm">{name}</div>
                  <div className="text-xs text-blue-700">{domain} ↗</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>

        {/* How We Help */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🤝</div>
            <h3 className="text-2xl font-bold text-gray-900">How We Help</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Find Your Issue</h4>
                <p className="text-gray-600 text-sm">Browse our guides by category to find your specific complaint type.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Follow the Steps</h4>
                <p className="text-gray-600 text-sm">Our detailed guides walk you through the entire complaint process.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Use Our Templates</h4>
                <p className="text-gray-600 text-sm">Copy and customize our ready-made complaint letter templates.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">File Your Complaint</h4>
                <p className="text-gray-600 text-sm">Submit your complaint through official portals linked on our site.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to File Your Complaint?
          </h3>
          <p className="text-gray-600 mb-6">
            Get started with our comprehensive guides and templates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Browse Guides
            </Link>
            <Link
              href="/templates"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition shadow-md"
            >
              Get Templates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
