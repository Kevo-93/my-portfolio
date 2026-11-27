export type SkillCategoryId =
  "frontend" | "seo" | "backend" | "databases" | "cloud" | "ai" | "tools";

export type SkillCategory = {
  id: SkillCategoryId;
  title: string;
  description: string;
  skills: readonly string[];
  /** Optional hint, e.g. for areas of interest without concrete tools yet */
  note?: string;
};
