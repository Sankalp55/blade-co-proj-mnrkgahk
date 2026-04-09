import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Build-safe 3D card effect primitives.
 * Many UI kits export these names; this project imports them.
 */
export function CardContainer({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export type CardItemProps = DivProps & {
  translateZ?: number | string;
  as?: React.ElementType;
};

export function CardItem({ as, className, ...props }: CardItemProps) {
  const Comp: React.ElementType = as ?? "div";
  return <Comp className={className} {...props} />;
}
