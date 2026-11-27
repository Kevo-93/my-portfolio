import {
  Cloud,
  Database,
  Monitor,
  Search,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { SkillCategoryId } from "@/types/skill";

/** Icons live here (not in the data file) so the data stays plain text */
export const categoryIcons: Record<SkillCategoryId, LucideIcon> = {
  frontend: Monitor,
  seo: Search,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  ai: Sparkles,
  tools: Wrench,
};
