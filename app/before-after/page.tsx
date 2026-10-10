import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';
import FaqSection from '@/components/FaqSection';
import BeforeAfter from '@/components/BeforeAfter';
import JsonLd from '@/components/JsonLd';
import { site, whatsappLink } from '@/lib/site';
import { serviceSchema, medicalWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Invisalign Before and After | Real Results from Hyderabad',
  description:
    'Invisalign before and after results from our Hyderabad centre — how to read a case correctly, what affects your outcome, and how to preview your own result with a digital scan.',
  alternates: { canonical: '/before-after' },
  openGraph: {
    url: `${site.url}/before-after`,
    title: 'Invisalign Before and After | Real Results from Hyderabad',
    description:
      'How to judge Invisalign before and after photographs honestly, plus digital simulation so you can preview your own result.',
    images: ['/images/og-invisalign-hyderabad.jpg'],
  },
};

const resultFaqs = [
  {
    q: 'Can I see Invisalign before and after photos at the clinic?',
    a: 'Yes. During your consultation we show completed cases that match your type of problem — crowding, spacing, deep bite or relapse — from the practice archive, with the patient’s consent and with faces anonymised. Case images are shared in person because they are identifiable clinical records.',
  },
  {
    q: 'How long does it take to see Invisalign results?',
    a: 'Most patients notice visible change within two to three months, with the biggest difference in the second half of treatment. Front teeth that are crowded often appear straighter faster than bite corrections, which is why the last few aligners matter so much.',
  },
  {
    q: 'Will my Invisalign results look like the simulation?',
    a: 'The simulation is a clinical prediction of tooth position based on your scan, and it is usually close — but it assumes full wear time and correct alignment of every stage. Real outcomes vary with wear compliance, attachment integrity, gum health and how your roots respond. Refinement aligners exist precisely to close the gap.',
  },
  {
    q: 'Why do some Invisalign cases fail or need re-treatment?',
    a: 'The usual causes are poor wear time, changing aligners out of schedule, missed review appointments, unmanaged gum problems, and treatment planned without adequate clinical evaluation. Choosing a provider with high case volume and honest follow-up matters more than the aligner brand.',
  },
  {
    q: 'Do you publish patient photos on this website?',
    a: 'Only with explicit written consent, and only identifiable in a way the patient has agreed to. Where a case cannot be published, we show a clearly labelled illustrative panel instead of passing off a stock image as a patient result.',
  },
  {
    q: 'Can I preview my own result before paying?',
    a: 'Yes. A 3D intraoral scan and digital treatment plan produce a simulation of your predicted outcome, so you can decide with information rather than hope. See your own case on the simulation — not somebody else’s.',
  },
];

const cases = [
  {
    title: 'Crowded upper and lower front teeth',
    detail: 'Non-extraction alignment of overlapping incisors, finishing with fixed lingual retention.',
  },
  {
    title: 'Spacing and midline diastema',
    detail: 'Space closure across the front teeth with aligner-supported tooth movement.',
  },
  {
    title: 'Deep bite with worn front teeth',
    detail: 'Bite opening combined with alignment, often the longest part of an aligner plan.',
  },
  {
    title: 'Relapse after previous braces',
    detail: 'Re-treatment of shifted teeth, followed by disciplined lifelong retention.',
  },
];

