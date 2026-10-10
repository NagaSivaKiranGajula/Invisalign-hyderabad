import { site, telLink, whatsappLink } from '@/lib/site';

/** Mobile-only fixed action bar — the single biggest conversion lever on paid traffic. */
export default function StickyCta() {
  return (
    <div className="sticky-cta" role="navigation" aria-label="Quick contact">
      <a href={telLink} aria-label={`Call ${site.phoneDisplay}`}>
        Call
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
      <a className="is-primary" href="#book">
        Book consultation
      </a>
    </div>
  );
}
