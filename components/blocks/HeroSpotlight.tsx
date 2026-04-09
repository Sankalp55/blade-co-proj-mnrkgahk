"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: string;
}

export function HeroSpotlight({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  badge,
}: HeroSpotlightProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Spotlight beam 1 - large top-left */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(120,119,198,0.3) 0%, rgba(120,119,198,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "4s",
        }}
      />

      {/* Spotlight beam 2 - right side */}
      <div
        className="pointer-events-none absolute top-1/4 -right-20 h-[500px] w-[500px] rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)",
          filter: "blur(80px)",
          animationDuration: "5s",
          animationDelay: "1s",
        }}
      />

      {/* Spotlight beam 3 - bottom center */}
      <div
        className="pointer-events-none absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
          filter: "blur(70px)",
          animationDuration: "6s",
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            {headline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-zinc-700 text-zinc-200 hover:bg-zinc-800"
              asChild
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSpotlight;
