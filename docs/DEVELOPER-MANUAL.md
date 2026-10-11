# Developer Manual — Invisalign Center Hyderabad

Everything a development team needs to understand, run, change, and ship this
site. Written against the committed code, not from memory. If something here
disagrees with the repository, the repository wins and this document is out of
date — please fix it.

Last updated: commit `14b92c7` (main)

---

## 1. Purpose and audience

A marketing site for an Invisalign clinic in Hyderabad, built to win organic
search traffic and to convert paid Google and Meta traffic into booked
consultations. It is a five-page, content-led site: the whole product is
persuasively organised medical copy with clean technical SEO underneath.

Read this if you are: picking up maintenance, deploying to the client's host,
changing content or pricing, adding a page, or migrating off the current stack.

---

## 2. What exists, and where

There are **two separate artefacts**. Do not confuse them.

| Artefact | Stack | Host | Status |
|---|---|---|---|
| `invisalign-center` (this repo) | Next.js 15 + TypeScript + plain CSS | Client's GoDaddy cPanel | **Production.** This is the site that ships. |
| Higgsfield review copy | React 19 + TanStack Start on Cloudflare | `invisalign-hyderabad.higgsfield.app` | Review/preview only. Separate repo, de-branded. See §14. |

The review copy exists purely so the client could look at the design in a
browser. It is not maintained in lockstep and must not be treated as the source
of truth.

---

## 3. Stack and dependencies

Deliberately minimal — shared hosting is the constraint.

- **Next.js 15.5.27** (App Router), **React 19**, **TypeScript 5**
- **Plain CSS.** No Tailwind, no CSS-in-JS, no component library
- Runtime dependencies: `next`, `react`, `react-dom`. That is the entire list
- Dev dependencies: `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
- Node **>= 18.18.0** (`engines` in package.json)

Why so bare: the site deploys to cPanel shared hosting, where a large dependency
tree is a support burden and native image tooling is often unavailable.
`next/image` optimisation is therefore switched off (see §7).

**Version note:** 15.1.6 shipped with a security advisory; the project was pinned
forward to **15.5.27**. Keep it patched.

### Scripts

```bash
npm run dev            # local dev server on :3000
npm run build          # production build (Node/SSR mode)
npm start              # serve the production build
npm run build:static   # STATIC_EXPORT=true next build -> ./out
npm run lint           # next lint
```

---

## 4. Repository map

```
app/                      routes + global stylesheet
  layout.tsx              root shell: <html>, site-wide metadata, fonts, chrome
  globals.css             the entire design system (~23 KB, 103 classes)
  page.tsx                /                          (home)
  invisalign-treatment/   /invisalign-treatment
  invisalign-cost/        /invisalign-cost
  before-after/           /before-after
  about-dr-praveen-kurapati/  /about-dr-praveen-kurapati
  not-found.tsx           404
components/               10 components, no external UI deps
lib/
  site.ts                 single source of truth for all business data
  schema.ts               JSON-LD builders
  instagram.ts            Instagram strip configuration
public/
  send.php                lead handler (PHP, cPanel-native)
  favicon.svg
  robots.txt
  sitemap.xml
  images/                 15 photographs + CREDITS.md
