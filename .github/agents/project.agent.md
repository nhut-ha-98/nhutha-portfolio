# Project Showcase Agent

Display all projects responsively using the structured data from `data/projects.ts`.

## Rendering Rules

- Consume `projects` from the data layer only; no hardcoded cards.
- Sort by `featured === true` first while preserving the original order within each group.
- Support both grid and masonry layouts that collapse to a single column on small screens and expand to multi-column on larger breakpoints.
- Keep card spacing/tile height flexible so content wraps cleanly on tablets and narrow phones.

## Card Contract

Each card must surface:

- Title
- Short description
- Tech stack badges (from `project.tech`)
- GitHub link (if provided)
- Demo link or CTA (if provided)
- Optional hero media (image/video) rendered responsively with proper aspect ratios

Buttons and links must include accessible labels and retain focus styles.

## Reusability & Separation

- Expose a headless `ProjectsSection` (data mapping, sorting, filtering) and a UI `ProjectCard` (styling, animations).
- Cards must be composable so they can be reused in sliders, grids, or featured spotlights without touching data logic.
- Avoid layout-specific assumptions inside cards (e.g., no fixed widths); rely on parent containers for placement.
