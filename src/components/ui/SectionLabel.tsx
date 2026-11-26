import { cn } from "@/lib/utils/cn";

type SectionLabelProps = {
  /** e.g. "01" – leave empty for a label without number */
  index?: string;
  children: string;
  className?: string;
};

/** The monospace "system label", e.g. // 01 — ausgewählte projekte */
export function SectionLabel({ index, children, className }: SectionLabelProps) {
  const text = index ? `// ${index} — ${children}` : `// ${children}`;

  return <p className={cn("font-mono text-label text-accent uppercase", className)}>{text}</p>;
}
