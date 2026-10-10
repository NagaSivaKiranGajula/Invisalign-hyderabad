import JsonLd from '@/components/JsonLd';
import { faqSchema, type FaqItem } from '@/lib/schema';

type Props = {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  intro?: string;
  withSchema?: boolean;
};

export default function FaqSection({
  items,
  title = 'Invisalign questions patients ask us most',
  eyebrow = 'Invisalign FAQs',
  intro,
  withSchema = true,
}: Props) {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p className="lead">{intro}</p> : null}

        <div className="faq" style={{ marginTop: 26 }}>
          {items.map((item) => (
            <details key={item.q}>
              <summary>
                <h3 style={{ display: 'inline', margin: 0, font: 'inherit' }}>{item.q}</h3>
              </summary>
              <div className="faq-body">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}
    </section>
  );
}
