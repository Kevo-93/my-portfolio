import { Code, Database, Search, Sparkles, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";

import { Timeline } from "@/components/about/Timeline";
import { Reveal } from "@/components/animations/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PageCta } from "@/components/sections/PageCta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutContent, type InterestIcon } from "@/data/about";
import { experience } from "@/data/experience";
import { pages } from "@/data/pages";

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
};

const interestIcons: Record<InterestIcon, LucideIcon> = {
  code: Code,
  search: Search,
  sparkles: Sparkles,
  database: Database,
};

export default function AboutPage() {
  const { background, qualifications, journey, interests } = aboutContent;

  return (
    <>
      <PageHeader label={pages.about.label} title={pages.about.heading} intro={pages.about.intro} />

      {/* 01 – Background + qualifications */}
      <Section labelledBy="background-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeader
            index="01"
            label={background.label}
            title={background.title}
            titleId="background-title"
            className="lg:sticky lg:top-28 lg:self-start"
          />

          <Reveal delay={0.1}>
            <div className="space-y-5 text-lead text-fg-muted">
              {background.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-14 font-mono text-label text-fg-subtle uppercase">
              Ausbildung & Qualifikationen
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {qualifications.map((item) => (
                <li key={item.title} className="rounded-lg border border-line bg-surface-2 p-5">
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-fg-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 02 – Career timeline */}
      <Section labelledBy="journey-title" className="border-t border-line bg-surface-1/40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeader
            index="02"
            label={journey.label}
            title={journey.title}
            titleId="journey-title"
            intro={journey.intro}
            className="lg:sticky lg:top-28 lg:self-start"
          />
          <Timeline entries={experience} />
        </div>
      </Section>

      {/* 03 – Technical interests */}
      <Section labelledBy="interests-title" className="border-t border-line">
        <SectionHeader
          index="03"
          label={interests.label}
          title={interests.title}
          titleId="interests-title"
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.items.map((item, index) => {
            const Icon = interestIcons[item.icon];

            return (
              <Reveal as="li" key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-lg border border-line bg-surface-2 p-6 transition-colors duration-300 hover:border-line-strong">
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="mt-4 font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <PageCta />
    </>
  );
}
