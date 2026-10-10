import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCta from '@/components/StickyCta';
import Analytics from '@/components/Analytics';

const OG_IMAGE = '/images/og-invisalign-hyderabad.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Invisalign Hyderabad | Invisalign Center by Dr. Praveen Kurapati',
    template: '%s | Invisalign Center Hyderabad',
  },
  description:
    'Invisalign in Hyderabad at the Black Diamond Invisalign Center led by Dr. Praveen Kurapati — 6,000+ Invisalign aligner cases. Book your Invisalign consultation.',
  applicationName: site.name,
  authors: [{ name: site.doctor.name, url: site.social.linkedin || site.url }],
  creator: site.doctor.name,
  publisher: site.name,
  keywords: [
    'Invisalign Hyderabad',
    'Best Invisalign Provider',
    'Invisalign Cost',
    'Invisalign Treatment',
    'Invisalign Center',
    'Invisalign doctor Hyderabad',
    'Invisalign aligners Hyderabad',
    'invisible braces Hyderabad',
    'Dr Praveen Kurapati',
    'Invisalign near me Hyderabad',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: 'Invisalign Hyderabad | Invisalign Center by Dr. Praveen Kurapati',
    description:
      'Black Diamond Invisalign care in Hyderabad — 6,000+ aligner cases, three city clinics, digital smile simulation before you commit.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Invisalign Center Hyderabad — Invisalign aligner treatment led by Dr. Praveen Kurapati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invisalign Hyderabad | Invisalign Center by Dr. Praveen Kurapati',
    description:
      'Black Diamond Invisalign provider in Hyderabad with 6,000+ Invisalign aligner cases. Book a smile assessment.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg' }],
  },
  category: 'health',
};

export const viewport = {
  themeColor: '#99605f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
        <Analytics />
        <Script id="invisalign-site-ready" strategy="afterInteractive" />
      </body>
    </html>
  );
}
