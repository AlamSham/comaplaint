import { connectDB } from '@/lib/db/mongoose';
import Portal from '@/lib/db/models/Portal';
import Link from 'next/link';
import { CATEGORY_LABELS, type Category } from '@/lib/constants';
import { JsonLd } from '@/components/shared/JsonLd';
import { createItemListJsonLd, createPageMetadata } from '@/lib/seo';
import { CATEGORY_DETAILS } from '@/lib/content/publicSections';

type PortalListItem = {
  _id: { toString(): string };
  name: string;
  slug: string;
  category: Category;
  url: string;
  description: string;
  phone?: string;
};

export const revalidate = 86400; // 24 hours

export const metadata = createPageMetadata({
  title: 'Official Complaint Portals (2026) — आधिकारिक शिकायत पोर्टल',
  description:
    'Direct links to official Indian complaint portals — National Consumer Helpline (NCH), e-Daakhil Consumer Court, TRAI, RBI Ombudsman, RERA, IRDAI. शिकायत दर्ज करने के सरकारी पोर्टल।',
  path: '/portals',
  titleAbsolute: true,
  keywords: [
    'official complaint portals India',
    'National Consumer Helpline',
    'e-Daakhil',
    'RBI Ombudsman',
    'TRAI complaint portal',
    'RERA complaint online',
    'IRDAI complaint',
    'शिकायत पोर्टल',
    'consumer complaint portal India',
  ],
});

export default async function PortalsPage() {
  let portals: PortalListItem[] = [];

  try {
    await connectDB();
    portals = (await Portal.find({ isActive: true })
      .sort({ name: 1 })
      .lean()) as unknown as PortalListItem[];
  } catch (error) {
    console.warn('PortalsPage DB error:', error);
  }

  const portalsByCategory = portals.reduce<Record<string, PortalListItem[]>>((acc, portal) => {
    if (!acc[portal.category]) {
      acc[portal.category] = [];
    }
    acc[portal.category].push(portal);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd
        data={createItemListJsonLd(
          'Official complaint portals in India',
          portals.map((portal) => ({
            name: portal.name,
            url: portal.url,
            description: portal.description,
          }))
        )}
      />
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-3">
              Official routes
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-4">
              Official Complaint Portals
            </h1>
            <h2 className="text-2xl text-gray-800">
              आधिकारिक शिकायत पोर्टल
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Direct links to government and regulatory complaint portals for consumer, banking, telecom, RERA, insurance, and public service issues.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <section className="mb-12 grid md:grid-cols-3 gap-4">
          {[
            ['1', 'Start with the service provider', 'Create a ticket, email, or written complaint first.'],
            ['2', 'Record acknowledgement', 'Save complaint number, dates, proof, and final response.'],
            ['3', 'Use the correct official route', 'Escalate through the relevant government or regulator portal.'],
          ].map(([step, title, description]) => (
            <div key={step} className="rounded-lg border border-stone-200 bg-white p-5">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                {step}
              </div>
              <h2 className="font-bold text-gray-950">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
            </div>
          ))}
        </section>

        {Object.keys(portalsByCategory).length === 0 ? (
          <div className="rounded-lg border border-stone-200 bg-white text-center py-12">
            <p className="text-gray-500">No portals available yet.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(portalsByCategory).map(([category, categoryPortals]) => {
              const typedCategory = category as Category;

              return (
              <section key={category}>
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-950">
                      {CATEGORY_LABELS[typedCategory]}
                    </h2>
                    <p className="mt-2 max-w-3xl text-gray-600 leading-7">
                      {CATEGORY_DETAILS[typedCategory].escalationPath.join(' ')}
                    </p>
                  </div>
                  <Link
                    href={`/guides/category/${typedCategory}`}
                    className="font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Guides for {CATEGORY_LABELS[typedCategory]} →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryPortals.map((portal) => (
                    <div
                      key={portal._id.toString()}
                      className="bg-white rounded-lg border border-stone-200 p-6"
                    >
                      <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                        {CATEGORY_LABELS[portal.category]}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-950 mb-3">
                        {portal.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {portal.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition font-semibold"
                        >
                          Visit Portal
                        </a>
                        {portal.phone && (
                          <div className="flex items-center text-gray-600">
                            <span className="font-medium">Phone: {portal.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
