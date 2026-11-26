export type ProjectImage = {
  /** Path inside /public, e.g. "/images/projects/portfolio-1.webp" */
  src: string;
  /** Describe what the screenshot shows (accessibility + SEO) */
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  /** Used in the URL: /projekte/<slug> – lowercase, hyphens, no umlauts */
  slug: string;
  title: string;
  /** One or two sentences for the project card */
  summary: string;
  objective: string;
  problem: string;
  solution: string;
  year: string;
  technologies: readonly string[];
  /** First image is used as the card cover */
  images: readonly ProjectImage[];
  links: {
    repository?: string;
    live?: string;
  };
  /** Shown on the homepage */
  featured: boolean;
  /** Work project without public code – shown as "anonymisiert" */
  confidential: boolean;
};