app.js                    Passenger entry point for cPanel Node.js hosting
.htaccess                 Apache config for cPanel (HTTPS, cache, gzip)
next.config.mjs           dual-mode build config
DEPLOY-GODADDY.md         deployment runbook + pre-launch checklist
README.md                 orientation
```

---

## 5. Local development

```bash
git clone <repo>
cd invisalign-center
npm install
npm run dev            # http://localhost:3000
```

Before pushing any change:

```bash
npx tsc --noEmit       # typecheck — must be clean
npm run build          # production build — must pass
npm run build:static   # static export — must pass
```

**Build both modes.** The two modes have different config paths, and a change
that breaks the static export will not be caught by the Node build. This has
already bitten once.

---

## 6. Architecture

### 6.1 Pages

Each route is a self-contained server component. Metadata is exported per page,
so titles and canonicals cannot drift between pages.

| Route | Primary keyword | H1 | H2 | H3 | Words |
|---|---|---|---|---|---|
| `/` | Invisalign Hyderabad | 1 | 9 | 18 | ~2,900 |
| `/invisalign-treatment` | Invisalign Treatment | 1 | 9 | 24 | ~1,430 |
| `/invisalign-cost` | Invisalign Cost | 1 | 9 | 24 | ~1,130 |
| `/before-after` | Invisalign Before & After | 1 | 5 | 10 | ~790 |
| `/about-dr-praveen-kurapati` | Best Invisalign Provider | 1 | 6 | 11 | ~820 |

One `<h1>` per page is a hard rule. "Invisalign Center" is carried in H2s and
navigation rather than competing with the page H1s.

### 6.2 Data layer — `lib/site.ts`

Every business fact lives here. Changing a phone number, an address, the review
copy or the price bands is a one-file edit.

Exports: `site`, `whatsappLink()`, `telLink`, `mapEmbed()`, `mapLink()`, `nav`,
`reviewHighlights`.

`site` contains: clinic identity, doctor credentials, phone/WhatsApp/email,
hours, three clinic locations, `pricing` bands, social URLs, and `tracking`
(GA4 / Google Ads / Meta Pixel IDs, all empty by default).

```ts
export const site = {
  doctor: { name, qualifications, experience, alignerCases, credentials[] },
  clinics: [{ name, label, address, phone, phoneDisplay, mapQuery }],
  pricing: [{ tier, indication, aligners, indicative }],
  tracking: { ga4: '', googleAds: '', metaPixel: '' },
}
```

**`CONFIRM` markers** flag values sourced from public listings that the clinic
must verify before launch. See §13.

### 6.3 Schema layer — `lib/schema.ts`

Builders returning JSON-LD objects for the `JsonLd` component:
`organizationSchema()`, `doctorSchema()`, `websiteSchema()`,
`medicalWebPageSchema()`, `serviceSchema()`, `faqSchema()`, `breadcrumbSchema()`.

Types emitted: `Dentist` + `MedicalBusiness`, `Physician`, `WebSite`, `Service`,
`MedicalWebPage`, `FAQPage`, `BreadcrumbList`.

### 6.4 Components

| Component | Client? | Responsibility |
|---|---|---|
| `Header` | yes | Sticky nav, mobile menu, call CTA. Closes menu on route change |
| `Footer` | no | Nav, popular searches, all three clinic addresses, legal + attribution |
| `StickyCta` | no | Mobile-only fixed call/WhatsApp/book bar |
| `LeadForm` | yes | Enquiry form; posts to `/send.php`; fires analytics events |
| `FaqSection` | no | FAQ accordion (`<details>`) + `FAQPage` schema |
| `BeforeAfter` | yes | Draggable before/after comparison; labelled placeholder panels |
| `Breadcrumbs` | no | Visible trail + `BreadcrumbList` schema |
| `JsonLd` | no | Renders a JSON-LD script, escaping `<` and `>` |
| `Analytics` | no | Injects GA4 / Google Ads / Meta Pixel only when an ID is set |
| `InstagramStrip` | yes | Instagram social proof; embeds or labelled placeholders |

Only four components are client components. Keep it that way — server rendering
is the SEO advantage.

### 6.5 Page composition and image counts

Home renders **18 `<img>` elements**: 10 in source (hero, three figure images,
five process-step images, one clinic card image that maps to three) plus six
Instagram tiles, alongside one Google Maps `<iframe>`.

Subpages render 2 to 3 images each: their existing figures plus one full-width
"band" image inserted directly after the hero.

---

## 7. Next.js configuration

`next.config.mjs` supports two build modes from one config:

```js
const isStaticExport = process.env.STATIC_EXPORT === 'true';
// images.unoptimized: true   <- always, to avoid native tooling on shared hosting
// output: 'export', trailingSlash: true   <- only in static export
```

Always `unoptimized: true`. The static export switches `trailingSlash` on, which
means **canonical URLs and `sitemap.xml` differ between the two modes**. If you
switch deployment routes, reconcile them — mixed trailing slashes create
duplicate-URL problems.

---

## 8. Design system

Tokens live at the top of `app/globals.css`. They were derived from the clinic's
logo and renamed by role (`--brand*`, `--accent`) rather than by hue, so nobody
later wonders why a rose variable is called teal.

### Palette

| Token | Value | Role |
|---|---|---|
| `--ink` | `#241a19` | Headings, dark bands |
| `--ink-2` | `#4a3b39` | Body copy |
| `--ink-3` | `#7d6a67` | Muted text, captions |
| `--brand` | `#99605f` | Primary action, clinical signature |
| `--brand-dark` | `#7d4640` | Hover, gradient anchor |
| `--brand-soft` | `#f9f0ee` | Tinted panels |
| `--brand-line` | `#e8d5d1` | Hairlines |
| `--accent` | `#3b3c38` | Recognition and evidence only |
| `--accent-soft` | `#f1edec` | Accent backgrounds |
| `--paper` / `--mist` | `#ffffff` / `#faf7f6` | Surfaces |
| `--line` | `#ece1de` | Borders |

