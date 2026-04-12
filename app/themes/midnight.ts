import type { Theme } from "./types";

/**
 * Midnight — deep navy background with electric cyan accent.
 * Example theme — swap this in `index.ts` to preview it.
 */
export const midnightTheme: Theme = {
  name: "midnight",
  colors: {
    background: "#0d1117",
    foreground: "#e2e8f0",
    ink: "#f0f6ff",
    inkSoft: "#cbd5e1",
    muted: "#64748b",
    mutedStrong: "#94a3b8",
    line: "#1e2d3d",
    surface: "#131c27",
    accent: "#22d3ee",
  },
  shadows: {
    card: "0 10px 26px rgba(0, 0, 0, 0.45)",
  },
  grid: {
    lineColor: "rgba(100, 116, 139, 0.10)",
    lineColorSecondary: "rgba(100, 116, 139, 0.07)",
    size: "36px 36px",
  },
};
