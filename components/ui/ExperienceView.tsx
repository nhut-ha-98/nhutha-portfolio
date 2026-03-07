interface ExperienceCard {
  title: string;
  subtitle: string;
  period: string;
  highlights: string[];
}

interface EducationCard {
  institution: string;
  area: string;
  period: string;
}

interface ExperienceViewProps {
  experienceTitle: string;
  educationTitle: string;
  experiences: ExperienceCard[];
  education: EducationCard[];
}

export function ExperienceView({
  experienceTitle,
  educationTitle,
  experiences,
  education,
}: ExperienceViewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <section aria-label={experienceTitle} className="space-y-4">
        {experiences.map((item) => (
          <article
            key={`${item.title}-${item.period}`}
            className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
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

      <aside
        className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
        aria-label={educationTitle}
      >
        <h3 className="text-lg font-bold text-[var(--ink)]">
          {educationTitle}
        </h3>
        <div className="mt-4 space-y-4">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.period}`}
              className="rounded-xl bg-[var(--surface)] p-4"
            >
              <p className="font-semibold text-[var(--ink-soft)]">
                {item.institution}
              </p>
              <p className="mt-1 text-sm text-[var(--muted-strong)]">
                {item.area}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.13em] text-[var(--muted)]">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
}
