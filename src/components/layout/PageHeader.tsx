import type { ReactNode } from "react";

import { SectionLabel } from "@/components/ui/SectionLabel";

import { Container } from "./Container";

type PageHeaderProps = {
  label: string;
  title: string;
  intro?: string;
  /** Extra content below the intro, e.g. buttons */
  children?: ReactNode;
};

/**
 * The top of every subpage. Contains the page's only <h1>.
 * Uses CSS animations like the hero (no JavaScript, headline never hidden).
 */
export function PageHeader({ label, title, intro, children }: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-title"
      className="relative isolate overflow-hidden border-b border-line"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 dot-grid fade-mask opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-80 pointer-glow" />

      <Container className="pt-16 pb-14 md:pt-24 md:pb-20">
        <SectionLabel className="animate-fade-up">{label}</SectionLabel>
        <h1 id="page-title" className="mt-4 max-w-4xl animate-rise font-display text-h1">
          {title}
        </h1>
        {intro ? (
          <p
            className="mt-5 max-w-2xl animate-fade-up text-lead text-fg-muted"
            style={{ animationDelay: "120ms" }}
          >
            {intro}
          </p>
        ) : null}
        {children ? (
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
