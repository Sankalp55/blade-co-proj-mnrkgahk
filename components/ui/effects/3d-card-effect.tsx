'use client';

import * as React from 'react';

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}

export type CardContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Optional: enable/disable hover tilt */
  enableTilt?: boolean;
};

/**
 * Lightweight, build-safe 3D card primitives.
 * These exports match the names used by blocks importing from this module.
 */
export function CardContainer({
  className,
  enableTilt = true,
  onMouseMove,
  onMouseLeave,
  style,
  ...props
}: CardContainerProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!enableTilt || !ref.current) {
      onMouseMove?.(e);
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 8; // degrees
    const rotateX = -((y - midY) / midY) * 8;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    onMouseMove?.(e);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
    onMouseLeave?.(e);
  };

  return (
    <div
      ref={ref}
      className={cn('transition-transform duration-200 will-change-transform', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', ...style }}
      {...props}
    />
  );
}

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export function CardBody({ className, style, ...props }: CardBodyProps) {
  return (
    <div
      className={cn('relative', className)}
      style={{ transformStyle: 'preserve-3d', ...style }}
      {...props}
    />
  );
}

export type CardItemProps<T extends React.ElementType = 'div'> = {
  as?: T;
  translateZ?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>;

export function CardItem<T extends React.ElementType = 'div'>({
  as,
  translateZ = 0,
  className,
  style,
  ...props
}: CardItemProps<T>) {
  const Comp = (as ?? 'div') as React.ElementType;
  return (
    <Comp
      className={className}
      style={{
        transform: translateZ ? `translateZ(${translateZ}px)` : undefined,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      {...props}
    />
  );
}
