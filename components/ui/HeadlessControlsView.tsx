import type { HeadlessSectionKey } from "@/stores/useHeadlessStore";

interface SectionToggleItem {
  key: HeadlessSectionKey;
  label: string;
  enabled: boolean;
}

interface HeadlessControlsViewProps {
  sections: SectionToggleItem[];
  projectDensity: "compact" | "full";
  showAwards: boolean;
  onToggleSection: (key: HeadlessSectionKey) => void;
  onProjectDensityChange: (value: "compact" | "full") => void;
  onToggleAwards: () => void;
  onReset: () => void;
}

export function HeadlessControlsView({
  sections,
  projectDensity,
  showAwards,
  onToggleSection,
  onProjectDensityChange,
  onToggleAwards,
  onReset,
}: HeadlessControlsViewProps) {
  return (
    <section className="rounded-2xl border border-[var(--line)] bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
          Headless Controls
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="rounded-lg border border-[var(--line)] px-3 py-1 text-xs font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)]"
        >
          Reset
        </button>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-2">
        <fieldset className="space-y-3">
          <legend className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            Section Visibility
          </legend>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.key}
                type="button"
                onClick={() => onToggleSection(section.key)}
                aria-pressed={section.enabled}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  section.enabled
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--line)] bg-white text-[var(--ink-soft)]"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="space-y-3">
          <fieldset className="space-y-2">
            <legend className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
              Featured Project Density
            </legend>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onProjectDensityChange("compact")}
                aria-pressed={projectDensity === "compact"}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  projectDensity === "compact"
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--line)] bg-white text-[var(--ink-soft)]"
                }`}
              >
                Compact
              </button>
              <button
                type="button"
                onClick={() => onProjectDensityChange("full")}
                aria-pressed={projectDensity === "full"}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  projectDensity === "full"
                    ? "bg-[var(--accent)] text-white"
                    : "border border-[var(--line)] bg-white text-[var(--ink-soft)]"
                }`}
              >
                Full
              </button>
            </div>
          </fieldset>

          <button
            type="button"
            onClick={onToggleAwards}
            aria-pressed={showAwards}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              showAwards
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--line)] bg-white text-[var(--ink-soft)]"
            }`}
          >
            {showAwards ? "Awards On" : "Awards Off"}
          </button>
        </div>
      </div>
    </section>
  );
}
