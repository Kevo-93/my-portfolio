import type { Metadata } from "next";

import { Reveal } from "@/components/animations/Reveal";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PageCta } from "@/components/sections/PageCta";
import { pages } from "@/data/pages";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: pages.projects.title,
  description: pages.projects.description,
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label={pages.projects.label}
        title={pages.projects.heading}
        intro={pages.projects.intro}
      />

      <Section labelledBy="all-projects-title">
        <h2 id="all-projects-title" className="sr-only">
          Alle Projekte
        </h2>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </Section>

      <PageCta />
    </>
  );
}
