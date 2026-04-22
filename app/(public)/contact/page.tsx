'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            हमसे संपर्क करें
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out through our official channels.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {/* Legal Warning */}
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-red-900 font-semibold text-sm mb-1">
                ⚠️ This is NOT for Legal Consultation
              </p>
              <p className="text-red-800 text-xs">
                We do NOT provide legal advice. This form is for website feedback only. 
                For legal help, consult a qualified lawyer.
              </p>
              <p className="text-red-800 text-xs mt-1">
                हम कानूनी सलाह प्रदान नहीं करते हैं। यह फॉर्म केवल वेबसाइट फीडबैक के लिए है।
              </p>
            </div>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">✓ Message sent successfully!</p>
                <p className="text-green-600 text-sm">We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name / नाम
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email / ईमेल
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject / विषय
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="report">Report an Issue</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message / संदेश
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Important Note */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <div className="text-2xl mr-3">⚠️</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Important Note</h4>
                  <p className="text-sm text-gray-700">
                    This portal provides information and templates only. For filing actual complaints, please use the official government portals linked on our site.
                  </p>
                </div>
              </div>
            </div>

            {/* Official Portals */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🔗</div>
                <h3 className="text-xl font-bold text-gray-900">Official Complaint Portals</h3>
              </div>
              <div className="space-y-3">
                <Link
                  href="/portals"
                  className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <div className="font-semibold text-blue-900">National Consumer Helpline</div>
                  <div className="text-sm text-blue-700">consumerhelpline.gov.in</div>
                </Link>
                <Link
                  href="/portals"
                  className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <div className="font-semibold text-blue-900">e-Daakhil Consumer Court</div>
                  <div className="text-sm text-blue-700">edaakhil.nic.in</div>
                </Link>
                <Link
                  href="/portals"
                  className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <div className="font-semibold text-blue-900">View All Portals</div>
                  <div className="text-sm text-blue-700">Complete list of official portals →</div>
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">❓</div>
                <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Is this service free?</h4>
                  <p className="text-sm text-gray-600">Yes, all our guides and templates are completely free to use.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Can you file complaints for me?</h4>
                  <p className="text-sm text-gray-600">No, we provide information only. You must file complaints through official portals.</p>
                </div>
                <div>
                  <h4 className="font-semibent text-gray-900 mb-1">How do I use the templates?</h4>
                  <p className="text-sm text-gray-600">Copy the template, replace placeholders with your details, and submit to the relevant authority.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">🌐</div>
                <h3 className="text-xl font-bold">Explore More</h3>
              </div>
              <div className="space-y-3">
                <Link href="/guides" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  <div className="font-semibold">📖 Browse Guides</div>
                  <div className="text-sm opacity-90">Step-by-step complaint guides</div>
                </Link>
                <Link href="/templates" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  <div className="font-semibold">📝 Get Templates</div>
                  <div className="text-sm opacity-90">30+ ready-made templates</div>
                </Link>
                <Link href="/about" className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition">
                  <div className="font-semibold">ℹ️ About Us</div>
                  <div className="text-sm opacity-90">Learn more about our mission</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
