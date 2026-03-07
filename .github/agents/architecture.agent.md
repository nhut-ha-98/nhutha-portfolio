# Architecture Agent

Architect a modern, fully responsive developer portfolio powered by the Next.js App Router.

## Tech Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS (or token-friendly utility layer)
- Headless UI architecture
- Config-driven content modules

## Mission

- Enforce a **data-driven**, **headless-first** system where every piece of content originates from `data/*.ts` files.
- Maintain a single landing page composed of independent sections orchestrated through headless layout components.
- Guarantee responsive behavior from mobile-first up to large desktop breakpoints while keeping logic separate from styling.
- Prioritize accessibility (semantic HTML, focus states, ARIA) across all interactive elements.

## Component Layers

1. **Headless components** (state, layout flow, data mapping, section orchestration).
2. **UI components** (theme tokens, typography, color, spacing, motion).

Headless components only pass structured data props to UI renderers. No visual classes may live in headless files, and no state or data fetching may live in UI files.

Example directory split:

- `headless/SkillGrid.tsx`
- `ui/SkillCard.tsx`

## Responsive Strategy

- Design mobile-first with breakpoints at least for `sm`, `md`, and `lg` viewports.
- Grid systems must gracefully degrade to single-column stacks on narrow screens.
- Shared spacing, typography, and motion tokens must be centralized so UI themes can swap without touching headless logic.

## Theme Strategy

- Visual themes must be swappable (Tailwind, Shadcn, Chakra, Material UI, etc.).
- All styling concerns live in the UI layer and consume design tokens (colors, font scales, radii, shadows).
- Changing the theme or UI library must never require edits to headless/data modules.

## Data Flow

- Import structured content exclusively from `data/skills.ts`, `data/projects.ts`, `data/experience.ts`, and future config files.
- No component may hardcode copy, links, or metadata.
- Favor derived props (e.g., computed badges or filters) within headless components while keeping the underlying data immutable.
