import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectPlaceholder } from "@/components/projects/ProjectPlaceholder";
import { PageCta } from "@/components/sections/PageCta";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  // Since Next.js 15, route params are a Promise and must be awaited
  params: Promise<{ slug: string }>;
};

/** Build one static HTML page per project at build time */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}


export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  const [cover, ...gallery] = project.images;
  const hasLinks = Boolean(project.links.live ?? project.links.repository);

  const sections = [
    { id: "ziel", title: "Ziel", text: project.objective },
    { id: "ausgangssituation", title: "Ausgangssituation", text: project.problem },
    { id: "loesung", title: "Lösung", text: project.solution },
  ];

  return (
    <>
      <PageHeader
        label={
          project.confidential
            ? `Projekt · ${project.year} · anonymisiert`
            : `Projekt · ${project.year}`
        }
        title={project.title}
        intro={project.summary}
      >
        {hasLinks ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.links.live ? (
              <ButtonLink href={project.links.live} external icon="external" size="lg">
                Live ansehen
              </ButtonLink>
            ) : null}
            {project.links.repository ? (
              <ButtonLink
                href={project.links.repository}
                external
                icon="external"
                size="lg"
                variant="secondary"
              >
                Code auf GitHub
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </PageHeader>

      <Container className="py-16 md:py-20">
        <Link
          href="/projekte"
          className="group inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
          Alle Projekte
        </Link>

        {/* Cover image */}
        <Reveal className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-line bg-surface-1">
          {cover ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
            />
          ) : (
            <ProjectPlaceholder slug={project.slug} />
          )}
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.8fr_1fr] lg:gap-16">
          {/* Objective / problem / solution */}
          <div className="space-y-12">
            {sections.map((section) => (
              <Reveal key={section.id}>
                <section aria-labelledby={`${section.id}-title`}>
                  <h2 id={`${section.id}-title`} className="font-display text-h2">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-lead text-fg-muted">{section.text}</p>
                </section>
              </Reveal>
            ))}
          </div>

          {/* Sidebar */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28 lg:self-start">
            <aside
              aria-label="Projektdetails"
              className="rounded-lg border border-line bg-surface-2 p-6"
            >
              <h2 className="font-mono text-label text-fg-subtle uppercase">Technologien</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 font-mono text-label text-fg-subtle uppercase">Jahr</h2>
              <p className="mt-2">{project.year}</p>

              {project.confidential ? (
                <p className="mt-8 flex gap-2 border-t border-line pt-6 text-sm text-fg-muted">
                  <Lock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-fg-subtle" />
                  Vertrauliches Projekt: Quellcode und interne Details können nicht veröffentlicht
                  werden.
                </p>
              ) : null}
            </aside>
          </Reveal>
        </div>

        {/* More screenshots */}
        {gallery.length > 0 ? (
          <section aria-labelledby="gallery-title" className="mt-20">
            <h2 id="gallery-title" className="font-display text-h2">
              Einblicke
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {gallery.map((image) => (
                <Reveal as="li" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full rounded-lg border border-line"
                  />
                </Reveal>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Previous / next project */}
        <nav
          aria-label="Weitere Projekte"
          className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projekte/${previous.slug}`}
              className="group rounded-lg border border-line p-5 transition-colors hover:border-line-strong hover:bg-surface-2"
            >
              <span className="flex items-center gap-2 font-mono text-label text-fg-subtle uppercase">
                <ArrowLeft aria-hidden="true" className="size-3.5" />
                Vorheriges Projekt
              </span>
              <span className="mt-2 block font-medium">{previous.title}</span>
            </Link>
          ) : (
            <span aria-hidden="true" className="hidden sm:block" />
          )}
          {next ? (
            <Link
              href={`/projekte/${next.slug}`}
              className="group rounded-lg border border-line p-5 text-right transition-colors hover:border-line-strong hover:bg-surface-2"
            >
              <span className="flex items-center justify-end gap-2 font-mono text-label text-fg-subtle uppercase">
                Nächstes Projekt
                <ArrowRight aria-hidden="true" className="size-3.5" />
              </span>
              <span className="mt-2 block font-medium">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      </Container>

      <PageCta />
    </>
  );
}
