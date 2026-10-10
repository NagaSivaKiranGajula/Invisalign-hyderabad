/**
 * Instagram configuration for the home page social-proof strip.
 *
 * ─── HOW TO GO LIVE ────────────────────────────────────────────────────────
 * 1. Set `handle` and `profileUrl`.
 * 2. Paste up to 6 PUBLIC post or reel permalinks into `posts`.
 *    Embeds only render for public accounts and public posts.
 * 3. Allow Instagram in the Content-Security-Policy on the GoDaddy host — the
 *    embed loads https://www.instagram.com/embed.js and frames
 *    https://www.instagram.com. On cPanel that is a .htaccess header edit.
 *
 * While `posts` is empty the strip renders designed placeholders instead of
 * embeds, so the layout can be reviewed without inventing social proof.
 */
export type InstagramPost = {
  url: string;
  caption?: string;
};

export const instagram: {
  handle: string;
  profileUrl: string;
  posts: InstagramPost[];
  placeholders: { image: string; alt: string; intent: string }[];
} = {
  handle: '',
  profileUrl: '',
  posts: [],
  placeholders: [
    {
      image: '/images/instagram-hero-smile.jpg',
      alt: 'Close-up of a healthy natural smile, used as placeholder artwork for an Instagram tile',
      intent: 'A finished case or smile result',
    },
    {
      image: '/images/instagram-aligner-hold.jpg',
      alt: 'A clear Invisalign aligner held between thumb and forefinger, placeholder artwork',
      intent: 'Aligners and treatment close-ups',
    },
    {
      image: '/images/instagram-clinic-reception.jpg',
      alt: 'Bright orthodontic clinic reception with teal seating, placeholder artwork',
      intent: 'Inside the KPHB and Jubilee Hills clinics',
    },
    {
      image: '/images/instagram-consult-desk.jpg',
      alt: 'Consultation desk with a 3D digital dental arch model on screen, placeholder artwork',
      intent: 'Digital scanning and smile simulation',
    },
    {
      image: '/images/invisalign-treatment-planning.jpg',
      alt: 'Three-dimensional digital dental arch model used in Invisalign planning, placeholder artwork',
      intent: 'Treatment planning walkthroughs',
    },
    {
      image: '/images/invisalign-clinic-treatment-room.jpg',
      alt: 'Treatment room at the Hyderabad Invisalign clinic, placeholder artwork',
      intent: 'Aligner review appointments',
    },
  ],
};
