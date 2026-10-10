# Deploying to GoDaddy cPanel (Node.js app)

This is a Next.js 15 site built for **GoDaddy cPanel shared hosting with Node.js app
support**. It ships a PHP lead handler (`public/send.php`) so the enquiry form works on
cPanel without any third-party service or SMTP configuration.

There are two deployment routes. Use **Route A** unless GoDaddy tells you Node apps are
not available on your plan.

---

## Route A — Node.js app on cPanel (recommended: full Next.js)

### 1. Build it locally first (verify it compiles)

```bash
npm install
npm run build     # must complete with no errors
```

Do not upload until this passes on your machine.

### 2. Upload the project

You do **not** need to upload `node_modules` or `.next`. Upload everything else:

```
app/  components/  lib/  public/  package.json  package-lock.json
next.config.mjs  tsconfig.json  app.js  .htaccess
```

Recommended: create a folder outside `public_html`, e.g. `/home/USERNAME/invisalign-center`,
zip the project, upload it via **cPanel → File Manager → Upload**, then **Extract**.
If a `node_modules` or `.next` folder came along in the zip, delete it after extraction.

### 3. Create the Node.js application

**cPanel → Setup Node.js App → Create Application**

| Setting | Value |
|---|---|
| Node.js version | 20.x (or 22.x — anything ≥ 18.18) |
| Application mode | Production |
| Application root | `invisalign-center` |
| Application URL | your domain (`invisalignhyderabadcenter.com`) |
| Application startup file | `app.js` |

Click **Create**, then **Run NPM Install**.

> If "Application root" must be inside `public_html`, that is fine — but keep the domain's
> document root pointed at this folder, not at a stale `public_html/index.html`.

### 4. Build on the server

Next.js must be compiled on the server. In cPanel's Node.js app screen, open **Terminal**
(or SSH in) and run, from the application root:

```bash
source /home/USERNAME/nodevenv/invisalign-center/20/bin/activate
cd /home/USERNAME/invisalign-center
npm run build
```

Then **Restart** the application in the Node.js App screen.

`app.js` is the Passenger entry point — it boots the Next.js server on the port cPanel
assigns. Do not rename it, or update the startup file setting to match.

### 5. Fix the `.htaccess` placeholders

Open `.htaccess` and replace **every** `USERNAME` with your actual cPanel username. The
paths must be absolute and exact or Passenger will return a 503.

If cPanel's "Setup Node.js App" already generated its own passenger block in `.htaccess`,
**keep theirs** and only merge in the sections marked `SEO` (HTTPS redirect, caching, gzip).

---

## Route B — Static export (fallback: no Node needed)

If GoDaddy cannot run Node apps on your plan, ship a pre-rendered static build instead.
The site loses nothing that matters for SEO or paid traffic — every page is already
pre-rendered to HTML either way — and `send.php` still handles the lead form.

```bash
npm install
npm run build:static     # writes ./out
```

Upload the **contents** of `out/` into `public_html/`. Keep `send.php`, `robots.txt`,
`sitemap.xml` and the `images/` folder at the site root.

Static mode enables `trailingSlash`, so canonical URLs end with `/` (for example
`/invisalign-cost/`). If you switch between routes, update the canonical tags and
`public/sitemap.xml` to match — mixed trailing slashes create duplicate-URL problems.

---

## 6. Confirm the lead form works

Open the site, submit a test enquiry, then check:

- **Email** arrives at the inbox in `public/send.php` → `$NOTIFY_TO`
- **Backup log**: `public/leads.csv` gained a row

If `mail()` is blocked on your host, either ask GoDaddy to enable it, or set
`$WEBHOOK_URL` in `send.php` to a Zapier / Make / CRM webhook so leads are pushed there.
The WhatsApp button works regardless and is often the highest-converting path on mobile.

---

## 6b. Instagram strip (home page)

The home page carries a social-proof strip. It currently renders designed
placeholders, because the clinic's Instagram account has not been confirmed.

To switch it on:
1. In `lib/instagram.ts` set `handle`, `profileUrl`, and paste up to 6 public
   post or reel permalinks into `posts`. Embeds only work for public accounts
   and public posts.
2. Allow Instagram in the Content-Security-Policy for the host. If you add a CSP
   via `.htaccess`, include `https://www.instagram.com` in BOTH `script-src`
   (for embed.js) and `frame-src` (for the embed frame). Without this the embeds
   are blocked and the tiles stay blank.
3. Redeploy.

No layout change is needed — same tiles, same grid.

Note: every embed adds third-party script weight, so keep the count modest if
Core Web Vitals matter to your paid campaigns.

## 7. Before you go live — checklist

- [ ] **Confirm every placeholder** marked `CONFIRM` in `lib/site.ts`: phone numbers,
      email inbox, clinic addresses, the `6,000+` case figure, and the indicative
      price bands in `site.pricing`.
- [ ] Replace the contact inbox in `public/send.php` (`$NOTIFY_TO`).
- [ ] Add marketing IDs in `lib/site.ts` → `site.tracking` (GA4, Google Ads, Meta Pixel).
      Analytics and pixel scripts are injected only when an ID is present.
- [ ] Replace stock imagery with the practice's own photography — see
      `public/images/CREDITS.md`.
- [ ] Replace the illustrative before/after panels with consented patient photographs.
- [ ] Verify the phone number in the sticky mobile bar rings the right desk for
      Invisalign enquiries.
- [ ] Submit `https://invisalignhyderabadcenter.com/sitemap.xml` in Google Search Console.

---

## 8. SEO / Google Ads setup notes

- Every page has exactly one `<h1>` and a single primary keyword target.
- Structured data is emitted per page: `Dentist`/`MedicalBusiness`, `Physician`,
  `FAQPage`, `BreadcrumbList`, `Service`, `MedicalWebPage`, `WebSite`.
- Validate with Google's Rich Results Test after the domain is live, then
  request indexing in Search Console.
- Google Ads: point campaigns at `/` for brand and local terms, `/invisalign-cost`
  for price-intent keywords, and `/invisalign-treatment` for informational queries.
  The sticky call/WhatsApp bar and the in-page form fire `generate_lead`, `Lead`,
  `whatsapp_click` and `Contact` events once tracking IDs are set.
- Meta campaigns: `/before-after` is the strongest cold-traffic landing page,
  `/invisalign-cost` the strongest retargeting page.
- Keep one canonical host: `https://invisalignhyderabadcenter.com` (non-www, HTTPS).
  The `.htaccess` in this project enforces that.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| 503 / "Passenger" error page | `.htaccess` paths still contain `USERNAME`, or the Node.js version path is wrong |
| Blank page, no error | Run `npm run build` on the server; `.next` is missing |
| Form returns "could not send" | `mail()` disabled — set `$WEBHOOK_URL`, or ask GoDaddy to enable mail |
| Fonts not loading | Google Fonts is blocked by a CSP — add `fonts.googleapis.com` / `fonts.gstatic.com` |
| Changes not appearing | Next.js caches; run `npm run build` again and **Restart** the app |
