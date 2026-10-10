'use client';

import { useEffect } from 'react';
import { instagram } from '@/lib/instagram';
import { site, whatsappLink } from '@/lib/site';

/**
 * Home page social-proof strip.
 *
 * With `instagram.posts` populated this renders genuine Instagram embeds.
 * Note: the embed script and frame must be allowed by the host's CSP —
 * https://www.instagram.com in both script-src and frame-src.
 * With it empty it renders designed placeholders carrying a visible badge, so
 * the layout can be reviewed without implying social proof that does not exist.
 */
export default function InstagramStrip() {
  const hasPosts = instagram.posts.length > 0;

  useEffect(() => {
    if (!hasPosts) return;
    const scriptId = 'instagram-embed-script';
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      const w = window as unknown as { instgrm?: { Embeds: { process: () => void } } };
      w.instgrm?.Embeds.process();
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);
  }, [hasPosts]);

  return (
    <section className="section" id="instagram">
      <div className="wrap">
        <p className="eyebrow">From the clinic</p>
        <h2>Invisalign cases and clinic life, as it happens</h2>
        <p className="lead">
          {hasPosts
            ? 'Recent posts from our Instagram — finished cases, aligner milestones and what happens inside the clinic.'
            : 'This strip is wired and ready for our Instagram. Until the account links are confirmed it shows designed placeholders rather than invented posts.'}
        </p>

        <div className="ig-grid" style={{ marginTop: 30 }}>
          {hasPosts
            ? instagram.posts.slice(0, 6).map((post) => (
                <div className="ig-embed" key={post.url}>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={post.url}
                    data-instgrm-version="14"
                    style={{ margin: 0, width: '100%', minWidth: 0 }}
                  >
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      View this post on Instagram
                    </a>
                  </blockquote>
                  {post.caption ? <p className="ig-caption">{post.caption}</p> : null}
                </div>
              ))
            : instagram.placeholders.slice(0, 6).map((tile) => (
                <figure className="ig-tile" key={tile.image + tile.intent}>
                  <span className="ig-badge">Placeholder</span>
                  <div className="ig-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tile.image} alt={tile.alt} width={1336} height={751} loading="lazy" />
                  </div>
                  <figcaption className="ig-caption">
                    <strong>{tile.intent}</strong>
                    <span className="small">
                      Reserved slot — replaced by the live post once the account links are added.
                    </span>
                  </figcaption>
                </figure>
              ))}
        </div>

        <div className="ig-foot">
          {hasPosts && instagram.profileUrl ? (
            <a className="btn btn--primary" href={instagram.profileUrl} target="_blank" rel="noopener">
              Follow {instagram.handle ? `@${instagram.handle}` : 'us'} on Instagram
            </a>
          ) : (
            <span className="callout ig-note">
              <strong>Ready to switch on.</strong> Add the clinic handle and up to six public post
              links in <code>lib/instagram.ts</code>, then allow{' '}
              <code>https://www.instagram.com</code> in the host Content-Security-Policy
              (script-src and frame-src). These tiles become live embeds with no layout change.
            </span>
          )}
          <a
            className="btn btn--wa"
            href={whatsappLink(
              'Hi, I saw your Invisalign posts and would like to know more about treatment.',
            )}
            target="_blank"
            rel="noopener"
          >
            Ask about a case like mine
          </a>
        </div>

        <p className="small" style={{ marginTop: 16 }}>
          {site.name} is an independently operated Invisalign provider clinic. Individual treatment
          results vary and are not guaranteed.
        </p>
      </div>
    </section>
  );
}
