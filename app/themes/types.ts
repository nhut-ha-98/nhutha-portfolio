export interface Theme {
  name: string;
  colors: {
    background: string;
    foreground: string;
    ink: string;
    inkSoft: string;
    muted: string;
    mutedStrong: string;
    line: string;
    surface: string;
    accent: string;
  };
  shadows: {
    card: string;
  };
  grid: {
    /** Primary grid line color (horizontal) */
    lineColor: string;
    /** Secondary grid line color (vertical) */
    lineColorSecondary: string;
    /** CSS background-size for the grid, e.g. "36px 36px" */
    size: string;
  };
}

/** Generates a CSS :root block string from a Theme object */
export function themeToCssVars(theme: Theme): string {
  return `
    --background: ${theme.colors.background};
    --foreground: ${theme.colors.foreground};
    --ink: ${theme.colors.ink};
    --ink-soft: ${theme.colors.inkSoft};
    --muted: ${theme.colors.muted};
    --muted-strong: ${theme.colors.mutedStrong};
    --line: ${theme.colors.line};
    --surface: ${theme.colors.surface};
    --accent: ${theme.colors.accent};
    --shadow-card: ${theme.shadows.card};
    --grid-line: ${theme.grid.lineColor};
    --grid-line-secondary: ${theme.grid.lineColorSecondary};
    --grid-size: ${theme.grid.size};
  `.trim();
}
