import { ContactSection } from "@/components/headless/ContactSection";
import { ExperienceSection } from "@/components/headless/ExperienceSection";
import { HeadlessControls } from "@/components/headless/HeadlessControls";
import { HeroSection } from "@/components/headless/HeroSection";
import { ProjectsSection } from "@/components/headless/ProjectsSection";
import { SkillsSection } from "@/components/headless/SkillsSection";
import { LandingScaffold } from "@/components/ui/LandingScaffold";

export function PortfolioLanding() {
  return (
    <LandingScaffold>
      <HeroSection />
      <HeadlessControls />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </LandingScaffold>
  );
}
