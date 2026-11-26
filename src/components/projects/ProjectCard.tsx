import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";

const MAX_BADGES = 4;

/** Shown when a project has no screenshot yet */
function ProjectPlaceholder({ slug }: { slug: string }) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="dot-grid fade-mask absolute inset-0" />
      <div className="pointer-glow absolute inset-0 opacity-70" />
      <span className="absolute bottom-4 left-5 font-mono text-xs text-fg-subtle">
        {`~/projekte/${slug}`}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0];
  const visibleTech = project.technologies.slice(0, MAX_BADGES);
  const hiddenTechCount = project.technologies.length - visibleTech.length;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface-2 shadow-card transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:bg-surface-3 has-[a:focus-visible]:border-accent/60">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-1">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectPlaceholder slug={project.slug} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-xs text-fg-subtle">
          <span>{project.year}</span>
          {project.confidential ? (
            <span className="inline-flex items-center gap-1.5">
              <Lock aria-hidden="true" className="size-3" />
              anonymisiert
            </span>
          ) : null}
        </div>

        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="font-display text-h3">
            {/* The ::after layer makes the whole card clickable */}
            <Link
              href={`/projekte/${project.slug}`}
              className="after:absolute after:inset-0 focus-visible:outline-none"
            >
              {project.title}
            </Link>
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-1 size-5 shrink-0 text-fg-subtle transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          />
        </div>

        <p className="mt-3 text-fg-muted">{project.summary}</p>

        <ul aria-label="Technologien" className="mt-auto flex flex-wrap gap-2 pt-6">
          {visibleTech.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
          {hiddenTechCount > 0 ? (
            <li>
              <Badge>{`+${hiddenTechCount}`}</Badge>
            </li>
          ) : null}
        </ul>
      </div>
    </article>
  );
}
