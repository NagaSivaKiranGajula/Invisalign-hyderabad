import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LeadForm from '@/components/LeadForm';
import FaqSection from '@/components/FaqSection';
import { site, whatsappLink, telLink, mapEmbed, mapLink } from '@/lib/site';
import InstagramStrip from '@/components/InstagramStrip';
import {
  organizationSchema,
  doctorSchema,
  websiteSchema,
  medicalWebPageSchema,
  serviceSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Invisalign Hyderabad | Invisalign Center by Dr. Praveen Kurapati',
  description:
    'Looking for Invisalign in Hyderabad? Our Invisalign Center is led by Black Diamond provider Dr. Praveen Kurapati — 6,000+ Invisalign aligner cases. Book a scan.',
  alternates: { canonical: '/' },
  openGraph: {
    url: site.url,
    title: 'Invisalign Hyderabad | Invisalign Center by Dr. Praveen Kurapati',
    description:
      'Black Diamond Invisalign provider in Hyderabad with 6,000+ cases. Digital smile simulation, three clinics, Invisalign aligner treatment planned by an Align faculty orthodontist.',
    images: ['/images/og-invisalign-hyderabad.jpg'],
  },
};

const homeFaqs = [
  {
    q: 'Who is the best Invisalign provider in Hyderabad?',
    a: 'Dr. Praveen Kurapati, MDS (Orthodontics), is an Invisalign Black Diamond Provider at our Hyderabad Invisalign Center. He was the first Black Diamond Invisalign provider in India across 2022, 2023, 2024 and 2025, is an Align Technology faculty member who trains other Invisalign providers, and has completed more than 6,000 Invisalign aligner cases including complex and previously treated cases. "Best" always depends on your own clinical situation, so we recommend a scan and a written treatment plan before you decide anywhere.',
  },
  {
    q: 'How much does Invisalign cost in Hyderabad?',
    a: 'At our centre, Invisalign treatment typically ranges from around ₹1,20,000 for limited aligner plans to ₹4,50,000 for complex comprehensive cases, with most patients falling in the ₹2,00,000 to ₹3,20,000 band. The exact quote depends on your case complexity, the number of aligners and refinements, and the plan tier your orthodontist recommends. See our Invisalign cost in Hyderabad page for a full breakdown, or book a scan for an exact figure.',
  },
  {
    q: 'How long does Invisalign treatment take?',
    a: 'Most Invisalign cases at our centre finish in 6 to 18 months. Minor crowding with an Invisalign Lite plan can complete in 4 to 8 months, while complex cases involving bite correction, extractions or surgical coordination often run 18 to 24 months. Aligners are changed every 7 to 10 days, and you will know your estimated timeline after the digital ClinCheck simulation at your first appointment.',
  },
  {
    q: 'Is Invisalign as effective as braces?',
    a: 'For the large majority of crowding, spacing, overjet and mild to moderate bite problems, Invisalign aligners produce results comparable to fixed braces when the plan is made by an experienced orthodontist and the aligners are worn 20 to 22 hours a day. Complex skeletal discrepancies or severe rotations sometimes still need braces, or a combination of braces and aligners, and Dr. Praveen will tell you honestly at the consultation which option suits your case.',
  },
  {
    q: 'Where are your Invisalign Center clinics in Hyderabad?',
    a: 'We see Invisalign patients at three locations: KPHB Colony (Kukatpally) on Road No 1, Jubilee Hills on Road No 36, and Banjara Hills at Park Dental Care, Road No 2. All three are open Monday to Sunday, 10:00 AM to 8:00 PM.',
  },
  {
    q: 'How do I know if I am a candidate for Invisalign?',
    a: 'If your teeth are crowded, rotated, spaced, or your bite is off, you are likely a candidate. Aligners are not suitable for every case — very severe skeletal problems may need another approach. The reliable way to find out is a clinical assessment plus an intraoral scan and digital simulation, which is what you get at your first visit.',
  },
  {
    q: 'Do you offer EMI or instalment payments for Invisalign?',
    a: 'Yes. Treatment is usually split into an initial payment when aligners are ordered and the balance across monthly instalments over the treatment period, and we also support credit-card EMI. Ask our team for the current instalment options when you book.',
  },
];

