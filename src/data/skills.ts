import type { SkillCategory } from "@/types/skill";

/**
 * YOUR SKILLS
 * Only list what you have actually used. There are deliberately no
 * percentages or "levels" – they are subjective and recruiters distrust them.
 * Please review every entry and remove anything that does not fit you.
 */
export const skillCategories: readonly SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend-Entwicklung",
    description: "Moderne, responsive Oberflächen mit komponentenbasierter Architektur.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Responsive Design"],
  },
  {
    id: "seo",
    title: "SEO & Performance",
    description: "Websites, die schnell laden und von Suchmaschinen gut verstanden werden.",
    skills: ["Technische SEO", "Core Web Vitals", "Semantisches HTML", "Barrierefreiheit"],
  },
  {
    id: "backend",
    title: "Backend-Entwicklung",
    description: "Serverseitige Logik und Anwendungen für Geschäftsprozesse.",
    skills: ["PHP", "CRM-Systeme"],
  },
  {
    id: "databases",
    title: "Datenbanken",
    description: "Datenmodelle, Abfragen und Auswertungen.",
    skills: ["SQL", "Datenbankentwicklung", "Google BigQuery"],
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description: "Hosting, Deployment und Cloud-Datendienste.",
    skills: ["Google Cloud", "Vercel"],
  },
  {
    id: "ai",
    title: "KI & Automatisierung",
    description: "KI-gestützte Entwicklung und Automatisierung von Abläufen.",
    skills: [],
    note: "Interessengebiet – [konkrete Tools ergänzen, die du nutzt]",
  },
  {
    id: "tools",
    title: "Entwicklungswerkzeuge",
    description: "Werkzeuge für sauberes, nachvollziehbares Arbeiten.",
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
];
