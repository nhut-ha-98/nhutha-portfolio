import type { AboutMe } from "@/data/rendercv";
import { Icon } from "@iconify/react";

type IconSpec = {
  keyword: string;
  icon: string;
  color?: string;
};

const ICON_KEYWORD_TO_ICONIFY: IconSpec[] = [
  { keyword: "spring boot", icon: "simple-icons:springboot", color: "#6DB33F" },
  { keyword: "java", icon: "devicon:java", color: "#007396" },
  { keyword: "mysql", icon: "simple-icons:mysql", color: "#4479A1" },
  { keyword: "postgres", icon: "simple-icons:postgresql", color: "#4169E1" },
  { keyword: "postgresql", icon: "simple-icons:postgresql", color: "#4169E1" },
  { keyword: "redis", icon: "simple-icons:redis", color: "#DC382D" },
  { keyword: "elk", icon: "simple-icons:elasticsearch", color: "#005571" },
  { keyword: "kafka", icon: "simple-icons:apachekafka", color: "#231F20" },
  { keyword: "react query", icon: "simple-icons:reactquery", color: "#FF4154" },
  { keyword: "react native", icon: "simple-icons:react", color: "#61DAFB" },
  { keyword: "react", icon: "simple-icons:react", color: "#61DAFB" },
  { keyword: "next.js", icon: "simple-icons:nextdotjs", color: "#111111" },
  { keyword: "nextjs", icon: "simple-icons:nextdotjs", color: "#111111" },
  { keyword: "tailwind", icon: "simple-icons:tailwindcss", color: "#06B6D4" },
  {
    keyword: "github actions",
    icon: "simple-icons:githubactions",
    color: "#2088FF",
  },
  { keyword: "terraform", icon: "simple-icons:terraform", color: "#844FBA" },
  { keyword: "docker", icon: "simple-icons:docker", color: "#2496ED" },
  { keyword: "node.js", icon: "simple-icons:nodedotjs", color: "#5FA04E" },
  { keyword: "nodejs", icon: "simple-icons:nodedotjs", color: "#5FA04E" },
  { keyword: "python", icon: "simple-icons:python", color: "#3776AB" },
  { keyword: "mongodb", icon: "simple-icons:mongodb", color: "#47A248" },
  { keyword: "graphql", icon: "simple-icons:graphql", color: "#E10098" },
  { keyword: "grpc", icon: "simple-icons:grpc", color: "#244C5A" },
  { keyword: "flutter", icon: "simple-icons:flutter", color: "#02569B" },
  { keyword: "android", icon: "simple-icons:android", color: "#3DDC84" },
  { keyword: "electron", icon: "simple-icons:electron", color: "#47848F" },
  { keyword: "tauri", icon: "simple-icons:tauri", color: "#24C8DB" },
  { keyword: "rust", icon: "simple-icons:rust", color: "#000000" },
  {
    keyword: "babylon.js",
    icon: "simple-icons:babylondotjs",
    color: "#BB464B",
  },
  { keyword: "three.js", icon: "simple-icons:threedotjs", color: "#000000" },
  { keyword: "jquery", icon: "simple-icons:jquery", color: "#0769AD" },
  { keyword: "gcp", icon: "simple-icons:googlecloud", color: "#4285F4" },
  {
    keyword: "google cloud",
    icon: "simple-icons:googlecloud",
    color: "#4285F4",
  },
  { keyword: "kubernetes", icon: "simple-icons:kubernetes", color: "#326CE5" },
  { keyword: "aws", icon: "simple-icons:amazon", color: "#FF9900" },
];

function parseSkillTokens(details: string): string[] {
  const expanded = details.replaceAll(/\(([^)]+)\)/g, ", $1");
  const tokens = expanded
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  return Array.from(new Set(tokens));
}

