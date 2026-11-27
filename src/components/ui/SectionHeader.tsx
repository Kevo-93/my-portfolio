import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils/cn";

import { SectionLabel } from "./SectionLabel";

type SectionHeaderProps = {
  index?: string;
  label: string;
  title: string;
  /** Must match the `labelledBy` of the surrounding <Section> */
  titleId: string;
  intro?: string;
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  titleId,
  intro,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <SectionLabel index={index}>{label}</SectionLabel>
      <h2 id={titleId} className="mt-4 font-display text-h2">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lead text-fg-muted">{intro}</p> : null}
    </Reveal>
  );
}