export default function BeforeAfterPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Invisalign before and after results',
            description:
              'How Invisalign case results are evaluated in Hyderabad, what determines the final outcome, and how to preview your own predicted result.',
            path: '/before-after',
          }),
          medicalWebPageSchema({
            path: '/before-after',
            title: 'Invisalign Before and After Results',
            description:
              'How to read Invisalign before and after results correctly and what drives the final outcome.',
          }),
        ]}
      />

      <Breadcrumbs trail={[{ name: 'Before & After', href: '/before-after' }]} />

      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Before &amp; After</p>
          <h1>Invisalign before and after: how to judge a result properly</h1>
          <p className="hero-sub">
            Photographs only tell you part of the story. Here is what changes in a real Invisalign
            case, what affects your own outcome, and how to preview your result before you start.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href="#book">
              See a simulation of your own teeth
            </a>
            <a
              className="btn btn--wa"
              href={whatsappLink('Hi, I would like to see Invisalign before and after results for a case like mine.')}
              target="_blank"
              rel="noopener"
            >
              Ask about a case like mine
            </a>
          </div>
        </div>
      </section>

      <section className="section section--tight"><div className="wrap"><figure className="band-figure"><img src="/images/invisalign-aligners-hero.jpg" width={1920} height={1080} alt="Invisalign aligner tray photographed at our Hyderabad centre" loading="lazy" /><figcaption>What changes is planned tooth movement, measured against your own simulation.</figcaption></figure></div></section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Reading a case</p>
          <h2>What an Invisalign before and after really shows</h2>
          <p className="lead">
            Four things change in a successful aligner case, and only the first one is obvious in a
            photograph.
          </p>
          <div className="grid grid--4" style={{ marginTop: 30 }}>
            <div className="card">
              <h3>Tooth position</h3>
              <p>
                The visible part: crowding removed, gaps closed, teeth rotated into line with the
                smile arc.
              </p>
            </div>
            <div className="card">
              <h3>Bite relationship</h3>
              <p>
                How the upper and lower teeth meet. This usually takes longer than straightening and
                matters more for long-term wear.
              </p>
            </div>
            <div className="card">
              <h3>Smile and lip support</h3>
              <p>
                Where the front teeth sit in relation to the lip line, which changes how wide and
                full the smile looks.
              </p>
            </div>
            <div className="card">
              <h3>Stability over time</h3>
              <p>
                Whether the result held. A photograph on the day aligners come off says nothing
                about the next five years.
              </p>
            </div>
          </div>

          <div className="callout" style={{ marginTop: 30 }}>
            <h3>How to compare two clinics using case photographs</h3>
            <p>
              Ask for cases with the same problem type as yours, the treatment duration, the aligner
              count, and a long-term photograph after retention. A financial incentive to modify
              images exists everywhere — consent, dates and retention photographs are what make a
              case credible.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="gallery">
        <div className="wrap">
          <p className="eyebrow">Case gallery</p>
          <h2>Invisalign case types treated at our Hyderabad centre</h2>
          <p className="lead">
            Drag the divider to compare. Real, consented patient photographs are shown in person at
            your consultation — the panels below are labelled as illustrative until verified case
            images are published here.
          </p>

          <div className="grid grid--2" style={{ marginTop: 32 }}>
            {cases.map((item) => (
              <BeforeAfter key={item.title} title={item.title} detail={item.detail} />
            ))}
          </div>

          <p className="small" style={{ marginTop: 24 }}>
            The before/after panels above are illustrative and are not patient photographs. They are
            deliberately labelled so that nothing on this page implies a result that has not been
            documented. Individual results vary.
          </p>
        </div>
      </section>

      <section className="section" id="what-determines">
        <div className="wrap split split--media-left">
          <div>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/invisalign-aligner-macro.jpg"
              width={1336}
              height={751}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Progress is measured against the plan, not against a feeling.
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="eyebrow">Outcome factors</p>
            <h2>What determines how good your Invisalign result will be</h2>

            <h3>1. Who plans the tooth movement</h3>
            <p>
              The difference between an excellent and a mediocre result is almost always the
              clinician&rsquo;s treatment plan — where attachments go, how much torque is built in,
              how the bite is finished. Aligners execute a plan; they do not invent one.
            </p>

            <h3>2. Your wear time</h3>
            <p>
              Twenty to twenty-two hours a day, every day. This single behaviour decides whether
              treatment finishes on schedule or drifts into endless refinements.
            </p>

            <h3>3. Case selection</h3>
            <p>
              Aligners are superb for most crowding and spacing cases and for many bite problems.
              They are not the right tool for every severe skeletal case. A provider willing to say
              so is a better sign than one who accepts everything.
            </p>

            <h3>4. Gum and enamel health</h3>
            <p>
              Treatment happens in a mouth, not a vacuum. Active gum disease or decay should be
              addressed before or alongside aligner therapy.
            </p>

            <h3>5. Retention</h3>
            <p>
              Long-term photographs are the real proof of a case. Without retainers, teeth drift and
              the result you paid for slowly disappears.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <p className="eyebrow">Patient stories</p>
          <h2>What patients say after treatment</h2>
          <div className="grid grid--2" style={{ marginTop: 30 }}>
            <blockquote className="review">
              <p>
                &ldquo;It has been 9 months with them, all went smoothly, and my smile improved a
                lot. Thank you so much Dr. Praveen and team.&rdquo;
              </p>
              <footer>Invisalign patient · verified review</footer>
            </blockquote>
            <blockquote className="review">
              <p>
                &ldquo;The results are great. The clinic team is very professional and wait times
                are minimal. I feel more confident now when I speak or smile.&rdquo;
              </p>
              <footer>Invisalign patient · verified review</footer>
            </blockquote>
          </div>
          <p className="small" style={{ marginTop: 20 }}>
            Reviews are reproduced as submitted by patients. Results vary between individuals.
          </p>
          <p>
            Want your own case assessed?{' '}
            <Link href="/about-dr-praveen-kurapati">
              Meet the orthodontist who will plan your treatment
            </Link>{' '}
            or <Link href="/invisalign-cost">see what treatment costs</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Preview your result</p>
            <h2>See a simulation of your own teeth before you commit</h2>
            <p>
              Instead of comparing your teeth with somebody else&rsquo;s photographs, you can see a
              prediction of your own outcome. That comes from a 3D intraoral scan and a
              clinician-designed digital treatment plan.
            </p>
            <ul>
              <li>No impressions, no gagging — a digital scan of your teeth</li>
              <li>Simulated end position before treatment starts</li>
              <li>Aligner count and realistic duration</li>
              <li>Written cost alongside the plan</li>
            </ul>
            <p>
              Book an assessment at any of our {site.clinics.length} Hyderabad clinics and leave
              knowing exactly what is achievable for your teeth.
            </p>
          </div>
          <LeadForm
            id="book"
            heading="Preview your Invisalign result"
            subheading="Send your details and we will arrange an assessment and 3D digital scan at a clinic near you."
          />
        </div>
      </section>

      <FaqSection
        items={resultFaqs}
        eyebrow="Results & Case FAQs"
        title="Invisalign results questions, answered"
      />
    </>
  );
}
