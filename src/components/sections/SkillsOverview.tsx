import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/layout/Section";
import { categoryIcons } from "@/components/skills/category-icons";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/data/home";
import { skillCategories } from "@/data/skills";

export function SkillsOverview() {
  const { skills: text } = homeContent;

  return (
    <Section labelledBy="skills-title" className="border-t border-line bg-surface-1/40">
      <SectionHeader
        index="02"
        label={text.label}
        title={text.title}
        titleId="skills-title"
        intro={text.intro}
      />

      {/* 7 categories + 1 link card = an even 2×4 grid on large screens */}
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, index) => {
          const Icon = categoryIcons[category.id];

          return (
            <Reveal as="li" key={category.id} delay={index * 0.05}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-surface-2 p-5 transition-colors duration-300 hover:border-line-strong">
                <Icon aria-hidden="true" className="size-5 text-accent" />
                <h3 className="mt-4 font-medium">{category.title}</h3>
                <p className="mt-1 text-sm text-fg-muted">{category.description}</p>

                {category.skills.length > 0 ? (
                  <ul aria-label={category.title} className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <Badge>{skill}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : category.note ? (
                  <p className="mt-auto pt-4 font-mono text-xs text-fg-subtle">{category.note}</p>
                ) : null}
              </div>
            </Reveal>
          );
        })}

        <Reveal as="li" delay={skillCategories.length * 0.05}>
          <Link
            href="/kenntnisse"
            className="group flex h-full min-h-40 flex-col justify-between rounded-lg border border-dashed border-line-strong p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-surface-2"
          >
            <span className="font-mono text-label text-fg-subtle uppercase">{"// mehr"}</span>
            <span className="flex items-center justify-between gap-3 font-medium">
              Alle Kenntnisse ansehen
              <ArrowRight
                aria-hidden="true"
                className="size-4 text-accent transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        </Reveal>
      </ul>
    </Section>
  );
}
