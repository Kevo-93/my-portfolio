import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { ContactCta } from "@/components/sections/ContactCta";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { SkillsOverview } from "@/components/sections/SkillsOverview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsOverview />
      <AboutTeaser />
      <ContactCta />
    </>
  );
}