Contrast: white on `--brand` is **5.01:1** (passes WCAG AA for normal text);
white on `--brand-dark` is **7.4:1**. Do not lighten `--brand` without
re-checking contrast.

### Type

- Display: **Fraunces** (variable serif) for h1–h3 and the wordmark
- Body: **Inter** for everything else

Both load from Google Fonts via `<link>` in `app/layout.tsx` — deliberately not
`next/font`, so the build has no network dependency on font fetching. If you add
a Content-Security-Policy, allow `fonts.googleapis.com` and `fonts.gstatic.com`.

### Utilities

`globals.css` defines 103 classes: layout (`.wrap`, `.section`, `.grid*`,
`.split`), components (`.card`, `.step`, `.table-scroll`, `.faq`, `.form-card`,
`.ba-*`, `.ig-*`), chrome (`.btn-*`, `.site-header`, `.site-footer`,
`.sticky-cta`), and helpers (`.eyebrow`, `.lead`, `.pill`, `.illustrative`).

Motion is gated behind `prefers-reduced-motion` in three places. Anything you add
must respect it, and nothing may sit at `opacity: 0` waiting for an observer —
full-page screenshots and crawlers must see every section.

---

## 9. Assets

15 photographs, **1,797 KB total**, all lazy-loaded except the home hero.

| File | Size | Used for |
|---|---|---|
| `instagram-hero-smile.jpg` | 1600×900 | Home hero, Instagram tile |
| `invisalign-aligners-hero.jpg` | 1920×1080 | Cost teaser, before/after band |
| `invisalign-clinic-hyderabad.jpg` | 1024×576 | Booking section, cost page, About hero |
| `invisalign-clinic-treatment-room.jpg` | 1336×751 | Treatment page, clinic card |
| `invisalign-treatment-planning.jpg` | 1336×751 | What-is-Invisalign, complex cases |
| `invisalign-aligner-macro.jpg` | 1336×751 | Retention figure, before/after figure |
| `step-1-scan.jpg` … `step-5-retainer.jpg` | 1336×751 | The five process stages |
| `instagram-aligner-hold.jpg` | 1336×751 | Instagram tile |
| `instagram-clinic-reception.jpg` | 1336×751 | Clinic cards, About band |
| `instagram-consult-desk.jpg` | 1336×751 | Cost band, Instagram tile |
| `og-invisalign-hyderabad.jpg` | 1200×630 | Social share card |

**Every `<img>` carries explicit `width` and `height` matching the real file** to
prevent layout shift. If you replace an image at a different size, update the
attributes in every page that uses it.

### Provenance and licensing

Read `public/images/CREDITS.md`. In short: the photographs are AI-generated
clinical stills plus one CC0 stock operatory shot. The composite social card is
drawn in code (Pillow), not photographed.

### The imagery colour decision

The photographs were generated in a **teal** palette, before the brand palette
was changed to the logo's terracotta. They could not be hue-shifted to rose
without artefacts (a teal wireframe became alarming red on dental scans; skin
and gloved hands turned pink). Instead, strongly-coloured cool pixels were
**desaturated to neutral clinical grey**, and two bare-hand shots were left
completely untouched so skin stays natural.

Consequence: **the brand colour lives in the UI layer, not in the photography.**
If the client wants rose photography, the affected images must be regenerated —
attempting it in code will produce artefacts.

---

## 10. Lead capture — `public/send.php`

Server-side lead handler written for cPanel. No SMTP configuration and no
third-party service required.

### Contract

**Method:** `POST`, form-encoded.
**Endpoint:** `/send.php`

| Field | Required | Notes |
|---|---|---|
| `name` | yes | min 2 chars |
| `phone` | yes | Indian mobile; accepts `+91`, `0` prefix; normalised to `+91XXXXXXXXXX` |
| `email` | no | validated if present |
| `city` | no | |
| `concern` | no | select value |
| `message` | no | trimmed, line breaks collapsed |
| `company` | no | **honeypot** — non-empty means a bot; returns success and discards |
| `page` | no | source page path |
| `source` | no | `utm_source` / `gclid` / `fbclid`, captured client-side |

