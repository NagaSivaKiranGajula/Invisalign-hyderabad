import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { site } from '@/lib/site';

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const full = [{ name: 'Home', href: '/' }, ...trail];

  return (
    <>
      <JsonLd data={breadcrumbSchema(full)} />
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <ol>
          {full.map((crumb, index) => (
            <li key={crumb.href}>
              {index === full.length - 1 ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.href}>{crumb.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <span hidden>{site.name}</span>
    </>
  );
}
