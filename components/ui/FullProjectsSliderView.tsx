"use client";

import type { FullProject } from "@/data/fullProjects";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useMemo, useRef } from "react";

interface FullProjectsSliderViewProps {
  projects: FullProject[];
  loading: boolean;
  error?: string;
}

function formatMonth(value: string) {
  const [year, month] = value.split("-");
  const monthNumber = Number(month);

  if (
    !year ||
    Number.isNaN(monthNumber) ||
    monthNumber < 1 ||
    monthNumber > 12
  ) {
    return value;
  }

  return new Date(Number(year), monthNumber - 1, 1).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function rangeLabel(project: FullProject) {
  return `${formatMonth(project.monthStart)} - ${
    project.monthEnd ? formatMonth(project.monthEnd) : "Present"
  }`;
}

function iconForTag(tag: string): string {
  const normalized = tag.toLowerCase();

  if (normalized.includes("webrtc") || normalized.includes("screen sharing")) {
    return "mdi:video-wireless";
  }

  if (normalized.includes("cross-platform")) {
    return "mdi:devices";
  }

  if (normalized.includes("qr")) {
    return "mdi:qrcode-scan";
  }

  if (normalized.includes("android")) {
    return "mdi:android";
  }

  if (normalized.includes("ios")) {
    return "mdi:apple";
  }

  if (normalized.includes("java")) {
    return "mdi:language-java";
  }

  if (normalized.includes("janus")) {
    return "mdi:server-network";
  }

  if (normalized.includes("firebase")) {
    return "mdi:firebase";
  }

  if (normalized.includes("web")) {
    return "mdi:web";
  }

  if (normalized.includes("mobile")) {
    return "mdi:cellphone";
  }
  if (normalized.includes("aws") || normalized.includes("cloud")) {
    return "mdi:cloud";
  }
  if (normalized.includes("elasticsearch") || normalized.includes("search")) {
    return "mdi:magnify";
  }
  if (normalized.includes("pos") || normalized.includes("restaurant")) {
    return "mdi:cash-register";
  }
  if (normalized.includes("health") || normalized.includes("clinic")) {
    return "mdi:stethoscope";
  }
  if (normalized.includes("booking") || normalized.includes("travel")) {
    return "mdi:airplane";
  }
  if (normalized.includes("ecommerce") || normalized.includes("shop")) {
    return "mdi:shopping";
  }
  if (normalized.includes("spring")) {
    return "mdi:leaf";
  }
  if (normalized.includes("react")) {
    return "mdi:react";
  }
  if (normalized.includes("tauri")) {
    return "mdi:tauri";
  }
  if (normalized.includes("socket") || normalized.includes("websocket")) {
    return "mdi:socket";
  }
  return "mdi:tag-outline";
}

export function FullProjectsSliderView({
  projects,
  loading,
  error,
}: FullProjectsSliderViewProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const sortedProjects = useMemo(
    () =>
      [...projects].sort((a, b) => {
        const left = a.monthStart;
        const right = b.monthStart;
        return right.localeCompare(left);
      }),
    [projects],
  );

  const scrollByPage = (direction: "next" | "prev") => {
    const element = scrollerRef.current;
    if (!element) return;

    const delta =
      Math.round(element.clientWidth * 0.85) * (direction === "next" ? 1 : -1);

    element.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--muted)]">
            Firebase Collection
          </p>
          <h1 className="text-3xl font-bold text-[var(--ink)] sm:text-4xl">
            All Projects
          </h1>
        </div>
        <Link
          href="/"
          className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
        >
          Back to Portfolio
        </Link>
      </header>

      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByPage("prev")}
          className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => scrollByPage("next")}
          className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)]"
        >
          Next
        </button>
      </div>

      {loading ? (
        <p className="rounded-2xl border border-[var(--line)] bg-white p-6 text-sm text-[var(--muted-strong)]">
          Loading projects from Firebase...
        </p>
      ) : null}

      {!loading && error ? (
        <p className="rounded-2xl border border-red-300 bg-red-50 p-6 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {!loading && !error && sortedProjects.length === 0 ? (
        <p className="rounded-2xl border border-[var(--line)] bg-white p-6 text-sm text-[var(--muted-strong)]">
          No projects found in the `projects` collection.
        </p>
      ) : null}

      {!loading && !error && sortedProjects.length > 0 ? (
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]"
        >
          {sortedProjects.map((project) => (
            <article
              key={project.id}
              className="min-h-[540px] w-[88%] shrink-0 snap-start rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] sm:w-[70%] lg:w-[56%]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="max-w-[90%] text-xl font-bold text-[var(--ink-soft)]">
                  {project.name}
                </h2>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                  {rangeLabel(project)}
                </p>
              </div>

              {project.description.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {project.description.map((line) => (
                    <li
                      key={line}
                      className="text-sm leading-6 text-[var(--muted-strong)]"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}

              {project.tags && project.tags.length > 0 ? (
                <section className="mt-5 space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--sand)] px-2.5 py-1 text-xs font-semibold text-[var(--ink-soft)]"
                      >
                        <Icon
                          icon={iconForTag(tag)}
                          className="h-3.5 w-3.5"
                          aria-hidden
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}

              {Object.entries(project.techStack).length > 0 ? (
                <section className="mt-6 space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                    Tech Stack
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(project.techStack).map(
                      ([group, stacks]) => (
                        <div key={group}>
                          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                            {group}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-[var(--muted-strong)]">
                            {stacks.join(", ")}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </section>
              ) : null}

              {project.products.length > 0 ? (
                <section className="mt-6 space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                    Products
                  </h3>
                  <ul className="space-y-2">
                    {project.products.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-[var(--muted-strong)]"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {project.keyFeatures && project.keyFeatures.length > 0 ? (
                <section className="mt-6 space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-[var(--muted-strong)]"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </main>
  );
}
