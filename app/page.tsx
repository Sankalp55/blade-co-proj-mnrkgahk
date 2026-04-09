import { HeroMinimal } from '@/components/blocks/HeroMinimal'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTAVortex } from '@/components/blocks/CTAVortex'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'

export default function HomePage() {
  return (
    <div>
      <HeroMinimal
        headline="Blade & Co. — Classic Barbering, Manhattan Precision."
        subheadline="Hot towel shaves, beard sculpting, and modern styling in a dark, moody space with gold-detail craftsmanship. Walk-ins welcome when available—appointments recommended."
        primaryCta={{ label: 'Shop Grooming Essentials', href: '/shop' }}
        secondaryCta={{ label: 'Book a Service', href: '/services' }}
        imageUrl="/images/team-3.png"
      />

      {/* Banner */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <p className="text-sm text-muted-foreground">
            Downtown Manhattan • Same-day slots release at 10am • Free shipping over $60
          </p>
        </div>
      </section>

      {/* Categories (Bento) */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Shop by Ritual
            </h2>
            <p className="mt-3 text-muted-foreground">
              Curated essentials that match our in-chair routines—built for daily use, not bathroom
              clutter. Start with the ritual you actually repeat, then refine from there.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid>
              <BentoGridItem
                title="Shave & Prep"
                description="Pre-shave oil, lather, aftershave—clean finish, no burn. Built for comfort and a crisp neckline."
                link="/shop?category=shave"
              />
              <BentoGridItem
                title="Beard & Mustache"
                description="Balms, oils, combs—shape, soften, and train. Control flyaways without heavy fragrance."
                link="/shop?category=beard"
              />
              <BentoGridItem
                title="Hair Styling"
                description="Pomades, clays, sprays—classic hold with modern texture. Reliable results from commute to late dinner."
                link="/shop?category=styling"
              />
              <BentoGridItem
                title="Tools & Accessories"
                description="Scissors, brushes, travel kits—built to last. The pieces you keep, not replace."
                link="/shop?category=tools"
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      {/* Featured products (represented with 3D feature cards for conversion-focused highlights) */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="Barbershop Shelf"
            headline="Featured Essentials"
            subheadline="Best-sellers from the barbershop shelf—tight picks for fast decisions. Each one is chosen because it performs in-chair and stays consistent at home."
            features={[
              {
                title: 'Manhattan Matte Clay — $24',
                description:
                  'Best Seller. A matte, touchable finish with controlled hold—ideal for texture, volume, and clean separation without shine. Great for short-to-medium styles.',
              },
              {
                title: 'Gold Label Beard Oil — $28',
                description:
                  'New. Lightweight conditioning that softens coarse growth and reduces itch. Clean, refined scent profile that won’t compete with your day.',
              },
              {
                title: 'Hot Towel Aftershave Balm — $26',
                description:
                  'Sensitive Skin. Calms post-shave irritation and supports a comfortable finish. Designed to absorb fast—no greasy residue on collars.',
              },
              {
                title: 'Pocket Comb — Carbon — $14',
                description:
                  'Everyday. Durable, anti-static comb that keeps lines tidy and helps train beard direction. The tool you actually carry.',
              },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Manhattan Matte Clay',
                price: '$24',
                tag: 'Best Seller',
                href: '/shop/manhattan-matte-clay',
              },
              {
                name: 'Gold Label Beard Oil',
                price: '$28',
                tag: 'New',
                href: '/shop/gold-label-beard-oil',
              },
              {
                name: 'Hot Towel Aftershave Balm',
                price: '$26',
                tag: 'Sensitive Skin',
                href: '/shop/hot-towel-aftershave-balm',
              },
              {
                name: 'Pocket Comb — Carbon',
                price: '$14',
                tag: 'Everyday',
                href: '/shop/pocket-comb-carbon',
              },
            ].map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="rounded-xl border border-border bg-background p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{p.name}</p>
                  <span className="text-xs rounded-full border border-border px-2 py-1 text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-lg font-bold">{p.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tap to view details and quick add from the product page.
                </p>
                <div className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                  Add to Cart
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges as logo cloud */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <LogoCloud
            headline="Built for Real Routines"
            logos={[
              { name: 'Free Shipping $60+', imageUrl: '/images/office.png' },
              { name: 'Secure Checkout', imageUrl: '/images/meeting.png' },
              { name: 'Small-Batch Drops', imageUrl: '/images/handshake.png' },
              { name: 'Downtown Pickup', imageUrl: '/images/team-1.png' },
              { name: '30-Day Returns', imageUrl: '/images/team-2.png' },
            ]}
          />
          <p className="mt-6 max-w-3xl text-muted-foreground">
            We keep the policies simple: ship quickly, pack carefully, and communicate clearly.
            If you’re picking up downtown, we’ll coordinate timing so you can grab your order
            between meetings without waiting around.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="Clients Who Know the Difference"
            subheadline="Classic service, modern detail—heard in their own words."
            testimonials={[
              {
                quote:
                  'Best hot towel shave I’ve had in the city. Calm, precise, and the finish is immaculate.',
                name: 'Evan R.',
                role: 'FiDi',
              },
              {
                quote:
                  'They nailed my fade and taught me exactly how to use the clay without overdoing it.',
                name: 'Marcus L.',
                role: 'SoHo',
              },
              {
                quote:
                  'Beard line-up is surgical. Products are legit—no heavy fragrance, just clean.',
                name: 'Daniel K.',
                role: 'Tribeca',
              },
              {
                quote:
                  'The vibe is premium without being precious. In and out, looking sharp.',
                name: 'Anthony S.',
                role: 'West Village',
              },
              {
                quote:
                  'Downtown pickup is clutch. Ordered online, grabbed it after work.',
                name: 'Jorge M.',
                role: 'Lower East Side',
              },
            ]}
          />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Get Drop Alerts & Same-Day Slot Releases"
            description="One email a week max—new product drops, grooming tips, and appointment openings at 10am."
            ctaLabel="Join the List"
            ctaHref="/contact#contact-form"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Prefer a direct message? Use the contact form and select “Pickup” or “Booking request.”
          </p>
        </div>
      </section>
    </div>
  )
}
