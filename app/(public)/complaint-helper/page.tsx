import Link from 'next/link';
import { ComplaintDraftAssistant } from '@/components/public/ComplaintDraftAssistant';
import { JsonLd } from '@/components/shared/JsonLd';
import { absoluteUrl, createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Smart Complaint Draft Helper',
  description:
    'Create a complaint draft, proof checklist, and escalation route for RC transfer, refund, banking, telecom, RERA, insurance, and government service issues.',
  path: '/complaint-helper',
  keywords: [
    'complaint draft helper',
    'AI complaint letter generator',
    'RC transfer complaint draft',
    'consumer complaint draft India',
  ],
});

export default function ComplaintHelperPage() {
  const webApplicationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Smart Complaint Draft Helper',
    url: absoluteUrl('/complaint-helper'),
    applicationCategory: 'LegalService',
    operatingSystem: 'Any',
    isAccessibleForFree: true,
    publisher: {
      '@type': 'Organization',
      name: 'Consumer Complaint Portal',
      url: absoluteUrl('/'),
    },
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <JsonLd data={webApplicationJsonLd} />

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Smart complaint tool
            </p>
            <h1 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
              Smart Complaint Draft Helper
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              Build a first complaint draft, prepare proof, and open the right guide or template for high-intent issues like RC transfer delay, refund disputes, bank transactions, telecom billing, RERA, and insurance.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/templates/rc-transfer-complaint-letter-hinglish"
                className="inline-flex justify-center rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                RC Transfer Template
              </Link>
              <Link
                href="/guides/rc-transfer-delay-complaint-guide"
                className="inline-flex justify-center rounded-lg border border-stone-300 bg-white px-5 py-3 font-semibold text-gray-950 transition hover:border-emerald-500"
              >
                RC Transfer Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <ComplaintDraftAssistant />

        <section className="mt-10 rounded-lg border border-yellow-200 bg-yellow-50 p-5">
          <h2 className="font-bold text-yellow-950">Important</h2>
          <p className="mt-2 text-sm leading-6 text-yellow-900">
            This is a sample drafting tool, not legal advice. Verify official process and consult a qualified lawyer for legal matters.
          </p>
        </section>
      </main>
    </div>
  );
}
