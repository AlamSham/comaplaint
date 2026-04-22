import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400 text-sm mb-4">
              Consumer Complaint Portal helps Indian consumers file complaints effectively.
            </p>
            <Link href="/about" className="text-blue-400 hover:text-blue-300 text-sm transition">
              Learn More →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-400 hover:text-white transition">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/portals" className="text-gray-400 hover:text-white transition">
                  Portals
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides?category=ecommerce" className="text-gray-400 hover:text-white transition">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/guides?category=banking" className="text-gray-400 hover:text-white transition">
                  Banking
                </Link>
              </li>
              <li>
                <Link href="/guides?category=telecom" className="text-gray-400 hover:text-white transition">
                  Telecom
                </Link>
              </li>
              <li>
                <Link href="/guides?category=rera" className="text-gray-400 hover:text-white transition">
                  RERA
                </Link>
              </li>
              <li>
                <Link href="/guides?category=insurance" className="text-gray-400 hover:text-white transition">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400 text-sm mb-4">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Legal Disclaimer */}
          <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 mb-6 text-center">
            <p className="text-yellow-200 text-sm font-semibold mb-2">
              ⚠️ Important Legal Disclaimer / महत्वपूर्ण कानूनी अस्वीकरण
            </p>
            <p className="text-gray-300 text-xs leading-relaxed">
              This website provides general information only and is NOT a law firm. We do not provide legal advice or representation. 
              All templates are samples only. Consult a qualified lawyer for legal matters.
              <br />
              यह वेबसाइट केवल सामान्य जानकारी प्रदान करती है और कानूनी फर्म नहीं है। हम कानूनी सलाह या प्रतिनिधित्व प्रदान नहीं करते हैं।
            </p>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Consumer Complaint Portal. All rights reserved.</p>
            <p className="mt-3">
              <Link href="/about" className="hover:text-white transition">About</Link>
              {' • '}
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
              {' • '}
              <Link href="/legal-disclaimer" className="hover:text-white transition">Legal Disclaimer</Link>
              {' • '}
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
              {' • '}
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
              {' • '}
              <Link href="/portals" className="hover:text-white transition">Official Portals</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
