import { TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Visible warning for texts that still have to be checked.
 * Delete <DraftNotice /> from a page once its content is final.
 */
export function DraftNotice({ children }: { children: ReactNode }) {
  return (
    <div
      role="note"
      className="mb-12 flex gap-3 rounded-lg border border-warm/40 bg-warm/10 p-5 text-sm text-fg"
    >
      <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-warm" />
      <div>{children}</div>
    </div>
  );
}
