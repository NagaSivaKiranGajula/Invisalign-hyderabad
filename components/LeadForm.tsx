'use client';

import { useState, useEffect } from 'react';
import { site, whatsappLink } from '@/lib/site';

type Props = {
  id?: string;
  heading?: string;
  subheading?: string;
  compact?: boolean;
};

export default function LeadForm({
  id = 'book',
  heading = 'Book your Invisalign consultation in Hyderabad',
  subheading = 'Share your details and our Invisalign team will call you back to arrange a smile assessment and digital scan.',
  compact = false,
}: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [message, setMessage] = useState('');
  const [source, setSource] = useState('direct');
  const [page, setPage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm =
      params.get('utm_source') ||
      params.get('gclid') ||
      params.get('fbclid') ||
      params.get('source');
    if (utm) setSource(utm.slice(0, 60));
    setPage(window.location.pathname);
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set('page', page);
    data.set('source', source);
    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/send.php', { method: 'POST', body: data });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus('ok');
        setMessage(json.message || 'Thank you. Our team will call you shortly.');
        form.reset();
        const w = window as unknown as { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void };
        w.gtag?.('event', 'generate_lead', { event_category: 'invisalign' });
        w.fbq?.('track', 'Lead');
      } else {
        setStatus('err');
        setMessage(json.error || 'Something went wrong. Please call us instead.');
      }
    } catch {
      setStatus('err');
      setMessage('We could not send the form. Please call or WhatsApp us instead.');
    }
  }

  return (
    <div className={compact ? '' : 'form-card'} id={id}>
      <h2>{heading}</h2>
      <p>{subheading}</p>

      <form onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <div className="field">
            <label htmlFor={`${id}-name`}>Full name*</label>
            <input id={`${id}-name`} name="name" type="text" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor={`${id}-phone`}>Mobile number*</label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="10-digit mobile"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor={`${id}-email`}>Email (optional)</label>
            <input id={`${id}-email`} name="email" type="email" autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor={`${id}-city`}>Your area / city</label>
            <input id={`${id}-city`} name="city" type="text" placeholder="e.g. Kukatpally" />
          </div>
        </div>

        <div className="field">
          <label htmlFor={`${id}-concern`}>What would you like corrected?</label>
          <select id={`${id}-concern`} name="concern" defaultValue="">
            <option value="">Select an option</option>
            <option>Crooked or crowded teeth</option>
            <option>Gaps between teeth</option>
            <option>Bite problems (overbite, deep bite, open bite)</option>
            <option>Relapse after previous braces</option>
            <option>I want to know the Invisalign cost</option>
            <option>Complex or previously treated case</option>
            <option>Not sure — need advice</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor={`${id}-message`}>Anything else we should know?</label>
          <textarea id={`${id}-message`} name="message" rows={3} />
        </div>

        <div className="hp" aria-hidden="true">
          <label htmlFor={`${id}-company`}>Company</label>
          <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="btn-row">
          <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Request my Invisalign consultation'}
          </button>
          <a
            className="btn btn--wa"
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            onClick={() => {
              const w = window as unknown as { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void };
              w.gtag?.('event', 'whatsapp_click', { event_category: 'invisalign' });
              w.fbq?.('track', 'Contact');
            }}
          >
            WhatsApp us
          </a>
        </div>

        {status !== 'idle' && status !== 'sending' && (
          <div className={`form-status ${status === 'ok' ? 'form-status--ok' : 'form-status--err'}`}>
            {message}
          </div>
        )}

        <p className="form-note">
          We use your details only to contact you about Invisalign treatment at {site.name}. Your
          information is never sold or shared. For urgent queries call{' '}
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>.
        </p>
      </form>
    </div>
  );
}
