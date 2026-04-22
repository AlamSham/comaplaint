export const metadata = {
  title: 'Legal Disclaimer - Consumer Complaint Portal',
  description: 'Important legal disclaimer and terms of use for Consumer Complaint Portal',
};

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
          <h1 className="text-3xl font-bold text-red-900 mb-2">
            ⚠️ IMPORTANT LEGAL DISCLAIMER
          </h1>
          <p className="text-red-800 font-semibold">
            महत्वपूर्ण कानूनी अस्वीकरण - कृपया ध्यान से पढ़ें
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Nature of This Website</h2>
            <p className="text-gray-700 mb-4">
              Consumer Complaint Portal is an <strong>INFORMATIONAL WEBSITE ONLY</strong>. We provide general information about consumer complaint filing processes in India for educational purposes.
            </p>
            <p className="text-gray-700 mb-4">
              यह वेबसाइट <strong>केवल सूचनात्मक उद्देश्यों के लिए</strong> है। हम भारत में उपभोक्ता शिकायत दर्ज करने की प्रक्रिया के बारे में सामान्य जानकारी प्रदान करते हैं।
            </p>
          </section>

          <section className="mb-8 bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. We Are NOT a Law Firm</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We are <strong>NOT</strong> a law firm or legal service provider</li>
              <li>We are <strong>NOT</strong> lawyers or advocates</li>
              <li>We are <strong>NOT</strong> registered with the Bar Council of India</li>
              <li>We do <strong>NOT</strong> provide legal advice or legal services</li>
              <li>We do <strong>NOT</strong> represent clients in any legal proceedings</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>हम वकील नहीं हैं</strong> और हम कानूनी सलाह या कानूनी सेवाएं प्रदान नहीं करते हैं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Legal Advice</h2>
            <p className="text-gray-700 mb-4">
              <strong>NOTHING on this website constitutes legal advice.</strong> The information provided is general in nature and may not apply to your specific situation.
            </p>
            <p className="text-gray-700 mb-4">
              इस वेबसाइट पर दी गई कोई भी जानकारी <strong>कानूनी सलाह नहीं है</strong>। यह केवल सामान्य जानकारी है।
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <p className="text-blue-900 font-semibold">
                ✅ For legal advice specific to your case, please consult a qualified lawyer or advocate registered with the Bar Council of India.
              </p>
              <p className="text-blue-900 mt-2">
                अपने मामले के लिए कानूनी सलाह के लिए, कृपया बार काउंसिल ऑफ इंडिया के साथ पंजीकृत एक योग्य वकील से परामर्श करें।
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Templates Are Samples Only</h2>
            <p className="text-gray-700 mb-4">
              All complaint letter templates provided on this website are <strong>SAMPLES FOR REFERENCE ONLY</strong>. They are NOT legal documents prepared for your specific case.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Templates are generic formats only</li>
              <li>They may not be suitable for your specific situation</li>
              <li>They should be reviewed and customized by a qualified lawyer</li>
              <li>We are NOT responsible for the outcome of complaints filed using these templates</li>
            </ul>
            <p className="text-gray-700 mt-4">
              सभी टेम्पलेट <strong>केवल नमूने हैं</strong>। इन्हें उपयोग करने से पहले एक वकील से समीक्षा करवाएं।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No Attorney-Client Relationship</h2>
            <p className="text-gray-700 mb-4">
              Use of this website does <strong>NOT</strong> create an attorney-client relationship between you and Consumer Complaint Portal or any of its operators.
            </p>
            <p className="text-gray-700 mb-4">
              इस वेबसाइट का उपयोग करने से आपके और हमारे बीच कोई वकील-ग्राहक संबंध नहीं बनता है।
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. We Do NOT File Complaints</h2>
            <p className="text-gray-700 mb-4">
              We do <strong>NOT</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>File complaints on behalf of users</li>
              <li>Represent users in consumer courts or forums</li>
              <li>Communicate with companies or authorities on your behalf</li>
              <li>Provide case-specific guidance or strategy</li>
              <li>Review or analyze your specific case</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>You must file your own complaint</strong> through official government portals or with the help of a qualified lawyer.
            </p>
          </section>

          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Consumer Complaint Portal and its operators shall <strong>NOT be liable</strong> for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Any outcomes or results of complaints filed using information from this website</li>
              <li>Any errors, inaccuracies, or omissions in the information provided</li>
              <li>Any losses, damages, or legal consequences arising from use of this website</li>
              <li>Any actions taken based on information from this website</li>
              <li>Any third-party content or links provided on this website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. No Guarantees</h2>
            <p className="text-gray-700 mb-4">
              We make <strong>NO GUARANTEES</strong> regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Success or outcome of any complaint</li>
              <li>Accuracy or completeness of information</li>
              <li>Suitability of templates for your specific case</li>
              <li>Timeliness or availability of information</li>
              <li>Resolution of your consumer dispute</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Information Provided "As Is"</h2>
            <p className="text-gray-700 mb-4">
              All information on this website is provided <strong>"AS IS"</strong> without any warranty of any kind, express or implied.
            </p>
            <p className="text-gray-700 mb-4">
              Laws and regulations change frequently. Information on this website may become outdated. Always verify current laws and procedures with official sources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. User Responsibility</h2>
            <p className="text-gray-700 mb-4">
              By using this website, you agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You will consult a qualified lawyer for legal advice</li>
              <li>You will verify all information independently</li>
              <li>You will use information at your own risk</li>
              <li>You will not hold us liable for any outcomes</li>
              <li>You understand this is not a substitute for professional legal advice</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Official Resources</h2>
            <p className="text-gray-700 mb-4">
              For official information and complaint filing, please visit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>National Consumer Helpline:</strong> https://consumerhelpline.gov.in</li>
              <li><strong>e-Daakhil Consumer Court:</strong> https://edaakhil.nic.in</li>
              <li><strong>Department of Consumer Affairs:</strong> https://consumeraffairs.nic.in</li>
              <li><strong>Legal Services Authority:</strong> https://nalsa.gov.in (for free legal aid)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              This disclaimer and your use of this website shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.
            </p>
          </section>

          <section className="mb-8 bg-red-50 p-6 rounded-lg border-2 border-red-600">
            <h2 className="text-2xl font-bold text-red-900 mb-4">⚠️ IMPORTANT NOTICE</h2>
            <p className="text-red-800 font-semibold mb-4">
              IF YOU NEED LEGAL ADVICE OR LEGAL REPRESENTATION, PLEASE CONSULT A QUALIFIED LAWYER IMMEDIATELY.
            </p>
            <p className="text-red-800 mb-4">
              यदि आपको कानूनी सलाह या कानूनी प्रतिनिधित्व की आवश्यकता है, तो कृपया तुरंत एक योग्य वकील से परामर्श करें।
            </p>
            <p className="text-red-800">
              DO NOT RELY SOLELY ON INFORMATION FROM THIS WEBSITE FOR LEGAL MATTERS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact for Legal Services</h2>
            <p className="text-gray-700 mb-4">
              To find a qualified lawyer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Bar Council of India:</strong> https://www.barcouncilofindia.org</li>
              <li><strong>State Bar Councils:</strong> Contact your state bar council</li>
              <li><strong>Legal Services Authority:</strong> For free legal aid (if eligible)</li>
              <li><strong>Local Advocates:</strong> Consult local consumer lawyers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify this disclaimer at any time. Continued use of this website after changes constitutes acceptance of the modified disclaimer.
            </p>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Acknowledgment</h2>
            <p className="text-gray-700 mb-4">
              By using this website, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You have read and understood this disclaimer</li>
              <li>You agree to all terms stated herein</li>
              <li>You will not hold us liable for any outcomes</li>
              <li>You will seek professional legal advice when needed</li>
              <li>You understand this is an informational website only</li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t-2 border-gray-300">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> April 22, 2026
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Contact:</strong> For questions about this disclaimer, please visit our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
