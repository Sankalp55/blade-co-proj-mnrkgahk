import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { StatsCounter } from '@/components/blocks/StatsCounter'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { MovingBorder } from '@/components/ui/effects/MovingBorder'

export default function ShopPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)]">
              Grooming goods with barbershop standards
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Curated essentials for hold, hydration, and a clean finish—built for daily use and NYC pace. This shop is
              a front-end demo experience (no backend checkout), designed to show product storytelling, category
              navigation, and conversion-friendly layouts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#best-sellers"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Browse best sellers
              </a>
              <a
                href="#categories"
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:shadow-md transition-shadow"
              >
                Shop by category
              </a>
            </div>
            <div className="mt-8 rounded-3xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">
                What we optimize for:
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <li className="text-foreground">• Fast product selection</li>
                <li className="text-foreground">• Clear hold/finish guidance</li>
                <li className="text-foreground">• Low-friction category browsing</li>
                <li className="text-foreground">• Premium, minimal aesthetic</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="p-6">
              <p className="text-sm text-muted-foreground">Featured imagery</p>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-semibold">
                Gold-accent lineup, dark counter
              </p>
              <p className="mt-3 text-muted-foreground">
                Use high-contrast product photography—labels readable, textures visible, and lighting consistent.
              </p>
            </div>
            <div className="px-6 pb-6">
              <MovingBorder duration={3200}>
                <div className="rounded-2xl border border-border bg-muted p-6">
                  <p className="text-sm text-muted-foreground">
                    Image placeholder (expects /images/shop-hero.jpg in your public folder)
                  </p>
                  <div className="mt-4 h-48 w-full rounded-xl border border-border bg-card" />
                </div>
              </MovingBorder>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              Shop by category
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">Get exactly what you need—no clutter.</p>
          </div>

          <div className="mt-10">
            <ParallaxScroll
              images={[
                '/images/product-clay.jpg',
                '/images/product-pomade.jpg',
                '/images/product-beard-oil.jpg',
                '/images/product-tonic.jpg',
                '/images/shop-hero.jpg',
                '/images/services-hero.jpg',
              ]}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Styling', description: 'Clays, pomades, creams', href: '#styling' },
              { title: 'Beard', description: 'Oils, balms, combs', href: '#beard' },
              { title: 'Shave', description: 'Tonic, prep, post', href: '#shave' },
              { title: 'Tools', description: 'Brushes, trimmers, travel', href: '#tools' },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xl font-semibold font-[family-name:var(--font-heading)]">{c.title}</p>
                <p className="mt-2 text-muted-foreground">{c.description}</p>
                <p className="mt-4 text-sm text-foreground">Browse →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="best-sellers" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="Client favorites"
            headline="Best sellers"
            subheadline="The top picks clients re-order—because they work. Add-to-cart buttons are demo-only (no backend)."
            features={[
              {
                title: 'Gilded Matte Clay — $24',
                description: 'Strong hold, matte finish, reworkable texture. Built for movement, not stiffness.',
              },
              {
                title: 'Downtown Pomade — $22',
                description: 'Medium hold with clean shine for traditional styles and controlled slick looks.',
              },
              {
                title: 'Razor-Soft Beard Oil — $28',
                description: 'Softens, conditions, and reduces itch without residue—warm sandalwood profile.',
              },
            ]}
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'clay',
                name: 'Gilded Matte Clay',
                price: '$24',
                badge: 'Best Seller',
                description:
                  'Strong hold with a matte finish—ideal for textured crops and classic side parts. Apply to dry hair for maximum grip.',
              },
              {
                id: 'pomade',
                name: 'Downtown Pomade',
                price: '$22',
                badge: 'Classic',
                description:
                  'Medium hold with controlled shine. Great for combed parts, slick backs, and polished office-ready styles.',
              },
              {
                id: 'beard-oil',
                name: 'Razor-Soft Beard Oil',
                price: '$28',
                badge: 'New',
                description:
                  'Lightweight conditioning that reduces itch and keeps the beard looking intentional—no greasy finish.',
              },
            ].map((p) => (
              <div key={p.id} id={p.id} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{p.badge}</p>
                    <p className="mt-1 text-xl font-semibold font-[family-name:var(--font-heading)]">{p.name}</p>
                  </div>
                  <p className="text-lg font-bold">{p.price}</p>
                </div>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <a
                  href={`#${p.id}`}
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Add to cart (demo)
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              No guessing—only proven formulas
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Products selected for performance and skin comfort. If you’re not sure what to choose, start with your
              desired finish (matte vs. shine) and hair density—we’ll point you to the right jar.
            </p>
          </div>
          <div className="mt-10">
            <StatsCounter
              stats={[
                { label: 'Hold levels', value: '3' },
                { label: 'Fragrance profile', value: 'Low' },
                { label: 'Daily use', value: 'Yes' },
                { label: 'Barber tested', value: '100%', suffix: '' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Shop FAQ"
            subheadline="Quick answers before you check out (demo store experience)."
            items={[
              {
                question: 'Do you ship or is it in-store pickup only?',
                answer:
                  'This demo blueprint supports either. In a real store, you’d list shipping zones and pickup details here. Checkout is UI-only in this build (no backend).',
              },
              {
                question: 'Which product is best for thick hair?',
                answer:
                  'Start with Gilded Matte Clay for strong hold and texture. If you prefer a slick, controlled finish, choose Downtown Pomade.',
              },
              {
                question: 'Are products safe for sensitive skin?',
                answer:
                  'We prioritize low-irritant formulas and a clean finish. If you’re sensitive, patch test—especially with post-shave products.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="Limited batches sell out fast"
            description="Get notified when restocks land and when we drop seasonal scents. (Demo signup—client-side only.)"
            ctaLabel="Notify me"
            ctaHref="/contact"
          />
          <p className="mt-4 text-sm text-muted-foreground">Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
