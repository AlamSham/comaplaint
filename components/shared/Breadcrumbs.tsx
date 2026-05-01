import Link from 'next/link';
import { BreadcrumbItem, createBreadcrumbJsonLd } from '@/lib/seo';
import { JsonLd } from '@/components/shared/JsonLd';

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <JsonLd data={createBreadcrumbJsonLd(items)} />
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-gray-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="text-gray-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-gray-700">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
