import { ArrowUpRight, Mail, MapPin, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";

import { Reveal } from "@/components/animations/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/config/site";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
};

type ContactOption = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: LucideIcon;
};

const contactOptions: ContactOption[] = [
  { label: "E-Mail", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  {
    label: "GitHub",
    value: "Profil ansehen",
    href: siteConfig.socials.github,
    external: true,
    icon: ArrowUpRight,
  },
  {
    label: "LinkedIn",
    value: "Profil ansehen",
    href: siteConfig.socials.linkedin,
    external: true,
    icon: ArrowUpRight,
  },
  { label: "Standort", value: siteConfig.location, icon: MapPin },
];

const cardClass =
  "flex items-center justify-between gap-4 rounded-lg border border-line bg-surface-2 p-5";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label={pages.contact.label}
        title={pages.contact.heading}
        intro={pages.contact.intro}
      />

      <Section labelledBy="contact-options-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <Reveal>
            <h2 id="contact-options-title" className="font-display text-h3">
              Direkter Kontakt
            </h2>

            <ul className="mt-6 space-y-3">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                const content = (
                  <>
                    <span className="min-w-0">
                      <span className="block font-mono text-label text-fg-subtle uppercase">
                        {option.label}
                      </span>
                      <span className="mt-1 block break-all text-fg">{option.value}</span>
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                );

                return (
                  <li key={option.label}>
                    {option.href ? (
                      <a
                        href={option.href}
                        className={`${cardClass} group transition-colors hover:border-line-strong hover:bg-surface-3`}
                        {...(option.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {content}
                        {option.external ? (
                          <span className="sr-only">(öffnet in neuem Tab)</span>
                        ) : null}
                      </a>
                    ) : (
                      <div className={cardClass}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-sm text-fg-muted">
              Ich antworte in der Regel innerhalb von [X] Werktagen.
            </p>
          </Reveal>

          {/* The contact form replaces this card in Phase 4 */}
          <Reveal delay={0.1}>
            <div
              id="kontaktformular"
              className="relative isolate h-full overflow-hidden rounded-lg border border-line bg-surface-2 p-8 shadow-card md:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 dot-grid fade-mask opacity-60"
              />
              <SectionLabel>Formular</SectionLabel>
              <h2 className="mt-4 font-display text-h2">Schreib mir eine Nachricht</h2>
              <p className="mt-4 text-fg-muted">
                Das Kontaktformular wird gerade eingerichtet. Bis dahin erreichst du mich am
                schnellsten direkt per E-Mail.
              </p>
              <ButtonLink
                href={`mailto:${siteConfig.email}`}
                size="lg"
                icon="arrow"
                className="mt-8"
              >
                E-Mail schreiben
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
