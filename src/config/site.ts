import type { SiteConfig } from "@/types/site";

/**
 * Central place for your personal details.
 * Everything in [square brackets] is a placeholder – search the project
 * for "[" plus the text to find and replace them.
 */
export const siteConfig = {
  name: "[Kework Majarian]",
  role: "Webentwickler & SEO",
  headline: "Ich entwickle moderne Websites, die gut aussehen und gefunden werden.",
  description:
    "Fachinformatiker für Anwendungsentwicklung mit Erfahrung in PHP, SQL und Datenbanken – heute mit Fokus auf Next.js, React, responsives Design und technische SEO.",

  // Set NEXT_PUBLIC_SITE_URL in .env.local / Vercel. Fallback for local dev:
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "de_DE",

  email: "[deine@email.de]",
  location: "[Stadt], Deutschland",

  socials: {
    github: "https://github.com/[dein-github-name]",
    linkedin: "https://www.linkedin.com/in/[dein-linkedin-name]",
  },

  nav: [
    { label: "Start", href: "/" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Projekte", href: "/projekte" },
    { label: "Kenntnisse", href: "/kenntnisse" },
    { label: "Kontakt", href: "/kontakt" },
  ],

  legalNav: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const satisfies SiteConfig;
