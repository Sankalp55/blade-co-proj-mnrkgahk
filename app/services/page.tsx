import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { CTAVortex } from '@/components/blocks/CTAVortex'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)]">
              Services designed for repeatable perfection
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              From classic cuts to hot towel shaves—each service is built around clean prep, precise execution, and a
              refined finish. We keep consultations practical, finishing work meticulous, and the overall experience
              calm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/pricing"
                className="inline-flex items-center rounded-xl bg-primary px-5 py-3 text-primary-foreground hover:opacity-90 transition-opacity"
              >
                See pricing
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:shadow-md transition-shadow"
              >
                Contact for availability
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="p-6">
              <p className="text-sm text-muted-foreground">In-chair philosophy</p>
              <p className="mt-2 text-2xl font-semibold font-[family-name:var(--font-heading)]">
                Clean prep. Clean lines. Clean grow-out.
              </p>
              <p className="mt-3 text-muted-foreground">
                We separate the work into clear stages: consultation, structure, blending, and finish. That’s how your
                haircut stays wearable and your beard lines stay crisp.
              </p>
            </div>
            <div className="px-6 pb-6">
              <div className="h-48 w-full rounded-2xl border border-border bg-muted" />
              <p className="mt-3 text-sm text-muted-foreground">
                Image placeholder (expects /images/services-hero.jpg).
              </p>
            </div>
          </div>
        </div>
      </section>

      <TracingBeam>
        <section id="classic-cuts" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <FeaturesGrid
              badge="Hair"
              headline="Classic cuts"
              subheadline="Clean silhouettes that grow out well—ideal for professionals and everyday sharpness."
              features={[
                {
                  title: 'The Classic Cut',
                  description:
                    'Consultation, optional wash, scissor + clipper work, neckline finish, and a styled result that matches how you actually wear your hair.',
                },
                {
                  title: 'Skin Fade / Taper',
                  description:
                    'Precision blending with detail work around temples and nape—balanced so it looks sharp without looking harsh.',
                },
                {
                  title: 'Cleanup / Lineup',
                  description:
                    'A quick refresh for edges, sideburns, and neckline—perfect between full cuts when you need to look dialed in.',
                },
              ]}
            />
          </div>
        </section>

        <section id="beard" className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
                Beard grooming
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Shape and symmetry—paired with conditioning for softness and control. We aim for a crisp cheek line and
                a natural neckline that complements your haircut and face shape.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Beard Shape + Detail',
                  description: 'Cheek line, neckline, and taper to match your haircut.',
                },
                {
                  title: 'Beard Trim + Hot Towel',
                  description: 'Hot towel prep for comfort + a clean finish.',
                },
                {
                  title: 'Beard Conditioning Add-on',
                  description: 'Oil + balm finish tailored to density and skin type.',
                },
                {
                  title: 'Mustache Detail',
                  description: 'Precision trim and shape for balance and clean lines.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-xl font-semibold font-[family-name:var(--font-heading)]">{item.title}</p>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="shaves" className="py-20 md:py-28 px-4 md:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
                Hot towel shaves
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                A traditional ritual—executed with modern hygiene and comfort. Expect careful prep, controlled razor
                work, and a calm finish that feels clean, not irritated.
              </p>
            </div>

            <div className="mt-10">
              <StickyScrollReveal
                content={[
                  {
                    title: 'Prep',
                    description: 'Cleanse + hot towels to soften hair and open pores for a smoother pass.',
                  },
                  {
                    title: 'Lather',
                    description: 'Cream worked in for cushion and glide—comfort comes from the foundation.',
                  },
                  {
                    title: 'Straight razor',
                    description: 'Careful passes with skin stretching and controlled pressure for a clean result.',
                  },
                  {
                    title: 'Finish',
                    description: 'Cold towel + tonic to calm and reset, leaving skin feeling tight and refreshed.',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section id="modern" className="py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <FeaturesCards3D
              badge="Style"
              headline="Modern styling"
              subheadline="Texture, movement, and tailored product selection—so it looks good beyond the chair."
              features={[
                {
                  title: 'Textured Crop',
                  description: 'Choppy precision with a matte finish for effortless shape and easy daily styling.',
                },
                {
                  title: 'Modern Pompadour',
                  description: 'Volume and control—balanced height with clean sides and a wearable silhouette.',
                },
                {
                  title: 'Consult + Style Lesson',
                  description: 'A simple routine, product choice, and a 3-minute workflow you can repeat.',
                },
              ]}
            />
          </div>
        </section>
      </TracingBeam>

      <section className="py-20 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTAVortex
            headline="Ready for a sharper routine?"
            description="Book your service and we’ll tailor the details to your hair, beard, and schedule."
            ctaLabel="View Pricing"
            ctaHref="/pricing"
          />
          <div className="mt-4">
            <a href="/contact#phone" className="text-sm text-muted-foreground underline underline-offset-4">
              Prefer to call the shop? See contact details →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
