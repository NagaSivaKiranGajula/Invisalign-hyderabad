import { site, mapLink } from '@/lib/site';

const ORG_ID = `${site.url}/#organization`;
const DOCTOR_ID = `${site.url}/#dr-praveen-kurapati`;
const WEBSITE_ID = `${site.url}/#website`;

/** Dentist / medical organisation with all three locations. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalBusiness'],
    '@id': ORG_ID,
    name: site.name,
    alternateName: 'Invisalign Center in Hyderabad',
    url: site.url,
    description:
      'Invisalign Center in Hyderabad led by Dr. Praveen Kurapati, an Invisalign Black Diamond Provider with over 6,000 Invisalign aligner cases.',
    email: site.email,
    telephone: site.phone,
    medicalSpecialty: 'Orthodontic',
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Debit Card, EMI',
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'State', name: 'Telangana' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    founder: { '@id': DOCTOR_ID },
    employee: { '@id': DOCTOR_ID },
    sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook, site.social.youtube].filter(
      Boolean,
    ),
    location: site.clinics.map((clinic) => ({
      '@type': 'Place',
      name: clinic.label,
      address: {
        '@type': 'PostalAddress',
        streetAddress: clinic.address,
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      telephone: clinic.phone,
      hasMap: mapLink(clinic.mapQuery),
    })),
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: 'Invisalign aligner treatment',
          procedureType: 'https://schema.org/NoninvasiveProcedure',
        },
      },
    ],
  };
}

/** The treating orthodontist as a Person / Physician. */
export function doctorSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Person', 'Physician'],
    '@id': DOCTOR_ID,
    name: site.doctor.name,
    alternateName: 'Dr. Praveen Kumar K',
    jobTitle: site.doctor.role,
    medicalSpecialty: 'Orthodontic',
    honorificPrefix: 'Dr.',
    description:
      'Dr. Praveen Kurapati is an MDS orthodontist in Hyderabad and an Invisalign Black Diamond Provider, recognised among the highest-volume Invisalign providers in the Asia-Pacific region.',
    worksFor: { '@id': ORG_ID },
    knowsAbout: [
      'Invisalign',
      'Invisalign aligner therapy',
      'Orthodontics',
      'Complex Invisalign aligner cases',
      'Dentofacial orthopaedics',
    ],
    hasCredential: site.doctor.credentials.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c,
    })),
    sameAs: [site.social.linkedin].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

export type FaqItem = { q: string; a: string };

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: 'Invisalign aligner orthodontic treatment',
    url: `${site.url}${opts.path}`,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'City', name: 'Hyderabad' },
  };
}

export function medicalWebPageSchema(opts: {
  path: string;
  title: string;
  description: string;
  lastReviewed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    url: `${site.url}${opts.path}`,
    name: opts.title,
    description: opts.description,
    inLanguage: 'en-IN',
    lastReviewed: opts.lastReviewed ?? '2026-10-07',
    reviewedBy: { '@id': DOCTOR_ID },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Invisalign aligner treatment',
    },
  };
}
