"use client";

import type { FullProject } from "@/data/fullProjects";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, EffectCards, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

interface FullProjectsSliderViewProps {
  projects: FullProject[];
  loading: boolean;
  error?: string;
}

const cardThemes = [
  {
    shell:
      "from-rose-100 via-orange-100 to-amber-100 border-rose-300/60 shadow-rose-300/40",
    shine: "from-rose-500/20 via-orange-500/15 to-transparent",
    chip: "border-rose-400/40 bg-white/70 text-rose-900",
  },
  {
    shell:
      "from-sky-100 via-cyan-100 to-teal-100 border-cyan-300/70 shadow-cyan-300/40",
    shine: "from-cyan-500/20 via-sky-500/15 to-transparent",
    chip: "border-cyan-400/40 bg-white/70 text-cyan-900",
  },
  {
    shell:
      "from-lime-100 via-emerald-100 to-green-100 border-emerald-300/70 shadow-emerald-300/40",
    shine: "from-emerald-500/20 via-lime-500/15 to-transparent",
    chip: "border-emerald-400/40 bg-white/70 text-emerald-900",
  },
  {
    shell:
      "from-fuchsia-100 via-pink-100 to-rose-100 border-fuchsia-300/70 shadow-fuchsia-300/40",
    shine: "from-fuchsia-500/20 via-pink-500/15 to-transparent",
    chip: "border-fuchsia-400/40 bg-white/70 text-fuchsia-900",
  },
];

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
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sortedProjects = useMemo(
    () =>
      [...projects].sort((a, b) => {
        const left = a.monthStart;
        const right = b.monthStart;
        return right.localeCompare(left);
      }),
    [projects],
  );

  const activeProject = sortedProjects[activeIndex] ?? sortedProjects[0];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
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

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-sm">
        <p className="text-sm font-semibold text-[var(--ink-soft)]">
          {activeProject ? `${activeProject.name}` : "Ready to explore"}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            disabled={!swiperInstance}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-55"
          >
            <Icon icon="mdi:arrow-left" className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            disabled={!swiperInstance}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)] disabled:cursor-not-allowed disabled:opacity-55"
          >
            <Icon icon="mdi:arrow-right" className="h-4 w-4" aria-hidden />
          </button>
        </div>
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
        <div className="relative overflow-hidden rounded-3xl xborder xborder-[var(--line)] bg-gradient-to-br from-slate-100 via-amber-50 to-cyan-50 p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.24),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.24),transparent_42%),radial-gradient(circle_at_65%_80%,rgba(236,72,153,0.18),transparent_44%)]" />

          <Swiper
            modules={[EffectCards, Pagination, Keyboard, A11y]}
            effect="cards"
            grabCursor
            centeredSlides
            slidesPerView={1}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            cardsEffect={{
              rotate: true,
              perSlideOffset: 10,
              perSlideRotate: 2,
              slideShadows: false,
            }}
            className="relative z-10 mx-auto w-full max-w-3xl pb-12 [--swiper-pagination-bullet-inactive-color:rgba(15,23,42,0.3)] [--swiper-pagination-bullet-inactive-opacity:1] [--swiper-pagination-color:rgb(15,23,42)]"
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
          >
            {sortedProjects.map((project, index) => {
              const theme = cardThemes[index % cardThemes.length];

              return (
                <SwiperSlide key={project.id} className="!h-auto">
                  <article
                    className={`relative min-h-[560px] overflow-hidden rounded-3xl border bg-gradient-to-br p-6 shadow-2xl sm:p-8 ${theme.shell}`}
                  >
                    <div
                      className={`pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br blur-3xl ${theme.shine}`}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h2 className="max-w-[90%] text-xl font-bold text-[var(--ink-soft)] sm:text-2xl">
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
                                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${theme.chip}`}
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
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : null}
    </main>
  );
}
