import type { AboutMe } from "@/data/rendercv";

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
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
