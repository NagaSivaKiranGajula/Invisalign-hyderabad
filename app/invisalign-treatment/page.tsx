import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { site, whatsappLink, telLink } from '@/lib/site';
import { serviceSchema, medicalWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Invisalign Treatment in Hyderabad | Process, Timeline & Results',
  description:
    'Invisalign treatment in Hyderabad explained: the full aligner process, how long treatment takes, wear rules, refinements and retention. Book a scan at our Invisalign Center.',
  alternates: { canonical: '/invisalign-treatment' },
  openGraph: {
    url: `${site.url}/invisalign-treatment`,
    title: 'Invisalign Treatment in Hyderabad | Process, Timeline & Results',
    description:
      'The complete Invisalign treatment process in Hyderabad — scanning, treatment planning, aligner stages, refinements and retention, with realistic timelines.',
    images: ['/images/og-invisalign-hyderabad.jpg'],
  },
};

const treatmentFaqs = [
  {
    q: 'What is the Invisalign treatment process from start to finish?',
    a: 'Five stages: (1) clinical assessment, photographs and a 3D intraoral scan; (2) digital treatment planning with a simulated end result; (3) manufacture of your custom aligners and bonding of tooth-coloured attachments if needed; (4) aligner changes every 7 to 10 days with short progress reviews every 6 to 10 weeks; (5) refinement aligners if required, followed by retainers for life. Most patients start aligners two to three weeks after the first visit.',
  },
  {
    q: 'How long does Invisalign treatment take in Hyderabad?',
    a: 'Most cases take 6 to 18 months. Limited plans for minor crowding finish in 4 to 8 months, standard plans for moderate crowding or spacing take 9 to 15 months, and complex cases involving bite correction, extractions or coordination with other specialists run 18 to 24 months. You get a case-specific estimate after the digital simulation.',
  },
  {
    q: 'Does Invisalign treatment hurt?',
    a: 'Most patients feel pressure and mild tenderness for one to three days after starting a new aligner, which is the tooth movement itself. It is usually managed with normal pain relief if needed. Sharp pain, a cracked aligner or an aligner that will not seat means you should contact the clinic rather than push through.',
  },
  {
    q: 'Will people notice I am wearing aligners?',
    a: 'At conversational distance, Invisalign aligners are very hard to see. Small tooth-coloured composite attachments may be bonded to some teeth to guide specific movements, and these are also low-profile and matched to your tooth shade. Patients routinely wear aligners through work meetings, teaching and video calls.',
  },
  {
    q: 'What happens if I do not wear my aligners for 20 to 22 hours a day?',
    a: 'Teeth will not track to the plan. Poor wear time is the single most common reason treatment runs long, needs extra refinement aligners, or in some cases has to be converted to braces. If your lifestyle makes full-time wear unrealistic, tell us at the consultation so we can plan honestly.',
  },
  {
    q: 'How often are Invisalign review appointments?',
    a: 'Progress reviews are typically every 6 to 10 weeks, and each visit is short. Some routine checks can be handled with photographs sent from home, but aligner fit, attachment integrity and oral health need in-person review at intervals.',
  },
  {
    q: 'What are Invisalign attachments and refinements?',
    a: 'Attachments are small tooth-coloured bumps bonded to selected teeth that give the aligner something to grip, allowing rotations and specific movements that would otherwise be difficult. Refinements are additional aligners made near the end of treatment to close remaining gaps or fine-tune the bite. Both are planned parts of treatment, not failures.',
  },
  {
    q: 'Do I need retainers after Invisalign?',
    a: 'Yes. Teeth are held by the surrounding tissues and will drift without retention, and this is the most common reason people need treatment a second time. Retention is usually a fixed wire behind the front teeth plus a removable night retainer, reviewed at intervals.',
  },
];

const timeline = [
  ['Minor crowding or spacing (Invisalign Lite / Express)', '4 – 8 months', 'Up to 14 aligner stages'],
  ['Moderate crowding, rotations, overjet', '9 – 15 months', 'Standard aligner sequence plus attachments'],
  ['Deep bite, open bite, crossbite correction', '12 – 18 months', 'Often with elastics or auxiliaries'],
  ['Complex, extraction or re-treatment cases', '18 – 24 months', 'Extended plan, refinements, coordination'],
];

