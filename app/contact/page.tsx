import { ContactForm } from '@/components/blocks/ContactForm'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const intent = typeof sp.intent === 'string' ? sp.intent : undefined

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              Contact Blade & Co.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Booking requests, product questions, or pickup coordination—reach out and we’ll respond
              quickly. If you’re contacting about an appointment, include your preferred day/time window
              and whether you want classic, modern texture, beard work, or a hot towel shave.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Send a Message
              </a>
              <a
                href="#location"
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold"
              >
                Get Directions
              </a>
            </div>
            {intent ? (
              <p className="mt-4 text-sm text-muted-foreground">
                You’re contacting us about: <span className="font-semibold text-foreground">{intent}</span>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Booking & Support"
            subheadline="Tell us what you want—classic cut, beard grooming, hot towel shave, or modern styling. We’ll confirm details and share the next available times."
            contactInfo={[
              { label: 'Email', value: 'hello@bladeandco.nyc' },
              { label: 'Phone', value: '(212) 555-0199' },
              { label: 'Hours', value: 'Mon–Fri 10–8 • Sat 10–6 • Sun 12–5' },
            ]}
          />

          <div className="mt-6 rounded-xl border border-border bg-background p-5 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">What to include for faster booking</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Your preferred day and a 2–3 hour window</li>
              <li>Service goal (clean taper, textured crop, beard discipline, hot towel shave)</li>
              <li>Any skin sensitivity or irritation history (for shaves)</li>
              <li>If you want downtown pickup for products, include your pickup window</li>
            </ul>
            <p className="mt-3">
              Note: This form is client-side only. For urgent changes within 24 hours, call the shop.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Downtown"
            headline="Downtown Manhattan"
            subheadline="Easy to reach—ideal for pre-meeting cleanups or weekend resets."
            features={[
              {
                title: 'Address',
                description:
                  'Downtown Manhattan, New York, NY (exact address shown after booking confirmation). We keep it simple: confirm, arrive, sit down, leave sharp.',
              },
              {
                title: 'Subway access',
                description:
                  'Close to major lines—arrive on time, leave sharp. If you’re cutting it close, message us and we’ll adjust where possible.',
              },
              {
                title: 'Pickup',
                description:
                  'Order online and pick up in-shop—fast and simple. We’ll coordinate a window so you can grab it without waiting.',
              },
            ]}
          />

          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="font-semibold">Map</p>
            <p className="mt-2 text-sm text-muted-foreground">
              For privacy, we share the exact address after booking confirmation. Use “Downtown Manhattan,
              New York, NY” for general navigation planning.
            </p>
            <div className="mt-4 aspect-[16/8] w-full overflow-hidden rounded-xl border border-border bg-muted">
              <iframe
                title="Downtown Manhattan Map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Downtown%20Manhattan%2C%20New%20York%2C%20NY&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <LogoCloud
            headline="What You Can Expect"
            logos={[
              { name: 'Fast replies', imageUrl: '/images/team-1.png' },
              { name: 'Clear pricing', imageUrl: '/images/office.png' },
              { name: 'Secure checkout', imageUrl: '/images/meeting.png' },
              { name: 'NYC pickup', imageUrl: '/images/handshake.png' },
            ]}
          />
          <p className="mt-6 max-w-3xl text-muted-foreground">
            Whether you’re booking a service or ordering essentials, we keep the experience clean:
            straightforward pricing, quick communication, and details that hold up.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Get the Downtown Drop List"
            description="Product drops, grooming tips, and last-minute openings—kept minimal."
            ctaLabel="Subscribe"
            ctaHref="/contact#contact-form"
          />
        </div>
      </section>
    </div>
  )
}
