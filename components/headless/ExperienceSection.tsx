"use client";

import { ExperienceView } from "@/components/ui/ExperienceView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { data } from "@/data/data";
import { useHeadlessStore } from "@/stores/useHeadlessStore";

function dateRange(start: string, end: string | null) {
  return `${start} - ${end ?? "present"}`;
}

export function ExperienceSection() {
  const isVisible = useHeadlessStore((state) => state.sections.experience);

  if (!isVisible) {
    return null;
  }

  const experiences = data.cv.sections.Experience.map((item) => ({
    title: item.company,
    subtitle: item.position,
    period: dateRange(item.start_date, item.end_date),
    highlights: item.highlights,
  }));

  const education = data.cv.sections["Education and Certifications"].map(
    (item) => ({
      institution: item.institution,
      area: item.area,
      period: dateRange(item.start_date, item.end_date),
    }),
  );

  return (
    <SectionContainer id="experience" spacing="default">
      <SectionShell title="Experience">
        <ExperienceView
          experienceTitle="Experience"
          educationTitle="Education and Certifications"
          experiences={experiences}
          education={education}
        />
      </SectionShell>
    </SectionContainer>
  );
}
