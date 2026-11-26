import { Reveal } from "@/components/animations/Reveal";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homeContent } from "@/data/home";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();
  const { projects: text } = homeContent;

  return (
    <Section labelledBy="projects-title" className="border-t border-line">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader index="01" label={text.label} title={text.title} titleId="projects-title" intro={text.intro} />
        <Reveal className="shrink-0">
          <ButtonLink href="/projekte" variant="secondary" icon="arrow">
            Alle Projekte
          </ButtonLink>
        </Reveal>
      </div>

      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
