import { midnightTheme } from "./midnight";
import { parchmentTheme } from "./parchment";
export { themeToCssVars } from "./types";
export type { Theme } from "./types";

export const themes = {
  parchment: parchmentTheme,
  midnight: midnightTheme,
} as const;

export type ThemeName = keyof typeof themes;

/**
 * ─── Active Theme ───────────────────────────────────────────────
 * Change this to switch the entire site's visual style.
 * Available: "parchment" | "midnight"
 */
export const activeTheme = themes.parchment;
