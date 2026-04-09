import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)]">
              Transparent pricing. Premium execution.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Choose a service or bundle. No surprises—just sharp, consistent results in Downtown Manhattan. If you’re
              not sure what to book, the Signature option covers the most ground and is our most requested.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Book via Contact
              </a>
              <a
                href="/services"
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:shadow-md transition-shadow"
              >
                Browse Services
              </a>
            </div>
          </div>

          <div className="mt-12">
            <PricingTable
              headline="Service menu"
              subheadline="Bold pricing for quick scanning—optimized for conversion."
              tiers={[
                {
                  name: 'Essential',
                  price: '$55',
                  period: 'per visit',
                  features: [
                    'Classic Cut',
                    'Neckline finish',
                    'Style + product touch',
                    '15-min buffer for punctuality',
                  ],
                  ctaLabel: 'Choose Essential',
                  ctaHref: '/contact?service=essential',
                },
                {
                  name: 'Signature',
                  price: '$85',
                  period: 'per visit',
                  highlighted: true,
                  features: [
                    'Classic Cut',
                    'Beard shape + detail',
                    'Hot towel finish',
                    'Product matched to hair type',
                  ],
                  ctaLabel: 'Choose Signature',
                  ctaHref: '/contact?service=signature',
                },
                {
                  name: 'Ritual',
                  price: '$95',
                  period: 'per visit',
                  features: ['Hot towel shave', 'Straight razor finish', 'Cold towel reset', 'Aftershave tonic'],
                  ctaLabel: 'Choose Ritual',
                  ctaHref: '/contact?service=ritual',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Upgrades"
            headline="Add-ons"
            subheadline="Small upgrades that make a big difference—ideal when you want a little extra polish without changing the whole service."
            features={[
              { title: 'Cleanup / Lineup', description: '$25 — quick edge refresh between cuts.' },
              { title: 'Beard Conditioning', description: '$12 — oil + balm finish tailored to density.' },
              { title: 'Scalp Massage', description: '$15 — tension relief with a clean finish.' },
              { title: 'Style Lesson', description: '$20 — a simple routine you can repeat daily.' },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="Worth the chair time"
            subheadline="Clients come back for consistency—especially before big days."
            testimonials={[
              {
                quote: 'Signature package is the move. I leave looking put together every time.',
                name: 'Chris W.',
                role: 'Downtown',
                company: 'Client',
              },
              {
                quote: 'The shave ritual is unreal—smooth, zero irritation.',
                name: 'Omar H.',
                role: 'Manhattan',
                company: 'Client',
              },
              {
                quote: 'Cleanest taper I’ve found. The detail work is meticulous.',
                name: 'Sam T.',
                role: 'NYC',
                company: 'Client',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQ"
            subheadline="Quick details so you can book confidently."
            items={[
              {
                question: 'Do you take walk-ins?',
                answer:
                  'Yes when availability allows, but appointments are recommended for peak hours—especially Thursday through Saturday.',
              },
              {
                question: 'Do prices vary by barber?',
                answer:
                  'This menu is standardized for consistency. Specialty requests can be discussed during consultation so expectations stay clear.',
              },
              {
                question: 'What if I’m not sure what to book?',
                answer:
                  'Choose Signature for the most complete option, or message us via Contact with your goals and we’ll recommend the right service.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Book your next cut in Downtown Manhattan"
            description="Send your preferred day/time and we’ll confirm availability. If you have a reference photo, include it—matching the finish is easier when we can see the goal."
            ctaLabel="Contact to Book"
            ctaHref="/contact"
          />
          <div className="mt-4">
            <a href="/shop" className="text-sm text-muted-foreground underline underline-offset-4">
              Want to keep the look between visits? Shop products →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
