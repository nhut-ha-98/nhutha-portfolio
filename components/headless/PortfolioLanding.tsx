import { ExperienceSection } from "@/components/headless/ExperienceSection";
import { HeroSection } from "@/components/headless/HeroSection";
import { PageHeader } from "@/components/headless/PageHeader";
import { ProjectsSection } from "@/components/headless/ProjectsSection";
import { SkillsSection } from "@/components/headless/SkillsSection";
import { LandingScaffold } from "@/components/ui/LandingScaffold";

export function PortfolioLanding() {
  return (
    <>
      <PageHeader />
      <LandingScaffold>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
      </LandingScaffold>
    </>
  );
}