function resolveIcon(skill: string): IconSpec | undefined {
  const normalized = skill.toLowerCase();
  const match = ICON_KEYWORD_TO_ICONIFY.find((entry) =>
    normalized.includes(entry.keyword),
  );

  if (!match) {
    return undefined;
  }

  return match;
}

function SkillIconBadge({
  skill,
  icon,
  color,
  compact,
}: {
  skill: string;
  icon: string;
  color?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--line)] bg-white font-semibold text-[var(--ink-soft)] ${
        compact ? "gap-2 px-3 py-1.5 text-xs" : "gap-2.5 px-3.5 py-2 text-sm"
      }`}
      title={skill}
    >
      <Icon
        icon={icon}
        aria-hidden="true"
        className={compact ? "h-3.5 w-3.5 shrink-0" : "h-4 w-4 shrink-0"}
        style={color ? { color } : undefined}
      />
      <span>{skill}</span>
    </span>
  );
}

function SkillTextBadge({
  skill,
  compact,
}: {
  skill: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface)] font-semibold text-[var(--muted-strong)] ${
        compact ? "px-3 py-1.5 text-xs" : "px-3.5 py-2 text-sm"
      }`}
      title={skill}
    >
      {skill}
    </span>
  );
}

interface SkillSectionsViewProps {
  sections: Array<{
    title: string;
    items: AboutMe[];
  }>;
}

export function SkillSectionsView({ sections }: SkillSectionsViewProps) {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-10">
      {sections.map((section) => {
        const isPrimary = section.title.toLowerCase().includes("primary");

        return (
          <section
            key={section.title}
            className={
              isPrimary ? "space-y-6 text-center" : "space-y-4 text-center"
            }
          >
            <div className="flex justify-center">
              <h3
                className={`relative inline-flex items-center rounded-full border bg-white font-bold text-[var(--ink)] ${
                  isPrimary
                    ? "border-[#1D9BF0]/40 px-5 py-2.5 text-xl shadow-[0_8px_24px_rgba(29,155,240,0.14)]"
                    : "border-[var(--line)] px-4 py-2 text-base"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mr-3 inline-block rounded-full ${
                    isPrimary ? "h-3 w-3" : "h-2.5 w-2.5"
                  }`}
                  style={{
                    backgroundColor: isPrimary ? "#1D9BF0" : "#22A06B",
                  }}
                />
                {section.title}
              </h3>
            </div>

            <div
              className={`grid gap-4 ${
                isPrimary
                  ? "md:grid-cols-1"
                  : "mx-auto max-w-4xl md:grid-cols-2"
              }`}
            >
              {section.items.map((item) => {
                const tokens = parseSkillTokens(item.details);

                return (
                  <article
                    key={item.label}
                    className={`rounded-2xl border text-left ${
                      isPrimary
                        ? "border-[#1D9BF0]/30 bg-white p-5 shadow-[0_10px_28px_rgba(29,155,240,0.10)]"
                        : "border-[var(--line)] bg-[var(--surface)] p-4"
                    }`}
                  >
                    <p
                      className={`font-bold uppercase tracking-[0.14em] text-[var(--ink-soft)] ${
                        isPrimary ? "text-sm" : "text-xs"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`mt-2 text-[var(--muted-strong)] ${
                        isPrimary ? "text-sm leading-7" : "text-xs leading-6"
                      }`}
                    >
                      {item.details}
                    </p>
                    <div
                      className={`mt-3 flex flex-wrap gap-2 ${isPrimary ? "" : "gap-1.5"}`}
                    >
                      {tokens.map((skill) => {
                        const iconSpec = resolveIcon(skill);
                        if (!iconSpec) {
                          return (
                            <SkillTextBadge
                              key={`${item.label}-${skill}`}
                              skill={skill}
                              compact={!isPrimary}
                            />
                          );
                        }

                        return (
                          <SkillIconBadge
                            key={`${item.label}-${skill}`}
                            skill={skill}
                            icon={iconSpec.icon}
                            color={iconSpec.color}
                            compact={!isPrimary}
                          />
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
