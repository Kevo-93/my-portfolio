import { Mail } from "lucide-react";

import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/data/home";

export function ContactCta() {
  const { contact } = homeContent;

  return (
    <Section labelledBy="contact-cta-title" className="border-t border-line">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-lg border border-line bg-surface-2 px-6 py-14 shadow-card sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 dot-grid fade-mask opacity-60"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-glow" />

          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel index="04">{contact.label}</SectionLabel>
            <h2 id="contact-cta-title" className="mt-4 font-display text-h1">
              {contact.title}
            </h2>
            <p className="mt-5 text-lead text-fg-muted">{contact.text}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/kontakt" size="lg" icon="arrow">
                Nachricht schreiben
              </ButtonLink>
              <ButtonLink href={`mailto:${siteConfig.email}`} size="lg" variant="secondary">
                <Mail aria-hidden="true" className="size-4" />
                E-Mail senden
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
