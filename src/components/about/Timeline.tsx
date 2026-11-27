import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";
import type { ExperienceEntry, ExperienceType } from "@/types/experience";

import { TimelineProgress } from "./TimelineProgress";

const typeLabels: Record<ExperienceType, string> = {
  education: "Ausbildung",
  work: "Beruf",
  focus: "Fokus",
};

/** Animated career timeline. Server component – only the line is client-side. */
export function Timeline({ entries }: { entries: readonly ExperienceEntry[] }) {
  return (
    <ol className="relative">
      <TimelineProgress />

      {entries.map((entry, index) => (
        <Reveal
          as="li"
          key={entry.id}
          delay={index * 0.05}
          className="relative pb-12 pl-10 last:pb-0"
        >
          {/* Dot on the line */}
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-accent bg-canvas shadow-glow"
          />

          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-fg-subtle">
            <span>{entry.period}</span>
            <span aria-hidden="true">·</span>
            <span className="text-accent uppercase">{typeLabels[entry.type]}</span>
          </p>

          <h3 className="mt-2 font-display text-h3">{entry.title}</h3>
          <p className="mt-1 text-sm text-fg-muted">{entry.organization}</p>
          <p className="mt-4 text-fg-muted">{entry.description}</p>

          {entry.highlights.length > 0 ? (
            <ul aria-label="Schwerpunkte" className="mt-5 flex flex-wrap gap-2">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>
                  <Badge>{highlight}</Badge>
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      ))}
    </ol>
  );
}
