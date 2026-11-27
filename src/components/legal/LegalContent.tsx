import type { ReactNode } from "react";

/**
 * Readable typography for long legal texts (Impressum, Datenschutz).
 * The [&_h2]:… classes style every h2/p/ul/a inside this block, so the
 * text itself can be plain HTML – easy to paste from a legal-text generator.
 */
export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-h3 [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:font-medium [&_li]:mt-1 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-fg-muted [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-fg-muted">
      {children}
    </div>
  );
}
