/**
 * SINGLE SOURCE OF TRUTH for every business detail on the site.
 * Edit this file to change contact details everywhere at once.
 *
 * Values marked  // CONFIRM  came from public listings and should be verified
 * by the clinic before the site goes live.
 */

export const site = {
  name: 'Invisalign Center Hyderabad',
  shortName: 'Invisalign Center',
  url: 'https://invisalignhyderabadcenter.com',
  locale: 'en_IN',
  tagline: "Hyderabad's Invisalign Centre of Excellence",

  doctor: {
    name: 'Dr. Praveen Kurapati',
    nameFull: 'Dr. Praveen Kurapati (Dr. Praveen Kumar K)',
    qualifications: 'BDS, MDS — Orthodontics & Dentofacial Orthopaedics',
    role: 'Orthodontist & Invisalign Black Diamond Provider',
    experience: '22+',
    invisalignCases: '6,000+',
    // CONFIRM with the clinic before going live
    credentials: [
      'MDS — Orthodontics & Dentofacial Orthopaedics',
      'Invisalign certified since 2019',
      'First Diamond Invisalign Provider from Hyderabad (2021)',
      'First Black Diamond Invisalign Provider in India (2022, 2023, 2024, 2025)',
      'Align Technology faculty — trains other Invisalign providers',
      'Recognised among the highest-volume Invisalign providers in the Asia-Pacific region',
    ],
  },

  // CONFIRM: primary number that should ring for Invisalign enquiries
  phone: '+919441555666',
  phoneDisplay: '9441 555 666',
  whatsapp: '919441555666',
  email: 'info@invisalignhyderabadcenter.com', // CONFIRM

  hours: 'Monday to Sunday, 10:00 AM – 8:00 PM',

  clinics: [
    {
      name: 'KPHB Colony, Kukatpally',
      label: 'Invisalign Center — KPHB',
      address: '15-24-164, KPHB Colony Road No 1, Hyderabad, Telangana',
      phone: '+919441555666',
      phoneDisplay: '9441 555 666',
      mapQuery: 'KPHB Colony Road No 1, Hyderabad, Telangana',
    },
    {
      name: 'Jubilee Hills',
      label: 'Invisalign Center — Jubilee Hills',
      address: '#36, Jubilee Hills Road, Hyderabad, Telangana',
      phone: '+919297971717',
      phoneDisplay: '92979 71717',
      mapQuery: 'Jubilee Hills Road No 36, Hyderabad, Telangana',
    },
    {
      name: 'Banjara Hills (Park Dental Care)',
      label: 'Invisalign Center — Banjara Hills',
      address:
        '8-2-120/112, P/1, Park View Estate Building, Road No 2, Banjara Hills, Hyderabad, Telangana',
      phone: '+919441555666',
      phoneDisplay: '9441 555 666',
      mapQuery: 'Park View Estate, Road No 2, Banjara Hills, Hyderabad, Telangana',
    },
  ],

  /**
   * Indicative Invisalign price bands for Hyderabad.
   * CONFIRM every figure with the clinic — these are shown to patients, and
   * the page labels them as indicative and subject to clinical assessment.
   */
  pricing: [
    {
      tier: 'Invisalign Express / Lite',
      indication: 'Minor crowding, small spacing, mild relapse after braces',
      aligners: 'Up to 14 aligner stages',
      indicative: '₹1,20,000 – ₹1,80,000',
    },
    {
      tier: 'Invisalign Full',
      indication: 'Moderate crowding, rotations, overjet or deep bite correction',
      aligners: 'Unlimited aligners within the treatment plan',
      indicative: '₹2,00,000 – ₹3,20,000',
    },
    {
      tier: 'Invisalign Comprehensive / Complex',
      indication: 'Severe crowding, open bite, extraction or surgical-orthodontic cases',
      aligners: 'Extended plan with refinements and retention',
      indicative: '₹3,00,000 – ₹4,50,000',
    },
  ],

  social: {
    instagram: '', // CONFIRM
    facebook: '', // CONFIRM
    youtube: '', // CONFIRM
    linkedin: 'https://in.linkedin.com/in/dr-praveen-kurapati-77b91411a',
  },

  /**
   * Marketing tags. Paste your IDs and they are injected automatically.
   * Leave blank to inject nothing.
   */
  tracking: {
    ga4: '', // e.g. G-XXXXXXXXXX
    googleAds: '', // e.g. AW-XXXXXXXXX
    metaPixel: '', // e.g. 123456789012345
  },
} as const;

export const whatsappLink = (
  message = "Hi, I'd like to know more about Invisalign treatment at your Hyderabad centre.",
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${site.phone}`;

export const mapEmbed = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapLink = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const nav = [
  { href: '/', label: 'Invisalign Hyderabad' },
  { href: '/invisalign-treatment', label: 'Invisalign Treatment' },
  { href: '/invisalign-cost', label: 'Invisalign Cost' },
  { href: '/before-after', label: 'Before & After' },
  { href: '/about-dr-praveen-kurapati', label: 'About Dr. Praveen' },
];

export const reviewHighlights = [
  {
    quote:
      'Doctor Praveen has been friendly throughout the process and helped me understand the correct Invisalign treatments according to my teeth arrangement. The results are great!',
    author: 'Bittu Kumar',
    context: 'Invisalign patient, verified review',
  },
  {
    quote:
      'I visited for Invisalign treatment and was incredibly impressed with the entire experience. Dr. Praveen and his staff are friendly and professional. My smile improved a lot.',
    author: 'S. Veena',
    context: 'Invisalign patient, verified review',
  },
];
