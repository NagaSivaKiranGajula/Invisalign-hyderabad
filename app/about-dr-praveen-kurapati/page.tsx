import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import LeadForm from '@/components/LeadForm';
import FaqSection from '@/components/FaqSection';
import JsonLd from '@/components/JsonLd';
import { site, whatsappLink, telLink, mapLink } from '@/lib/site';
import { doctorSchema, serviceSchema, medicalWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Dr. Praveen Kurapati | Best Invisalign Provider in Hyderabad',
  description:
    'Dr. Praveen Kurapati, MDS — Invisalign Black Diamond Provider, Align faculty and 6,000+ aligner cases. Meet the orthodontist behind our Hyderabad Invisalign Center.',
  alternates: { canonical: '/about-dr-praveen-kurapati' },
  openGraph: {
    url: `${site.url}/about-dr-praveen-kurapati`,
    title: 'Dr. Praveen Kurapati | Best Invisalign Provider in Hyderabad',
    description:
      'Black Diamond Invisalign Provider in India across 2022–2025, Align faculty, and 6,000+ Invisalign aligner cases completed — including complex and re-treatment cases.',
    images: ['/images/og-invisalign-hyderabad.jpg'],
  },
};

const doctorFaqs = [
  {
    q: 'Is Dr. Praveen Kurapati an orthodontist or a general dentist?',
    a: 'He is a specialist orthodontist, holding an MDS in Orthodontics and Dentofacial Orthopaedics (BDS, MDS). Invisalign treatment should be planned by someone trained in tooth movement, which is why we list the qualification alongside the provider tier.',
  },
  {
    q: 'What is a Black Diamond Invisalign Provider?',
    a: 'Align Technology tiers Invisalign providers by the number of completed cases. Diamond, then Diamond Plus, then Black Diamond sit at the top of that ladder, and Black Diamond status reflects a very high cumulative and annual case volume. Dr. Praveen Kurapati was the first Black Diamond Invisalign Provider in India and held that status in 2022, 2023, 2024 and 2025.',
  },
  {
    q: 'Why does provider tier matter for my treatment?',
    a: 'High case volume means pattern recognition. An orthodontist who has finished thousands of aligner cases has seen how specific movements behave, when a plan needs stiffening, when attachments will not be enough, and when aligners are simply the wrong tool. That experience shows up in the finish and in the number of refinements needed.',
  },
  {
    q: 'Does Dr. Praveen treat complex Invialign cases?',
    a: 'Complex Invisalign aligner cases are a core part of the practice — severe crowding, bite correction, extraction-based plans, and re-treatment of cases that did not finish well elsewhere. He is also on the Align faculty, teaching other clinicians how to plan difficult aligner cases.',
  },
  {
    q: 'Where does Dr. Praveen Kurapati practise in Hyderabad?',
    a: 'Invisalign consultations are available at three Hyderabad locations: KPHB Colony (Kukatpally) on Road No 1, Jubilee Hills on Road No 36, and Banjara Hills at Park Dental Care on Road No 2. All clinics are open Monday to Sunday, 10:00 AM to 8:00 PM.',
  },
  {
    q: 'Can I get a second opinion on an Invisalign plan made elsewhere?',
    a: 'Yes, and it is a sensible thing to do for an expensive, long treatment. Bring your records or scan if you have them. We will review the plan, tell you whether the appliance choice fits your case, and explain what we would do differently and why.',
  },
];

