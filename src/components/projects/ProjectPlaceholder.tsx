import { cn } from "@/lib/utils/cn";

/** Decorative cover shown when a project has no screenshot yet */
export function ProjectPlaceholder({ slug, className }: { slug: string; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("absolute inset-0", className)}>
      <div className="absolute inset-0 dot-grid fade-mask" />
      <div className="absolute inset-0 opacity-70 pointer-glow" />
      <span className="absolute bottom-4 left-5 font-mono text-xs text-fg-subtle">
        {`~/projekte/${slug}`}
      </span>
    </div>
  );
}
