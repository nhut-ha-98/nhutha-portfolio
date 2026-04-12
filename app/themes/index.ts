import { constellationTheme } from "./constellation";
import { midnightTheme } from "./midnight";
import { parchmentTheme } from "./parchment";
import { saigonVintageTheme } from "./saigon-vintage";
export { themeToCssVars } from "./types";
export type { Theme } from "./types";

export const themes = {
  parchment: parchmentTheme,
  midnight: midnightTheme,
  saigonVintage: saigonVintageTheme,
  constellation: constellationTheme,
} as const;

export type ThemeName = keyof typeof themes;

/**
 * ─── Active Theme ───────────────────────────────────────────────
 * Change this to switch the entire site's visual style.
 * Available: "parchment" | "midnight" | "saigonVintage"
 */
export const activeTheme = themes.saigonVintage;
