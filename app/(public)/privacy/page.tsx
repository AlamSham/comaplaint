export const metadata = {
  title: 'Privacy Policy - Consumer Complaint Portal',
  description: 'Privacy policy and data protection practices of Consumer Complaint Portal',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">गोपनीयता नीति</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> April 22, 2026<br />
            <strong>Last Updated:</strong> April 22, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Consumer Complaint Portal ("we", "us", "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-700 mb-4">
              हम आपकी गोपनीयता का सम्मान करते हैं और आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-700 mb-4">
              We may collect information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Contact Form:</strong> Name, email address, subject, and message</li>
              <li><strong>Feedback:</strong> Comments or suggestions you submit</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect certain information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Log Data:</strong> IP address, browser type, operating system, pages visited, time spent</li>
              <li><strong>Cookies:</strong> Small data files stored on your device (see Cookie Policy below)</li>
              <li><strong>Analytics Data:</strong> Usage patterns, page views, referral sources</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Respond to Inquiries:</strong> Answer your questions and provide support</li>
              <li><strong>Improve Website:</strong> Analyze usage to enhance user experience</li>
              <li><strong>Security:</strong> Detect and prevent fraud, abuse, or security issues</li>
              <li><strong>Analytics:</strong> Understand how visitors use our website</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8 bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What We Do NOT Do</h2>
            <p className="text-gray-700 mb-4">
              We do <strong>NOT</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Sell your personal information to third parties</li>
              <li>Share your information for marketing purposes</li>
              <li>Store sensitive personal information (Aadhaar, PAN, financial data)</li>
              <li>Track you across other websites</li>
              <li>Collect information from children under 18</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 What Are Cookies?</h3>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device that help us improve your experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage (Google Analytics, Vercel Analytics)</li>
              <li><strong>Advertising Cookies:</strong> Used by Google AdSense to show relevant ads</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Managing Cookies</h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use the following third-party services that may collect information:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Google AdSense</h3>
            <p className="text-gray-700 mb-4">
              We use Google AdSense to display advertisements. Google may use cookies to show ads based on your interests.
            </p>
            <p className="text-gray-700 mb-4">
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Google Privacy Policy
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Vercel Analytics</h3>
            <p className="text-gray-700 mb-4">
              We use Vercel Analytics to understand website performance and usage. Vercel collects anonymized data.
            </p>
            <p className="text-gray-700 mb-4">
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Vercel Privacy Policy
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 MongoDB Atlas</h3>
            <p className="text-gray-700 mb-4">
              We use MongoDB Atlas for data storage. MongoDB implements industry-standard security measures.
            </p>
            <p className="text-gray-700 mb-4">
              <a href="https://www.mongodb.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                MongoDB Privacy Policy
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>HTTPS Encryption:</strong> All data transmitted is encrypted</li>
              <li><strong>Secure Servers:</strong> Data stored on secure cloud servers</li>
              <li><strong>Access Controls:</strong> Limited access to personal information</li>
              <li><strong>Regular Updates:</strong> Security patches and updates applied regularly</li>
            </ul>
            <p className="text-gray-700 mt-4">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your information only as long as necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contact Form Data:</strong> Retained for 1 year or until resolved</li>
              <li><strong>Analytics Data:</strong> Retained for 26 months (Google Analytics default)</li>
              <li><strong>Log Data:</strong> Retained for 90 days</li>
            </ul>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Under Indian law (IT Act, 2000), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of marketing communications (if any)</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, please contact us through our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and stored on servers located outside India (e.g., cloud services). We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Compliance with Indian Laws</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy complies with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Information Technology Act, 2000</strong></li>
              <li><strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong></li>
              <li><strong>Consumer Protection Act, 2019</strong></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Grievance Officer</h2>
            <p className="text-gray-700 mb-4">
              In accordance with IT Act, 2000 and rules, we have appointed a Grievance Officer to address privacy concerns:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Grievance Officer:</strong> [To be appointed]<br />
                <strong>Email:</strong> [To be provided]<br />
                <strong>Response Time:</strong> Within 30 days
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contact Page:</strong> <a href="/contact" className="text-blue-600 hover:underline">/contact</a></li>
              <li><strong>Email:</strong> [To be provided]</li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t-2 border-gray-300 bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Privacy Matters</h3>
            <p className="text-gray-700 mb-4">
              We are committed to protecting your privacy and handling your data responsibly. If you have any concerns, please don't hesitate to contact us.
            </p>
            <p className="text-gray-700">
              आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। किसी भी चिंता के लिए हमसे संपर्क करें।
            </p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> April 22, 2026
            </p>
            <p className="text-sm text-gray-600 mt-2">
              By using this website, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
