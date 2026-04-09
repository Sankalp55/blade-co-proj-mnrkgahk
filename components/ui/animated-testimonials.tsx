'use client';

import * as React from 'react';

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  title?: string;
  avatar?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
  intervalMs?: number;
};

/**
 * Minimal, build-safe AnimatedTestimonials component.
 * Matches the named export used by blocks.
 */
export function AnimatedTestimonials({
  testimonials,
  className,
  intervalMs = 5000,
}: AnimatedTestimonialsProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!testimonials?.length) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [testimonials, intervalMs]);

  if (!testimonials?.length) return null;

  const t = testimonials[index];

  return (
    <div className={className}>
      <figure>
        <blockquote className="text-balance">{t.quote}</blockquote>
        <figcaption className="mt-4 flex items-center gap-3">
          {t.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.avatar}
              alt={t.name}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : null}
          <div>
            <div className="font-medium">{t.name}</div>
            {t.title ? <div className="text-sm opacity-70">{t.title}</div> : null}
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
