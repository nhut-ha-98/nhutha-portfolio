import type { AboutMe } from "@/data/rendercv";
import type { SimpleIcon } from "simple-icons";
import * as simpleIcons from "simple-icons";

const iconRegistry = simpleIcons as Record<string, SimpleIcon | undefined>;

const ICON_KEYWORD_TO_EXPORT: Array<[keyword: string, exportName: string]> = [
  ["spring boot", "siSpringboot"],
  ["java", "siOpenjdk"],
  ["mysql", "siMysql"],
  ["postgres", "siPostgresql"],
  ["postgresql", "siPostgresql"],
  ["redis", "siRedis"],
  ["elk", "siElasticsearch"],
  ["kafka", "siApachekafka"],
  ["react query", "siReactquery"],
  ["react native", "siReact"],
  ["react", "siReact"],
  ["next.js", "siNextdotjs"],
  ["nextjs", "siNextdotjs"],
  ["tailwind", "siTailwindcss"],
  ["github actions", "siGithubactions"],
  ["terraform", "siTerraform"],
  ["docker", "siDocker"],
  ["node.js", "siNodedotjs"],
  ["nodejs", "siNodedotjs"],
  ["python", "siPython"],
  ["mongodb", "siMongodb"],
  ["graphql", "siGraphql"],
  ["grpc", "siGrpc"],
  ["flutter", "siFlutter"],
  ["android", "siAndroid"],
  ["electron", "siElectron"],
  ["tauri", "siTauri"],
  ["rust", "siRust"],
  ["babylon.js", "siBabylondotjs"],
  ["three.js", "siThreedotjs"],
  ["jquery", "siJquery"],
  ["gcp", "siGooglecloud"],
  ["google cloud", "siGooglecloud"],
  ["kubernetes", "siKubernetes"],
  ["aws", "siAmazon"],
];

function parseSkillTokens(details: string): string[] {
  const expanded = details.replaceAll(/\(([^)]+)\)/g, ", $1");
  const tokens = expanded
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  return Array.from(new Set(tokens));
}

function resolveIcon(skill: string): SimpleIcon | undefined {
  const normalized = skill.toLowerCase();
  const match = ICON_KEYWORD_TO_EXPORT.find(([keyword]) =>
    normalized.includes(keyword),
  );

  if (!match) {
    return undefined;
  }

  return iconRegistry[match[1]];
}

function SkillIconBadge({ skill, icon }: { skill: string; icon: SimpleIcon }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--ink-soft)]"
      title={skill}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0"
      >
        <path d={icon.path} fill={`#${icon.hex}`} />
      </svg>
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
                      const icon = resolveIcon(skill);
                      if (!icon) {
                        return null;
                      }

                      return (
                        <SkillIconBadge
                          key={`${item.label}-${skill}`}
                          skill={skill}
                          icon={icon}
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