const candidatesGood = [
  'Crowded, overlapping or crooked front teeth',
  'Gaps and spacing between teeth',
  'Mild to moderate overbite, underbite, crossbite or open bite',
  'Relapse after earlier braces or aligner treatment',
  'Teeth that have shifted back after years without retainers',
  'Adults and teenagers who want a discreet option for work, school or public life',
];

const candidatesCheck = [
  'Very severe skeletal disproportions needing jaw surgery',
  'Teeth still to erupt in younger children',
  'Cases where a fixed appliance would move teeth faster',
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          doctorSchema(),
          websiteSchema(),
          serviceSchema({
            name: 'Invisalign treatment in Hyderabad',
            description:
              'Invisalign aligner treatment in Hyderabad, planned by Black Diamond provider Dr. Praveen Kurapati with digital scanning, ClinCheck simulation and retention.',
            path: '/',
          }),
          medicalWebPageSchema({
            path: '/',
            title: 'Invisalign Hyderabad — Invisalign Center',
            description:
              'Invisalign treatment in Hyderabad at an Invisalign Center led by Dr. Praveen Kurapati, Black Diamond Invisalign Provider.',
          }),
        ]}
      />

      {/* ---------------------------------- HERO --------------------------------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Invisalign Center · Hyderabad</p>
            <h1>Invisalign in Hyderabad at a Black Diamond Invisalign Center</h1>
            <p className="hero-sub">
              Clear, removable aligners planned by {site.doctor.name}, {site.doctor.qualifications} —
              an Invisalign Black Diamond Provider and Align faculty member with{' '}
              {site.doctor.invisalignCases} aligner cases, including the complex ones other clinics
              refer out.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#book">
                Book your Invisalign consultation
              </a>
              <a className="btn btn--wa" href={whatsappLink()} target="_blank" rel="noopener">
                WhatsApp us
              </a>
              <a className="btn btn--ghost" href="/invisalign-cost">
                See Invisalign cost
              </a>
            </div>
            <ul className="pill-row">
              <li className="pill">Digital scan &amp; smile simulation</li>
              <li className="pill">Three Hyderabad clinics</li>
              <li className="pill">Open 7 days, 10 AM – 8 PM</li>
              <li className="pill">EMI available</li>
            </ul>
          </div>
          <figure className="band-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/instagram-hero-smile.jpg"
              width={1600}
              height={900}
              alt="Close-up of a healthy natural smile at our Invisalign Center in Hyderabad"
              fetchPriority="high"
            />
            <figcaption>Invisalign aligners are planned around your face, not just your teeth.</figcaption>
          </figure>
        </div>

        <div className="wrap">
          <div className="stats">
            <div className="stat">
              <span className="stat-num">{site.doctor.invisalignCases}</span>
              <span className="stat-label">Invisalign cases completed</span>
            </div>
            <div className="stat">
              <span className="stat-num">2022–25</span>
              <span className="stat-label">Black Diamond Invisalign Provider in India</span>
            </div>
            <div className="stat">
              <span className="stat-num">{site.doctor.experience} yrs</span>
              <span className="stat-label">Orthodontic practice</span>
            </div>
            <div className="stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Invisalign clinics in Hyderabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------- WHY US -------------------------------- */}
      <section className="section" id="why">
        <div className="wrap">
          <p className="eyebrow">Best Invisalign Provider</p>
          <h2>Why patients searching for Invisalign Hyderabad choose this centre</h2>
          <p className="lead">
            Invisalign results depend far more on the orthodontist planning the case than on the
            aligner brand. Here is what changes at a centre that treats Invisalign aligners as its main
            work, not a side service.
          </p>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <article className="card">
              <h3>Highest-volume Invisalign experience in the region</h3>
              <p>
                Over {site.doctor.invisalignCases} completed Invisalign aligner cases, including complex
                and re-treatment cases referred from other practices.
              </p>
            </article>
            <article className="card">
              <h3>Black Diamond Invisalign Provider</h3>
              <p>
                First Diamond Invisalign Provider from Hyderabad and the first Black Diamond
                Invisalign Provider in India across 2022, 2023, 2024 and 2025.
              </p>
            </article>
            <article className="card">
              <h3>Align faculty — teaches other providers</h3>
              <p>
                {site.doctor.name} is on the Align Technology faculty, training other dentists and
                orthodontists in Invisalign aligner treatment.
              </p>
            </article>
            <article className="card">
              <h3>Diagnosis before price</h3>
              <p>
                Every plan starts with a clinical assessment, photographs and a 3D intraoral scan —
                so the treatment you are quoted is the treatment your teeth actually need.
              </p>
            </article>
            <article className="card">
              <h3>Digital simulation before you commit</h3>
              <p>
                You see the predicted movement of your teeth, the number of aligners and the
                estimated duration before treatment starts.
              </p>
            </article>
            <article className="card">
              <h3>Three clinics across Hyderabad</h3>
              <p>
                KPHB Colony, Jubilee Hills and Banjara Hills — so your aligner reviews fit your
                commute and your workday.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------ WHAT IS INVISALIGN ----------------------- */}
      <section className="section section--mist" id="what-is-invisalign">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Understanding the treatment</p>
            <h2>What is Invisalign, and how does it move teeth invisibly?</h2>
            <p className="lead">
              Invisalign treatment straightens teeth with a series of custom-made, transparent
              removable aligners instead of metal brackets and wires.
            </p>

            <h3>Custom aligners, changed on a schedule</h3>
            <p>
              Each aligner is a thin, clear tray moulded to fit your teeth exactly at one stage of
              the planned movement. You wear it for 20 to 22 hours a day and change to the next
              aligner every 7 to 10 days at our clinic&rsquo;s direction. Each new aligner nudges
              specific teeth a fraction of a millimetre, and the sequence adds up to the corrected
              position.
            </p>

            <h3>Planned on a 3D digital model, not on a guess</h3>
            <p>
              An intraoral scanner builds a precise 3D model of your teeth and bite. Your
              orthodontist designs the tooth movement on that model, and you can see the predicted
              end position before you commit to treatment.
            </p>

            <h3>Removable, so nothing changes about your day</h3>
            <p>
              Brush and floss normally, eat everything you already eat, and take the aligner out for
              meetings, photographs or sport. There are no wires to tighten, no food restrictions
              and no brackets catching your cheek.
            </p>

            <h3>SmartTrack material and comfort</h3>
            <p>
              Invisalign aligners are made from a medical-grade polymer designed to apply gentle
              continuous force, which most patients describe as pressure rather than pain for a day
              or two after each change.
            </p>

            <p>
              Read the full step-by-step breakdown on our{' '}
              <Link href="/invisalign-treatment">Invisalign treatment process page</Link>, including
              what happens at every appointment.
            </p>
          </div>

          <div>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/invisalign-treatment-planning.jpg"
              width={1336}
              height={751}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Digital scanning replaces messy impressions and lets you preview your result before
                treatment begins.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* -------------------------------- JOURNEY -------------------------------- */}
      <section className="section" id="process">
        <div className="wrap">
          <p className="eyebrow">Invisalign Treatment</p>
          <h2>Your Invisalign treatment journey, step by step</h2>
          <p className="lead">
            A predictable, five-stage process. Most patients are in aligners within two to three
            weeks of the first visit.
          </p>

          <ol className="steps" style={{ marginTop: 34 }}>
            <li className="step step--media"><div className="step-media"><img src="/images/step-1-scan.jpg" width={1336} height={751} alt="Intraoral 3D scanner used to record teeth and bite at the Invisalign assessment" loading="lazy" /></div><h3>Consultation, assessment and 3D scan</h3>
              <p>
                Clinical examination, photographs, bite assessment and an intraoral scan. You leave
                knowing whether Invisalign is right for you and what it will involve.
              </p>
            </li>
            <li className="step step--media"><div className="step-media"><img src="/images/step-2-plan.jpg" width={1336} height={751} alt="Digital treatment plan showing predicted Invisalign tooth movement on screen" loading="lazy" /></div><h3>Digital treatment plan and smile simulation</h3>
              <p>
                {site.doctor.name} designs the movement plan and shows you the simulated end
                position, aligner count and expected duration before you pay for treatment.
              </p>
            </li>
            <li className="step step--media"><div className="step-media"><img src="/images/step-3-aligner-fit.jpg" width={1336} height={751} alt="Invisalign aligner being fitted onto a dental model before issue" loading="lazy" /></div><h3>Custom aligners and attachments</h3>
              <p>
                Your aligners are manufactured to the plan. Small tooth-coloured attachments may be
                bonded to guide specific movements — they are barely visible.
              </p>
            </li>
            <li className="step step--media"><div className="step-media"><img src="/images/step-4-progress.jpg" width={1336} height={751} alt="A sequence of Invisalign aligners laid out for the treatment plan" loading="lazy" /></div><h3>Aligner changes with scheduled reviews</h3>
              <p>
                You change aligners every 7 to 10 days and visit us for short progress reviews,
                where we check fit, tracking and oral health.
              </p>
            </li>
            <li className="step step--media"><div className="step-media"><img src="/images/step-5-retainer.jpg" width={1336} height={751} alt="Retainer used to hold the Invisalign result after treatment is complete" loading="lazy" /></div><h3>Refinements and retainers</h3>
              <p>
                Any fine tuning is done with refinement aligners, then you move to retainers so the
                result stays stable for life.
              </p>
            </li>
          </ol>

          <p style={{ marginTop: 26 }}>
            <Link href="/invisalign-treatment">
              Read the detailed Invisalign treatment process, week by week →
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------- CANDIDATES ------------------------------ */}
      <section className="section section--mist" id="candidates">
        <div className="wrap">
          <p className="eyebrow">Candidacy</p>
          <h2>Who is a good candidate for Invisalign in Hyderabad?</h2>
          <div className="grid grid--2" style={{ marginTop: 30 }}>
            <div className="card card--teal">
              <h3>Usually well suited to aligners</h3>
              <ul>
                {candidatesGood.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Needs a closer look or a different approach</h3>
              <ul>
                {candidatesCheck.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="small">
                Being told you are &ldquo;not a candidate&rdquo; elsewhere does not always hold —
                complex cases are a large part of this practice. Equally, we will not start aligner
                treatment on a case that would be better served another way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ INVISALIGN VS ---------------------------- */}
      <section className="section" id="invisalign-vs-braces">
        <div className="wrap">
          <p className="eyebrow">Comparing options</p>
          <h2>Invisalign vs traditional braces: an honest comparison</h2>
          <div className="table-scroll" style={{ marginTop: 28 }}>
            <table>
              <caption>
                General guidance only. Your orthodontist will recommend the appliance that fits your
                clinical situation.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Factor</th>
                  <th scope="col">Invisalign aligners</th>
                  <th scope="col">Fixed metal or ceramic braces</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Visibility</th>
                  <td>Almost invisible at conversational distance</td>
                  <td>Visible brackets and wires</td>
                </tr>
                <tr>
                  <th scope="row">Removability</th>
                  <td>Removed for eating, brushing and flossing</td>
                  <td>Fixed for the whole treatment</td>
                </tr>
                <tr>
                  <th scope="row">Food restrictions</th>
                  <td>None</td>
                  <td>Avoid hard, sticky and staining foods</td>
                </tr>
                <tr>
                  <th scope="row">Appointment rhythm</th>
                  <td>Short reviews every 6 to 10 weeks</td>
                  <td>Wire adjustments every 4 to 6 weeks</td>
                </tr>
                <tr>
                  <th scope="row">Oral hygiene</th>
                  <td>Easier — nothing fixed over the gums</td>
                  <td>Needs extra care around brackets</td>
                </tr>
                <tr>
                  <th scope="row">Complex bite problems</th>
                  <td>Many are treatable; severe skeletal cases may not be ideal</td>
                  <td>Stronger control for severe cases</td>
                </tr>
                <tr>
                  <th scope="row">Relative cost</th>
                  <td>Higher than metal braces</td>
                  <td>Lower than aligners</td>
                </tr>
                <tr>
                  <th scope="row">Discipline required</th>
                  <td>High — 20 to 22 hours of wear daily</td>
                  <td>None from the patient</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ------------------------------- COST TEASER ----------------------------- */}
      <section className="section section--mist" id="cost">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Invisalign Cost</p>
            <h2>What does Invisalign cost in Hyderabad?</h2>
            <p className="lead">
              Expect roughly ₹1,20,000 to ₹4,50,000 at our centre depending on case complexity, with
              most patients in the ₹2,00,000 to ₹3,20,000 range.
            </p>
            <p>
              Aligner fees are driven by how much movement is needed, how many aligners and
              refinements your case requires, whether attachments or extractions are involved, and
              the retention plan. A clinic that quotes a flat price before scanning you is guessing.
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/invisalign-cost">
                Full Invisalign cost breakdown
              </Link>
              <a className="btn btn--ghost" href={whatsappLink('Hi, can you share the Invisalign cost range for my case?')} target="_blank" rel="noopener">
                Ask for an exact quote
              </a>
            </div>
          </div>
          <div>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/invisalign-aligners-hero.jpg"
              width={1920}
              height={1080}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Your quote follows the scan, not the other way round.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* --------------------------------- REVIEWS ------------------------------- */}
      <section className="section" id="reviews">
        <div className="wrap">
          <p className="eyebrow">Patient experiences</p>
          <h2>What Invisalign patients say about treatment here</h2>
          <div className="grid grid--2" style={{ marginTop: 30 }}>
            {[0, 1].map((i) => (
              <blockquote className="review" key={i}>
                <p>
                  &ldquo;
                  {i === 0
                    ? 'Doctor Praveen has been friendly throughout the process and helped me understand the correct Invisalign treatments according to my teeth arrangement. The results are great! The clinic team is very professional and wait times are minimal. I feel more confident now when I speak or smile.'
                    : 'I visited for Invisalign treatment, and I was incredibly impressed with the entire experience. Dr. Praveen and his staff are friendly and professional, and they made me feel comfortable and at ease throughout the entire process. My smile improved a lot.'}
                  &rdquo;
                </p>
                <footer>
                  {i === 0 ? 'Bittu Kumar' : 'S. Veena'} · verified patient review
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="small" style={{ marginTop: 20 }}>
            Individual results vary with case complexity, aligner wear time and retention. No
            outcome is guaranteed.
          </p>
          <p>
            <Link href="/before-after">See before and after Invisalign results →</Link>
          </p>
        </div>
      </section>

      {/* --------------------------------- CLINICS ------------------------------- */}
      <InstagramStrip />

      <section className="section section--mist" id="clinics">
        <div className="wrap">
          <p className="eyebrow">Invisalign Center locations</p>
          <h2>Our Invisalign Center clinics in Hyderabad</h2>
          <p className="lead">
            Same orthodontist-led Invisalign care, three convenient points in the city. Open Monday
            to Sunday, 10:00 AM to 8:00 PM.
          </p>

          <div className="grid grid--3" style={{ marginTop: 30 }}>
            {site.clinics.map((clinic, clinicIndex) => (
              <article className="card clinic-card" key={clinic.name}><div className="clinic-media"><img src={['/images/instagram-clinic-reception.jpg','/images/invisalign-clinic-treatment-room.jpg','/images/invisalign-clinic-hyderabad.jpg'][clinicIndex % 3]} width={1336} height={751} alt={`${clinic.name} Invisalign clinic in Hyderabad`} loading="lazy" /></div><div className="clinic-body"><h3>{clinic.name}</h3><p>{clinic.address}</p>
                <p>
                  <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
                </p>
                <p>
                  <a href={mapLink(clinic.mapQuery)} target="_blank" rel="noopener">
                    Open in Google Maps →
                  </a>
                </p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 30 }}>
            <iframe
              title="Map of our Invisalign clinics in Hyderabad"
              src={mapEmbed(site.clinics[0].mapQuery)}
              width="100%"
              height="360"
              loading="lazy"
              style={{ border: '1px solid var(--line)', borderRadius: 14 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* --------------------------------- BOOKING ------------------------------- */}
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Book an appointment</p>
            <h2>Start with a scan, not a sales conversation</h2>
            <p>
              Your first appointment includes a clinical assessment, photographs and a 3D scan, and
              you leave with a clear view of what Invisalign can and cannot do for your teeth.
            </p>
            <ul>
              <li>Assessment and scan at the clinic</li>
              <li>Simulated end result and aligner count</li>
              <li>Written cost, instalment options and timeline</li>
              <li>No obligation to start treatment the same day</li>
            </ul>
            <p>
              Prefer to talk first? Call{' '}
              <a href={telLink}>{site.phoneDisplay}</a> or{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener">
                message us on WhatsApp
              </a>
              .
            </p>
            <figure className="figure" style={{ marginTop: 8 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/invisalign-clinic-hyderabad.jpg"
              width={1024}
              height={576}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Treatment room at one of our Hyderabad clinics.
              </figcaption>
            </figure>
          </div>
          <LeadForm />
        </div>
      </section>

      <FaqSection
        items={homeFaqs}
        title="Invisalign Hyderabad — frequently asked questions"
        intro="Straight answers to what patients ask before booking an Invisalign consultation in Hyderabad."
      />
    </>
  );
}
