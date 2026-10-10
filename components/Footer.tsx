import Link from 'next/link';
import { site, nav, telLink, whatsappLink, mapLink } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h3>{site.name}</h3>
            <p>
              An Invisalign-focused orthodontic centre in Hyderabad led by {site.doctor.name},{' '}
              {site.doctor.qualifications}. Black Diamond Invisalign Provider with{' '}
              {site.doctor.invisalignCases} Invisalign aligner cases completed.
            </p>
            <p className="small" style={{ color: '#7fa3a1' }}>
              {site.hours}
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer-list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Popular searches</h4>
            <ul className="footer-list">
              <li>
                <Link href="/invisalign-cost">Invisalign cost in Hyderabad</Link>
              </li>
              <li>
                <Link href="/invisalign-treatment">How Invisalign treatment works</Link>
              </li>
              <li>
                <Link href="/before-after">Invisalign before and after</Link>
              </li>
              <li>
                <Link href="/about-dr-praveen-kurapati">
                  Best Invisalign provider in Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/invisalign-treatment#candidates">Are you a candidate?</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Our clinics</h4>
            <ul className="footer-list">
              {site.clinics.map((clinic) => (
                <li key={clinic.name}>
                  <strong style={{ color: '#d9e6e5' }}>{clinic.name}</strong>
                  <br />
                  <span className="small" style={{ color: '#7fa3a1' }}>
                    {clinic.address}
                  </span>
                  <br />
                  <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>{' '}
                  <a href={mapLink(clinic.mapQuery)} target="_blank" rel="noopener">
                    Map
                  </a>
                </li>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: 14 }}>
              <a className="btn btn--light btn--sm" href={telLink}>
                Call now
              </a>
              <a
                className="btn btn--wa btn--sm"
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.name}. All rights reserved. Invisalign® is a registered trademark of
            Align Technology, Inc. This is an independently operated Invisalign provider clinic.
          </span>
          <span>
            Content reviewed by {site.doctor.name}, {site.doctor.qualifications}. Information on
            this site is educational and is not a substitute for an in-person clinical assessment.
          </span>
        </div>
      </div>
    </footer>
  );
}
