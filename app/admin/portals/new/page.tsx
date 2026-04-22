import PortalForm from '@/components/admin/PortalForm';

export default function NewPortalPage() {
  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add New Portal</h1>
      <div className="bg-white shadow sm:rounded-lg p-6">
        <PortalForm />
      </div>
    </div>
  );
}
