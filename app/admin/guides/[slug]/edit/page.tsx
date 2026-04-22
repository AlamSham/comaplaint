import GuideForm from '@/components/admin/GuideForm';
import { connectDB } from '@/lib/db/mongoose';
import Guide from '@/lib/db/models/Guide';
import { notFound } from 'next/navigation';

export default async function EditGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connectDB();
  
  const { slug } = await params;
  
  const guide = await Guide.findOne({ slug }).lean();

  if (!guide) {
    notFound();
  }

  // Convert MongoDB document to plain object
  const guideData = JSON.parse(JSON.stringify(guide));

  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Guide</h1>
      <div className="bg-white shadow sm:rounded-lg p-6">
        <GuideForm guide={guideData} />
      </div>
    </div>
  );
}
