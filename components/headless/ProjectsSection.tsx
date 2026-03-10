import { ProjectsView } from "@/components/ui/ProjectsView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { data } from "@/data/data";
import Link from "next/link";

function dateRange(start: string, end: string | null) {
  return `${start} - ${end ?? "present"}`;
}

export function ProjectsSection() {
  const featuredProjects = data.cv.sections[
    "30+ projects across diverse business domains"
  ].map((item) => ({
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
        <div className="mb-5 flex justify-end">
          <Link
            href="/projects"
            className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
          >
            View Full Projects
          </Link>
        </div>
        <ProjectsView
          featuredTitle="30+ projects across diverse business domains"
          otherTitle="Other Projects"
          featuredProjects={featuredProjects}
          otherProjects={otherProjects}
          awards={data.cv.sections.Awards}
        />
      </SectionShell>
    </SectionContainer>
  );
}
