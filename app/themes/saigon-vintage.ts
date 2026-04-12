import type { Theme } from "./types";

/**
 * Saigon Vintage — faded yellowed paper, colonial green, and warm red lacquer.
 * Evokes aged South-Vietnamese print ephemera: postage stamps, café menus,
 * and weathered shophouse façades.
 */
export const saigonVintageTheme: Theme = {
  name: "saigon-vintage",
  colors: {
    background: "#f5ead6", // aged paper
    foreground: "#2c1e0f", // dark espresso ink
    ink: "#1e1208", // near-black brush ink
    inkSoft: "#3a2812", // dark brown
    muted: "#8a7260", // faded khaki
    mutedStrong: "#6b5540", // warm sepia
    line: "#d4b896", // tea-stained rule
    surface: "#fdf5e6", // bright paper card
    accent: "#c0392b", // lacquer red
  },
  shadows: {
    card: "0 10px 26px rgba(44, 30, 15, 0.12)",
  },
  grid: {
    lineColor: "rgba(138, 114, 96, 0.13)",
    lineColorSecondary: "rgba(138, 114, 96, 0.10)",
    size: "36px 36px",
  },
};
