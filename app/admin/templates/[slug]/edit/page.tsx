import TemplateForm from '@/components/admin/TemplateForm';
import { connectDB } from '@/lib/db/mongoose';
import Template from '@/lib/db/models/Template';
import { notFound } from 'next/navigation';

export default async function EditTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connectDB();
  
  const { slug } = await params;
  
  const template = await Template.findOne({ slug }).populate('guideRef').lean();

  if (!template) {
    notFound();
  }

  // Convert MongoDB document to plain object
  const templateData = JSON.parse(JSON.stringify(template));

  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Template</h1>
      <div className="bg-white shadow sm:rounded-lg p-6">
        <TemplateForm template={templateData} />
      </div>
    </div>
  );
}
