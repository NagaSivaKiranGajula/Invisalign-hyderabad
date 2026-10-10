import Link from 'next/link';
import { site, telLink, whatsappLink } from '@/lib/site';

export const metadata = {
  title: 'Page not found',
  description: 'The page you were looking for does not exist on this site.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap center">
        <p className="eyebrow">404</p>
        <h1>That page does not exist</h1>
        <p className="lead" style={{ margin: '0 auto 26px' }}>
          The link may be old or mistyped. Here is where Invisalign patients usually need to go.
        </p>
        <div className="btn-row" style={{ justifyContent: 'center' }}>
          <Link className="btn btn--primary" href="/">
            Invisalign Hyderabad home
          </Link>
          <Link className="btn btn--ghost" href="/invisalign-treatment">
            Invisalign treatment process
          </Link>
          <Link className="btn btn--ghost" href="/invisalign-cost">
            Invisalign cost
          </Link>
          <Link className="btn btn--ghost" href="/before-after">
            Before &amp; after
          </Link>
        </div>
        <p className="small" style={{ marginTop: 26 }}>
          Or call <a href={telLink}>{site.phoneDisplay}</a> ·{' '}
          <a href={whatsappLink()} target="_blank" rel="noopener">
            WhatsApp the clinic
          </a>
        </p>
      </div>
    </section>
  );
}
