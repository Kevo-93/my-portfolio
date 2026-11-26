import type { ReactNode } from "react";

/*
 * A template re-mounts on every navigation (unlike layout.tsx), so this
 * CSS animation plays each time you open a new page. It only moves the
 * content slightly – nothing is hidden – so it costs no performance and
 * needs no JavaScript.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