const milestones = [
  {
    year: '2019',
    title: 'Invisalign certification',
    text: 'Certified as an Invisalign provider, moving the practice toward Invisalign aligner therapy as a primary treatment.',
  },
  {
    year: '2021',
    title: 'First Diamond Invisalign Provider from Hyderabad',
    text: 'Recognised at Diamond tier — a marker of completed case volume well above most providers in the city.',
  },
  {
    year: '2022',
    title: 'First Black Diamond Invisalign Provider in India',
    text: 'Reached the top provider tier, reflecting one of the highest aligner case volumes in the country.',
  },
  {
    year: '2023 – 2025',
    title: 'Black Diamond status maintained',
    text: 'Continued at Black Diamond tier year after year while also serving on the Align faculty, training other providers.',
  },
  {
    year: 'Today',
    title: `${site.doctor.invisalignCases} aligner cases`,
    text: 'Recognised among the highest-volume Invisalign providers in the Asia-Pacific region, including complex and re-treatment cases.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          doctorSchema(),
          serviceSchema({
            name: 'Invisalign treatment planned by Dr. Praveen Kurapati',
            description:
              'Invisalign aligner treatment in Hyderabad planned and supervised by Dr. Praveen Kurapati, Black Diamond Invisalign Provider and Align faculty member.',
            path: '/about-dr-praveen-kurapati',
          }),
          medicalWebPageSchema({
            path: '/about-dr-praveen-kurapati',
            title: 'Dr. Praveen Kurapati — Invisalign Provider in Hyderabad',
            description:
              'Profile, credentials and Invisalign experience of Dr. Praveen Kurapati, orthodontist in Hyderabad.',
          }),
        ]}
      />

      <Breadcrumbs
        trail={[{ name: 'About Dr. Praveen Kurapati', href: '/about-dr-praveen-kurapati' }]}
      />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Best Invisalign Provider in Hyderabad</p>
            <h1>{site.doctor.name} — Invisalign provider to Hyderabad and the region</h1>
            <p className="hero-sub">
              {site.doctor.qualifications}. First Diamond Invisalign Provider from Hyderabad, first
              Black Diamond Invisalign Provider in India, Align faculty, and{' '}
              {site.doctor.invisalignCases} completed Invisalign aligner cases — including the complex
              ones.
            </p>
            <div className="pill-row">
              <li className="pill">MDS Orthodontics</li>
              <li className="pill">{site.doctor.experience} years in practice</li>
              <li className="pill">Black Diamond 2022–2025</li>
              <li className="pill">Align faculty</li>
            </div>
            <div className="btn-row" style={{ marginTop: 22 }}>
              <a className="btn btn--primary" href="#book">
                Book a consultation with Dr. Praveen
              </a>
              <a
                className="btn btn--wa"
                href={whatsappLink('Hi, I would like an Invisalign consultation with Dr. Praveen.')}
                target="_blank"
                rel="noopener"
              >
                WhatsApp the clinic
              </a>
            </div>
          </div>
          <div>
            <figure className="figure">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/images/instagram-clinic-reception.jpg"
              width={1336}
              height={751}
              alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy"
            />
              <figcaption className="figcaption">
                Dr. Praveen Kurapati consults at three Hyderabad locations. Clinic photography is
                supplied by the practice.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--tight"><div className="wrap"><figure className="band-figure"><img src="/images/invisalign-clinic-treatment-room.jpg" width={1336} height={751} alt="Treatment room at our Invisalign clinic in Hyderabad" loading="lazy" /><figcaption>Three clinics across Hyderabad, one standard of orthodontist-led aligner care.</figcaption></figure></div></section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Profile</p>
            <h2>Who is Dr. Praveen Kurapati?</h2>
            <p>
              {site.doctor.name} is a specialist orthodontist in Hyderabad with{' '}
              {site.doctor.experience} years in clinical practice and an MDS in Orthodontics and
              Dentofacial Orthopaedics. His practice is built around Invisalign aligner therapy at a
              scale that is rare in India: over {site.doctor.invisalignCases} Invisalign cases
              completed, with a case mix that runs from routine crowding to complex bite correction
              and re-treatment of cases begun elsewhere.
            </p>
            <p>
              He was the first Diamond Invisalign Provider from Hyderabad in 2021, and then the first
              Black Diamond Invisalign Provider in India — a tier Align Technology reserves for
              providers at the very top of the global case-volume ladder — holding that status in
              2022, 2023, 2024 and 2025. Alongside clinical work he serves on the Align faculty,
              training other dentists and orthodontists in Invisalign aligner treatment planning.
            </p>
            <p>
              Patients looking for Invisalign in Hyderabad often arrive here after being told their
              case is too complex, or after a previous aligner plan stalled. Complex aligner work is
              a large part of what this practice does.
            </p>
          </div>
          <div>
            <div className="card card--teal">
              <h3>Credentials at a glance</h3>
              <ul>
                {site.doctor.credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="callout" style={{ marginTop: 20 }}>
              <h3>Verify before you book</h3>
              <p>
                Provider tiers, qualifications and case volumes can all be checked. Ask any clinic
                you are considering for proof of credentials — including ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="recognition">
        <div className="wrap">
          <p className="eyebrow">Recognition timeline</p>
          <h2>A record built on aligner case volume</h2>
          <ol className="steps" style={{ marginTop: 32 }}>
            {milestones.map((item) => (
              <li className="step" key={item.year}>
                <h3>
                  {item.year} — {item.title}
                </h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="why-tier">
        <div className="wrap">
          <p className="eyebrow">Why it matters</p>
          <h2>Why the provider tier changes your treatment</h2>
          <div className="grid grid--3" style={{ marginTop: 30 }}>
            <div className="card">
              <h3>Planning judgement</h3>
              <p>
                Thousands of cases teach you how much torque a rotated tooth needs, when an
                attachment will fail, and which movements the aligner simply will not deliver.
              </p>
            </div>
            <div className="card">
              <h3>Fewer surprises</h3>
              <p>
                Experience makes duration, aligner count and cost estimates more accurate, so
                treatment is less likely to overrun the quote.
              </p>
            </div>
            <div className="card">
              <h3>Complex case capability</h3>
              <p>
                Being able to treat difficult alignment and bite problems with aligners instead of
                defaulting everyone to braces is a direct product of case volume.
              </p>
            </div>
            <div className="card">
              <h3>Refinement discipline</h3>
              <p>
                A high-volume provider knows when to stop refining and when to keep going, which
                protects both your money and your time.
              </p>
            </div>
            <div className="card">
              <h3>Teaching the technique</h3>
              <p>
                Align faculty work means the planning standards used on your case are also the ones
                being taught to other clinicians.
              </p>
            </div>
            <div className="card">
              <h3>Retention planning</h3>
              <p>
                Long-term stability is designed from day one, not added as an afterthought once
                aligners come off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist" id="complex-cases">
        <div className="wrap split split--media-left">
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
                Complex plans are designed stage by stage on the digital model.
              </figcaption>
            </figure>
          </div>
          <div>
            <p className="eyebrow">Complex cases</p>
            <h2>Complex and revision Invisalign cases</h2>
            <p>
              &ldquo;Complex&rdquo; usually means one or more of these, and all of them are handled
              in this practice:
            </p>
            <ul>
              <li>Severe crowding where extractions are needed to create space</li>
              <li>Deep bite, open bite and crossbite requiring bite reconstruction</li>
              <li>Cases needing aligners combined with fixed appliances or auxiliaries</li>
              <li>Re-treatment after a previous aligner plan that did not finish</li>
              <li>Adult cases with gum disease, wear or missing teeth to work around</li>
              <li>Teenage cases where eruption and compliance both need managing</li>
            </ul>
            <h3>A second opinion, without pressure</h3>
            <p>
              If you have been told aligners cannot fix your case, or you are midway through
              treatment that is not progressing, bring your records and we will review them
              honestly. Sometimes the answer is a better aligner plan; sometimes it is a different
              appliance — and you will be told which.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="clinics">
        <div className="wrap">
          <p className="eyebrow">Locations</p>
          <h2>Where to see {site.doctor.name} in Hyderabad</h2>
          <p className="lead">
            Invisalign consultations and aligner reviews are available at three locations, all open
            Monday to Sunday, 10:00 AM to 8:00 PM.
          </p>
          <div className="grid grid--3" style={{ marginTop: 30 }}>
            {site.clinics.map((clinic) => (
              <article className="card" key={clinic.name}>
                <h3>{clinic.name}</h3>
                <p>{clinic.address}</p>
                <p>
                  <a href={`tel:${clinic.phone}`}>{clinic.phoneDisplay}</a>
                </p>
                <p>
                  <a href={mapLink(clinic.mapQuery)} target="_blank" rel="noopener">
                    Get directions →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Book an appointment</p>
            <h2>Consult Dr. Praveen Kurapati about Invisalign</h2>
            <p>
              Your appointment includes a clinical assessment, photographs and a 3D scan, plus a
              digital simulation and a written plan with costs — so you can decide with evidence.
            </p>
            <p>
              Call <a href={telLink}>{site.phoneDisplay}</a> or{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener">
                message us on WhatsApp
              </a>{' '}
              for the earliest appointment.
            </p>
            <p>
              Still deciding? Read the{' '}
              <Link href="/invisalign-treatment">Invisalign treatment process</Link>, the{' '}
              <Link href="/invisalign-cost">Hyderabad cost guide</Link>, or view{' '}
              <Link href="/before-after">case types we treat</Link>.
            </p>
          </div>
          <LeadForm
            id="book"
            heading="Book with Dr. Praveen Kurapati"
            subheading="Share your details and our team will call you back with the next available Invisalign consultation."
          />
        </div>
      </section>

      <FaqSection
        items={doctorFaqs}
        eyebrow="About the Clinician"
        title="Questions about Dr. Praveen Kurapati and Invisalign"
      />
    </>
  );
}
