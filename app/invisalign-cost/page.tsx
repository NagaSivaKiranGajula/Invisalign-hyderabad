import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { site, whatsappLink, telLink } from '@/lib/site';
import { serviceSchema, medicalWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Invisalign Cost in Hyderabad | Price Guide, EMI & Payment Options',
  description:
    'Invisalign cost in Hyderabad explained: price bands by case type, what is included, what adds to the fee, EMI and instalments. Get an exact quote after your 3D scan.',
  alternates: { canonical: '/invisalign-cost' },
  openGraph: {
    url: `${site.url}/invisalign-cost`,
    title: 'Invisalign Cost in Hyderabad | Price Guide, EMI & Payment Options',
    description:
      'What Invisalign costs in Hyderabad, what drives the price, what is included, and how EMI and instalments work.',
    images: ['/images/og-invisalign-hyderabad.jpg'],
  },
};

const costFaqs = [
  {
    q: 'What is the cost of Invisalign treatment in Hyderabad?',
    a: 'At our centre, Invisalign treatment generally falls between about ₹1,20,000 for limited plans and ₹4,50,000 for complex comprehensive cases, with most patients quoted in the ₹2,00,000 to ₹3,20,000 range. The figure depends on case complexity, aligner count, refinements, attachments or extractions, and the retention plan. A scan and clinical assessment are needed before any clinic can quote accurately.',
  },
  {
    q: 'Why is Invisalign more expensive than braces?',
    a: 'Aligner fees include the digital scan, the clinician-designed treatment plan, the manufactured aligner sequence, attachments, refinement aligners and retention — a genuinely higher material and planning cost than wire and brackets. The clinical fee for the orthodontist’s time is broadly similar; it is the technology and aligner manufacturing that sits on top.',
  },
  {
    q: 'Does the Invisalign fee include retainers?',
    a: 'Retention should always be part of your quoted plan, because without retainers the result will relapse. Confirm in writing whether fixed lingual wires, a removable night retainer, and retainer replacements are included or charged separately — this varies between clinics and is a common hidden cost.',
  },
  {
    q: 'Can I pay for Invisalign in instalments or EMI?',
    a: 'Yes. Treatment is normally split into an initial payment when the aligners are ordered and the balance across monthly instalments over the treatment period, and we support credit-card EMI. Ask the front desk for the current plan when you book, since bank offers change.',
  },
  {
    q: 'Does insurance cover Invisalign in India?',
    a: 'Most Indian health insurance policies treat orthodontic treatment as cosmetic and exclude it unless a functional or medical need such as a severe bite problem is documented. Some corporate policies and dental riders reimburse part of the cost. We provide a detailed treatment estimate and clinical justification letter that you can submit to your insurer or employer.',
  },
  {
    q: 'Is the cheapest Invisalign quote the best value?',
    a: 'No. A low quote is often a Lite plan applied to a case that needs Full or Comprehensive treatment, or a fee that excludes refinements, attachments, X-rays or retention. Ask what happens if your case needs more aligners, what is included, and who plans and supervises the tooth movement, before comparing numbers.',
  },
  {
    q: 'What if my treatment needs more aligners than planned?',
    a: 'This is exactly why the plan tier matters. Invisalign Full and Comprehensive plans cover additional aligners and refinements within the treatment plan, whereas limited plans are capped by aligner count. We tell you up front which tier your case needs and what happens if it runs beyond the estimate.',
  },
  {
    q: 'Are consultation and scans charged separately?',
    a: 'Your first visit includes the clinical assessment, photographs and a 3D intraoral scan so you can see a simulation and get a firm quote. Ask our team for the current assessment fee and whether it is adjusted against treatment when you go ahead.',
  },
];

