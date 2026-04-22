import { connectDB } from '@/lib/db/mongoose';
import Portal from '@/lib/db/models/Portal';
import { CATEGORY_LABELS } from '@/lib/constants';

export const revalidate = 86400; // 24 hours

export default async function PortalsPage() {
  await connectDB();
  
  const portals = await Portal.find({ isActive: true })
    .sort({ name: 1 })
    .lean();

  const portalsByCategory = portals.reduce((acc: any, portal: any) => {
    if (!acc[portal.category]) {
      acc[portal.category] = [];
    }
    acc[portal.category].push(portal);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Official Complaint Portals
          </h1>
          <h2 className="text-2xl text-gray-700">
            आधिकारिक शिकायत पोर्टल
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Direct links to government and regulatory complaint portals
          </p>
        </div>

        {Object.keys(portalsByCategory).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No portals available yet.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(portalsByCategory).map(([category, categoryPortals]: [string, any]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS]}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryPortals.map((portal: any) => (
                    <div
                      key={portal._id.toString()}
                      className="bg-white rounded-lg shadow-md p-6"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {portal.name}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {portal.description}
                      </p>
                      <div className="flex flex-col gap-3">
                        <a
                          href={portal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                          Visit Portal →
                        </a>
                        {portal.phone && (
                          <div className="flex items-center text-gray-600">
                            <span className="mr-2">📞</span>
                            <span className="font-medium">{portal.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
