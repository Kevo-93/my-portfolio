import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

/** Base surface for cards. Add hover styles where a card is interactive. */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-line bg-surface-2 shadow-card", className)}>
      {children}
    </div>
  );
}
