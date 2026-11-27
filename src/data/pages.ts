import { siteConfig } from "@/config/site";

/**
 * Titles, descriptions and intro texts of all subpages.
 * `title` + `description` are used for Google search results and browser tabs.
 */
export const pages = {
  about: {
    title: "Über mich",
    description: `Werdegang, Ausbildung und Schwerpunkte von ${siteConfig.name} – Fachinformatiker für Anwendungsentwicklung mit Fokus auf Webentwicklung und SEO.`,
    label: "Über mich",
    heading: `Hallo, ich bin ${siteConfig.name}.`,
    intro:
      "Fachinformatiker für Anwendungsentwicklung mit Erfahrung im Bankenumfeld – heute mit Fokus auf moderne Webentwicklung und technische SEO.",
  },
  projects: {
    title: "Projekte",
    description: `Ausgewählte Projekte von ${siteConfig.name}: Webentwicklung, Datenbanken, CRM-Systeme und Datenauswertungen.`,
    label: "Projekte",
    heading: "Projekte & Arbeiten",
    intro:
      "Projekte aus meinem Berufsalltag und eigene Arbeiten. Projekte aus dem Bankenumfeld sind anonymisiert – ohne Kundendaten, interne Details oder Quellcode.",
  },
  skills: {
    title: "Kenntnisse",
    description: `Technologien und Werkzeuge, mit denen ${siteConfig.name} arbeitet – von Next.js und React bis PHP, SQL und Google BigQuery.`,
    label: "Kenntnisse",
    heading: "Kenntnisse & Werkzeuge",
    intro:
      "Bewusst ohne Prozentbalken: Hier steht, womit ich tatsächlich gearbeitet habe. Wie ich die Technologien einsetze, zeigen meine Projekte.",
  },
  contact: {
    title: "Kontakt",
    description: `Kontakt zu ${siteConfig.name} – für Projekte, offene Stellen oder Fragen rund um Webentwicklung und SEO.`,
    label: "Kontakt",
    heading: "Lass uns sprechen.",
    intro:
      "Du hast ein Projekt, eine offene Stelle oder eine Frage? Ich freue mich über deine Nachricht.",
  },
  imprint: {
    title: "Impressum",
    description: `Impressum und Anbieterkennzeichnung von ${siteConfig.name}.`,
  },
  privacy: {
    title: "Datenschutzerklärung",
    description: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  },
} as const;
