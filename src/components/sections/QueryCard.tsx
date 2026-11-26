import { siteConfig } from "@/config/site";

/*
 * Decorative "profile as an SQL query" card in the hero.
 * A nod to the PHP/SQL/BigQuery background. Each line is a list of
 * tokens so we can colour keywords, strings and comments.
 */

type Token = { text: string; kind?: "keyword" | "string" | "comment" | "punct" };

const lines: Token[][] = [
  [{ text: "SELECT", kind: "keyword" }, { text: " rolle, fokus" }],
  [{ text: "FROM", kind: "keyword" }, { text: "   entwickler" }],
  [
    { text: "WHERE", kind: "keyword" },
    { text: "  name = " },
    { text: `'${siteConfig.name}'`, kind: "string" },
    { text: ";", kind: "punct" },
  ],
  [],
  [{ text: "-- rolle: Webentwickler & SEO", kind: "comment" }],
  [{ text: "-- fokus: Next.js, React, SEO", kind: "comment" }],
  [{ text: "-- basis: PHP, SQL, BigQuery", kind: "comment" }],
];

const tokenClass: Record<NonNullable<Token["kind"]>, string> = {
  keyword: "text-accent",
  string: "text-warm",
  comment: "text-fg-subtle",
  punct: "text-fg-muted",
};

export function QueryCard() {
  return (
    <figure className="min-w-0 overflow-hidden rounded-lg border border-line bg-surface-1/80 shadow-card backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-fg-subtle/30" />
        <span className="size-2.5 rounded-full bg-fg-subtle/30" />
        <span className="size-2.5 rounded-full bg-fg-subtle/30" />
        <span className="ml-auto font-mono text-xs text-fg-subtle">profil.sql</span>
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-fg sm:text-sm">
        <code>
          {lines.map((tokens, lineIndex) => (
            <span key={lineIndex} className="block min-h-[1lh]">
              {tokens.map((token, tokenIndex) => (
                <span key={tokenIndex} className={token.kind ? tokenClass[token.kind] : undefined}>
                  {token.text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>

      <figcaption className="sr-only">
        Kurzprofil als SQL-Abfrage: {siteConfig.role}, Fokus auf Next.js, React und SEO, Basis in
        PHP, SQL und BigQuery.
      </figcaption>
    </figure>
  );
}
