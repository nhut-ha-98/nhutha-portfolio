import { EducationView, ExperienceView } from "@/components/ui/ExperienceView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionShell } from "@/components/ui/SectionShell";
import { data } from "@/data/data";

function dateRange(start: string, end: string | null) {
  return `${start} - ${end ?? "present"}`;
}

function educationLogo(institution: string) {
  const value = institution.toLowerCase();

  if (value.includes("bach khoa") || value.includes("hcmut")) {
    return {
      logoSrc: "/back-khoa-logo.webp",
      logoAlt: "Bach Khoa TPHCM logo",
    };
  }

  if (value.includes("amazon web services") || value.includes("aws")) {
    return {
      logoSrc: "/saa-c03.png",
      logoAlt: "AWS Certified Solutions Architect Associate badge",
    };
  }

  return {};
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
      ...educationLogo(item.institution),
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
