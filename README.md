# Invisalign Center Hyderabad — SEO / PPC website

A Next.js 15 (App Router) marketing site for the Invisalign Center in Hyderabad led by
Dr. Praveen Kurapati. Built for organic search visibility with Google Search campaigns
and Meta campaigns as the second priority.

- **Stack:** Next.js 15, React 19, TypeScript, plain CSS (no CSS framework, no runtime deps
  beyond React — deliberately minimal so it builds reliably on shared hosting)
- **Hosting target:** GoDaddy cPanel, Node.js app (a static export route is also supported)
- **Lead capture:** `public/send.php` — works on cPanel without SMTP or third-party services

## Pages

| Route | Primary keyword | Purpose |
|---|---|---|
| `/` | Invisalign Hyderabad | Main landing page for brand, local and Search campaigns |
| `/invisalign-treatment` | Invisalign Treatment | Process, timeline, wear rules — informational search intent |
| `/invisalign-cost` | Invisalign Cost | Price-intent queries, EMI, strongest conversion page |
| `/before-after` | Invisalign Before & After | Proof and results; strongest cold Meta traffic page |
| `/about-dr-praveen-kurapati` | Best Invisalign Provider | E-E-A-T, clinician credentials, second-opinion traffic |

Exactly one `<h1>` per page, one primary keyword per page, with supporting `<h2>` / `<h3>`
hierarchy and deliberate internal linking between the commercial and informational pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (required before deploying)
npm run build:static   # optional static export into ./out
```

## Where to change things

| What | File |
|---|---|
| Phone, WhatsApp, email, addresses, hours, pricing, tracking IDs | `lib/site.ts` |
| Structured data (schema.org) | `lib/schema.ts` |
| Design tokens, spacing, typography | `app/globals.css` |
| Lead form inbox / webhook | `public/send.php` |
| Page metadata (titles, descriptions, canonicals) | each page's `export const metadata` |
| Sitemap / robots | `public/sitemap.xml`, `public/robots.txt` |

Everything marked `CONFIRM` in `lib/site.ts` must be verified with the clinic before launch.

## Technical SEO included

- Server-rendered / pre-rendered HTML for every route (no client-side-only content)
- Per-page title, meta description, canonical URL, Open Graph and Twitter card
- `Dentist` / `MedicalBusiness`, `Physician`, `WebSite`, `Service`, `MedicalWebPage`,
  `FAQPage`, `BreadcrumbList` structured data
- Visible breadcrumbs on subpages, mirrored in `BreadcrumbList` schema
- Descriptive `alt` text on every image, explicit `width`/`height` to avoid layout shift
- One canonical host (non-www HTTPS) enforced in `.htaccess`, with gzip and long-lived
  asset caching
- Mobile sticky call / WhatsApp / book bar for paid-traffic conversion
- Event hooks for `generate_lead`, `Lead`, `whatsapp_click`, `Contact` once tracking IDs
  are set

## Deliberate content rules

- No invented prices, awards, patient counts or credentials. Indicative figures are
  labelled as indicative and flagged for confirmation.
- No fabricated before/after photographs. The result panels are clearly labelled
  illustrative until consented case images are supplied.
- No stock face is used to represent Dr. Praveen Kurapati.
- Educational content, not a diagnosis; every page carries the appropriate caveat.

See `DEPLOY-GODADDY.md` for the deployment steps and the pre-launch checklist.
