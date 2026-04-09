import { ContactForm } from '@/components/blocks/ContactForm'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)]">
              Find Blade & Co. in Downtown Manhattan
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Send a booking request, ask about availability, or get directions. We’ll respond quickly during shop
              hours. If you already know what you want, include your preferred day/time and we’ll confirm the slot.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Send booking request
              </a>
              <a
                href="#phone"
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:shadow-md transition-shadow"
              >
                Call now
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="p-6">
              <p className="text-sm text-muted-foreground">Storefront</p>
              <p className="mt-2 text-2xl font-semibold font-[family-name:var(--font-heading)]">
                Warm glow, street-level access
              </p>
              <p className="mt-3 text-muted-foreground">
                Located Downtown near major subway lines. If you’re running late, call—we’ll do our best to adjust while
                keeping the schedule respectful for everyone.
              </p>
            </div>
            <div className="px-6 pb-6">
              <div className="h-48 w-full rounded-2xl border border-border bg-muted" />
              <p className="mt-3 text-sm text-muted-foreground">
                Image placeholder (expects /images/contact-hero.jpg).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Booking request (client-side form)"
            subheadline="Tell us what you want and when you’re free. We’ll confirm the slot. This form is client-side only—no data is stored."
            contactInfo={[
              { label: 'Phone', value: '(212) 555-0199' },
              { label: 'Email', value: 'appointments@bladeandco.nyc' },
              { label: 'Hours', value: 'Mon–Fri 10–8 • Sat 10–6 • Sun 11–5' },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div id="phone" className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Phone</p>
              <a className="mt-2 block text-lg font-semibold" href="tel:+12125550199">
                (212) 555-0199
              </a>
              <p className="mt-2 text-muted-foreground">
                Best for same-day availability and quick questions.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Email</p>
              <a className="mt-2 block text-lg font-semibold" href="mailto:appointments@bladeandco.nyc">
                appointments@bladeandco.nyc
              </a>
              <p className="mt-2 text-muted-foreground">
                Ideal for sending reference photos or flexible scheduling.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Hours</p>
              <p className="mt-2 text-lg font-semibold">Mon–Fri 10–8</p>
              <p className="text-lg font-semibold">Sat 10–6 • Sun 11–5</p>
              <p className="mt-2 text-muted-foreground">
                Peak times fill quickly—booking ahead is recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">Location</h2>
            <p className="mt-4 text-muted-foreground text-lg">Downtown Manhattan (near major subway lines).</p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-sm text-muted-foreground">Address</p>
              <p className="mt-3 text-xl font-semibold font-[family-name:var(--font-heading)]">Blade & Co.</p>
              <p className="mt-1 text-muted-foreground">123 Mercer St</p>
              <p className="text-muted-foreground">New York, NY 10012</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
                  href="https://www.google.com/maps?q=123+Mercer+St,+New+York,+NY+10012"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
                <a
                  className="inline-flex items-center rounded-xl border border-border bg-muted px-5 py-3 text-foreground hover:shadow-md transition-shadow"
                  href="/services"
                >
                  View services
                </a>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">Embed is front-end only in this build.</p>
            </div>

            <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="p-6">
                <p className="text-sm text-muted-foreground">Map embed placeholder</p>
                <p className="mt-2 text-muted-foreground">
                  Provider: Google Maps • Query: 123 Mercer St, New York, NY 10012
                </p>
              </div>
              <div className="px-6 pb-6">
                <div className="h-72 w-full rounded-2xl border border-border bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              What to expect
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">A calm appointment with high standards.</p>
          </div>
          <div className="mt-10">
            <StatsCounter
              stats={[
                { label: 'Consultation', value: 'Always' },
                { label: 'Sanitation', value: 'Strict' },
                { label: 'Finish work', value: 'Detailed' },
                { label: 'Vibe', value: 'Moody' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Contact FAQ"
            subheadline="Fast answers for planning your visit."
            items={[
              {
                question: 'Do you accept same-day bookings?',
                answer:
                  'When available, yes. Send a request with your preferred time and we’ll confirm quickly during shop hours.',
              },
              {
                question: 'Can I bring reference photos?',
                answer:
                  'Absolutely—photos help us match shape, length, and finish. Feel free to email them or show them at the start.',
              },
              {
                question: 'What if I’m running late?',
                answer:
                  'Message or call. We’ll do our best to accommodate, but we may need to adjust the service to stay on schedule.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Get last-minute openings"
            description="Join the list for schedule openings and limited product drops. (Demo signup—client-side only.)"
            ctaLabel="Subscribe"
            ctaHref="/contact"
          />
          <p className="mt-4 text-sm text-muted-foreground">Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
