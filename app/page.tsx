import { HeroBeams } from '@/components/blocks/HeroBeams'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTAVortex } from '@/components/blocks/CTAVortex'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { HoverEffect } from '@/components/ui/effects/HoverEffect'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroBeams
        headline="Classic craft. Modern edge."
        highlightText="Downtown Manhattan"
        subheadline="Blade & Co. delivers precision cuts, beard mastery, and hot towel shaves in a moody, gold-lit shop. Walk out sharper—every time."
        primaryCta={{ label: 'Book an Appointment', href: '/services' }}
        secondaryCta={{ label: 'Shop Grooming Essentials', href: '/shop' }}
      />

      {/* Highlights */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Downtown Manhattan', value: 'Walk-ins welcome' },
              { label: 'Signature', value: 'Hot towel + straight razor' },
              { label: 'Style', value: 'Classic to contemporary' },
            ].map((h) => (
              <div
                key={h.label}
                className="rounded-3xl border border-border bg-card shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-muted-foreground">{h.label}</p>
                <p className="mt-2 text-2xl font-semibold font-[family-name:var(--font-heading)]">
                  {h.value}
                </p>
                <p className="mt-3 text-muted-foreground">
                  Built for repeatable results—clean prep, precise execution, and finishing work that holds up on a
                  Downtown schedule.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              Choose your ritual
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Book by service category—built for speed, consistency, and a perfect finish. Whether you’re maintaining a
              classic silhouette or dialing in a modern fade, we keep the process calm and the results sharp.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={[
                {
                  title: 'Classic Cuts',
                  description:
                    'Scissor + clipper precision. Clean lines, balanced shape, and a natural finish. Typical time: 30–45 min.',
                  link: '/services#classic-cuts',
                },
                {
                  title: 'Beard Grooming',
                  description:
                    'Shape, taper, and detail work with a crisp cheek line and a natural neckline. Typical time: 20–30 min.',
                  link: '/services#beard',
                },
                {
                  title: 'Hot Towel Shaves',
                  description:
                    'Traditional prep, hot towels, and straight razor comfort—finished with a cold rinse. Typical time: 30 min.',
                  link: '/services#shaves',
                },
                {
                  title: 'Modern Styling',
                  description:
                    'Textured crops, fades, and tailored styling—product matched to your hair type. Typical time: 45–60 min.',
                  link: '/services#modern',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Featured products (bento) */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              Shop the barbers’ shelf
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Small-batch essentials we actually use in the chair—built for hold, hair health, and a clean finish. This
              is a demo storefront experience (UI-only), designed to help you find the right product fast.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid className="gap-4">
              <BentoGridItem
                title="Gilded Matte Clay — $24 (Best Seller)"
                description="Strong hold, matte finish. Ideal for textured crops and classic side parts. Reworkable without the crunchy feel."
                className="md:col-span-2"
              />
              <BentoGridItem
                title="Razor-Soft Beard Oil — $28 (New)"
                description="Lightweight conditioning with a warm sandalwood profile—softens without residue and keeps flyaways in check."
              />
              <BentoGridItem
                title="Downtown Pomade — $22 (Classic)"
                description="Medium hold with controlled shine. Slick styles without stiffness—great for combed parts and clean backs."
              />
              <BentoGridItem
                title="Aftershave Tonic — $18 (Barber Pick)"
                description="Cooling finish post-shave. Calms skin and tightens the feel—ideal after a hot towel service or at-home cleanup."
                className="md:col-span-2"
              />
            </BentoGrid>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/shop#clay"
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:shadow-md transition-shadow"
              >
                View products in Shop
              </a>
              <a
                href="/shop#best-sellers"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Browse best sellers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <LogoCloud
            headline="Built on consistency"
            logos={[
              { name: 'Feather', imageUrl: '/images/logo-feather.svg' },
              { name: 'Wahl', imageUrl: '/images/logo-wahl.svg' },
              { name: 'Andis', imageUrl: '/images/logo-andis.svg' },
              { name: 'Layrite', imageUrl: '/images/logo-layrite.svg' },
            ]}
          />

          <div className="mt-12">
            <FeaturesGrid
              badge="Shop standards"
              headline="Premium tools, hygienic rituals, and a standard you can count on"
              subheadline="We keep the experience calm and the results repeatable—so your cut looks intentional on day one and still sharp days later."
              features={[
                {
                  title: 'Straight-razor protocol',
                  description: 'Single-use blades paired with sanitized handles—no shortcuts, ever.',
                },
                {
                  title: 'On-time appointments',
                  description: 'A tight schedule with built-in buffers so your day doesn’t spiral.',
                },
                {
                  title: 'Product matched',
                  description: 'Hold and finish selected for your hair type, density, and styling habits.',
                },
                {
                  title: 'Downtown ready',
                  description: 'Clean lines, balanced shape, and finishing work that holds up in the real world.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="Downtown clients. Sharp results."
            subheadline="A barbershop you can rely on—whether it’s your weekly cleanup or a big meeting tomorrow."
            testimonials={[
              {
                quote: 'Best straight-razor shave I’ve had in NYC—clean, calm, and insanely precise.',
                name: 'Marcus L.',
                role: 'Financial District',
                company: 'Client',
              },
              {
                quote: 'They nailed my fade and actually listened. The finish work is next level.',
                name: 'Ethan R.',
                role: 'SoHo',
                company: 'Client',
              },
              {
                quote:
                  'Beard lineup stayed crisp for days. Great product recommendations without the pushy vibe.',
                name: 'Daniel K.',
                role: 'Tribeca',
                company: 'Client',
              },
              {
                quote: 'Moody shop, great music, and the cut is always consistent. My go-to.',
                name: 'Javier S.',
                role: 'Lower East Side',
                company: 'Client',
              },
              {
                quote: 'Hot towel shave + tonic finish is a ritual. Worth every minute.',
                name: 'Noah P.',
                role: 'Battery Park',
                company: 'Client',
              },
            ]}
          />
        </div>
      </section>

      {/* CTA (Newsletter-style) */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Stay sharp—get drops & appointment openings"
            description="Monthly updates: limited product batches, seasonal styles, and last-minute chair availability. (Demo signup—client-side only.)"
            ctaLabel="Join the list"
            ctaHref="/contact"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Prefer not to subscribe? No problem—book anytime via Contact. No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
