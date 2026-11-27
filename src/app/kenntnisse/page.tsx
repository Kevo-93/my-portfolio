import type { Metadata } from "next";

import { Reveal } from "@/components/animations/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { PageCta } from "@/components/sections/PageCta";
import { categoryIcons } from "@/components/skills/category-icons";
import { Badge } from "@/components/ui/Badge";
import { pages } from "@/data/pages";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: pages.skills.title,
  description: pages.skills.description,
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        label={pages.skills.label}
        title={pages.skills.heading}
        intro={pages.skills.intro}
      />

      <Section labelledBy="skill-categories-title">
        <h2 id="skill-categories-title" className="sr-only">
          Kenntnisse nach Bereichen
        </h2>

        <ul className="divide-y divide-line border-y border-line">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id];

            return (
              <Reveal
                as="li"
                key={category.id}
                delay={Math.min(index, 3) * 0.05}
                className="grid gap-6 py-10 md:grid-cols-[1fr_1.6fr] md:gap-12"
              >
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2">
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                  </span>
                  <div>
                    <h3 className="font-display text-h3">{category.title}</h3>
                    <p className="mt-1 text-fg-muted">{category.description}</p>
                  </div>
                </div>

                <div className="md:pt-1">
                  {category.skills.length > 0 ? (
                    <ul aria-label={category.title} className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li key={skill}>
                          <Badge className="px-3 py-1.5 text-sm">{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {category.note ? (
                    <p className="font-mono text-sm text-fg-subtle">{category.note}</p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <PageCta
        title="Kenntnisse in der Praxis"
        text="Wie ich diese Technologien einsetze, zeigen meine Projekte – oder wir sprechen direkt."
      />
    </>
  );
}
