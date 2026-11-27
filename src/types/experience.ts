export type ExperienceType = "education" | "work" | "focus";

export type ExperienceEntry = {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  /** Free text, e.g. "2019 – 2022" or "seit 2025" */
  period: string;
  description: string;
  highlights: readonly string[];
};
