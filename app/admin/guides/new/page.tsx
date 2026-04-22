import GuideForm from '@/components/admin/GuideForm';

export default function NewGuidePage() {
  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Guide</h1>
      <div className="bg-white shadow sm:rounded-lg p-6">
        <GuideForm />
      </div>
    </div>
  );
}
