export type NavItem = {
  label: string;
  href: `/${string}`;
};

export type SiteConfig = {
  name: string;
  role: string;
  headline: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
  };
  nav: readonly NavItem[];
  legalNav: readonly NavItem[];
};
