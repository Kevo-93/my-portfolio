/**
 * Texts for the homepage. Change wording here, not in the components.
 * Text in [square brackets] is a placeholder.
 */
export const homeContent = {
  hero: {
    eyebrow: "Webentwicklung & SEO",
    titleStart: "Ich entwickle moderne Websites, die gut aussehen",
    titleEmphasis: "und gefunden werden.",
    intro:
      "Fachinformatiker für Anwendungsentwicklung mit Erfahrung in PHP, SQL und Datenbanken – heute mit Fokus auf Next.js, React, responsives Design und technische SEO.",
    primaryCta: { label: "Projekte ansehen", href: "/projekte" },
    secondaryCta: { label: "Kontakt aufnehmen", href: "/kontakt" },
  },

  projects: {
    label: "Ausgewählte Projekte",
    title: "Woran ich gearbeitet habe",
    intro:
      "Ein Auszug aus meinen Projekten – von Datenbanken im Bankenumfeld bis zu modernen Web-Anwendungen.",
  },

  skills: {
    label: "Kenntnisse",
    title: "Womit ich arbeite",
    intro:
      "Technologien und Themen aus meiner Ausbildung, meinem Berufsalltag und eigenen Projekten.",
  },

  about: {
    label: "Über mich",
    title: "Vom Bankenumfeld ins moderne Web",
    paragraphs: [
      "Ich bin ausgebildeter Fachinformatiker für Anwendungsentwicklung und habe im Bankenumfeld mit PHP, SQL und Google BigQuery an Datenbanken und CRM-Systemen gearbeitet.",
      "Dabei habe ich gelernt, wie wichtig saubere Daten, verlässliche Prozesse und eine klare Kommunikation mit Kunden sind. Heute verbinde ich diese Erfahrung mit moderner Webentwicklung: schnelle, responsive Websites, die technisch sauber für Suchmaschinen optimiert sind.",
    ],
    facts: [
      { label: "Ausbildung", value: "Fachinformatiker für Anwendungsentwicklung" },
      { label: "Erfahrung", value: "Bankenumfeld · Datenbanken · CRM" },
      { label: "Fokus", value: "Webentwicklung & technische SEO" },
    ],
  },

  contact: {
    label: "Kontakt",
    title: "Lass uns gemeinsam etwas bauen.",
    text: "Du hast ein Projekt, eine offene Stelle oder einfach eine Frage? Schreib mir – ich melde mich in der Regel innerhalb von [X] Werktagen.",
  },
} as const;