export default function TreatmentPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Invisalign treatment in Hyderabad',
            description:
              'The complete Invisalign treatment process in Hyderabad: 3D scanning, digital treatment planning, aligner stages, refinements and retention.',
            path: '/invisalign-treatment',
          }),
          medicalWebPageSchema({
            path: '/invisalign-treatment',
            title: 'Invisalign Treatment in Hyderabad — Process and Timeline',
            description:
              'How Invisalign treatment works in Hyderabad, stage by stage, with realistic timelines and wear guidance.',
          }),
        ]}
      />

      <Breadcrumbs trail={[{ name: 'Invisalign Treatment', href: '/invisalign-treatment' }]} />

      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Invisalign Treatment</p>
          <h1>Invisalign treatment in Hyderabad: the process, the timeline, the reality</h1>
          <p className="hero-sub">
            Everything that happens between your first scan and your last retainer check — written
            the way we explain it to patients in the chair, not the way it reads on a brochure.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href="#book">
              Book an assessment and scan
            </a>
            <a
              className="btn btn--wa"
              href={whatsappLink('Hi, I have a question about the Invisalign treatment process.')}
              target="_blank"
              rel="noopener"
            >
              Ask a question
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
                <a href="#process">The treatment process</a>
              </li>
              <li>
                <a href="#timeline">How long it takes</a>
              </li>
              <li>
                <a href="#week-by-week">What changes, week by week</a>
              </li>
              <li>
                <a href="#candidates">Are you a candidate?</a>
              </li>
              <li>
                <a href="#wear-rules">The wear rules that decide your result</a>
              </li>
              <li>
                <a href="#retention">Retention after treatment</a>
              </li>
              <li>
                <a href="#concerns">Common concerns</a>
              </li>
              <li>
                <a href="#faq">Invisalign FAQs</a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section section--tight"><div className="wrap"><figure className="band-figure"><img src="/images/step-2-plan.jpg" width={1336} height={751} alt="Digital Invisalign treatment plan on screen at our Hyderabad centre" loading="lazy" /><figcaption>Your aligner sequence is designed on the digital model before anything is made.</figcaption></figure></div></section>

      <section className="section" id="process">
        <div className="wrap">
          <p className="eyebrow">Stage by stage</p>
          <h2>The Invisalign treatment process at our Hyderabad centre</h2>
          <p className="lead">
            Each stage exists for a clinical reason. Skipping any of them — especially the planning
            stage — is what produces disappointing aligner results elsewhere.
          </p>

          <ol className="steps" style={{ marginTop: 34 }}>
            <li className="step">
              <h3>Stage 1 — Consultation, records and intraoral scan</h3>
              <p>
                We take a history, examine your teeth, gums and bite, and record photographs, an
                orthodontic X-ray where indicated, and a 3D intraoral scan. There are no messy
                impression trays. This is also when we discuss what is achievable and what is not.
              </p>
            </li>
            <li className="step">
              <h3>Stage 2 — Digital treatment plan and ClinCheck simulation</h3>
              <p>
                Your scan goes to the Align planning platform. {site.doctor.name} reviews and adjusts
                the tooth movement stage by stage rather than accepting the default plan, decides
                where attachments are needed, and shows you the predicted final position together
                with the aligner count.
              </p>
            </li>
            <li className="step">
              <h3>Stage 3 — Aligner manufacture, fit and attachments</h3>
              <p>
                Your aligners are made to the approved plan. At the fitting appointment we check the
                first aligner seats fully, and bond any tooth-coloured attachments and, where
                required, small elastics or auxiliaries.
              </p>
            </li>
            <li className="step">
              <h3>Stage 4 — Active aligner sequence and reviews</h3>
              <p>
                You change aligners every 7 to 10 days and attend short reviews every 6 to 10 weeks.
                At each review we check that teeth are tracking the plan, look for aligner seating
                problems, and monitor gum health.
              </p>
            </li>
            <li className="step">
              <h3>Stage 5 — Refinements and retention</h3>
              <p>
                If any movement fell short, refinement aligners finish the job. We then fit retention
                — usually a fixed lingual wire plus a removable night retainer — and review it over
                time.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--mist" id="timeline">
        <div className="wrap">
          <p className="eyebrow">Timeline</p>
          <h2>How long does Invisalign treatment take in Hyderabad?</h2>
          <p className="lead">
            Duration is set by how far teeth must move, not by the clinic. These are the bands we
            see in practice.
          </p>
          <div className="table-scroll" style={{ marginTop: 28 }}>
            <table>
              <caption>
                Indicative ranges. Your timeline is confirmed after digital simulation and can change
                if wear time or tracking is affected.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Case type</th>
                  <th scope="col">Typical duration</th>
                  <th scope="col">What it usually involves</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 24 }}>
            Cost and duration move together — see the full{' '}
            <Link href="/invisalign-cost">Invisalign cost in Hyderabad breakdown</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="week-by-week">
        <div className="wrap split split--media-left">
          <div>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/invisalign-clinic-treatment-room.jpg"
              width={1336}
              height={751}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Review appointments are short — fit, tracking and gum health get checked.
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="eyebrow">Expectations</p>
            <h2>What actually changes, week by week</h2>

            <h3>Days 1 to 7</h3>
            <p>
              Pressure and mild tenderness, a slight lisp in the first day or two, and noticeably
              more saliva. All of this settles quickly for most people. Wear time is the thing to
              nail down now: 20 to 22 hours a day, out only for eating, drinking anything other than
              water, and brushing.
            </p>

            <h3>Weeks 2 to 8</h3>
            <p>
              Aligner changes become routine. You may start seeing gaps close or a rotated tooth
              straighten. Most patients report that the aligners stop feeling like a foreign object
              within two weeks.
            </p>

            <h3>Months 2 to 6</h3>
            <p>
              The visible change accelerates. This is when photographs start showing a real
              difference and when tracking is most likely to be checked closely at review.
            </p>

            <h3>Second half of treatment</h3>
            <p>
              Finer corrections — torque, tip and bite interdigitation — plus any refinement
              aligners. The last few aligners look unremarkable but do the work that makes the
              result stable.
            </p>

            <h3>After the last aligner</h3>
            <p>
              Retainers. This stage never ends, and patients who treat it casually are the ones who
              come back years later with shifted teeth.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="candidates">
        <div className="wrap">
          <p className="eyebrow">Candidacy</p>
          <h2>Are you a candidate for Invisalign treatment?</h2>
          <div className="grid grid--2" style={{ marginTop: 30 }}>
            <div className="card card--teal">
              <h3>Generally a good fit</h3>
              <ul>
                <li>Crowding, rotations and overlapping front teeth</li>
                <li>Spacing and midline gaps</li>
                <li>Mild to moderate overbite, open bite and crossbite</li>
                <li>Relapse after previous orthodontic treatment</li>
                <li>Adults who want discretion at work or on camera</li>
                <li>Patients with gum or enamel concerns where fixed braces are harder to clean around</li>
              </ul>
            </div>
            <div className="card">
              <h3>Needs a different plan</h3>
              <ul>
                <li>Severe skeletal jaw discrepancies requiring surgery</li>
                <li>Impacted or unerupted teeth that need surgical management first</li>
                <li>Cases where fixed appliances will achieve the same result faster</li>
                <li>Patients unable to commit to 20 to 22 hours of daily wear</li>
              </ul>
              <p className="small">
                Complex aligner cases are a core part of this practice, so a &ldquo;you are not a
                candidate&rdquo; answer from elsewhere is worth a second opinion. But if aligners
                are genuinely not in your interest, we will say so.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="wear-rules">
        <div className="wrap">
          <p className="eyebrow">Compliance</p>
          <h2>The wear rules that decide your Invisalign result</h2>
          <div className="grid grid--2" style={{ marginTop: 30 }}>
            <div className="card">
              <h3>Wear 20 to 22 hours a day</h3>
              <p>
                Aligners move teeth by applying force over time. Removing them for long stretches
                does not pause treatment — it lets teeth rebound, and the next aligner will not fit
                correctly.
              </p>
            </div>
            <div className="card">
              <h3>Change on schedule, not on feel</h3>
              <p>
                Change aligners on the day we tell you, not when they feel loose. Drifting from the
                schedule silently desynchronises the plan.
              </p>
            </div>
            <div className="card">
              <h3>Keep them clean and out of heat</h3>
              <p>
                Rinse and clean aligners daily. Hot water and car dashboards distort them, and a
                distorted aligner will not track your teeth.
              </p>
            </div>
            <div className="card">
              <h3>Never skip a review because things feel fine</h3>
              <p>
                Problems with tracking, attachments and gum health are usually invisible to patients
                and obvious to us in two minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="retention">
        <div className="wrap split">
          <div>
            <p className="eyebrow">After treatment</p>
            <h2>Retention: the part that protects everything you paid for</h2>
            <p>
              Teeth are not welded to the jaw. The fibres around the root, the tongue, the lips and
              normal wear all push teeth toward their old positions for years after treatment.
              Retention is what holds the result.
            </p>
            <h3>What we usually fit</h3>
            <ul>
              <li>A thin fixed wire bonded behind the upper and lower front teeth</li>
              <li>A removable clear overlay retainer worn at night</li>
              <li>Review appointments so the retainer is replaced when it wears out</li>
            </ul>
            <h3>The honest warning</h3>
            <p>
              Most adult re-treatment cases we see are people who finished orthodontics years ago and
              stopped wearing retainers. Retainer wear is for life, and it takes seconds a night.
            </p>
          </div>
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
                Every stage of movement is measured, so retention is planned from the start.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" id="concerns">
        <div className="wrap">
          <p className="eyebrow">Practical questions</p>
          <h2>Common concerns about Invisalign treatment</h2>
          <div className="grid grid--3" style={{ marginTop: 30 }}>
            <div className="card">
              <h3>Will it affect my speech?</h3>
              <p>
                A slight lisp for the first day or two is normal and resolves as your tongue adapts.
                Singers, teachers and presenters should mention their work at the consultation so we
                can plan around engagements.
              </p>
            </div>
            <div className="card">
              <h3>What if I lose an aligner?</h3>
              <p>
                Tell us immediately. Depending on which stage you are at, you may move to the next
                aligner or we may reorder the lost one. Do not skip ahead on your own.
              </p>
            </div>
            <div className="card">
              <h3>Can I eat and drink normally?</h3>
              <p>
                Yes with aligners out. Water is fine with them in. Anything hot, coloured or sugary
                should come out first — this also protects against decay under the aligner.
              </p>
            </div>
            <div className="card">
              <h3>Is Invisalign safe for my gums?</h3>
              <p>
                Removable aligners are easier to clean around than fixed braces, which is helpful if
                you have a history of gum inflammation. We still monitor hygiene at every review.
              </p>
            </div>
            <div className="card">
              <h3>Can teenagers have Invisalign here?</h3>
              <p>
                Yes. Teenage cases often need compliance support, and aligners with wear indicators
                help us and parents see actual wear time.
              </p>
            </div>
            <div className="card">
              <h3>What if aligners are not working for me?</h3>
              <p>
                Occasionally a case is better finished with a short fixed-appliance phase. We tell
                you early rather than letting a plan drift for months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Book your Invisalign assessment in Hyderabad</h2>
            <p>
              You will get an examination, photographs, a 3D scan and a simulated result — the
              information you need to decide whether to go ahead.
            </p>
            <p>
              Call <a href={telLink}>{site.phoneDisplay}</a> or{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener">
                WhatsApp the clinic
              </a>
              .
            </p>
            <p>
              See also: <Link href="/invisalign-cost">Invisalign cost in Hyderabad</Link> and{' '}
              <Link href="/before-after">before and after results</Link>.
            </p>
          </div>
          <LeadForm
            id="book"
            heading="Request your Invisalign consultation"
            subheading="Tell us a little about your teeth and we will call you to arrange the assessment and scan."
          />
        </div>
      </section>

      <FaqSection
        items={treatmentFaqs}
        eyebrow="Invisalign Treatment FAQs"
        title="Invisalign treatment questions, answered"
      />
    </>
  );
}
