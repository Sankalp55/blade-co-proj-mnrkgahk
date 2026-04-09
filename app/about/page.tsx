import type { ReactNode } from "react";
import { Scissors, Sparkles, ShieldCheck } from "lucide-react";

// NOTE: This file previously failed type-checking because `Feature` requires `icon`.
// We provide icons for each feature item.

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Existing page content above/below can remain; only the typed features needed fixing. */}

      {/* Example section that was failing type-checking */}
      <section className="mt-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">How we work</h2>
          <p className="text-muted-foreground">
            Every appointment follows a repeatable system—so you get the same level of sharp,
            every visit.
          </p>
        </div>

        <Features
          features={[
            {
              title: "Consult first",
              description:
                "We align on shape, length, and maintenance before the first snip—so the result fits your routine.",
              icon: <Scissors className="h-5 w-5" />,
            },
            {
              title: "Details matter",
              description:
                "Clean sections, consistent tension, and a finish that holds up between visits.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              title: "Reliable results",
              description:
                "A repeatable process means fewer surprises and more confidence walking out the door.",
              icon: <ShieldCheck className="h-5 w-5" />,
            },
          ] satisfies Feature[]}
        />
      </section>
    </main>
  );
}

function Features({ features }: { features: Feature[] }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {features.map((f) => (
        <div key={f.title} className="rounded-xl border p-6">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-foreground">{f.icon}</span>
            <h3 className="font-semibold">{f.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
