import * as React from "react";

export type SparklesCoreProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Optional className for styling */
  className?: string;
  /** Optional background color (kept for API compatibility) */
  background?: string;
  /** Optional min/max size (kept for API compatibility) */
  minSize?: number;
  maxSize?: number;
  /** Optional particle density (kept for API compatibility) */
  particleDensity?: number;
  /** Optional particle color (kept for API compatibility) */
  particleColor?: string;
};

/**
 * Lightweight, build-safe placeholder for Sparkles background.
 * Some templates expect `SparklesCore` to be exported from this module.
 */
export function SparklesCore({
  className,
  background,
  style,
  ...props
}: SparklesCoreProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        background: background ?? undefined,
        ...style,
      }}
      {...props}
    />
  );
}

export default SparklesCore;