**Responses:** JSON always. `405` wrong method, `403` disallowed origin, `422`
validation failure with a human-readable `error`, `200 {ok:true}` on success.

### Configuration knobs

```php
$NOTIFY_TO     = 'info@invisalignhyderabadcenter.com';   // CONFIRM
$NOTIFY_FROM   = 'no-reply@invisalignhyderabadcenter.com';
$WEBHOOK_URL   = '';   // optional CRM/Zapier webhook
$ALLOWED_HOSTS = [...];  // origin allowlist
```

### Behaviour

1. Origin check, then honeypot check
2. Field sanitisation and phone/email validation
3. Appends a row to `public/leads.csv` (backup — **gitignored, contains personal data**)
4. Emails a plain-text summary via PHP `mail()`
5. Optionally POSTs JSON to `$WEBHOOK_URL`
6. Returns JSON

If `mail()` is disabled by the host, set `$WEBHOOK_URL` or ask the host to enable
mail. The WhatsApp button in the form works regardless.

**Testing:** submit the form on the live site, confirm the email arrives and that
`leads.csv` gains a row. `leads.csv` must never be served publicly — keep the
`.htaccess` deny rule in place.

---

## 11. SEO implementation

- Per-page `metadata` export: unique title, description, canonical, OpenGraph
- Canonicals are absolute and must match the deployed host exactly
- `public/sitemap.xml` — five URLs, priorities 1.0/0.9/0.9/0.8/0.8. **Keep in
  sync with the route files**; a stale sitemap actively harms crawling
- `public/robots.txt` — allows all, disallows `send.php` and `leads.csv`
- JSON-LD via the `JsonLd` component, on the page it describes
- `.htaccess` enforces HTTPS and non-www canonicalisation with a 301

### Audit baseline

Re-verify on every significant change: one `<h1>` per page, keyword present in
title + h1 + first paragraph + description, alt text on every image, no "click
here" link text, ≥200 words of visible content per page, labelled form inputs,
no dead `#fragment` links, absolute `og:image`.

### Internal linking

Every page links to at least two others, and every page links to the booking
section. Preserve that when adding pages.

---

## 12. Analytics and conversion tracking

IDs go in `lib/site.ts` → `site.tracking`. The `Analytics` component injects
nothing while they are blank, so the site ships dark by default.

| Key | Purpose |
|---|---|
| `ga4` | GA4 measurement ID, `G-XXXXXXXXXX` |
| `googleAds` | Google Ads conversion ID, `AW-XXXXXXXXX` |
| `metaPixel` | Meta Pixel ID |

`LeadForm` fires `generate_lead` (gtag) and `Lead` (fbq) on success, and
`whatsapp_click` / `Contact` on the WhatsApp CTA. Verify in Tag Assistant and the
Meta Events Manager after setting IDs.

Suggested campaign routing: `/` for brand and local terms,
`/invisalign-cost` for price intent, `/invisalign-treatment` for informational
queries, `/before-after` for cold Meta traffic.

---

## 13. Content governance

### Must be confirmed before launch

Everything marked `CONFIRM` in `lib/site.ts`:

- Primary Invisalign phone number
- Lead notification inbox
- The three clinic addresses and their individual phone numbers
- The **6,000+ case figure** (public listings variously claim 2,000 / 3,000 / 6,000)
- Black Diamond provider years (2022–2025)
- The indicative **price bands** — these are shown to patients

### Claims policy

The site states educational information, not diagnosis, and carries that caveat.
Do not add: guaranteed outcomes, absolute superlatives, specific patient results,
or before/after imagery that is not a consented, documented patient photograph.

### Trademark

"Invisalign" is a registered trademark of Align Technology. The footer carries
attribution and states the clinic is an independently operated provider. The
clinic is a licensed provider; keep that framing intact.

---

## 14. The Higgsfield review copy

A second, **de-branded** build for design review at
`invisalign-hyderabad.higgsfield.app` (separate repo, React 19 + TanStack Start).

Why de-branded: that platform's automated IP scan blocks content reproducing the
"Invisalign" trademark for commercial use, and it blocked deployment twice. The
client chose to keep a generic preview for review rather than lose the live URL,
so the review copy says "clear aligners" and "Aligner Center", and two of its
routes are renamed.

Consequences to remember:

- The preview is **not** the production copy. Never port content from it back.
- It is auth-gated, so anonymous requests and crawlers get `401`.
- Any change approved in the preview must be applied here, and vice versa.

