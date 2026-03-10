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
}: {
  skill: string;
  icon: string;
  color?: string;
}) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--ink-soft)]"
      title={skill}
    >
      <Icon
        icon={icon}
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0"
        style={color ? { color } : undefined}
      />
      <span>{skill}</span>
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
    <div className="grid gap-6 lg:grid-cols-2">
      {sections.map((section) => (
        <article
          key={section.title}
          className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]"
        >
          <h3 className="text-lg font-bold text-[var(--ink)]">
            {section.title}
          </h3>
          <div className="mt-4 space-y-4">
            {section.items.map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-[var(--surface)] p-4"
              >
                <p className="font-semibold text-[var(--ink-soft)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                  {item.details}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {parseSkillTokens(item.details)
                    .map((skill) => {
                      const iconSpec = resolveIcon(skill);
                      if (!iconSpec) {
                        return null;
                      }

                      return (
                        <SkillIconBadge
                          key={`${item.label}-${skill}`}
                          skill={skill}
                          icon={iconSpec.icon}
                          color={iconSpec.color}
                        />
                      );
                    })
                    .filter(Boolean)}
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
