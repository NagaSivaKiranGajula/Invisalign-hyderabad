'use client';

import { useRef, useState } from 'react';
import { whatsappLink } from '@/lib/site';

type Props = {
  title: string;
  detail: string;
  beforeSrc?: string;
  afterSrc?: string;
  /** When true, the panels are drawn illustrations rather than patient photos. */
  illustrative?: boolean;
  tag?: string;
};

/**
 * Draggable before/after comparison.
 *
 * Drop real, consented patient photos into public/images/results/ and pass
 * beforeSrc / afterSrc — the slider works exactly the same. Until then it
 * renders a clearly-labelled illustrative panel instead of implying a result.
 */
export default function BeforeAfter({
  title,
  detail,
  beforeSrc,
  afterSrc,
  illustrative = true,
  tag,
}: Props) {
  const [split, setSplit] = useState(50);
  const stageRef = useRef<HTMLDivElement>(null);

  const hasPhotos = Boolean(beforeSrc && afterSrc);

  return (
    <figure className="ba">
      <div className="ba-stage" ref={stageRef} style={{ ['--split' as string]: `${split}%` }}>
        <div className="ba-layer ba-layer--before">
          {hasPhotos ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={beforeSrc} alt={`${title} — before Invisalign treatment`} loading="lazy" />
          ) : (
            <PlaceholderPanel label="Before" />
          )}
        </div>
        <div className="ba-layer ba-layer--after">
          {hasPhotos ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={afterSrc} alt={`${title} — after Invisalign treatment`} loading="lazy" />
          ) : (
            <PlaceholderPanel label="After" />
          )}
        </div>

        <span className="ba-tag ba-tag--before">Before</span>
        <span className="ba-tag ba-tag--after">After</span>

        <div className="ba-handle" aria-hidden="true">
          <span className="ba-knob">↔</span>
        </div>

        <input
          className="ba-range"
          type="range"
          min={0}
          max={100}
          value={split}
          aria-label={`Reveal before and after for ${title}`}
          onChange={(event) => setSplit(Number(event.target.value))}
        />
      </div>

      <figcaption className="ba-meta">
        <h3>{title}</h3>
        <p>{detail}</p>
        <div className="btn-row" style={{ marginTop: 12 }}>
          {illustrative || !hasPhotos ? (
            <span className="illustrative">Illustrative — awaiting verified patient photos</span>
          ) : null}
          <a
            className="btn btn--ghost btn--sm"
            href={whatsappLink(`Hi, I saw the ${title} case on your site. Can you check if my case is similar?`)}
            target="_blank"
            rel="noopener"
          >
            Ask about my case
          </a>
        </div>
        {tag ? <p className="small" style={{ marginTop: 10 }}>{tag}</p> : null}
      </figcaption>
    </figure>
  );
}

function PlaceholderPanel({ label }: { label: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={`${label} reference illustration`}
      style={{ width: '100%', height: '100%' }}
    >
      <rect width="400" height="300" fill={label === 'Before' ? '#f8f1ef' : '#f6e6e3'} />
      <path
        d={
          label === 'Before'
            ? 'M60 210 Q110 120 160 150 Q200 172 240 138 Q290 96 340 186'
            : 'M60 190 Q110 140 160 152 Q200 160 240 148 Q290 132 340 168'
        }
        fill="none"
        stroke={label === 'Before' ? '#c2aeab' : '#99605f'}
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={label === 'Before' ? '2 16' : '0'}
      />
      <text
        x="200"
        y="258"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="15"
        fontWeight="600"
        fill="#55706f"
      >
        {label} — add your photo here
      </text>
    </svg>
  );
}
