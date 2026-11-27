import type { ExperienceEntry } from "@/types/experience";

/**
 * YOUR CAREER – newest entry first.
 * Text in [square brackets] is a placeholder – replace it with your real data.
 * Only list what is true; recruiters check CVs against LinkedIn.
 */
export const experience: readonly ExperienceEntry[] = [
  {
    id: "fokus-web",
    type: "focus",
    title: "Webentwicklung & technische SEO",
    organization: "Eigene Projekte",
    period: "seit [Jahr]",
    description:
      "Schwerpunkt auf modernen Web-Technologien: schnelle, responsive Websites mit Next.js und React, die technisch sauber für Suchmaschinen optimiert sind.",
    highlights: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Technische SEO"],
  },
  {
    id: "banking",
    type: "work",
    title: "[Position, z. B. Anwendungsentwickler]",
    organization: "[Unternehmen] · Bankenumfeld",
    period: "[Jahr] – [Jahr]",
    description:
      "Entwicklung und Optimierung von CRM-Systemen und Datenbanken mit PHP, SQL und Google BigQuery – eng verzahnt mit Geschäftsprozessen und der Kundenkommunikation.",
    highlights: [
      "PHP & SQL",
      "Datenbankentwicklung",
      "Google BigQuery",
      "CRM-Entwicklung & -Optimierung",
      "Geschäftsprozesse",
    ],
  },
  {
    id: "ausbildung",
    type: "education",
    title: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
    organization: "[Ausbildungsbetrieb] · [Berufsschule]",
    period: "[Jahr] – [Jahr]",
    description:
      "Grundlagen der Softwareentwicklung, Datenbanken und Projektarbeit – in Theorie und Praxis.",
    highlights: ["Softwareentwicklung", "Datenbanken", "Projektarbeit"],
  },
];
