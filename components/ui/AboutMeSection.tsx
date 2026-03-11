"use client";

import type { AboutMe } from "@/data/rendercv";
import { Icon } from "@iconify/react";
import { animate } from "animejs";
import { useEffect, useRef } from "react";

function cleanRichText(text: string) {
  return text.replaceAll("**", "");
}
const stats = [
  {
    label: "Years of Experience",
    value: "6+",
  },
  {
    label: "Projects Completed",
    value: "30+",
  },
];
const timelineAccent = [
  "text-[#2F8F46] border-[#CDECD5] bg-[#F5FCF7]",
  "text-[#1D4ED8] border-[#CADBFF] bg-[#F4F8FF]",
  "text-[#B45309] border-[#F6D7AD] bg-[#FFF8EE]",
  "text-[#0F766E] border-[#BFEAE5] bg-[#F1FCFA]",
] as const;

function iconForAboutLabel(label: string) {
  const value = label.toLowerCase();

  if (value.includes("aws") || value.includes("cloud")) {
    return "mdi:cloud-check-outline";
  }
  if (value.includes("architect")) {
    return "mdi:sitemap-outline";
  }
  if (value.includes("collaboration") || value.includes("business")) {
    return "mdi:account-group-outline";
  }
  if (value.includes("learner") || value.includes("problem")) {
    return "mdi:lightbulb-on-outline";
  }
  if (value.includes("full-stack") || value.includes("engineer")) {
    return "mdi:code-json";
  }

  return "mdi:star-four-points-outline";
}

export const AboutMeSection = (props: { featureItems: AboutMe[] }) => (
  <AboutMeTimeline featureItems={props.featureItems} />
);

function AboutMeTimeline(props: { featureItems: AboutMe[] }) {
  const [, ...storyItems] = props.featureItems;
  const timelineRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const listElement = timelineRef.current;
    if (!listElement) return;

    const items = Array.from(
      listElement.querySelectorAll<HTMLElement>(".about-story-item"),
    );

    items.forEach((item, index) => {
      animate(item, {
        opacity: [0, 1],
        translateY: [18, 0],
        duration: 520,
        delay: 120 + index * 90,
        ease: "out(3)",
      });
    });
  }, [storyItems.length]);

  return (
    <aside className="relative rounded-3xl p-6 sm:p-8">
      <section className="relative mb-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-20 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <article key={stat.label} className="group relative pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] sm:text-xs">
                {stat.label}
              </p>
              <p className="mt-2 text-5xl font-black leading-none tracking-tight text-[var(--ink)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-6xl">
                {stat.value}
              </p>
              <div className="mt-4 h-1.5 w-full rounded-full bg-[color:color-mix(in_srgb,var(--line)_72%,white)]">
                <span
                  className="block h-full rounded-full bg-[linear-gradient(90deg,var(--accent),color-mix(in_srgb,var(--accent)_42%,#ffffff))] shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_40%,transparent)]"
                  style={{ width: index === 0 ? "82%" : "94%" }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {storyItems.length > 0 ? (
        <div className="relative">
          <div className="pointer-events-none absolute bottom-4 left-[1.45rem] top-3 w-px bg-[linear-gradient(180deg,color-mix(in_srgb,var(--accent)_44%,#ffffff),color-mix(in_srgb,var(--line)_76%,#ffffff))]" />
          <ol ref={timelineRef} className="relative space-y-4">
            {storyItems.map((item, index) => {
              const accent = timelineAccent[index % timelineAccent.length];

              return (
                <li
                  key={item.label}
                  className="about-story-item relative pl-14 opacity-0 sm:pl-16"
                >
                  <span
                    className={`absolute left-0 top-1 inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-[0_8px_20px_rgba(0,0,0,0.08)] ${accent}`}
                    aria-hidden="true"
                  >
                    <Icon
                      icon={iconForAboutLabel(item.label)}
                      className="h-5 w-5"
                    />
                  </span>

                  <article className="group rounded-2xl border border-[color:color-mix(in_srgb,var(--line)_74%,white)] bg-[linear-gradient(180deg,white_0%,color-mix(in_srgb,var(--surface)_72%,white)_100%)] p-4 shadow-[0_12px_32px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[color:color-mix(in_srgb,var(--accent)_36%,var(--line))] hover:shadow-[0_20px_40px_rgba(17,17,17,0.12)] sm:p-5">
                    <h3 className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--ink-soft)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                      {cleanRichText(item.details)}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      ) : null}
    </aside>
  );
}
