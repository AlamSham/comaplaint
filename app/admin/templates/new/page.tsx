import TemplateForm from '@/components/admin/TemplateForm';

export default function NewTemplatePage() {
  return (
    <div className="px-4 sm:px-0">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Template</h1>
      <div className="bg-white shadow sm:rounded-lg p-6">
        <TemplateForm />
      </div>
    </div>
  );
}
