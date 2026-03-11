import { ProjectsView } from "@/components/ui/ProjectsView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { data } from "@/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
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
        <div className="mb-5 flex justify-end -mt-17">
          <Link
            href="/projects"
            aria-label="View full projects"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_6px_18px_color-mix(in_srgb,var(--accent)_28%,transparent)] transition duration-200 hover:brightness-105 hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)] active:scale-95"
          >
            <span>View Full Projects</span>
            <Icon
              icon="mdi:arrow-right"
              className="h-4 w-4"
              aria-hidden="true"
            />
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
