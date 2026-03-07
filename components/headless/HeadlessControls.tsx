"use client";

import { HeadlessControlsView } from "@/components/ui/HeadlessControlsView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { useHeadlessStore } from "@/stores/useHeadlessStore";

const sectionLabels = {
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
} as const;

export function HeadlessControls() {
  const sections = useHeadlessStore((state) => state.sections);
  const projectDensity = useHeadlessStore((state) => state.projectDensity);
  const showAwards = useHeadlessStore((state) => state.showAwards);
  const toggleSection = useHeadlessStore((state) => state.toggleSection);
  const setProjectDensity = useHeadlessStore(
    (state) => state.setProjectDensity,
  );
  const toggleAwards = useHeadlessStore((state) => state.toggleAwards);
  const resetHeadlessState = useHeadlessStore(
    (state) => state.resetHeadlessState,
  );

  const sectionItems = Object.entries(sections).map(([key, enabled]) => ({
    key: key as keyof typeof sections,
    label: sectionLabels[key as keyof typeof sectionLabels],
    enabled,
  }));

  return (
    <SectionContainer id="controls" spacing="default">
      <HeadlessControlsView
        sections={sectionItems}
        projectDensity={projectDensity}
        showAwards={showAwards}
        onToggleSection={toggleSection}
        onProjectDensityChange={setProjectDensity}
        onToggleAwards={toggleAwards}
        onReset={resetHeadlessState}
      />
    </SectionContainer>
  );
}
