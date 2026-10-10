import Script from 'next/script';
import { site } from '@/lib/site';

/**
 * Injects GA4, Google Ads and Meta Pixel only when IDs are filled in
 * lib/site.ts -> site.tracking. Nothing is loaded while they are blank.
 */
export default function Analytics() {
  const { ga4, googleAds, metaPixel } = site.tracking;
  const gtagId = ga4 || googleAds;

  return (
    <>
      {gtagId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${ga4 ? `gtag('config', '${ga4}', { anonymize_ip: true });` : ''}
              ${googleAds ? `gtag('config', '${googleAds}');` : ''}
            `}
          </Script>
        </>
      ) : null}

      {metaPixel ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixel}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  );
}
