"use client";

import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { SkillSectionsView } from "@/components/ui/SkillSectionsView";
import { data } from "@/data/data";
import { useHeadlessStore } from "@/stores/useHeadlessStore";

export function SkillsSection() {
  const isVisible = useHeadlessStore((state) => state.sections.skills);

  if (!isVisible) {
    return null;
  }

  const sections = [
    {
      title: "Primary Skills",
      items: data.cv.sections["Primary Skills"],
    },
    {
      title: "Secondary Skills",
      items: data.cv.sections["Secondary Skills"],
    },
  ];

  return (
    <SectionContainer id="skills" spacing="default">
      <SectionShell title="Skills">
        <SkillSectionsView sections={sections} />
      </SectionShell>
    </SectionContainer>
  );
}
