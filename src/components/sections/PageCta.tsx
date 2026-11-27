import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

type PageCtaProps = {
  title?: string;
  text?: string;
};

/** Compact call-to-action at the end of subpages */
export function PageCta({
  title = "Interesse geweckt?",
  text = "Lass uns über dein Projekt oder eine offene Stelle sprechen.",
}: PageCtaProps) {
  return (
    <section aria-labelledby="page-cta-title" className="border-t border-line">
      <Container className="py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-lg border border-line bg-surface-2 p-8 shadow-card md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h2 id="page-cta-title" className="font-display text-h2">
                {title}
              </h2>
              <p className="mt-2 text-fg-muted">{text}</p>
            </div>
            <ButtonLink href="/kontakt" size="lg" icon="arrow" className="shrink-0">
              Kontakt aufnehmen
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
