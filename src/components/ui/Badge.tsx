import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

/** Small monospace pill, e.g. for technologies */
export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface-1 px-2.5 py-1 font-mono text-xs text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
