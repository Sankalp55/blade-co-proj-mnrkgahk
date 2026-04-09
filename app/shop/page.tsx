import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

const products = [
  {
    name: 'Manhattan Matte Clay',
    price: '$24',
    tag: 'Best Seller',
    href: '/shop/manhattan-matte-clay',
    category: 'styling',
    goal: 'texture',
    hold: 'strong',
    finish: 'matte',
  },
  {
    name: 'Classic Pomade — Medium Hold',
    price: '$22',
    tag: 'Classic',
    href: '/shop/classic-pomade-medium',
    category: 'styling',
    goal: 'shine',
    hold: 'medium',
    finish: 'shine',
  },
  {
    name: 'Sea Salt Texture Spray',
    price: '$20',
    tag: 'Modern',
    href: '/shop/sea-salt-texture-spray',
    category: 'styling',
    goal: 'texture',
    hold: 'light',
    finish: 'matte',
  },
  {
    name: 'Gold Label Beard Oil',
    price: '$28',
    tag: 'New',
    href: '/shop/gold-label-beard-oil',
    category: 'beard',
    goal: 'beard-control',
    hold: 'light',
    finish: 'natural',
  },
  {
    name: 'Beard Balm — Firm',
    price: '$26',
    tag: 'Control',
    href: '/shop/beard-balm-firm',
    category: 'beard',
    goal: 'beard-control',
    hold: 'firm',
    finish: 'natural',
  },
  {
    name: 'Boar Bristle Brush',
    price: '$18',
    tag: 'Tool',
    href: '/shop/boar-bristle-brush',
    category: 'tools',
    goal: 'beard-control',
    hold: 'n/a',
    finish: 'n/a',
  },
  {
    name: 'Hot Towel Aftershave Balm',
    price: '$26',
    tag: 'Sensitive Skin',
    href: '/shop/hot-towel-aftershave-balm',
    category: 'shave',
    goal: 'shave-comfort',
    hold: 'n/a',
    finish: 'n/a',
  },
  {
    name: 'Pre-Shave Oil',
    price: '$24',
    tag: 'Prep',
    href: '/shop/pre-shave-oil',
    category: 'shave',
    goal: 'shave-comfort',
    hold: 'n/a',
    finish: 'n/a',
  },
]

function getParam(value: string | null) {
  return value?.toLowerCase().trim() ?? ''
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams
  const category = getParam(typeof sp.category === 'string' ? sp.category : null)
  const goal = getParam(typeof sp.goal === 'string' ? sp.goal : null)
  const sort = getParam(typeof sp.sort === 'string' ? sp.sort : null)

  let filtered = [...products]
  if (category) filtered = filtered.filter((p) => p.category === category)
  if (goal) filtered = filtered.filter((p) => p.goal === goal)

  if (sort === 'bestsellers') {
    filtered.sort((a, b) => (a.tag === 'Best Seller' ? -1 : 1) - (b.tag === 'Best Seller' ? -1 : 1))
  }

  return (
    <div>
      {/* Hero (custom section) */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              The Blade & Co. Shelf
            </h1>
            <p className="mt-4 text-muted-foreground">
              Grooming essentials curated for classic cuts, beard discipline, and clean finishes—shipped
              fast or picked up downtown. Everything here is chosen for repeatable results: easy to use,
              easy to re-buy, and aligned to what we apply in-chair.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/shop?sort=bestsellers"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Browse Best Sellers
              </a>
              <a
                href="/shop?category=beard"
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold"
              >
                Shop Beard
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Tip: If you’re not sure what to pick, start with one styling product and one comfort product
              (beard oil or aftershave balm). That’s the highest impact routine.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted">
              {/* Decorative image block */}
              <div className="h-full w-full bg-muted" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Editorial lineup: black stone, minimal labels, gold foil highlights—built to look premium,
              built to perform daily.
            </p>
          </div>
        </div>
      </section>

      {/* Category nav (custom) */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Find Your Routine
            </h2>
            <p className="mt-3 text-muted-foreground">
              Navigate by goal—hold, shine, comfort, or shape. These are the same “what do you want it to
              do?” categories we use during a quick consult.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Texture & Volume', desc: 'Clays and powders for modern matte.', href: '/shop?goal=texture' },
              { title: 'Classic Shine', desc: 'Pomades for slick parts and clean comb lines.', href: '/shop?goal=shine' },
              { title: 'Beard Control', desc: 'Oil + balm combos for training.', href: '/shop?goal=beard-control' },
              { title: 'Shave Comfort', desc: 'Prep and balm for irritation-free finish.', href: '/shop?goal=shave-comfort' },
            ].map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="rounded-xl border border-border bg-background p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-semibold">{i.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
                <p className="mt-4 text-sm font-semibold text-foreground">Explore →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid (custom) */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
                All Products
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tight grid, quick add—built for conversion. Filter by category or goal using the links
                above (client-side only), then open a product page for details.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-muted px-4 py-3 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> items
              {category ? (
                <>
                  {' '}
                  in <span className="font-semibold text-foreground">{category}</span>
                </>
              ) : null}
              {goal ? (
                <>
                  {' '}
                  for <span className="font-semibold text-foreground">{goal}</span>
                </>
              ) : null}
              .
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square w-full rounded-lg border border-border bg-muted" />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <p className="font-semibold leading-snug">{p.name}</p>
                  <span className="text-xs rounded-full border border-border px-2 py-1 text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-2 text-lg font-bold">{p.price}</p>
                <div className="mt-4 w-full rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground">
                  Quick Add
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <FeaturesGrid
              badge="Bundles"
              headline="Bundles That Actually Make Sense"
              subheadline="Three-step kits aligned to our chair-side process—built to reduce decision fatigue and keep your routine consistent."
              features={[
                {
                  title: 'The Clean Shave Kit',
                  description:
                    'Pre-shave oil + lather + aftershave balm. Designed for comfort and a crisp finish, especially for sensitive skin and frequent shavers.',
                },
                {
                  title: 'The Beard Discipline Kit',
                  description:
                    'Oil + balm + carbon comb. Softens, shapes, and trains growth so your beard looks intentional—not accidental.',
                },
                {
                  title: 'The Downtown Styling Kit',
                  description:
                    'Matte clay + texture spray. Modern hold without shine—great for quick morning styling and all-day structure.',
                },
              ]}
            />
            <div className="mt-6">
              <a
                href="/shop?category=bundles"
                className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Shop Bundles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="shipping-returns" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Shipping & Returns"
            subheadline="Clear policies—no fine print energy."
            items={[
              {
                question: 'How fast do orders ship?',
                answer:
                  'Orders typically ship in 1–2 business days. NYC deliveries often arrive faster depending on carrier volume. You’ll receive tracking as soon as your label is created.',
              },
              {
                question: 'Do you offer store pickup?',
                answer:
                  'Yes—choose Downtown Manhattan pickup at checkout and we’ll email when it’s ready. If you’re trying to grab it same-day, include your preferred pickup window in your note.',
              },
              {
                question: 'What’s your return policy?',
                answer:
                  'Unused items may be returned within 30 days. If something arrives damaged, contact us and we’ll make it right—quickly and without hassle.',
              },
              {
                question: 'Are your products strongly scented?',
                answer:
                  'We keep fragrance refined and barbershop-clean—never overpowering. The goal is “fresh and subtle,” not “you entered the room five minutes ago.”',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Need a recommendation?"
            description="Tell us your hair type, beard length, and finish preference. We’ll point you to a simple routine you can actually keep."
            ctaLabel="Ask a Barber"
            ctaHref="/contact?intent=product"
          />
        </div>
      </section>
    </div>
  )
}
