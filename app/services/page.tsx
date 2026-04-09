import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
              Cuts, Shaves, Beard Work—Executed with Intent.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Classic technique with modern finishing. Downtown Manhattan. Appointment-first, walk-ins
              when available. We keep the vibe calm and the work precise—so you leave sharp and your cut
              grows out clean.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact?intent=booking"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Request an Appointment
              </a>
              <a
                href="#menu"
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold"
              >
                View Service Menu
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Same-day slots (when available) release at 10am. If you’re flexible, mention your window
              and we’ll do our best to fit you in.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-muted" />
            <p className="mt-4 text-sm text-muted-foreground">
              Moody portrait energy: hands, shears, clean sections—gold rim light, controlled detail.
            </p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Service Menu
            </h2>
            <p className="mt-3 text-muted-foreground">
              Transparent pricing. Premium time. No rush. We’ll recommend what fits your face shape,
              growth pattern, and daily routine—then keep the execution consistent.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Classic Cut',
                meta: '45 min',
                desc: 'Consultation + precision cut + finish. Clean lines, timeless shape.',
              },
              {
                title: 'Modern Styling Cut',
                meta: '60 min',
                desc: 'Texture, movement, and product strategy tailored to your routine.',
              },
              {
                title: 'Beard Groom + Line-Up',
                meta: '30 min',
                desc: 'Shape, trim, and define with hot towel finish if needed.',
              },
              {
                title: 'Hot Towel Shave',
                meta: '45 min',
                desc: 'Prep, lather, straight-razor shave, and calming balm.',
              },
              {
                title: 'Cut + Beard Combo',
                meta: '75 min',
                desc: 'Our most booked: full reset from hairline to neckline.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-lg font-semibold">{s.title}</p>
                  <span className="text-xs rounded-full border border-border px-2 py-1 text-muted-foreground">
                    {s.meta}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <a
                  href={`/contact?intent=booking&service=${encodeURIComponent(s.title)}`}
                  className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  Request this service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Consistency"
            headline="The Blade & Co. Method"
            subheadline="A repeatable process so your results stay consistent—every visit, every photo, every mirror check."
            features={[
              {
                title: 'Consult',
                description:
                  'Face shape, growth patterns, and style goals—quick and specific. We align on what “sharp” means for you.',
              },
              {
                title: 'Craft',
                description:
                  'Scissor-and-clipper precision; clean sections; controlled transitions. Technique first, trend second.',
              },
              {
                title: 'Detail',
                description:
                  'Edges, taper refinement, and beard symmetry checks. This is where “good” becomes “dialed.”',
              },
              {
                title: 'Finish',
                description:
                  'Product selection and a routine you can repeat at home—what to use, how much, and how to apply.',
              },
            ]}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="Service Reviews"
            subheadline="What clients say after the mirror check."
            testimonials={[
              {
                quote:
                  'The consult alone was worth it—walked out with a cut that fits my face.',
                name: 'Chris T.',
                role: 'Classic Cut',
              },
              {
                quote:
                  'Hot towel shave was unreal. Smooth and zero irritation.',
                name: 'Samir P.',
                role: 'Hot Towel Shave',
              },
              {
                quote:
                  'Beard line-up is perfect every time. Consistency is why I keep coming back.',
                name: 'Noah G.',
                role: 'Beard Groom',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Ready for a sharper routine?"
            description="Tell us what you’re aiming for—we’ll recommend the right service and the right products to maintain it."
            ctaLabel="Contact to Book"
            ctaHref="/contact?intent=booking"
          />
          <div className="mt-4">
            <a className="text-sm font-semibold underline" href="/shop">
              Shop Essentials →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
