import type { Theme } from "./types";

/**
 * Constellation — deep-space navy with pale starlight accents and soft glow.
 */
export const constellationTheme: Theme = {
  name: "constellation",
  colors: {
    background: "#020617",
    foreground: "#e6f7ff",
    ink: "#d9f3ff",
    inkSoft: "#a6c9d9",
    muted: "#6b7f92",
    mutedStrong: "#51606f",
    line: "#0f1b2b",
    surface: "#071129",
    accent: "#7ee7ff",
  },
  shadows: {
    card: "0 12px 30px rgba(1, 6, 23, 0.6)",
  },
  grid: {
    lineColor: "rgba(126,231,255,0.06)",
    lineColorSecondary: "rgba(126,231,255,0.04)",
    size: "36px 36px",
  },
};