---

## 15. Deployment

Full runbook in `DEPLOY-GODADDY.md`. Summary:

**Route A — Node.js app (preferred).** Upload the project outside `public_html`,
create a Node.js app in cPanel (Node 20, startup file `app.js`), run NPM install,
run `npm run build` on the server, restart. **Replace every `USERNAME`
placeholder in `.htaccess`** or Passenger returns 503.

**Route B — static export.** `npm run build:static`, upload `out/` to
`public_html`. Works with no Node at all; `send.php` still handles leads.

**Order of operations matters:** commit and push everything before packaging, and
verify the push actually succeeded. A silent push failure ships stale code.

---

## 16. Maintenance runbook

| Task | Do this |
|---|---|
| Change a phone number or address | `lib/site.ts`, then rebuild |
| Update prices | `site.pricing` in `lib/site.ts` |
| Add a page | New `app/<slug>/page.tsx`, add to `nav` in `lib/site.ts`, add to `public/sitemap.xml`, link it from at least two pages |
| Swap an image | Drop it in `public/images/`, update `width`/`height` in every page using it, update `CREDITS.md` |
| Turn on analytics | Fill `site.tracking` |
| Enable the Instagram feed | `lib/instagram.ts` + the image host's CSP — see §17 |
| Change palette | Edit the `:root` tokens, then re-check contrast before shipping |
| Publish real before/after photos | Add files, pass `beforeSrc` / `afterSrc` to `BeforeAfter` |

---

## 17. The Instagram strip

`components/InstagramStrip.tsx` + `lib/instagram.ts`.

While `instagram.posts` is empty it renders six designed tiles carrying a visible
**Placeholder** badge and a line naming what each slot is for. It deliberately
contains **no invented captions and no fabricated engagement numbers** — fake
social proof on a clinic site is a credibility and compliance risk.

To go live:

1. Set `handle`, `profileUrl`, and up to 6 **public** post or reel permalinks in
   `lib/instagram.ts`
2. Allow Instagram in the host Content-Security-Policy: `https://www.instagram.com`
   in **both** `script-src` (for `embed.js`) and `frame-src` (for the embed frame)
3. Redeploy — no layout change

Embeds add third-party script weight. Keep the count modest.

---

## 18. Known gaps and technical debt

Honest list, roughly in priority order.

1. **Unconfirmed business data.** Phone, inbox, addresses, case figure and price
   bands all await clinic verification. This is the top launch blocker.
2. **No real patient photography.** Before/after panels are labelled
   placeholders; the site's strongest trust asset is missing.
3. **Photography is neutral grey**, not brand rose (§9). Regeneration is the only
   clean fix.
4. **Instagram is placeholders**, not live embeds (§17).
5. **Favicon and palette were derived from a 116×120 logo.** Ask for a vector or
   high-resolution version and re-derive.
6. **No analytics IDs** configured (§12).
7. **`send.php` depends on `mail()`** being enabled by the host.
8. **No automated tests and no CI.** The manual verification in §5 is the gate
   today. Adding a GitHub Action running typecheck plus both builds is the single
   highest-value engineering task.
9. **Duplicate H2 intent on each page** — the booking section heading and the
   lead form heading both express "book". Worth tightening for SEO.
10. **Em dashes throughout the copy** (~66). A house style preference; some
    editorial guidelines prohibit them.
11. **Eyebrow labels exceed a typical density budget** on the home page.
12. **`leads.csv` grows unbounded** and is not rotated. It also contains personal
    data, so retention and access should be a conscious decision.
13. **No accessibility audit has been run.** Focus styles, landmarks, form
    labelling and colour contrast were handled deliberately, but nothing has been
    tested against a screen reader or axe.

---

## 19. Change log

| Change | Notes |
|---|---|
| Initial build | Five SEO pages, plain CSS, Next.js 15 |
| Image enrichment | 10 new visuals, hero photograph, process-step images, clinic photo headers, subpage bands |
| Instagram strip | Placeholders + embed path, no fabricated social proof |
| Branding pass | Generic "clear aligner" → "Invisalign aligners" (33 mentions) |
| Palette swap | Teal → logo-derived terracotta; tokens renamed by role; contrast verified |
| Imagery neutralisation | Cool tones desaturated to clinical grey; two images reverted untouched |
| Repo initialised | 51 files, secrets scanned, deps and scratch excluded |
