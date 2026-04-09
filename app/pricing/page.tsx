import { PricingTable } from '@/components/blocks/PricingTable'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              Straightforward Pricing. Premium Results.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Choose a service or a membership. No hidden add-ons—just better grooming. If you’re not
              sure what to book, tell us your goal and timing and we’ll guide you to the best fit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact?intent=booking"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Request Appointment
              </a>
              <a
                href="/services"
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold"
              >
                See Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service pricing */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Service Pricing"
            subheadline="Designed for Downtown schedules—efficient, not rushed."
            tiers={[
              {
                name: 'Classic Cut',
                price: '$65',
                period: 'per visit',
                features: ['Consultation', 'Precision cut', 'Neck cleanup', 'Style finish'],
                ctaLabel: 'Book Classic',
                ctaHref: '/contact?intent=booking&service=classic-cut',
              },
              {
                name: 'Cut + Beard',
                price: '$95',
                period: 'per visit',
                features: [
                  'Classic or modern cut',
                  'Beard trim + line-up',
                  'Hot towel finish',
                  'Product guidance',
                ],
                ctaLabel: 'Book Combo',
                ctaHref: '/contact?intent=booking&service=cut-beard',
                highlighted: true,
              },
              {
                name: 'Hot Towel Shave',
                price: '$70',
                period: 'per visit',
                features: ['Pre-shave oil', 'Hot towel prep', 'Straight razor shave', 'Aftershave balm'],
                ctaLabel: 'Book Shave',
                ctaHref: '/contact?intent=booking&service=hot-towel-shave',
              },
            ]}
          />

          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <h3 className="text-xl font-semibold font-[family-name:var(--font-heading)]">
              What’s included (at a glance)
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every service includes a quick consult and a finish that matches your routine. Combo
              services include hot towel finishing where it makes sense—comfort and clean edges.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              {[
                { label: 'Consultation', values: ['Included', 'Included', 'Included'] },
                { label: 'Hot towel', values: ['—', 'Included', 'Included'] },
                { label: 'Beard line-up', values: ['—', 'Included', '—'] },
                { label: 'Routine guidance', values: ['Included', 'Included', 'Included'] },
              ].map((row) => (
                <div key={row.label} className="rounded-xl border border-border bg-muted p-4">
                  <p className="font-semibold">{row.label}</p>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    <li>Classic: {row.values[0]}</li>
                    <li>Combo: {row.values[1]}</li>
                    <li>Shave: {row.values[2]}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section id="memberships" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="Memberships"
            subheadline="For clients who like consistency (and priority access)."
            tiers={[
              {
                name: 'Line-Up Club',
                price: '$49',
                period: 'per month',
                features: ['1 neck + line-up refresh per month', '10% off products', 'Priority booking window'],
                ctaLabel: 'Join Line-Up Club',
                ctaHref: '/contact?intent=membership&plan=line-up-club',
              },
              {
                name: 'Downtown Regular',
                price: '$119',
                period: 'per month',
                features: [
                  '1 Classic Cut per month',
                  '1 Beard Groom per month',
                  '15% off products',
                  'Priority booking window',
                ],
                ctaLabel: 'Join Downtown Regular',
                ctaHref: '/contact?intent=membership&plan=downtown-regular',
                highlighted: true,
              },
              {
                name: 'The Full Ritual',
                price: '$179',
                period: 'per month',
                features: [
                  '1 Cut + Beard per month',
                  '1 Line-up refresh',
                  '1 Hot towel shave (every 2 months)',
                  '20% off products',
                ],
                ctaLabel: 'Join Full Ritual',
                ctaHref: '/contact?intent=membership&plan=full-ritual',
              },
            ]}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Why It’s Worth It
            </h2>
            <p className="mt-3 text-muted-foreground">
              Premium time, premium consistency. We’d rather do fewer appointments per day and keep the
              standard high—clean sections, controlled transitions, and finishing that holds up.
            </p>
          </div>
          <div className="mt-10">
            <StatsCounter
              stats={[
                { label: 'Avg. rebook rate', value: '78', suffix: '%' },
                { label: 'Same-day slot drops', value: '10', suffix: 'am' },
                { label: 'Return clients', value: '4', suffix: '/5' },
                { label: 'Downtown pickup', value: 'Free' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQ"
            subheadline="Quick answers before you book."
            items={[
              {
                question: 'Do you accept walk-ins?',
                answer:
                  'When availability allows. For peak hours, appointments are strongly recommended. If you’re nearby, message us with your window and we’ll confirm quickly.',
              },
              {
                question: 'Are tips included?',
                answer:
                  'Tips are appreciated but not included. You’ll have the option to tip in person.',
              },
              {
                question: 'Can I switch membership plans?',
                answer:
                  'Yes—tell us before your next billing cycle and we’ll adjust your plan so it matches your schedule.',
              },
              {
                question: 'Do memberships include products?',
                answer:
                  'Products are discounted, not included—so you only buy what you use. Members get priority access to small-batch drops.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Book once—or lock in consistency."
            description="If you want a cut that looks better a week later, the routine matters. Tell us your schedule and we’ll recommend the right cadence."
            ctaLabel="Request a Booking"
            ctaHref="/contact?intent=booking"
          />
        </div>
      </section>
    </div>
  )
}
