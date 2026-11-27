import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

/*
 * Shown for every unknown URL and when a page calls notFound().
 * Next.js automatically sends status 404 and tells search engines
 * not to index this page.
 */
export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 dot-grid fade-mask" />

      <Container className="py-24 md:py-32">
        <SectionLabel>Fehler 404</SectionLabel>
        <h1 id="not-found-title" className="mt-4 max-w-3xl font-display text-h1">
          Diese Seite gibt es leider nicht.
        </h1>

        <pre className="mt-8 max-w-xl overflow-x-auto rounded-lg border border-line bg-surface-1 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
          <code>
            <span className="text-accent">SELECT</span> * <span className="text-accent">FROM</span>{" "}
            seiten
            {"\n"}
            <span className="text-accent">WHERE</span> url ={" "}
            <span className="text-warm">:diese_url</span>;{"\n\n"}
            <span className="text-fg-subtle">{"-- 0 Zeilen gefunden"}</span>
          </code>
        </pre>

        <p className="mt-8 max-w-xl text-lead text-fg-muted">
          Vielleicht hat sich die Adresse geändert oder es gibt einen Tippfehler im Link.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" icon="arrow">
            Zur Startseite
          </ButtonLink>
          <ButtonLink href="/projekte" size="lg" variant="secondary">
            Projekte ansehen
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
