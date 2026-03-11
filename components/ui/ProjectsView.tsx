"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

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
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // Section headers
    animate(el.querySelectorAll("[data-anim='heading']"), {
      opacity: [0, 1],
      translateY: [-10, 0],
      delay: stagger(80),
      duration: 500,
      easing: "easeOutQuart",
    });

    // Featured project articles
    animate(el.querySelectorAll("[data-anim='featured']"), {
      opacity: [0, 1],
      translateY: [24, 0],
      delay: stagger(100, { start: 60 }),
      duration: 600,
      easing: "easeOutQuart",
    });

    // Other project items
    animate(el.querySelectorAll("[data-anim='compact']"), {
      opacity: [0, 1],
      translateY: [16, 0],
      delay: stagger(70, { start: 120 }),
      duration: 500,
      easing: "easeOutQuart",
    });

    // Award items
    animate(el.querySelectorAll("[data-anim='award']"), {
      opacity: [0, 1],
      translateX: [-12, 0],
      delay: stagger(60, { start: 100 }),
      duration: 450,
      easing: "easeOutQuart",
    });
  }, []);

  return (
    <div ref={rootRef} className="space-y-14">
      {/* Featured Projects */}
      <section aria-label={featuredTitle}>
        <h3
          data-anim="heading"
          className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]"
        >
          {featuredTitle}
        </h3>
        <div className="space-y-10">
          {featuredProjects.map((project, i) => (
            <article
              key={project.name}
              data-anim="featured"
              style={{ opacity: 0 }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-xl font-bold text-[var(--ink)]">
                  {project.name}
                </h4>
                <span className="shrink-0 font-mono text-xs tracking-widest text-[var(--muted)]">
                  {project.period}
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-[var(--muted-strong)]">
                {project.summary}
              </p>
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-[var(--muted)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.6rem] h-px w-4 shrink-0 bg-[var(--accent)]"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              {i < featuredProjects.length - 1 && (
                <hr className="mt-10 border-[var(--line)]" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section aria-label={otherTitle}>
        <h3
          data-anim="heading"
          className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]"
        >
          {otherTitle}
        </h3>
        <dl className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <div
              key={project.label}
              data-anim="compact"
              style={{ opacity: 0 }}
              className="border-t border-[var(--line)] pt-4"
            >
              <dt className="font-semibold text-[var(--ink-soft)]">
                {project.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                {project.details}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Awards */}
      {awards.length > 0 && (
        <section aria-label="Awards">
          <h3
            data-anim="heading"
            className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]"
          >
            Awards
          </h3>
          <ul className="space-y-3">
            {awards.map((award) => {
              const parsed = parseMarkdownLink(award);
              return (
                <li
                  key={award}
                  data-anim="award"
                  style={{ opacity: 0 }}
                  className="flex gap-3 text-sm"
                >
                  <span
                    aria-hidden
                    className="mt-[0.6rem] h-px w-4 shrink-0 bg-[var(--accent)]"
                  />
                  {parsed.href ? (
                    <a
                      href={parsed.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-[var(--ink-soft)] underline decoration-[var(--accent)] decoration-[1.5px] underline-offset-4 hover:text-[var(--accent)] transition-colors"
                    >
                      {parsed.label}
                    </a>
                  ) : (
                    <span className="text-[var(--muted-strong)]">{award}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
