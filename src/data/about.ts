/**
 * Texts for the "Über mich" page.
 * Text in [square brackets] is a placeholder.
 */
export type InterestIcon = "code" | "search" | "sparkles" | "database";

export const aboutContent = {
  background: {
    label: "Hintergrund",
    title: "Vom Bankenumfeld ins moderne Web",
    paragraphs: [
      "Meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung hat mir das Fundament gegeben: strukturiert entwickeln, sauber mit Daten arbeiten und Anforderungen in funktionierende Software übersetzen.",
      "Im Bankenumfeld habe ich mit PHP und SQL an Datenbanken gearbeitet, Auswertungen mit Google BigQuery umgesetzt und CRM-Systeme weiterentwickelt und optimiert. Dabei habe ich gelernt, wie eng Technik, Geschäftsprozesse und Kundenkommunikation zusammenhängen.",
      "Heute verbinde ich diese Erfahrung mit moderner Webentwicklung: Ich baue schnelle, responsive Websites, die gut aussehen und technisch sauber für Suchmaschinen optimiert sind.",
      "[Optional: ein persönlicher Satz – was dich antreibt oder was du in deiner Freizeit machst. Sonst löschen.]",
    ],
  },

  qualifications: [
    {
      title: "Fachinformatiker für Anwendungsentwicklung",
      detail: "Abgeschlossene Ausbildung · [Jahr]",
    },
    {
      title: "[Weitere Qualifikation oder Zertifikat]",
      detail: "[Optional – sonst diesen Eintrag löschen]",
    },
  ],

  journey: {
    label: "Werdegang",
    title: "Mein beruflicher Weg",
    intro: "Von der Ausbildung über das Bankenumfeld bis zur Webentwicklung.",
  },

  interests: {
    label: "Interessen",
    title: "Was mich technisch begeistert",
    items: [
      {
        icon: "code",
        title: "Moderne Webentwicklung",
        text: "Komponentenbasierte Oberflächen mit Next.js, React und TypeScript.",
      },
      {
        icon: "search",
        title: "Technische SEO",
        text: "Websites, die schnell laden und von Suchmaschinen gut verstanden werden.",
      },
      {
        icon: "sparkles",
        title: "KI & Automatisierung",
        text: "Wie KI-Werkzeuge Entwicklung und wiederkehrende Abläufe vereinfachen.",
      },
      {
        icon: "database",
        title: "Daten & Datenbanken",
        text: "Saubere Datenmodelle und aussagekräftige Auswertungen.",
      },
    ],
  },
} as const;