export default function CostPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Invisalign cost in Hyderabad',
            description:
              'Invisalign price guide for Hyderabad: indicative cost bands by case complexity, inclusions and exclusions, EMI and instalment options.',
            path: '/invisalign-cost',
          }),
          medicalWebPageSchema({
            path: '/invisalign-cost',
            title: 'Invisalign Cost in Hyderabad — Price Guide',
            description:
              'Indicative Invisalign price bands for Hyderabad, what is included in the fee, and payment options.',
          }),
        ]}
      />

      <Breadcrumbs trail={[{ name: 'Invisalign Cost', href: '/invisalign-cost' }]} />

      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Invisalign Cost</p>
          <h1>Invisalign cost in Hyderabad: what you actually pay, and why</h1>
          <p className="hero-sub">
            Honest price bands from a centre that treats thousands of aligner cases — plus the
            inclusions, exclusions and hidden costs nobody mentions in the first phone call.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href="#book">
              Get an exact quote after a 3D scan
            </a>
            <a
              className="btn btn--wa"
              href={whatsappLink('Hi, can you give me an Invisalign cost estimate for my case?')}
              target="_blank"
              rel="noopener"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap">
          <nav className="toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              <li>
                <a href="#drivers">What drives the cost</a>
              </li>
              <li>
                <a href="#bands">Indicative price bands</a>
              </li>
              <li>
                <a href="#included">What is included</a>
              </li>
              <li>
                <a href="#extras">What can add to the cost</a>
              </li>
              <li>
                <a href="#vs-braces">Cost vs braces</a>
              </li>
              <li>
                <a href="#emi">EMI and instalments</a>
              </li>
              <li>
                <a href="#quote">How to get an exact quote</a>
              </li>
              <li>
                <a href="#faq">Cost FAQs</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section section--tight"><div className="wrap"><figure className="band-figure"><img src="/images/instagram-consult-desk.jpg" width={1336} height={751} alt="Invisalign consultation desk with a digital treatment plan on screen in Hyderabad" loading="lazy" /><figcaption>Your fee is built from the plan, so the plan comes first.</figcaption></figure></div></section>

      <section className="section" id="drivers">
        <div className="wrap">
          <p className="eyebrow">Pricing logic</p>
          <h2>What drives the cost of Invisalign in Hyderabad</h2>
          <p className="lead">
            Two patients can be quoted very different figures for &ldquo;Invisalign&rdquo; because
            the product is a plan, not a box. These are the variables.
          </p>

          <div className="grid grid--3" style={{ marginTop: 32 }}>
            <div className="card">
              <h3>Complexity of tooth movement</h3>
              <p>
                Closing a 1 mm gap and rotating a stubborn premolar are different jobs. Distance,
                rotation and torque requirements set the aligner count.
              </p>
            </div>
            <div className="card">
              <h3>Plan tier</h3>
              <p>
                Lite, Full and Comprehensive plans differ in how many aligners are covered and
                whether refinements sit inside the fee.
              </p>
            </div>
            <div className="card">
              <h3>Attachments and auxiliaries</h3>
              <p>
                Bonded attachments, buttons and elastics add chair time and materials, and are
                essential for some movements.
              </p>
            </div>
            <div className="card">
              <h3>Extractions or other work first</h3>
              <p>
                Sometimes space must be created before aligners can work, which brings in additional
                treatment.
              </p>
            </div>
            <div className="card">
              <h3>Bite correction, not just straightening</h3>
              <p>
                Aligning the front teeth is quick. Correcting a deep bite, open bite or crossbite
                takes longer and costs more.
              </p>
            </div>
            <div className="card">
              <h3>Retention plan</h3>
              <p>
                Fixed wires, a removable retainer and future replacements are part of the real cost
                of keeping the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="bands">
        <div className="wrap">
          <p className="eyebrow">Indicative pricing</p>
          <h2>Indicative Invisalign price bands in Hyderabad</h2>
          <p className="lead">
            These bands reflect our own experience across thousands of aligner cases. They are
            indicative only — your plan and final fee are confirmed after clinical assessment and
            digital simulation.
          </p>

          <div className="table-scroll" style={{ marginTop: 28 }}>
            <table>
              <caption>
                Indicative ranges in INR for Invisalign treatment at our Hyderabad centre. Confirm
                the current fee at your consultation. Individual treatment plans vary.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Plan</th>
                  <th scope="col">Typically suitable for</th>
                  <th scope="col">Aligner cover</th>
                  <th scope="col">Indicative fee</th>
                </tr>
              </thead>
              <tbody>
                {site.pricing.map((row) => (
                  <tr key={row.tier}>
                    <th scope="row">{row.tier}</th>
                    <td>{row.indication}</td>
                    <td>{row.aligners}</td>
                    <td>{row.indicative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="callout callout--warn" style={{ marginTop: 26 }}>
            <h3>A flat quote before a scan is not a quote</h3>
            <p>
              If a clinic names a price in a phone call without examining you, that number is either
              a marketing figure or it is padded to cover the worst case. Ask for the simulation
              first.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="included">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Inclusions</p>
            <h2>What should be included in your Invisalign fee</h2>
            <p>
              A properly quoted Invisalign fee covers the full treatment pathway. Check each of these
              appears in writing before you pay a deposit.
            </p>
            <ul>
              <li>Clinical assessment, photographs and intraoral 3D scan</li>
              <li>Clinician-designed treatment plan and simulation review</li>
              <li>The full aligner sequence for your plan tier</li>
              <li>Attachments and fitting appointments</li>
              <li>Progress reviews through the treatment period</li>
              <li>Refinement aligners where the plan tier includes them</li>
              <li>Retention — fixed wire and/or removable retainer</li>
              <li>Aligner care instructions and hygiene support</li>
            </ul>
            <h3>Ask about these specifically</h3>
            <p>
              X-rays, tooth whitening, restorative work, extraction of teeth, retainer replacements
              after the warranty period, and what happens if you lose several aligners.
            </p>
          </div>
          <div>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/invisalign-clinic-hyderabad.jpg"
              width={1024}
              height={576}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Every quote at our centre is written, itemised and confirmed after your scan.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="extras">
        <div className="wrap">
          <p className="eyebrow">Costs people forget</p>
          <h2>What can add to the Invisalign cost</h2>
          <div className="grid grid--4" style={{ marginTop: 30 }}>
            <div className="card">
              <h3>Aligners beyond your plan</h3>
              <p>
                Limited plans cap aligner numbers. Additional stages beyond the plan may be charged.
              </p>
            </div>
            <div className="card">
              <h3>Lost or damaged aligners</h3>
              <p>
                Remake fees apply. Keep aligners in their case, never in a pocket or a hot car.
              </p>
            </div>
            <div className="card">
              <h3>Extractions or gum treatment</h3>
              <p>
                If space must be created or the gums need treatment first, that is separate clinical
                work.
              </p>
            </div>
            <div className="card">
              <h3>Retainer replacement</h3>
              <p>
                Retainers wear out. Plan for replacements, and for a fixed wire that comes loose.
              </p>
            </div>
            <div className="card">
              <h3>Extended treatment time</h3>
              <p>
                Poor wear time lengthens treatment, which can add review appointments and aligners.
              </p>
            </div>
            <div className="card">
              <h3>Whitening or cosmetic work</h3>
              <p>
                Many patients finish with whitening or bonding, which is a separate aesthetic
                decision.
              </p>
            </div>
            <div className="card">
              <h3>Travelling for reviews</h3>
              <p>
                Choosing a clinic near work or home is a genuine cost saving over 12 to 18 months.
              </p>
            </div>
            <div className="card">
              <h3>Second opinion consultations</h3>
              <p>
                If you are comparing plans, budget for assessment fees at each clinic you visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="vs-braces">
        <div className="wrap">
          <p className="eyebrow">Comparison</p>
          <h2>Invisalign cost vs braces cost in Hyderabad</h2>
          <div className="table-scroll" style={{ marginTop: 28 }}>
            <table>
              <caption>
                General market guidance for Hyderabad. Exact fees depend on your case and the
                clinician.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Option</th>
                  <th scope="col">Relative cost</th>
                  <th scope="col">Where it wins</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Metal braces</th>
                  <td>Lowest</td>
                  <td>Severe cases and budget-led treatment</td>
                </tr>
                <tr>
                  <th scope="row">Ceramic braces</th>
                  <td>Moderate</td>
                  <td>Less visible fixed treatment</td>
                </tr>
                <tr>
                  <th scope="row">Invisalign aligners</th>
                  <td>Highest</td>
                  <td>Discretion, hygiene, comfort and removability</td>
                </tr>
                <tr>
                  <th scope="row">Lingual braces</th>
                  <td>High</td>
                  <td>Hidden fixed treatment, limited case suitability</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 22 }}>
            Unsure which appliance suits you? Read the{' '}
            <Link href="/invisalign-treatment#process">Invisalign treatment process</Link> and then
            ask us directly at your assessment.
          </p>
        </div>
      </section>

      <section className="section section--mist" id="emi">
        <div className="wrap split split--media-left">
          <div>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/step-4-progress.jpg"
              width={1336}
              height={751}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Your itemised estimate is prepared from the same plan that drives your aligners.
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="eyebrow">Payments</p>
            <h2>EMI, instalments and insurance</h2>

            <h3>How instalments usually work</h3>
            <p>
              A typical structure is an initial payment when the case is approved and aligners are
              ordered, with the balance spread monthly across the treatment period. The longer the
              plan, the more comfortable the monthly amount.
            </p>

            <h3>Credit-card EMI</h3>
            <p>
              Most major credit cards can be converted to EMI for treatment, with the bank setting
              the interest and tenure. Ask at the front desk which banks are currently running
              no-cost EMI offers.
            </p>

            <h3>Insurance and reimbursement</h3>
            <p>
              Orthodontic treatment is excluded as cosmetic under most Indian health policies unless
              a functional problem is documented. We provide an itemised estimate and clinical
              justification so you can claim under a dental rider or a corporate plan where one
              applies.
            </p>

            <h3>What to clarify before you pay</h3>
            <ul>
              <li>Whether the quoted fee is fixed or can change mid-treatment</li>
              <li>What happens if you relocate or need to transfer care</li>
              <li>Refund terms if treatment is discontinued early</li>
              <li>Whether retainer replacements are included</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="quote">
        <div className="wrap">
          <p className="eyebrow">Getting a number</p>
          <h2>How to get an exact Invisalign quote in Hyderabad</h2>
          <ol className="steps" style={{ marginTop: 32 }}>
            <li className="step">
              <h3>Book an assessment</h3>
              <p>
                Examination, photographs and bite assessment with an orthodontist, not a
                salesperson.
              </p>
            </li>
            <li className="step">
              <h3>Get a 3D intraoral scan</h3>
              <p>The scan replaces impressions and gives the clinician the data to plan movement.</p>
            </li>
            <li className="step">
              <h3>Review the simulation</h3>
              <p>
                You see the predicted end position and the aligner count, which is what the fee is
                built from.
              </p>
            </li>
            <li className="step">
              <h3>Receive a written, itemised quote</h3>
              <p>
                Plan tier, aligners, attachments, reviews, refinements, retention, and instalment
                schedule — with the exclusions named.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Find out what Invisalign costs for your teeth</h2>
            <p>
              Send us your details and we will arrange an assessment and scan, then give you a
              written quote with the reasons behind it.
            </p>
            <p>
              Prefer to talk now? Call <a href={telLink}>{site.phoneDisplay}</a> or{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener">
                message the clinic on WhatsApp
              </a>
              .
            </p>
            <p>
              Related reading: <Link href="/invisalign-treatment">the Invisalign treatment process</Link>{' '}
              · <Link href="/before-after">before and after results</Link> ·{' '}
              <Link href="/about-dr-praveen-kurapati">about {site.doctor.name}</Link>
            </p>
          </div>
          <LeadForm
            id="book"
            heading="Get your Invisalign cost estimate"
            subheading="We will call you to book the assessment and 3D scan, then confirm an itemised quote."
          />
        </div>
      </section>

      <FaqSection
        items={costFaqs}
        eyebrow="Invisalign Cost FAQs"
        title="Invisalign cost questions patients ask us"
      />
    </>
  );
}
