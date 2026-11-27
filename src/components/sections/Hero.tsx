import { PointerGlow } from "@/components/animations/PointerGlow";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeContent } from "@/data/home";

import { QueryCard } from "./QueryCard";

/*
 * The hero uses pure CSS animations (animate-rise / animate-fade-up)
 * instead of Motion: they start before any JavaScript loads, and the
 * headline is never hidden, which keeps the LCP metric fast.
 */
export function Hero() {
  const { hero } = homeContent;

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 dot-grid fade-mask" />
      <PointerGlow className="-z-10" />

      <Container className="grid gap-12 pt-16 pb-20 md:pt-24 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16 lg:pt-32 lg:pb-28">
        <div className="min-w-0">
          <SectionLabel className="animate-fade-up">{hero.eyebrow}</SectionLabel>

          <h1 id="hero-title" className="mt-5 animate-rise font-display text-display">
            {hero.titleStart} <em className="text-accent italic">{hero.titleEmphasis}</em>
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-lead text-fg-muted"
            style={{ animationDelay: "120ms" }}
          >
            {hero.intro}
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "220ms" }}
          >
            <ButtonLink href={hero.primaryCta.href} size="lg" icon="arrow">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="min-w-0 animate-fade-up" style={{ animationDelay: "320ms" }}>
          <QueryCard />
        </div>
      </Container>
    </section>
  );
}
