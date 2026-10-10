# Image credits, licensing and known limitations

## What is on the site now

All three photographs are openly licensed stock images, used under licences that permit
commercial use. Attribution is recorded below as the licence requires.

| Site file | Source / licence | Notes |
|---|---|---|
| `invisalign-aligners-hyderabad.jpg` | Wikimedia Commons — "Invisalign" (CC BY-SA 4.0) | Hero. Tightly cropped to the aligners, brightness/contrast/sharpen adjusted. Shows genuine Invisalign aligners with stocking identifiers visible on the molar area. |
| `invisalign-aligner-macro.jpg` | same source image as above (CC BY-SA 4.0) | Secondary crop, used for section figures. |
| `invisalign-clinic-hyderabad.jpg` | Openverse / rawpixel — "Dental clinic" (CC0 1.0) | Dental operatory, cropped and adjusted. Native resolution 1024×686, so it is never displayed wider than ~1024 px. |
| `og-invisalign-hyderabad.jpg` | Derived from the hero image | 1200×630 social/OG card. |

## Images that were rejected, and why

Inspecting candidates visually rather than relying on captions removed several otherwise
plausible files:

- An "intraoral scanner" photo carrying a visible **Dentsply Sirona** logo and device code —
  a direct competitor brand on an Invisalign site. Rejected.
- Dental handpiece/drill close-ups — read as intimidating, wrong emotional tone for aligner
  treatment. Rejected.
- Files titled "aligner" that actually showed **Hawley retainers** (acrylic and wire), not
  Invisalign aligners. Rejected.
- Auto-generated search results for "smile", "dental clinic" and "Invisalign aligner" that
  resolved to unrelated subjects because those keywords match loosely. Rejected.

## Known limitation — read before launch

Openly licensed stock photography of Invisalign aligners is scarce and, frankly, amateur.
Suitably licensed, professionally shot Invisalign imagery is not available on the free
licence sources, and the hero image is the weakest element on the site. It is serviceable,
not premium.

**Recommended replacements, in priority order:**

1. **Real clinic photography** — each treatment room, the reception, the scanner in use.
   This is the single highest-value swap on the whole site.
2. **Consented patient before/after photographs** — the strongest trust asset a clinic site
   can have. Add them to `public/images/results/` and pass `beforeSrc` / `afterSrc` to the
   `BeforeAfter` component; the illustrative panels are then replaced by real case images.
3. **A clean, high-key product shot of an Invisalign aligner**, ideally with the clinic's own
   branding in frame, for the hero.
4. **A portrait of Dr. Praveen Kurapati** — deliberately not stock-substituted or generated.
   Using a stock or synthetic face for a named clinician would be misleading.

## Licensing obligations

CC BY-SA 4.0 requires attribution and share-alike for derivative versions of the image. If
you keep the hero image, keep this file (or an equivalent credit on a `/credits` page) live
on the site. Replacing these images with the practice's own photography removes the
obligation entirely.

Keep this file updated whenever images are replaced.
