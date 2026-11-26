import { siteConfig } from "@/config/site";

/*
 * TEMPORARY setup page (Phase 2).
 * It only shows that fonts, colours and the type scale work.
 * It will be replaced by the real homepage in Phase 3.
 */

const swatches = [
  { name: "canvas", className: "bg-canvas" },
  { name: "surface-1", className: "bg-surface-1" },
  { name: "surface-2", className: "bg-surface-2" },
  { name: "surface-3", className: "bg-surface-3" },
  { name: "accent", className: "bg-accent" },
  { name: "warm", className: "bg-warm" },
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-20 md:px-8 md:py-28">
      <p className="font-mono text-label text-accent uppercase">{"// 00 — setup check"}</p>

      <h1 className="mt-4 font-display text-display">
        {siteConfig.name}
        <span className="block text-fg-muted italic">{siteConfig.role}</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lead text-fg-muted">{siteConfig.headline}</p>

      <section aria-labelledby="tokens" className="mt-16">
        <h2 id="tokens" className="font-display text-h2">
          Design-Tokens
        </h2>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {swatches.map((s) => (
            <li key={s.name} className="overflow-hidden rounded-md border border-line bg-surface-2">
              <div className={`h-16 ${s.className}`} />
              <p className="px-3 py-2 font-mono text-label text-fg-subtle">{s.name}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-3 rounded-lg border border-line bg-surface-2 p-6 shadow-card">
          <p className="font-display text-h3">Instrument Serif – Überschriften</p>
          <p>Instrument Sans – Fließtext mit Umlauten: ä ö ü ß Ä Ö Ü</p>
          <p className="font-mono text-sm text-fg-muted">
            JetBrains Mono – SELECT * FROM projekte;
          </p>
          <p className="text-fg-subtle">Subtiler Text für Metadaten</p>
          <a
            href="#tokens"
            className="inline-block rounded-md bg-accent px-4 py-2 font-medium text-accent-fg transition-colors hover:bg-accent-strong"
          >
            Akzent-Button (Fokus mit Tab testen)
          </a>
        </div>
      </section>
    </main>
  );
}
