import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  /** id of the section's heading – used for aria-labelledby */
  labelledBy: string;
  id?: string;
  className?: string;
};

/** A page section with consistent vertical spacing. */
export function Section({ children, labelledBy, id, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-20 md:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
