import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/data/home";

export function AboutTeaser() {
  const { about } = homeContent;

  return (
    <Section labelledBy="about-title" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <SectionHeader index="03" label={about.label} title={about.title} titleId="about-title" />

        <Reveal delay={0.1}>
          <div className="space-y-5 text-lead text-fg-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="bg-surface-1 p-5">
                <dt className="font-mono text-label text-fg-subtle uppercase">{fact.label}</dt>
                <dd className="mt-2 text-sm text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="/ueber-mich" variant="secondary" icon="arrow" className="mt-10">
            Mehr über mich
          </ButtonLink>
        </Reveal>
      </div>
    </Section>
  );
}
