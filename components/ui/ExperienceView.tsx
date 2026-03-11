interface ExperienceCard {
  title: string;
  subtitle: string;
  period: string;
  highlights: string[];
}

interface ExperienceViewProps {
  experienceTitle: string;
  experiences: ExperienceCard[];
}

export function ExperienceView({
  experienceTitle,
  experiences,
}: ExperienceViewProps) {
  return (
    <section aria-label={experienceTitle} className="space-y-6">
      {experiences.map((item) => (
        <article
          key={`${item.title}-${item.period}`}
          className="border-b border-[var(--line)] pb-6 last:border-b-0 last:pb-0"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-[var(--ink-soft)]">
                {item.subtitle}
              </p>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.13em] text-[var(--muted)]">
              {item.period}
            </p>
          </div>
          <ul className="mt-4 space-y-2">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-sm leading-6 text-[var(--muted-strong)]"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

interface EducationCard {
  institution: string;
  area: string;
  period: string;
}

interface EducationViewProps {
  educationTitle: string;
  education: EducationCard[];
}

export function EducationView({
  educationTitle,
  education,
}: EducationViewProps) {
  return (
    <section aria-label={educationTitle} className="space-y-4">
      {education.map((item) => (
        <article
          key={`${item.institution}-${item.period}`}
          className="border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0"
        >
          <p className="font-semibold text-[var(--ink-soft)]">
            {item.institution}
          </p>
          <p className="mt-1 text-sm text-[var(--muted-strong)]">{item.area}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.13em] text-[var(--muted)]">
            {item.period}
          </p>
        </article>
      ))}
    </section>
  );
}
