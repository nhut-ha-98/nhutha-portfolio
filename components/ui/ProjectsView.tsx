interface FeaturedProject {
  name: string;
  period: string;
  summary: string;
  highlights: string[];
}

interface CompactProject {
  label: string;
  details: string;
}

interface ProjectsViewProps {
  featuredTitle: string;
  otherTitle: string;
  featuredProjects: FeaturedProject[];
  otherProjects: CompactProject[];
  awards: string[];
}

function parseMarkdownLink(text: string) {
  const pattern = /^\[(.+)\]\((.+)\)\s*[-|].*$/;
  const match = pattern.exec(text);
  if (!match) return { label: text, href: "" };
  return { label: match[1], href: match[2] };
}

export function ProjectsView({
  featuredTitle,
  otherTitle,
  featuredProjects,
  otherProjects,
  awards,
}: ProjectsViewProps) {
  return (
    <div className="space-y-8">
      <section aria-label={featuredTitle} className="space-y-4">
        <h3 className="text-xl font-bold text-[var(--ink)]">{featuredTitle}</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-semibold text-[var(--ink-soft)]">
                  {project.name}
                </h4>
                <p className="font-mono text-xs uppercase tracking-[0.13em] text-[var(--muted)]">
                  {project.period}
                </p>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-strong)]">
                {project.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
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
        </div>
      </section>

      <section aria-label={otherTitle} className="space-y-4">
        <h3 className="text-xl font-bold text-[var(--ink)]">{otherTitle}</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <article
              key={project.label}
              className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4"
            >
              <h4 className="font-semibold text-[var(--ink-soft)]">
                {project.label}
              </h4>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                {project.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      {awards.length > 0 ? (
        <section aria-label="Awards" className="space-y-4">
          <h3 className="text-xl font-bold text-[var(--ink)]">Awards</h3>
          <ul className="space-y-2">
            {awards.map((award) => {
              const parsed = parseMarkdownLink(award);
              if (parsed.href.length > 0) {
                return (
                  <li key={award}>
                    <a
                      href={parsed.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[var(--ink-soft)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
                    >
                      {parsed.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={award} className="text-sm text-[var(--muted-strong)]">
                  {award}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
