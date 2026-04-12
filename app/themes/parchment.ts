import type { Theme } from "./types";

/**
 * Parchment — warm off-white with terracotta accent.
 * This is the original portfolio theme.
 */
export const parchmentTheme: Theme = {
  name: "parchment",
  colors: {
    background: "#f8f2e5",
    foreground: "#1a252a",
    ink: "#122026",
    inkSoft: "#1f333a",
    muted: "#5c6d73",
    mutedStrong: "#43555d",
    line: "#d8cdb5",
    surface: "#fffdfa",
    accent: "#dd6c2f",
  },
  shadows: {
    card: "0 10px 26px rgba(46, 43, 28, 0.09)",
  },
  grid: {
    lineColor: "rgba(92, 109, 115, 0.11)",
    lineColorSecondary: "rgba(92, 109, 115, 0.09)",
    size: "36px 36px",
  },
};
