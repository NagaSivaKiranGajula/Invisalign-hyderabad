'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { site, nav, telLink, whatsappLink } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap">
          <span>
            Three Invisalign clinics in Hyderabad · {site.hours}
          </span>
          <span>
            <a href={telLink}>Call {site.phoneDisplay}</a>
          </span>
        </div>
      </div>

      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            IC
          </span>
          <span className="brand-text">
            <span className="brand-name">Invisalign Center</span>
            <span className="brand-sub">Hyderabad</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a className="btn btn--ghost btn--sm" href={telLink}>
            {site.phoneDisplay}
          </a>
          <a className="btn btn--primary btn--sm" href="#book">
            Book consultation
          </a>
        </div>

        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <div className="wrap mobile-nav" id="mobile-nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href="#book">Book consultation</a>
          <a href={whatsappLink()} target="_blank" rel="noopener">
            WhatsApp {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
