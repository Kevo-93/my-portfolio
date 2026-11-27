import type { Project } from "@/types/project";

/**
 * YOUR PROJECTS
 * - Add a project by copying one object and changing the values.
 * - Text in [square brackets] is a placeholder – replace or delete it.
 * - Screenshots go into /public/images/projects/ and are listed in `images`.
 * - For work projects: never publish confidential details, customer names
 *   or internal code. Keep `confidential: true` and describe it generally.
 */
export const projects: readonly Project[] = [
  {
    slug: "portfolio-website",
    title: "Persönliche Portfolio-Website",
    summary:
      "Diese Website: schnell, barrierearm, für Suchmaschinen optimiert und mit eigenem Kontaktformular.",
    objective:
      "Mich und meine Arbeit professionell präsentieren – mit Fokus auf Performance, technische SEO und responsives Design.",
    problem:
      "Viele Portfolio-Vorlagen sehen austauschbar aus, laden langsam und sind für Suchmaschinen kaum optimiert.",
    solution:
      "Ein eigenes Design-System mit Next.js, TypeScript und Tailwind CSS, statisch generierte Seiten und ein abgesichertes Kontaktformular mit automatischen E-Mails.",
    year: "2026",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Resend", "Vercel"],
    images: [],
    links: {
      repository: "https://github.com/[dein-github-name]/portfolio",
      live: "https://[deine-domain].de",
    },
    featured: true,
    confidential: false,
  },
  {
    slug: "crm-weiterentwicklung",
    title: "CRM-Weiterentwicklung im Bankenumfeld",
    summary:
      "Weiterentwicklung und Optimierung eines CRM-Systems zur Unterstützung von Geschäftsprozessen und Kundenkommunikation.",
    objective: "[Ziel ergänzen – z. B. welche Abläufe verbessert werden sollten]",
    problem: "[Ausgangssituation ergänzen – ohne vertrauliche Details]",
    solution: "[Deine Lösung ergänzen – was du konkret umgesetzt hast]",
    year: "[Jahr]",
    technologies: ["PHP", "SQL"],
    images: [],
    links: {},
    featured: true,
    confidential: true,
  },
  {
    slug: "datenauswertung-bigquery",
    title: "Datenauswertungen mit Google BigQuery",
    summary: "Entwicklung von SQL-Abfragen und Auswertungen auf Basis von Google Cloud BigQuery.",
    objective: "[Ziel ergänzen – z. B. welche Fragen die Auswertungen beantworten sollten]",
    problem: "[Ausgangssituation ergänzen – ohne vertrauliche Details]",
    solution: "[Deine Lösung ergänzen]",
    year: "[Jahr]",
    technologies: ["SQL", "Google BigQuery"],
    images: [],
    links: {},
    featured: true,
    confidential: true,
  },
];

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
