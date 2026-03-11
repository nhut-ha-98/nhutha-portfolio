import { EducationView, ExperienceView } from "@/components/ui/ExperienceView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { data } from "@/data/data";

function dateRange(start: string, end: string | null) {
  return `${start} - ${end ?? "present"}`;
}

export function ExperienceSection() {
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
      <div className="space-y-10">
        <SectionShell title="Education and Certifications">
          <EducationView
            educationTitle="Education and Certifications"
            education={education}
          />
        </SectionShell>
        <SectionShell title="Experience">
          <ExperienceView
            experienceTitle="Experience"
            experiences={experiences}
          />
        </SectionShell>
      </div>
    </SectionContainer>
  );
}
