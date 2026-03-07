"use client";

import { ProjectsView } from "@/components/ui/ProjectsView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { data } from "@/data/data";
import { useHeadlessStore } from "@/stores/useHeadlessStore";

function dateRange(start: string, end: string | null) {
  return `${start} - ${end ?? "present"}`;
}

export function ProjectsSection() {
  const isVisible = useHeadlessStore((state) => state.sections.projects);
  const projectDensity = useHeadlessStore((state) => state.projectDensity);
  const showAwards = useHeadlessStore((state) => state.showAwards);

  if (!isVisible) {
    return null;
  }

  const featuredProjects = data.cv.sections[
    "30+ projects across diverse business domains"
  ]
    .slice(0, projectDensity === "compact" ? 3 : undefined)
    .map((item) => ({
      name: item.name,
      period: dateRange(item.start_date, item.end_date),
      summary: item.summary,
      highlights: item.highlights,
    }));

  const otherProjects = data.cv.sections["Other Projects"].map((item) => ({
    label: item.label,
    details: item.details,
  }));

  return (
    <SectionContainer id="projects" spacing="default">
      <SectionShell title="Projects">
        <ProjectsView
          featuredTitle="30+ projects across diverse business domains"
          otherTitle="Other Projects"
          featuredProjects={featuredProjects}
          otherProjects={otherProjects}
          awards={showAwards ? data.cv.sections.Awards : []}
        />
      </SectionShell>
    </SectionContainer>
  );
}
